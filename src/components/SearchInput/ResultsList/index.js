/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector } from 'react-redux';

const ResultsList = () => {
    const searchResults = useSelector((state) => state.searchResults) || [];

    return (
        <div className="search__results">
            {searchResults.map((r) => (
                <a
                    key={r.id}
                    onClick={() => alert(r.result)}
                >{r.result}
                </a>
            ))}
        </div>
    );
};

export default ResultsList;
