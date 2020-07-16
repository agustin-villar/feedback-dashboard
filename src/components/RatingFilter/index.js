import React, { useState } from 'react';

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
            <button value={i} onClick={e => updateRating(parseInt(e.target.value, 10))}>
                {i}
            </button>,
        );
    }

    return (
        <div>
            {buttons}
        </div>
    );
};

export default RatingFilter;
