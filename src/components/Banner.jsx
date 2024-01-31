import React from 'react';
import img from '../assets/images/Illustration (1).png';

const Banner = () => {
    return (
        <div className='bg-silver'>
            <div className='p-5 lg:p-0 lg:flex lg:justify-between'>
                <div className='mx-4 my-10 lg:mx-44 lg:my-20 lg:w-[65%] text-center lg:text-left'>
                    <h1 className='my-5 text-3xl lg:text-5xl font-semibold text-[#4D4D4D]'>Lessons and insights <br /></h1>
                    <h1 className='my-3 text-primary text-3xl lg:text-5xl font-semibold'>from 8 years</h1>
                    <p className='my-5'>Where to grow your business as a photographer: site or social media?</p>
                    <button className='my-5 bg-primary text-white px-6 py-3 rounded-lg font-medium'>
                        Register
                    </button>
                </div>
                <div className='text-center mx-4 my-10 lg:mx-44 lg:my-20 lg:w-[35%]'>
                    <img className='mx-auto' src={img} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Banner;