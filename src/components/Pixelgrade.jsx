import React from 'react';
import img from '../assets/images/Frame 35.png';

const Pixelgrade = () => {
    return (
        <div className='lg:flex text-secondary'>

            <div className='w-2/5 ml-28 my-10'>
                <img className='w-full' src={img} alt="login_image" />
            </div>
            <div className='w-3/5 mx-28 my-32 text-secondary'>
                <h1 className='my-5 text-3xl'>The unseen of spending three years at Pixelgrade</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className='my-5 bg-primary text-white px-4 py-3 rounded-lg font-medium'>Learn More</button>
            </div>
        </div>
    );
};

export default Pixelgrade;