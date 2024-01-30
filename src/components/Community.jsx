import React from 'react';
import icon1 from '../assets/icon/Icon.png';
import icon2 from '../assets/icon/Icon2.png';
import icon3 from '../assets/icon/Icon3.png';

const Community = () => {
    return (
        <div className='lg:mx-44 my-10 text-secondary'>
            <h1 className='mt-5 text-3xl text-center'>Manage your entire community <br /> in a single system</h1>
            <p className='text-center'>Who is Nextcent suitable for?</p>
            <div className='my-8 grid md:grid-cols-1 lg:grid-cols-3 gap-28'>
                {/* <div className='relative p-5 bg-white shadow-lg rounded-lg text-center flex flex-col items-center'>
                    <HiOutlineUserGroup className='text-2xl mb-3'
                        style={{
                            position: 'absolute',
                            top: '30px',
                            left: '140px',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                    <img
                        src={bg}
                        alt="bg"
                    />
                    <div className='relative z-10'>
                        <h2 className='text-3xl my-5'>Membership <br /> Organisations</h2>
                        <p className='mb-5'>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
                    </div>
                </div> */}

                <div className='p-5 bg-white shadow-lg rounded-lg text-center flex flex-col items-center'>
                    <img src={icon1} alt="" />
                    <h2 className='text-3xl my-5'>Membership <br /> Organisations</h2>
                    <p className='mb-2'>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
                </div>
                <div className='p-5 bg-white shadow-lg rounded-lg text-center flex flex-col items-center'>
                    <img src={icon2} alt="" />
                    <h2 className='text-3xl my-5'>National <br /> Associations </h2>
                    <p className='mb-2'>Our membership management <br /> software provides full automation of <br /> membership renewals and <br /> payments</p>
                </div>
                <div className='p-5 bg-white shadow-lg rounded-lg text-center flex flex-col items-center'>
                    <img src={icon3} alt="" />
                    <h2 className='text-3xl my-5'>Clubs And <br /> Groups </h2>
                    <p className='mb-2'>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
                </div>
            </div>
        </div>
    );
};

export default Community;