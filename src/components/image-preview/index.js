import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import LoadingContainer from '../loading-container';
import {Styles} from '../../utils';
import './style.css';
import LoadingAlert from '../loading-alert';

function ImagePreview(props) {
    const {className, source} = props;

    const [loading, setLoading] = React.useState(false);
    const [image, setImage] = React.useState('');
    const [error, setError] = React.useState('');

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
        <div className={Styles.combineStyles('ImagePreview', className)}>
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

                    return image && (
                        <img
                            className="ImagePreview-Image"
                            alt={source}
                            src={image}
                        />
                    );
                }}
            </LoadingContainer>
        </div>
    );
}

ImagePreview.propTypes = {
    className: PropTypes.string,
    source: PropTypes.string.isRequired,
};

export default ImagePreview;
