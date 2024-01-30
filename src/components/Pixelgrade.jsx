import React from 'react';
import img from '../assets/images/Frame 35.png';

const Pixelgrade = () => {
    return (
        <div className='lg:flex text-secondary'>

            <div className='w-full lg:w-2/5 mx-auto lg:ml-0 lg:mr-10 my-10'>
                <img className='w-full' src={img} alt="login_image" />
            </div>

            <div className='w-full mx-5 my-8 lg:mx-28  lg:my-32 lg:w-3/5 text-center lg:text-left'>
                <h1 className='my-5 text-2xl lg:text-3xl'>The unseen of spending three years at Pixelgrade</h1>
                <p className='text-sm lg:text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button className='my-5 bg-primary text-white px-4 py-3 rounded-lg font-medium'>Learn More</button>
            </div>
        </div>

    );
};

export default Pixelgrade;