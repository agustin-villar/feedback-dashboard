import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import styles from './styles';

const RatingDot = ({ rating }) => (
    <span css={styles} onClick={e => e.stopPropagation()}>{rating}</span>
);

RatingDot.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default RatingDot;
