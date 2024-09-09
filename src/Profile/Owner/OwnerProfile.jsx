// src/components/OwnerProfile.js
import React, { useState, useEffect } from 'react';

const OwnerProfile = () => {
    const [profileData, setProfileData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        propertiesOwned: 0,
        propertiesManaged: 0,
        pendingRequests: 0,
        profileImage: '',
    });

    const [activeSection, setActiveSection] = useState('overview');
    const [requestHistory, setRequestHistory] = useState([]);
    const [properties, setProperties] = useState([
        { id: 1, name: 'Ocean View Villa', image: 'https://via.placeholder.com/150', details: 'A beautiful villa with ocean views.' },
        { id: 2, name: 'Mountain Cabin', image: 'https://via.placeholder.com/150', details: 'Cozy cabin in the mountains.' },
        { id: 3, name: 'Urban Apartment', image: 'https://via.placeholder.com/150', details: 'Modern apartment in the city.' },
    ]);

    const [newProperty, setNewProperty] = useState({
        name: '',
        details: '',
        imageUrl: '',
    });

    const [notifications, setNotifications] = useState([
        { id: 1, title: 'New Property Added', message: 'A new property has been added to your list.', read: false },
        { id: 2, title: 'Maintenance Request', message: 'You have a new maintenance request.', read: false },
    ]);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('fullName') && localStorage.getItem('email');
        if (!isAuthenticated) {
            alert('Please log in to access this page.');
            return;
        }

        const fetchedData = {
            fullName: localStorage.getItem('fullName') || '',
            email: localStorage.getItem('email') || '',
            phoneNumber: localStorage.getItem('phoneNumber') || '',
            propertiesOwned: 15,
            propertiesManaged: 30,
            pendingRequests: 7,
            profileImage: localStorage.getItem('profileImage') || 'https://via.placeholder.com/150',
        };
        setProfileData(fetchedData);

        setRequestHistory([
            { id: 1, date: '2024-08-24', type: 'Maintenance', status: 'Completed' },
            { id: 2, date: '2024-08-20', type: 'Inspection', status: 'Pending' },
        ]);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        alert('You have been logged out. Please log in again.');
    };

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProperty({
            ...newProperty,
            [name]: value,
        });
    };

    const handleAddProperty = (e) => {
        e.preventDefault();
        if (newProperty.name && newProperty.details && newProperty.imageUrl) {
            setProperties([
                ...properties,
                {
                    id: properties.length + 1,
                    name: newProperty.name,
                    image: newProperty.imageUrl,
                    details: newProperty.details,
                }
            ]);
            setNewProperty({ name: '', details: '', imageUrl: '' });
            alert('Property added successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    };

    const unreadCount = notifications.filter(notification => !notification.read).length;

    const markAsRead = (id) => {
        setNotifications(notifications.map(notification =>
            notification.id === id ? { ...notification, read: true } : notification
        ));
    };

    return (
        <div className="flex min-h-screen mt-20 bg-gray-100">
            {/* Sidebar */}
            <aside className="w-70 bg-yellow-500 p-6 py-14 flex-shrink-0 hidden md:flex flex-col">
                <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                        <img
                            src={profileData.profileImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="ml-4">
                        <h2 className="text-xl font-bold text-white">{profileData.fullName || 'Owner'}</h2>
                    </div>
                </div>
                <hr className="my-4 border-gray-300" />
                <nav>
                    <ul>
                        {['overview', 'properties', 'requests', 'settings', 'add-property', 'notifications'].map((section) => (
                            <li key={section} className="mb-2">
                                <button
                                    onClick={() => handleNavClick(section)}
                                    className={`w-full text-left px-4 py-2 rounded-lg ${
                                        activeSection === section
                                            ? 'bg-yellow-200 text-yellow-700'
                                            : 'hover:bg-yellow-200 text-yellow-white'
                                    }`}
                                >
                                    {section === 'notifications' ? (
                                        <div className="flex items-center">
                                            <span>Notifications</span>
                                            {unreadCount > 0 && (
                                                <span className="ml-2 px-2 py-1 text-xs font-bold text-yellow-800 bg-red-400 rounded-full">{unreadCount}</span>
                                            )}
                                        </div>
                                    ) : (
                                        section.charAt(0).toUpperCase() + section.slice(1)
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    onClick={handleLogout}
                    className="w-full mt-6 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                    Logout
                </button>
            </aside>

            {/* Main content */}
            <main className="flex-1 bg-gray-100 p-4 md:p-12">
                <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 max-w-full md:max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8">Owner Dashboard</h1>

                    <div className="transition-all duration-300">
                        {activeSection === 'overview' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                                {/* Overview Cards */}
                                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">Properties Owned</h2>
                                    <p className="text-2xl md:text-4xl font-bold text-gray-900">{profileData.propertiesOwned}</p>
                                </div>
                                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">Properties Managed</h2>
                                    <p className="text-2xl md:text-4xl font-bold text-gray-900">{profileData.propertiesManaged}</p>
                                </div>
                                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">Pending Requests</h2>
                                    <p className="text-2xl md:text-4xl font-bold text-gray-900">{profileData.pendingRequests}</p>
                                </div>
                            </div>
                        )}
                        {activeSection === 'properties' && (
                            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Properties List</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                                    {properties.map((property) => (
                                        <div key={property.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
                                            <img
                                                src={property.image}
                                                alt={property.name}
                                                className="w-full h-40 object-cover"
                                            />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{property.name}</h3>
                                                <p className="text-gray-600">{property.details}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeSection === 'requests' && (
                            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Request History</h2>
                                <ul>
                                    {requestHistory.map((request) => (
                                        <li key={request.id} className="border-b border-gray-300 py-2">
                                            <div className="flex justify-between">
                                                <span className="font-semibold text-gray-800">{request.type}</span>
                                                <span className="text-gray-600">{request.date}</span>
                                            </div>
                                            <div className="text-gray-700">{request.status}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {activeSection === 'settings' && (
                            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Settings</h2>
                                <p>Settings content goes here.</p>
                            </div>
                        )}
                        {activeSection === 'add-property' && (
                            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Add New Property</h2>
                                <form onSubmit={handleAddProperty}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Property Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={newProperty.name}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="details" className="block text-gray-700 font-semibold mb-2">Property Details</label>
                                        <textarea
                                            id="details"
                                            name="details"
                                            value={newProperty.details}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="imageUrl" className="block text-gray-700 font-semibold mb-2">Image URL</label>
                                        <input
                                            type="text"
                                            id="imageUrl"
                                            name="imageUrl"
                                            value={newProperty.imageUrl}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    >
                                        Add Property
                                    </button>
                                </form>
                            </div>
                        )}
                        {activeSection === 'notifications' && (
                            <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
                                <div>
                                    {notifications.length === 0 ? (
                                        <p>No notifications.</p>
                                    ) : (
                                        <ul>
                                            {notifications.map(notification => (
                                                <li
                                                    key={notification.id}
                                                    onClick={() => markAsRead(notification.id)}
                                                    className={`p-4 mb-2 rounded-lg cursor-pointer ${notification.read ? 'bg-gray-200' : 'bg-red-200'}`}
                                                >
                                                    <h3 className="text-lg font-semibold text-gray-800">{notification.title}</h3>
                                                    <p>{notification.message}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OwnerProfile;
