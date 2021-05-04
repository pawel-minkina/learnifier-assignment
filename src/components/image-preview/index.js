import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import LoadingContainer from '../loading-container';
import {Alert} from 'reactstrap';
import {Styles} from '../../utils';
import './style.css';

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
                            <Alert color="danger">
                                <p>Could not load the image :(</p>
                                <p>Click <a href="#" className="alert-link" onClick={load}>here</a> to try again.</p>
                                <hr/>
                                <p className="mb-0">Error details: {error}</p>
                            </Alert>
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
