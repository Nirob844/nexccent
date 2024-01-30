import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import img1 from '../assets/images/image 18.png';
import img2 from '../assets/images/image 19.png';
import img3 from '../assets/images/image 20.png';

const Marketing = () => {
    return (
        <div className='mx-4 lg:mx-20 mb-10 lg:mb-40 text-secondary'>

            <h1 className='my-3 text-xl lg:text-3xl text-center font-semibold'>Caring is the new marketing</h1>

            <p className='text-sm lg:text-base text-center mb-5 lg:mb-10'>
                The Nextcent blog is the best place to read about the latest membership insights, trends, and more. See who's joining the community, read about how our community is increasing their membership income and lots more.
            </p>

            <div className='my-5 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='relative flex flex-col'>
                    <img className='w-full lg:w-[450px] rounded-lg' src={img1} alt="" />
                    <div className='bg-silver shadow-lg rounded-lg lg:w-[350px] absolute left-4 top-52 lg:left-10 lg:top-60'>
                        <h3 className='my-5 font-semibold text-lg lg:text-2xl text-center'>Creating Streamlined  Safeguarding Processes with <br /> OneRen</h3>
                        <div className='flex my-5 text-primary items-center justify-center'>
                            <p className='text-base lg:text-xl text-center font-semibold'>Read more</p>
                            <FaArrowRight className='mt-1 ml-2' />
                        </div>
                    </div>
                </div>

                <div className='relative flex flex-col'>
                    <img className='w-full lg:w-[450px] rounded-lg' src={img2} alt="" />
                    <div className='bg-silver shadow-lg rounded-lg lg:w-[350px] absolute left-4 top-52 lg:left-10 lg:top-60'>
                        <h3 className='my-5 font-semibold text-lg lg:text-2xl text-center'>What are your safeguarding responsibilities and how can you manage them?</h3>
                        <div className='flex my-5 text-primary items-center justify-center'>
                            <p className='text-base lg:text-xl text-center font-semibold'>Read more</p>
                            <FaArrowRight className='mt-1 ml-2' />
                        </div>
                    </div>
                </div>

                <div className='relative flex flex-col'>
                    <img className='w-full lg:w-[450px] rounded-lg' src={img3} alt="" />
                    <div className='bg-silver shadow-lg rounded-lg lg:w-[350px] absolute left-4 top-52 lg:left-10 lg:top-60'>
                        <h3 className='my-5 font-semibold text-lg lg:text-2xl text-center'>Revamping the Membership Model with Triathlon <br /> Australia</h3>
                        <div className='flex my-5 text-primary items-center justify-center'>
                            <p className='text-base lg:text-xl text-center font-semibold'>Read more</p>
                            <FaArrowRight className='mt-1 ml-2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Marketing;