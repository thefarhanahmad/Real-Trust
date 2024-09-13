import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import both dropdown icons

const Sidebar = ({ activeSection, onNavClick, onLogout, unreadCount, profileData }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleNavClick = (section) => {
        onNavClick(section);

        // Handle dropdown toggle only if the clicked section is 'properties'
        if (section === 'properties') {
            setIsDropdownOpen(!isDropdownOpen);
        } else {
            // Close dropdown if any other section is clicked
            setIsDropdownOpen(false);
        }
    };

    return (
        <div className="sticky top-0 pt-10 left-0 w-64 bg-yellow-600 text-white min-h-screen max-h-screen overflow-auto p-4 flex flex-col z-10">
            <div className="flex items-center mb-6">
                <img src={profileData.profileImage} alt="Profile" className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                    <h2 className="text-lg font-semibold">{profileData.fullName}</h2>
                    <p>{profileData.email}</p>
                </div>
            </div>
            <nav className="flex-1 flex flex-col">
                <ul className='space-y-1'>
                    <li
                        onClick={() => handleNavClick('overview')}
                        className={`py-2 px-4 rounded-md cursor-pointer ${activeSection === 'overview' ? 'bg-yellow-700' : ''}`}
                    >
                        Overview
                    </li>
                    <li
                        onClick={() => handleNavClick('properties')}
                        className={`py-2 px-4 rounded-md cursor-pointer ${activeSection === 'properties' ? 'bg-yellow-700' : ''}`}
                    >
                        Properties
                        {isDropdownOpen ? (
                            <FaChevronUp className="inline ml-2" style={{ height: '14px', width: '20px' }} />
                        ) : (
                            <FaChevronDown className="inline ml-2" style={{ height: '14px', width: '20px' }} />
                        )}
                    </li>
                    {isDropdownOpen && (
                        <li
                            onClick={() => handleNavClick('add-property')}
                            className={`py-2 px-4 pl-10 rounded-md cursor-pointer text-sm ${activeSection === 'add-property' ? 'bg-yellow-700' : ''}`}
                        >
                            Add Property
                        </li>
                    )}
                    <li
                        onClick={() => handleNavClick('requests')}
                        className={`py-2 px-4 rounded-md cursor-pointer ${activeSection === 'requests' ? 'bg-yellow-700' : ''}`}
                    >
                        Requests
                    </li>
                    <li
                        onClick={() => handleNavClick('settings')}
                        className={`py-2 px-4 rounded-md cursor-pointer ${activeSection === 'settings' ? 'bg-yellow-700' : ''}`}
                    >
                        Settings
                    </li>
                    <li
                        onClick={() => handleNavClick('notifications')}
                        className={`py-2 px-4 rounded-md cursor-pointer ${activeSection === 'notifications' ? 'bg-yellow-700' : ''}`}
                    >
                        Notifications {unreadCount > 0 && (
                            <span className="bg-red-500 text-white rounded-full px-2 ml-2 text-xs">{unreadCount}</span>
                        )}
                    </li>
                    <div>
                        <button
                            onClick={onLogout}
                            className="w-full bg-red-600 mt-10 text-white px-4 py-2  rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Logout
                        </button>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
