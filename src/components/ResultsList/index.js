/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import './ResultsList.scss';

const ResultsList = (props) => {
    const {
        className,
        resultsData,
    } = props;

    if (!Array.isArray(resultsData) || !resultsData.length) {
        return null;
    }

    const handleClick = (e) => {
        e.preventDefault();
        const selectedValue = e.target.textContent;
        // eslint-disable-next-line no-alert
        alert(selectedValue);
    };

    const classNames = `results-List ${className}`.trim();

    return (
        <div className={classNames}>
            <ul className="results-List__list">
                {
                    resultsData.map((item) => (
                        <li key={`${item.id}`}>
                            <a
                                href="/"
                                onClick={handleClick}
                            >
                                {item.result || ''}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

ResultsList.propTypes = {
    className: PropTypes.string,
    resultsData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        result: PropTypes.string,
    })),
};

ResultsList.defaultProps = {
    className: '',
    resultsData: undefined,
};

export default ResultsList;
