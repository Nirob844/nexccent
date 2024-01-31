import React from 'react';
import img from '../assets/images/pana.png';
const Design = () => {
    return (
        <div className='mx-10 lg:mx-0 lg:flex text-secondary'>

            <div className='w-full lg:w-2/5 mx-auto lg:ml-0 lg:mr-0 my-10'>
                <img className='w-full' src={img} alt="login_image" />
            </div>

            <div className='w-full lg:w-3/5 mx-auto lg:mx-4 my-8 lg:my-32 text-center lg:text-left'>
                <h1 className='my-5 text-xl lg:text-3xl'>How to design your site footer like we did</h1>
                <p className='text-sm lg:text-base'>
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <button className='my-5 bg-primary text-white px-4 py-3 rounded-lg font-medium'>Learn More</button>
            </div>
        </div>

    );
};

export default Design;