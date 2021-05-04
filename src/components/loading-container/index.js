import React from 'react';
import PropTypes from 'prop-types';
import {Spinner} from 'reactstrap';
import './style.css';

function LoadingContainer(props) {
    const {className, loading, children} = props;

    return (
        <div className={`LoadingContainer ${className}`}>
            {loading
                ? <Spinner color="primary"/>
                : children?.()}
        </div>
    );
}

LoadingContainer.propTypes = {
    className: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    children: PropTypes.func.isRequired,
};

export default LoadingContainer;
