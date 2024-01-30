import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import fram from '../assets/images/Frame 10.png';
import img from '../assets/images/image 9 (1).png';

const Customers = () => {
    return (
        <div className='lg:flex bg-silver text-secondary'>

            <div className='w-full lg:w-1/3 mx-auto lg:ml-20 lg:mr-0 my-10'>
                <img className='w-full lg:w-[80%]' src={img} alt="login_image" />
            </div>

            <div className='w-full lg:w-2/3 mx-auto lg:mx-0 my-8 lg:my-10 lg:mr-20 md:mr-0 text-center lg:text-left'>
                <p className='text-sm lg:text-base'>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <h1 className='mt-3 text-primary text-lg lg:text-2xl'>Tim Smith</h1>
                <p>British Dragon Boat Racing Association</p>
                <div className='flex mt-3 items-center'>
                    <img className='w-3/4 md:w-4/5 lg:w-65' src={fram} alt="" />
                    <div className='flex mx-4 text-primary items-center'>
                        <p className='text-base lg:text-xl font-semibold'>Meet all customers</p>
                        <FaArrowRight className='mt-1 ml-2' />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Customers;