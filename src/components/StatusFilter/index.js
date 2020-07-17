import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import { getUniqueFilterValues } from '../../utils/common';
import styles from './styles';

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
                    key={status}
                    className={`statusFilter__button statusFilter__button--active statusFilter__button--${status}`}
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

StatusFilter.propTypes = {
    onUpdateFilter: PropTypes.func.isRequired,
};

export default StatusFilter;
