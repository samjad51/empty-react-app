/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const ResultsList = ({
    className,
    searchResults = [],
}) => (
    <div className={className}>
        {searchResults.map((r) => (
            <a
                key={r.id}
                onClick={() => alert(r.result)}
            >{r.result}
            </a>
        ))}
    </div>
);

ResultsList.propTypes = { className: PropTypes.string };

ResultsList.defaultProps = { className: '' };

export default ResultsList;
