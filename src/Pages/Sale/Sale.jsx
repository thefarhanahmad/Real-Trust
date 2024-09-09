import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const placeholderImage = 'https://via.placeholder.com/200'; // Placeholder image URL

const Sale = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://realtrust.techizebuilder.in/api/properties/for-sale')
            .then(response => {
                setProperties(response.data.properties);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching properties');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center text-gray-800">Loading properties...</div>;
    }

    if (error) {
        return <div className="text-center text-red-600">{error}</div>;
    }

    return (
        <div className="w-full p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Property Listings for Sale</h1>
            <div className="space-y-6">
                {properties.map((property) => (
                    <div key={property.id} className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-lg bg-white mb-6">
                        <img
                            src={`https://realtrust.techizebuilder.in/api/properties/${property.image}`}
                            alt={property.title}
                            className="w-full md:w-1/3 h-56 object-cover"
                            onError={(e) => e.target.src = placeholderImage} // Fallback to placeholder image on error
                        />
                        <div className="p-4 flex-1">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{property.title}</h2>
                            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: property.description }}></p>
                            <div className="mb-4">
                                <p className="text-gray-600 mb-2">Price: <span className="font-semibold text-yellow-600">₹{property.price}</span></p>
                                <p className="text-gray-600 mb-2">Location: <span className="font-semibold text-gray-800">{property.address}</span></p>
                                <p className="text-gray-600 mb-2">Type: <span className="font-semibold text-gray-800 capitalize">{property.type}</span></p>
                                <p className={`text-gray-600 mb-2 font-semibold ${property.purpose === "sale" ? "text-green-600" : "text-yellow-600"}`}>Status: {property.purpose}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 border-t border-gray-300 pt-4">
                                <div className="bg-yellow-100 text-yellow-800 py-2 px-4 rounded-lg border border-yellow-300">
                                    {property.bedroom} Bedrooms
                                </div>
                                <div className="bg-pink-100 text-pink-800 py-2 px-4 rounded-lg border border-pink-300">
                                    {property.bathroom} Bathrooms
                                </div>
                                <div className="bg-indigo-100 text-indigo-800 py-2 px-4 rounded-lg border border-indigo-300">
                                    {property.area} sq ft
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <Link to={`/property/${property.slug}`} className="bg-yellow-600 text-white py-2 px-4 rounded-lg text-center hover:bg-yellow-700 transition duration-300">
                                    View Details
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sale;
