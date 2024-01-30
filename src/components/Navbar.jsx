import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo (1).png';

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };



    return (
        <nav className="mx-10 p-4 flex flex-col lg:flex-row justify-between items-center"
        >
            <div className="flex items-center mb-4 lg:mb-0">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo" />
                </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-12">
                <button className="lg:hidden text-gray-800 focus:outline-none"
                    onClick={toggleMenu}>
                    {
                        isMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )
                    } </button>

                <ul className={
                    `${isMenuOpen ? 'flex' : 'hidden'
                    } flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-12 lg:flex`
                }>

                    <li><Link to='/' className="text-gray-800 hover:text-blue-500 font-bold">Home</Link></li>
                    <li><Link to="features" className="text-gray-800 hover:text-blue-500 font-bold">Features</Link></li>
                    <li><Link to="community" className="text-gray-800 hover:text-blue-500 font-bold">Community</Link></li>
                    <li><Link to="blog" className="text-gray-800 hover:text-blue-500 font-bold">Blog</Link></li>
                    <li><Link to="pricing" className="text-gray-800 hover:text-blue-500 font-bold">Pricing</Link></li>

                    {/* Add any additional menu items here */} </ul>

                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
                    <Link to="/">
                        <button className="bg-gray-800 text-white px-4 py-3 rounded-full font-bold mt-4 lg:mt-0 lg:ml-4">
                            Register Now
                        </button>
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;