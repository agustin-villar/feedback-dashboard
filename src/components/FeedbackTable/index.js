import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import { getPlatform, filterDataByComment, filterDataByValues } from '../../utils/common';
import Row from '../Row';
import styles from './styles';

const APIURL = 'http://cache.usabilla.com/example/apidemo.json';
const labels = ['Rating', 'Comment', 'Browser', 'Device', 'Platform'];

const FeedbackTable = ({ filters }) => {
    const [loadStatus, setLoadStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        setLoadStatus('pending');

        const fetchData = async () => {
            try {
                const res = await fetch(APIURL);
                const { items } = await res.json();
                setData(items);
                setFilteredData(items);
                setLoadStatus('resolved');
            } catch (message) {
                setLoadStatus('rejected');
                setError(message.error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            const { keyword, rating, status } = filters;
            let newFilteredData = [...data];

            if (keyword) {
                newFilteredData = filterDataByComment(keyword, newFilteredData);
            }

            if (rating) {
                newFilteredData = filterDataByValues(rating, 'rating', newFilteredData);
            }

            if (status) {
                newFilteredData = filterDataByValues(status, 'status', newFilteredData);
            }

            setFilteredData(newFilteredData);
        }
    }, [filters, data]);

    if (loadStatus === 'rejected') {
        return (<p>{error}</p>);
    }

    if (loadStatus === 'pending' || loadStatus === 'idle') {
        return (<p>loading...</p>);
    }

    if (loadStatus === 'resolved') {
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
                        const { rating, comment, computed_browser: { Browser, Version, Platform }, status, id } = row;
                        return (
                            <Row
                                key={id}
                                rating={rating}
                                comment={comment}
                                browser={`${Browser}\n${Version}`}
                                device={Platform}
                                platform={getPlatform(Platform)}
                                status={status}
                            />
                        );
                    })}
                </tbody>
            </table>
        );
    }

    return null;
};

FeedbackTable.propTypes = {
    filters: PropTypes.shape().isRequired,
};

export default FeedbackTable;
