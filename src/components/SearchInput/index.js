import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchInput.scss';

const SearchInput = (props) => {
    const {
        className,
        getSearchResultsAction,
    } = props;

    const [query, setQuery] = useState('');

    const handleKeyUp = (e) => {
        const newQuery = e.target.value;
        e.preventDefault();
        getSearchResultsAction(newQuery);
        setQuery(newQuery);
    };

    const classNames = `search-input ${className}`.trim();

    return (
        <fieldset className={classNames}>
            <input
                className="search-input__input"
                type="text"
                id="query"
                name="query"
                value={query}
                placeholder="I'm feeling lucky..."
                onChange={handleKeyUp}
            />
        </fieldset>
    );
};

SearchInput.propTypes = {
    className: PropTypes.string,
    getSearchResultsAction: PropTypes.func.isRequired,
};

SearchInput.defaultProps = { className: '' };

export default SearchInput;
