import React from 'react';

const Row = ({ rating, comment, browser, device, platform }) => (
    <tr>
        <td>{rating}</td>
        <td>{comment}</td>
        <td>{browser}</td>
        <td>{device}</td>
        <td>{platform}</td>
    </tr>
);

export default Row;
