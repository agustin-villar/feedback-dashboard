import React, { useState } from 'react';
import 'styled-components/macro';
import styles from './styles';

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
        <div css={styles}>
            {statusValues.map(status => (
                <button
                    className={`statusFilter__button statusFilter__button--${status}`}
                    value={status}
                    onClick={e => {
                        updateStatus(status);
                        e.target.classList.toggle('statusFilter__button--active');
                    }}
                >{status.toUpperCase()}</button>
            ))}
        </div>
    );
};

export default StatusFilter;
