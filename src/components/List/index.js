import React from 'react';
import Row from '../Row';
import { getPlatform } from '../../utils/utils';

const List = ({ rows }) => (
    <table>
        <thead>
            <tr>
                <td>Rating</td>
                <td>Comment</td>
                <td>Browser</td>
                <td>Device</td>
                <td>Platform</td>
            </tr>
        </thead>
        <tbody>
            {rows.map((row, index) => {
                const { rating, comment, computed_browser: { Browser, Version, Platform } } = row;
                return (<Row
                    key={`${rating}-${index.toString()}`}
                    rating={rating}
                    comment={comment}
                    browser={`${Browser} ${Version}`}
                    device={Platform}
                    platform={getPlatform(Platform)}
                />);
            })}
        </tbody>
    </table>
);

export default List;
