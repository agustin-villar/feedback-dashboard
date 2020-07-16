import React, { useState, useEffect } from 'react';
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
                    {data.map(row => {
                        const { rating, comment, computed_browser: { Browser, Version, Platform }, id } = row;
                        return (
                            <Row
                                key={id}
                                rating={rating}
                                comment={comment}
                                browser={`${Browser} ${Version}`}
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
