import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Logo/Real Trust Logo.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import Dropdown from './Dropdown';
import PagesDropdown from './PagesDropdown';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handlePagesDropdown = (e) => {
        e.preventDefault();
        setIsPagesDropdownOpen(!isPagesDropdownOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setIsDropdownOpen(false);
        setIsPagesDropdownOpen(false);
    };

    const isActive = (path) => location.pathname === path ? 'bg-yellow-500 text-black' : '';

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.mobile-menu') && !event.target.closest('.dropdown-menu')) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="bg-black text-yellow-500 shadow-lg fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between md:px-20 py-1">
                <Link to="/" className="flex items-center">
                    <img src={Logo} alt="Real Trust Logo" className="h-20" />
                </Link>

                {/* Mobile menu button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-yellow-500 text-2xl p-4"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <MdClose /> : <GiHamburgerMenu />}
                </button>

                {/* Desktop menu */}
                <ul className="hidden md:flex md:space-x-6 items-center">
                    <li>
                        <Link to="/" className={`text-lg ${isActive('/')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/rent" className={`text-lg ${isActive('/rent')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg`}>
                            Rent
                        </Link>
                    </li>
                    <li>
                        <Link to="/sale" className={`text-lg ${isActive('/sale')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg`}>
                            Sale
                        </Link>
                    </li>
                    <li className="relative">
                        <Link
                            to="/property"
                            onClick={handleDropdown}
                            className={`text-lg ${isActive('/property') || isActive('/residential') || isActive('/commercial') ? 'bg-yellow-500 text-black' : ''} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg flex items-center`}
                        >
                            Properties
                            <IoIosArrowDown className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </Link>
                        <Dropdown isDropdownOpen={isDropdownOpen} closeMenu={closeMenu} isActive={isActive} />
                    </li>
                    <li className="relative">
                        <Link
                            to="/pages"
                            onClick={handlePagesDropdown}
                            className={`text-lg ${isActive('/gallery') || isActive('/faqs') ? 'bg-yellow-500 text-black' : ''} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg flex items-center`}
                        >
                            Pages
                            <IoIosArrowDown className={`ml-1 transition-transform duration-300 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
                        </Link>
                        <PagesDropdown isDropdownOpen={isPagesDropdownOpen} closeMenu={closeMenu} isActive={isActive} />
                    </li>
                    <li>
                        <Link to="/blog" className={`text-lg ${isActive('/blog')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg`}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={`text-lg ${isActive('/contact')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg`}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Desktop Login Button */}
                <Link to="/login" className="hidden md:block bg-yellow-600 text-lg text-black py-2 px-8 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
                    Login
                </Link>
            </div>

            {/* Mobile side navigation */}
            {isOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-70 z-40"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />
                    {/* Mobile Menu */}
                    <div className="fixed inset-0 w-full bg-black text-yellow-500 z-50 transform transition-transform duration-500 ease-in-out mobile-menu"
                        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
                    >
                        <div className="flex flex-col h-full px-6 py-4">
                            {/* Header with Logo */}
                            <div className="flex items-center justify-between mb-6 border-b border-yellow-500 pb-4">
                                <Link to="/" className="flex items-center">
                                    <img src={Logo} alt="Real Trust Logo" className="h-12" />
                                </Link>
                                <button onClick={toggleMenu} className="text-2xl text-yellow-500" aria-label="Close menu">
                                    <MdClose />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <ul className="flex flex-col space-y-4">
                                <li>
                                    <Link to="/" className={`text-lg ${isActive('/')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg`} onClick={closeMenu}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/rent" className={`text-lg ${isActive('/rent')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg`} onClick={closeMenu}>
                                        Rent
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sale" className={`text-lg ${isActive('/sale')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg`} onClick={closeMenu}>
                                        Sale
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/property"
                                        onClick={handleDropdown}
                                        className={`text-lg ${isActive('/property') || isActive('/residential') || isActive('/commercial') ? 'bg-yellow-500 text-black' : ''} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg flex items-center`}
                                    >
                                        Properties
                                        <IoIosArrowDown className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </Link>
                                    <Dropdown isDropdownOpen={isDropdownOpen} closeMenu={closeMenu} isActive={isActive} />
                                </li>

                                <li>
                                    <Link
                                        to="/pages"
                                        onClick={handlePagesDropdown}
                                        className={`text-lg ${isActive('/gallery') || isActive('/faqs') ? 'bg-yellow-500 text-black' : ''} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg flex items-center`}
                                    >
                                        Pages
                                        <IoIosArrowDown className={`ml-1 transition-transform duration-300 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
                                    </Link>
                                    <PagesDropdown isDropdownOpen={isPagesDropdownOpen} closeMenu={closeMenu} isActive={isActive} />
                                </li>

                                <li>
                                    <Link to="/blog" className={`text-lg ${isActive('/blog')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg`} onClick={closeMenu}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className={`text-lg ${isActive('/contact')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg`} onClick={closeMenu}>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login" className={`text-lg ${isActive('/login')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg`} onClick={closeMenu}>
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
