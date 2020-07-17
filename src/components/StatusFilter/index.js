import React, { useState } from 'react';

const statusValues = ['new', 'read'];

const StatusFilter = ({ onUpdateFilter }) => {
    const [filter, setFilter] = useState([]);

    function updateStatus(value) {
        const newFilter = new Set(filter);

        if (newFilter.has(value)) {
            newFilter.delete(value);
        } else {
            newFilter.add(value);
        }

        const arrayFromNewFilter = Array.from(newFilter);

        setFilter(arrayFromNewFilter);
        onUpdateFilter({ status: arrayFromNewFilter });
    }

    return (
        <div>
            {statusValues.map(status => (
                <button
                    value={status}
                    onClick={e => {
                        updateStatus(status);
                        e.target.classList.toggle('ratingFilter__button--active');
                    }}
                >{status.toUpperCase()}</button>
            ))}
        </div>
    );
};

export default StatusFilter;
