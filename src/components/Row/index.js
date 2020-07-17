import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { ratingDotStyles } from './styles';

const Row = ({ rating, comment, browser, device, platform, status }) => (
    <tr className={`table__row ${status === 'read' ? 'table__row--read' : 'table__row--new'}`}>
        <td className={`table__cell ${status === 'read' ? 'table__cell--read' : 'table__cell--new'}`}>
            <span css={ratingDotStyles}>{rating}</span>
        </td>
        <td className={`table__cell table__cell--left-align ${comment ? '' : 'table__cell--empty'}`}>
            {comment || '— empty comment —'}
        </td>
        <td className="table__cell">{browser}</td>
        <td className="table__cell">{device}</td>
        <td className="table__cell">{platform}</td>
    </tr>
);

Row.propTypes = {
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    browser: PropTypes.string.isRequired,
    device: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};

export default Row;
