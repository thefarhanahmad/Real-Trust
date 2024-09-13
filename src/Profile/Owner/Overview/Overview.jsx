// src/components/Overview.js
import React from 'react';

const Overview = ({ profileData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
    );
};

export default Overview;
