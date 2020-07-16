import React, { useState, useEffect } from 'react';
import 'styled-components/macro';
import styles from './styles';
import Row from '../Row';
import { getPlatform } from '../../utils/common';

const APIURL = 'http://cache.usabilla.com/example/apidemo.json';

const FeedbackTable = () => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setStatus('pending');

        const fetchData = async () => {
            try {
                const res = await fetch(APIURL);
                const { items } = await res.json();
                setData(items);
                setStatus('resolved');
            } catch (message) {
                setStatus('rejected');
                setError(message.error);
            }
        };

        fetchData();
    }, []);

    if (status === 'rejected') {
        return (<p>{error}</p>);
    }

    if (status === 'pending' || status === 'idle') {
        return (<p>loading...</p>);
    }

    if (status === 'resolved') {
        return (
            <table css={styles}>
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
                    {data.map(row => {
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
