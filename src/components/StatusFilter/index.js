import React, { useState } from 'react';
import 'styled-components/macro';
import styles from './styles';
import { getUniqueFilterValues } from '../../utils/common';

const statusValues = ['new', 'read'];

const StatusFilter = ({ onUpdateFilter }) => {
    const [filter, setFilter] = useState([]);

    function updateStatus(value) {
        const updatedFilter = getUniqueFilterValues(filter, value);
        setFilter(updatedFilter);
        onUpdateFilter({ status: updatedFilter });
    }

    return (
        <div css={styles}>
            {statusValues.map(status => (
                <button
                    className={`statusFilter__button statusFilter__button--${status} `}
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
