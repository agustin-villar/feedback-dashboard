import React, { useState, useEffect } from 'react';
import List from '../../components/List';

const APIURL = 'http://cache.usabilla.com/example/apidemo.json';

const Home = () => {
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
        return (<List rows={data} />);
    }

    return null;
};

export default Home;
