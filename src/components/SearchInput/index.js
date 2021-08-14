import React from 'react';
import PropTypes from 'prop-types';

import ResultsList from 'components/ResultsList';

const SearchInput = ({
    className,
    searchResults,
    getSearchResultsAction,
    clearSearchResults,
}) => {
    const getSearchResults = (e) => {
        const {
            target: {
                value: query,
            },
        } = e;
        if (query.length > 2)getSearchResultsAction(query);
        if (query.length <= 2)clearSearchResults();
    };

    return (
        <>
            <input
                type="text"
                className={className}
                onChange={getSearchResults}
            />
            <ResultsList
                className="search__results"
                searchResults={searchResults}
            />
        </>
    );
};

SearchInput.propTypes = { className: PropTypes.string };

SearchInput.defaultProps = { className: '' };

export default SearchInput;
