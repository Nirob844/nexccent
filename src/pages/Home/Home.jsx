import React from 'react';
import Banner from '../../components/Banner';
import Clients from '../../components/Clients';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Clients />
        </div>
    );
};

export default Home;