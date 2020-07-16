import React, { useState, useEffect } from 'react';
import 'styled-components/macro';
import styles from './styles';
import Row from '../Row';
import { getPlatform, filterDataByComment, filterDataByRating } from '../../utils/common';

const APIURL = 'http://cache.usabilla.com/example/apidemo.json';

const labels = ['Rating', 'Comment', 'Browser', 'Device', 'Platform'];

const FeedbackTable = ({ filters }) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        setStatus('pending');

        const fetchData = async () => {
            try {
                const res = await fetch(APIURL);
                const { items } = await res.json();
                setData(items);
                setFilteredData(items);
                setStatus('resolved');
            } catch (message) {
                setStatus('rejected');
                setError(message.error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            const { keyword, rating } = filters;
            let newFilteredData = [...data];

            if (keyword) {
                newFilteredData = filterDataByComment(keyword, newFilteredData);
            }

            if (rating && rating.length > 0) {
                newFilteredData = filterDataByRating(rating, newFilteredData);
            }

            setFilteredData(newFilteredData);
        }
    }, [filters, data]);

    if (status === 'rejected') {
        return (<p>{error}</p>);
    }

    if (status === 'pending' || status === 'idle') {
        return (<p>loading...</p>);
    }

    if (status === 'resolved') {
        return (
            <table css={styles} labels={labels}>
                <thead>
                    <tr>
                        <td className="table__cell table__cell--head">Rating</td>
                        <td className="table__cell table__cell--head table__cell--left-align">Comment</td>
                        <td className="table__cell table__cell--head">Browser</td>
                        <td className="table__cell table__cell--head">Device</td>
                        <td className="table__cell table__cell--head">Platform</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(row => {
                        const { rating, comment, computed_browser: { Browser, Version, Platform }, id } = row;
                        return (
                            <Row
                                key={id}
                                rating={rating}
                                comment={comment}
                                browser={`${Browser}\n${Version}`}
                                device={Platform}
                                platform={getPlatform(Platform)}
                            />
                        );
                    })}
                </tbody>
            </table>
        );
    }

    return null;
};

export default FeedbackTable;
