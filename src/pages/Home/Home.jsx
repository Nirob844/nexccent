import React from 'react';
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <p className=''>this is home page</p>
        </div>
    );
};

export default Home;