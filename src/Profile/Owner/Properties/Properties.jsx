// src/components/Properties.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Properties = ({ properties }) => {
    const navigate = useNavigate();

    const handleAddPropertyClick = () => {
        navigate('/add-property'); // Navigates to the Add Property page
    };

    return (
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
            <button 
                onClick={handleAddPropertyClick} // Navigate to the Add Property page on click
                className="mt-4 bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
                Add Property
            </button>
        </div>
    );
};

export default Properties;
