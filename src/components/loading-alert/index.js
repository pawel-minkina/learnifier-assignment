import React from 'react';
import PropTypes from 'prop-types';
import {Alert, Button} from 'reactstrap';

function LoadingAlert(props) {
    const {message, onReload, error} = props;

    return (
        <Alert color="danger">
            <p>{message}</p>

            {onReload && (
                <p>
                    Click <Button color='link' className="alert-link p-0" onClick={onReload}>here</Button> to try again.
                </p>
            )}

            {error && (
                <React.Fragment>
                    <hr/>
                    <p className="mb-0">Error details: {error}</p>
                </React.Fragment>
            )}
        </Alert>
    );
}

LoadingAlert.propTypes = {
    message: PropTypes.string,
    onReload: PropTypes.func,
    error: PropTypes.string,
};

LoadingAlert.defaultProps = {
    message: 'Error while fetching data :(',
};

export default LoadingAlert;
