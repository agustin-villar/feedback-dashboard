import React from 'react';
import 'styled-components/macro';
import { main, header } from './styles';
import FeedbackTable from '../../components/FeedbackTable';

const Home = () => (
    <>
        <header css={header}>
            <h1 className='header__headline'>Dashboard</h1>
        </header>
        <main css={main}>
            <FeedbackTable />
        </main>
        <footer></footer>
    </>
);

export default Home;
