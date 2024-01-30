import React from 'react';
import Banner from '../../components/Banner';
import Clients from '../../components/Clients';
import Community from '../../components/Community';
import Design from '../../components/Design';
import Navbar from '../../components/Navbar';
import Pixelgrade from '../../components/Pixelgrade';
import Reinvent from '../../components/Reinvent';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Clients />
            <Community />
            <Pixelgrade />
            <Reinvent />
            <Design />
        </div>
    );
};

export default Home;