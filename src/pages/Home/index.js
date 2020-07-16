import React, { useState } from 'react';
import 'styled-components/macro';
import { main, header } from './styles';
import FeedbackTable from '../../components/FeedbackTable';
import RatingFilter from '../../components/RatingFilter';

const Home = () => {
    const [filters, setFilters] = useState({});

    function updateFilters(filter) {
        setFilters({ ...filters, ...filter });
    }

    return (
        <>
            <header css={header}>
                <h1 className='header__headline'>Dashboard</h1>
            </header>
            <main css={main}>
                <input
                    type='text'
                    placeholder='Search here!'
                    onChange={e => updateFilters({ keyword: e.target.value })}
                />
                <RatingFilter onUpdateFilter={filter => updateFilters(filter)} />
                <FeedbackTable filters={filters} />
            </main>
            <footer></footer>
        </>
    );
}

export default Home;
