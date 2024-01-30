import React from 'react';
import img from '../assets/images/Clients Logos (1).png';

const Clients = () => {
    return (
        <div className='m-8'>
            <h1 className=' my-5 text-3xl text-secondary text-center'>Our Clients</h1>
            <p className='text-center'>We have been working with some Fortune 500+ clients</p>
            <img className='my-5 w-4/5 mx-auto' src={img} alt="img" />
        </div>
    );
};

export default Clients;