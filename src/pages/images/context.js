import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {ImageAPI} from '../../consts';

const ImagesListContext = React.createContext(null);

export function ImagesListProvider(props) {
    const {page, children} = props;

    const [loading, setLoading] = React.useState(false);
    const [list, setList] = React.useState([]);
    const [error, setError] = React.useState(null);

    const load = React.useCallback(() => {
        setLoading(true);
        setList([]);
        setError(null);

        const cancelCallback = axios.CancelToken.source();
        axios.get(ImageAPI.LIST_IMAGES(page), {cancelToken: cancelCallback.token})
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                setError(error?.message || error);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            cancelCallback.cancel('cancelled');
        };
    }, [page]);

    React.useEffect(load, [load]);

    return (
        <ImagesListContext.Provider value={Object.freeze({
            loading,
            error,
            data: list,
            reload: load,
        })}>
            {children}
        </ImagesListContext.Provider>
    );
}

ImagesListProvider.propTypes = {
    page: PropTypes.number,
    children: PropTypes.node.isRequired,
};

ImagesListProvider.defaultProps = {
    page: 0,
};

export function ImagesListConsumer(props) {
    const {render} = props;
    return (
        <ImagesListContext.Consumer>
            {(value) => render(value)}
        </ImagesListContext.Consumer>
    );
}

ImagesListConsumer.propTypes = {
    render: PropTypes.func.isRequired,
};

export default ImagesListContext;
