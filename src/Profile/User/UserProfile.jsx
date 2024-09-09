import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [profileData, setProfileData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        savedProperties: 0,
        totalProperties: 0,
        propertiesForContract: 0,
        profileImage: '', // Add this to store profile image URL
    });

    const [activeSection, setActiveSection] = useState('overview');
    const [paymentHistory, setPaymentHistory] = useState([]);

    useEffect(() => {
        // Check if user is authenticated
        const isAuthenticated = localStorage.getItem('fullName') && localStorage.getItem('email');
        if (!isAuthenticated) {
            alert('Please log in to access this page.');
            return;
        }

        // Fetch profile data from localStorage or API
        const fetchedData = {
            fullName: localStorage.getItem('fullName') || '',
            email: localStorage.getItem('email') || '',
            phoneNumber: localStorage.getItem('phoneNumber') || '',
            savedProperties: 10, // Example static data
            totalProperties: 50, // Example static data
            propertiesForContract: 5, // Example static data
            profileImage: localStorage.getItem('profileImage') || 'https://via.placeholder.com/150', // Add a placeholder image URL
        };
        setProfileData(fetchedData);

        // Simulate fetching payment history
        setPaymentHistory([
            { id: 1, date: '2024-08-24', amount: '$150.00', method: 'Credit Card' },
            { id: 2, date: '2024-08-22', amount: '$75.00', method: 'PayPal' },
        ]);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        alert('You have been logged out. Please log in again.');
    };

    const handleNavClick = (section) => {
        setActiveSection(section);
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
                        <h2 className="text-xl font-bold text-white">{profileData.fullName || 'User'}</h2>
                    </div>
                </div>
                <hr className="my-4 border-gray-300" />
                <nav>
                    <ul>
                        {['overview', 'profile', 'settings', 'paymentHistory'].map((section) => (
                            <li key={section} className="mb-2">
                                <button
                                    onClick={() => handleNavClick(section)}
                                    className={`w-full text-left px-4 py-2 rounded-lg ${
                                        activeSection === section
                                            ? 'bg-gray-200 text-yellow-800'
                                            : 'hover:bg-gray-300 text-white'
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    onClick={handleLogout}
                    className="w-full mt-6 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Logout
                </button>
            </aside>

            {/* Main content */}
            <main className="flex-1 bg-gray-100 p-4 md:p-12">
                <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 max-w-full md:max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8">User Dashboard</h1>

                    <div className="transition-all duration-300">
                        {activeSection === 'overview' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                                {/* Overview Cards */}
                                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">Total Properties</h2>
                                    <p className="text-2xl md:text-4xl font-bold text-gray-900">{profileData.totalProperties}</p>
                                </div>
                                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">Properties Under Contract</h2>
                                    <p className="text-2xl md:text-4xl font-bold text-gray-900">{profileData.propertiesForContract}</p>
                                </div>
                                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">Saved Properties</h2>
                                    <p className="text-2xl md:text-4xl font-bold text-gray-900">{profileData.savedProperties}</p>
                                </div>
                            </div>
                        )}
                        {activeSection === 'profile' && (
                            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                <div className="flex flex-col items-center mb-6">
                                    <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
                                        <img
                                            src={profileData.profileImage}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h2 className="text-2xl font-bold text-gray-800">{profileData.fullName || 'User'}</h2>
                                    </div>
                                </div>
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                                <div className="space-y-4">
                                    {['fullName', 'email', 'phoneNumber'].map((field) => (
                                        <div key={field}>
                                            <label className="block text-gray-600 font-medium mb-2 capitalize" htmlFor={field}>
                                                {field.replace(/([A-Z])/g, ' $1').toUpperCase()}
                                            </label>
                                            <input
                                                id={field}
                                                type="text"
                                                value={profileData[field]}
                                                readOnly
                                                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeSection === 'settings' && (
                            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">Settings</h2>
                                <p>Settings options will be available here.</p>
                            </div>
                        )}
                        {activeSection === 'paymentHistory' && (
                            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">Payment History</h2>
                                <table className="w-full bg-white border border-gray-300 rounded-lg">
                                    <thead>
                                        <tr className="bg-gray-200 text-gray-600">
                                            <th className="p-2 md:p-4 text-left">Date</th>
                                            <th className="p-2 md:p-4 text-left">Amount</th>
                                            <th className="p-2 md:p-4 text-left">Method</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paymentHistory.map((payment) => (
                                            <tr key={payment.id}>
                                                <td className="p-2 md:p-4 border-t border-gray-300">{payment.date}</td>
                                                <td className="p-2 md:p-4 border-t border-gray-300">{payment.amount}</td>
                                                <td className="p-2 md:p-4 border-t border-gray-300">{payment.method}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserProfile;
