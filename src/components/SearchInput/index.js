import React from 'react';
import { useDispatch } from 'react-redux';
import {
    getSearchResultsAction, clearSearchResultsAction,
} from 'actions/searchAction';
import ResultsList from './ResultsList';

const SearchInput = () => {
    const dispatch = useDispatch();

    const getSearchResults = (e) => {
        const {
            target: {
                value: query,
            },
        } = e;
        if (query.length > 2) dispatch(getSearchResultsAction(query));
        if (query.length <= 2)dispatch(clearSearchResultsAction());
    };

    return (
        <>
            <input
                type="text"
                className="search"
                onChange={getSearchResults}
            />
            <ResultsList />
        </>
    );
};

export default SearchInput;
