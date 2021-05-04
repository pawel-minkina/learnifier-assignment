import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {ImageAPI} from '../../consts';
import {Arrays, Sorts} from '../../utils';

const ImagesListContext = React.createContext(null);

const FIELD_COMPARATORS = {
    id: Sorts.stringCompare,
    author: Sorts.stringCompare,
    width: Sorts.numberCompare, // just for support
    height: Sorts.numberCompare, // just for support
    url: Sorts.stringCompare, // just for support
    download_url: Sorts.stringCompare, // just for support
};

export function ImagesListProvider(props) {
    const {page, children} = props;

    const [loading, setLoading] = React.useState(false);
    const [list, setList] = React.useState(null);
    const [error, setError] = React.useState(null);

    const load = React.useCallback(() => {
        setLoading(true);
        setList(null);
        setError(null);

        const cancelCallback = axios.CancelToken.source();
        // indexing starts at 1
        axios.get(ImageAPI.LIST_IMAGES(page + 1), {cancelToken: cancelCallback.token})
            .then((response) => {
                const hasPrevious = response.headers?.link?.indexOf('prev') !== -1;
                const hasNext = response.headers?.link?.indexOf('next') !== -1;
                setList({
                    hasPrevious,
                    hasNext,
                    data: response.data,
                });
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
            reload: load,
            hasPreviousPage: () => list?.hasPrevious,
            hasNextPage: () => list?.hasNext,
            getData: () => Arrays.copyOrEmpty(list?.data),
            getSortedData: (field) => Arrays.sortByField(
                list?.data, field, FIELD_COMPARATORS[field]),
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
