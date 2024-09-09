// src/components/PagesDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';

const PagesDropdown = ({ isDropdownOpen, closeMenu, isActive }) => {
    return (
        isDropdownOpen && (
            <ul className="absolute left-0 mt-10 bg-black text-yellow-500 shadow-lg rounded-lg py-3 px-3 w-40 transition-all duration-300 ease-out dropdown-menu">
                <li>
                    <Link
                        to="/gallery"
                        className={`block px-4 py-2 mb-2 ${isActive('/gallery')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 rounded-lg`}
                        onClick={closeMenu}
                    >
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link
                        to="/faqs"
                        className={`block px-4 py-2 ${isActive('/faqs')} hover:bg-yellow-600 hover:text-white transition-colors duration-300 rounded-lg`}
                        onClick={closeMenu}
                    >
                        FAQs
                    </Link>
                </li>
            </ul>
        )
    );
};

export default PagesDropdown;
