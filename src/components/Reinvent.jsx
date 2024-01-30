import React from 'react';
import { FaHandPointUp, FaRegHandshake } from 'react-icons/fa';
import { LuUsers2 } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";

const Reinvent = () => {
    return (
        <div className='bg-silver text-secondary'>

            <div className='p-10 lg:py-20 lg:flex lg:justify-between'>
                <div className='lg:mx-44'>
                    <h1 className='my-5 text-3xl'>Helping a local <br /> <span className='text-primary'>business reinvent itself</span></h1>
                    <p>We reached here with our hard work and dedication</p>
                </div>
                <div className='lg:mx-44 mt-10 lg:mt-0 grid grid-cols-2 gap-8'>
                    <div className='lg:mr-10 flex'>
                        <LuUsers2 className="text-xl text-primary my-5 mx-3" />
                        <div>
                            <p className='text-2xl'>2,245,341</p>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className='lg:mr-10 flex'>
                        <FaRegHandshake className="text-xl text-primary my-5 mx-3" />
                        <div>
                            <p className='text-2xl'>46,328</p>
                            <p>Clubs</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <FaHandPointUp className="text-xl text-primary my-5 mx-3" />
                        <div>
                            <p className='text-2xl'>828,867</p>
                            <p>Event Booking</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <MdOutlinePayment className="text-xl text-primary my-5 mx-3" />
                        <div>
                            <p className='text-2xl'>1,926,436</p>
                            <p>Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reinvent;