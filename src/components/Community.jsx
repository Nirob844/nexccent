import React from 'react';
import icon1 from '../assets/icon/Icon.png';
import icon2 from '../assets/icon/Icon2.png';
import icon3 from '../assets/icon/Icon3.png';

const Community = () => {
    return (
        <div className='lg:mx-8 lg:my-10 text-secondary'>

            <h1 className='mt-5 text-xl lg:text-3xl text-center'>Manage your entire community <br /> in a single system</h1>

            <p className='text-center mb-6'>Who is Nextcent suitable for?</p>

            <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24'>
                <div className='p-5 bg-white shadow-lg rounded-lg text-center flex flex-col items-center'>
                    <img className='w-16 h-16 mb-3' src={icon1} alt="" />
                    <h2 className='text-lg lg:text-3xl my-3'>Membership <br /> Organisations</h2>
                    <p className='mb-2'>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
                </div>
                <div className='p-5 bg-white shadow-lg rounded-lg text-center flex flex-col items-center'>
                    <img className='w-16 h-16 mb-3' src={icon2} alt="" />
                    <h2 className='text-lg lg:text-3xl my-3'>National <br /> Associations</h2>
                    <p className='mb-2'>Our membership management <br /> software provides full automation of <br /> membership renewals and <br /> payments</p>
                </div>
                <div className='p-5 bg-white shadow-lg rounded-lg text-center flex flex-col items-center'>
                    <img className='w-16 h-16 mb-3' src={icon3} alt="" />
                    <h2 className='text-lg lg:text-3xl my-3'>Clubs And <br /> Groups</h2>
                    <p className='mb-2'>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
                </div>
            </div>
        </div>

    );
};

export default Community;