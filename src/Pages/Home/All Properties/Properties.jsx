import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdBedroomParent, MdBathroom } from 'react-icons/md';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link for navigation

const placeholderImage = 'https://via.placeholder.com/200'; // Placeholder image URL

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://realtrust.techizebuilder.in/api/properties')
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

    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="bg-gray-100 py-10 px-5 md:px-20">
            <h1 className="text-black font-semibold  text-1xl md:text-4xl mb-8 text-left leading-tight">
                Explore Our Properties
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                {properties.map((property) => (
                    <div
                        key={property.slug}
                        className="flex flex-col border rounded-lg overflow-hidden shadow-lg bg-white mb-6"
                    >

                        <h2 className="text-[18px] text-black px-4 py-2 font-normal">
                            {property.title}
                        </h2>


                        {/* Image and Details Section */}
                        <div className="flex flex-col sm:flex-row">
                            {/* Image Section */}
                            <div className="relative w-full sm:w-1/2">
                                <img
                                    src={`https://realtrust.techizebuilder.in/uploads/properties/${property.image}`}
                                    alt={property.title}
                                    className="w-full h-44 object-cover"
                                    onError={(e) => e.target.src = placeholderImage} // Fallback to placeholder image on error
                                />
                                {/* Schedule Button */}
                                <button
                                    className="absolute bottom-0 left-0 w-full text-white bg-orange-400 text-sm font-medium px-3 py-2"
                                >
                                    Schedule
                                </button>
                            </div>

                            {/* Text Details Section */}
                            <div className="flex flex-col justify-between w-full sm:w-1/2 ">
                                {/* Price and Type Section */}
                                <div className="bg-blue-400 text-white px-4 py-2 mb-2">
                                    <p className="text-lg font-bold">
                                        ₹{property.price.toLocaleString('en-IN')}
                                        <span> {capitalizeFirstLetter(property.type)}</span>
                                    </p>
                                </div>
                                <div>
                                    {/* Description Section */}
                                    <p className="text-gray-700 p-2 mb-1" dangerouslySetInnerHTML={{ __html: property.description }}></p>
                                    {/* Link to More Details */}
                                    <Link to={`/property/${property.slug}`} className='text-gray-700 p-2'>
                                        More Details
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Property Details as Pills */}
                        <div className="flex flex-wrap gap-4 text-gray-600 border-t border-gray-200 bg-gray-100 p-2 mt-4 justify-center">
                            {/* Bedroom */}
                            <div className="flex items-center text-sm md:text-base">
                                <MdBedroomParent size={20} className="mr-2" />
                                <span className="flex items-center">
                                    {property.bedroom} Bedrooms
                                    <div className="border-l border-gray-400 h-6 mx-2" />
                                </span>
                            </div>
                            {/* Bathroom */}
                            <div className="flex items-center text-sm md:text-base">
                                <MdBathroom size={20} className="mr-2" />
                                <span className="flex items-center">
                                    {property.bathroom} Bathrooms
                                    <div className="border-l border-gray-400 h-6 mx-2" />
                                </span>
                            </div>
                            {/* Area */}
                            <div className="flex items-center text-sm md:text-base">
                                <AiOutlineArrowsAlt size={20} className="mr-2" />
                                <span>{property.area} sq ft</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Properties;
