import React, { useState } from 'react';
import 'styled-components/macro';
import styles from './styles';

const higherRank = 5;

const RatingFilter = ({ onUpdateFilter }) => {
    const [filter, setFilter] = useState([]);

    function updateRating(value) {
        const newFilter = new Set(filter);

        if (newFilter.has(value)) {
            newFilter.delete(value);
        } else {
            newFilter.add(value);
        }

        const arrayFromNewFilter = Array.from(newFilter);

        setFilter(arrayFromNewFilter);
        onUpdateFilter({ rating: arrayFromNewFilter });
    }

    const buttons = [];
    let i = 0;

    while (i < higherRank) {
        i += 1;
        buttons.push(
            <button
                className="ratingFilter__button"
                value={i}
                onClick={e => {
                    updateRating(parseInt(e.target.value, 10));
                    e.target.classList.toggle('ratingFilter__button--active');
                }}
            >
                {i}
            </button>,
        );
    }

    return (
        <div css={styles}>
            {buttons}
        </div>
    );
};

export default RatingFilter;
