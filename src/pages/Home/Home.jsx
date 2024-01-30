import React from 'react';
import Banner from '../../components/Banner';
import Clients from '../../components/Clients';
import Community from '../../components/Community';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Clients />
            <Community />
        </div>
    );
};

export default Home;