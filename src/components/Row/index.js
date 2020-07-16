import React from 'react';

import RatingDot from '../RatingDot';

const Row = ({ rating, comment, browser, device, platform }) => (
    <tr className="table__row">
        <td className='table__cell'><RatingDot rating={rating} /></td>
        <td className='table__cell table__cell--left-align'>{comment}</td>
        <td className='table__cell'>{browser}</td>
        <td className='table__cell'>{device}</td>
        <td className='table__cell'>{platform}</td>
    </tr>
);

export default Row;
