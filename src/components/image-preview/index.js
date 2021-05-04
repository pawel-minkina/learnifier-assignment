import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Fade} from 'reactstrap';
import LoadingContainer from '../loading-container';
import {Styles} from '../../utils';
import './style.css';
import LoadingAlert from '../loading-alert';

function ImagePreview(props) {
    const {className, source, details} = props;

    const [loading, setLoading] = React.useState(false);
    const [image, setImage] = React.useState('');
    const [error, setError] = React.useState('');

    const [tooltipVisible, setTooltipVisible] = React.useState(false);

    const load = React.useCallback(() => {
        setImage(null);
        setError(null);
        setLoading(true);

        const cancelCallback = axios.CancelToken.source();
        axios.get(source, {responseType: 'blob', cancelToken: cancelCallback.token})
            .then((response) => {
                setImage(URL.createObjectURL(response.data));
            })
            .catch((error) => {
                if (!axios.isCancel(error)) {
                    setError(error?.message || error);
                }
            })
            .finally(() => {
                setLoading(false);
            });

        return () => cancelCallback.cancel('cancelled');
    }, [source]);

    React.useEffect(load, [load]);

    React.useEffect(() => {
        return () => {
            if (image) {
                URL.revokeObjectURL(image);
            }
        };
    }, [image]);

    return (
        <div
            className={Styles.combineStyles('ImagePreview', className)}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
        >
            <LoadingContainer
                className="ImagePreview-LoadingContainer"
                loading={loading}
            >
                {() => {
                    if (error) {
                        return (
                            <LoadingAlert
                                message='Could not load the image :('
                                onReload={load}
                                error={error}
                            />
                        );
                    }

                    const imageComponent = (
                        <img
                            className="ImagePreview-Image"
                            alt={source}
                            src={image}
                        />
                    );

                    if (details?.url || details?.download_url) {
                        return (
                            <a
                                className="ImagePreview-Image"
                                href={details.url || details.download_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {imageComponent}
                            </a>
                        );
                    }

                    return imageComponent;
                }}
            </LoadingContainer>

            {details && (
                <Fade
                    className="ImagePreview-Details p-2 m-1"
                    mountOnEnter
                    unmountOnExit
                    in={tooltipVisible}
                >
                    <div className="text-light">
                        {details.author && (
                            <p className='mb-0'>
                                {details.id && <span>#{details.id}. </span>}
                                {details.author}
                            </p>
                        )}

                        {details.width && details.height && (
                            <p className='mb-0'>{details.width} x {details.height}</p>
                        )}
                    </div>
                </Fade>
            )}
        </div>
    );
}

ImagePreview.propTypes = {
    className: PropTypes.string,
    source: PropTypes.string.isRequired,
    details: PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        url: PropTypes.string,
        download_url: PropTypes.string,
    }),
};

export default ImagePreview;
