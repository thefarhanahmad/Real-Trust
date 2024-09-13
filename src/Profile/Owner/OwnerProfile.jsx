import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Overview from './Overview/Overview';
import Properties from './Properties/Properties';
import Requests from './Requests/Requests';
import Settings from './Settings/Settings';
import Notifications from './Notifications/Notifications';
import AddProperty from '../Owner/Properties/AddProperty/AddProperty'

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
    const [properties, setProperties] = useState([]);
    const [notifications, setNotifications] = useState([]);

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
            propertiesOwned: 15, // Example data
            propertiesManaged: 30, // Example data
            pendingRequests: 7, // Example data
            profileImage: localStorage.getItem('profileImage') || 'https://via.placeholder.com/150',
        };
        setProfileData(fetchedData);

        setRequestHistory([
            { id: 1, date: '2024-08-24', type: 'Maintenance', status: 'Completed' },
            { id: 2, date: '2024-08-20', type: 'Inspection', status: 'Pending' },
        ]);

        setProperties([
            { id: 1, name: 'Ocean View Villa', image: 'https://via.placeholder.com/150', details: 'A beautiful villa with ocean views.' },
            { id: 2, name: 'Mountain Cabin', image: 'https://via.placeholder.com/150', details: 'Cozy cabin in the mountains.' },
            { id: 3, name: 'Urban Apartment', image: 'https://via.placeholder.com/150', details: 'Modern apartment in the city.' },
        ]);

        setNotifications([
            { id: 1, title: 'New Property Added', message: 'A new property has been added to your list.', read: false },
            { id: 2, title: 'Maintenance Request', message: 'You have a new maintenance request.', read: false },
        ]);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        alert('You have been logged out. Please log in again.');
    };

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    const handleAddProperty = (newProperty) => {
        setProperties([
            ...properties,
            {
                id: properties.length + 1,
                name: newProperty.name,
                image: newProperty.imageUrl,
                details: newProperty.details,
            }
        ]);
        alert('Property added successfully!');
    };

    const unreadCount = notifications.filter(notification => !notification.read).length;

    const markAsRead = (id) => {
        setNotifications(notifications.map(notification =>
            notification.id === id ? { ...notification, read: true } : notification
        ));
    };

    return (
        <div className="flex min-h-screen mt-20 bg-gray-100">
            <Sidebar
                activeSection={activeSection}
                onNavClick={handleNavClick}
                onLogout={handleLogout}
                unreadCount={unreadCount}
                profileData={profileData}
            />
            <main className="flex-1 bg-gray-100 p-4 md:p-12">
                <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 max-w-full md:max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8">Owner Dashboard</h1>

                    <div className="transition-all duration-300">
                        {activeSection === 'overview' && (
                            <Overview profileData={profileData} />
                        )}
                        {activeSection === 'properties' && (
                            <Properties properties={properties} />
                        )}
                        {activeSection === 'requests' && (
                            <Requests requestHistory={requestHistory} />
                        )}
                        {activeSection === 'settings' && (
                            <Settings />
                        )}
                        {activeSection === 'add-property' && (
                            <AddProperty onAddProperty={handleAddProperty} />
                        )}
                        {activeSection === 'notifications' && (
                            <Notifications notifications={notifications} onMarkAsRead={markAsRead} />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OwnerProfile;
