import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FindYourHome = () => {
    const [location, setLocation] = useState('');
    const [lookingFor, setLookingFor] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [bhkType, setBhkType] = useState('');
    const [furnishType, setFurnishType] = useState('');
    const [building, setBuilding] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [ageOfProperty, setAgeOfProperty] = useState('');
    const [tenantType, setTenantType] = useState('');
    const [propertySubType, setPropertySubType] = useState('');
    const [showMoreFilters, setShowMoreFilters] = useState(false);

    const handleSearch = () => {
        console.log({
            location,
            lookingFor,
            propertyType,
            bhkType,
            furnishType,
            building,
            priceRange,
            ageOfProperty,
            tenantType,
            propertySubType,
        });
    };

    const toggleMoreFilters = () => {
        setShowMoreFilters(!showMoreFilters);
    };

    return (
        <div className="w-full md:w-80 p-4 bg-gray-100 shadow-md mt-20">
            <h1 className="text-2xl font-semibold text-yellow-600 mb-6">Find Your Home</h1>
            <div className="space-y-4">
                {[
                    { value: location, setValue: setLocation, options: ['Koramangala', 'Whitefield', 'Indiranagar', 'Marathahalli', 'Electronic City'], label: ' Select Locality' },
                    { value: lookingFor, setValue: setLookingFor, options: ['Rent', 'Sell'], label: 'Looking For' },
                    { value: propertyType, setValue: setPropertyType, options: ['Residential', 'Commercial'], label: 'Property Type' },
                    { value: bhkType, setValue: setBhkType, options: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '6 BHK'], label: 'BHK Type' },
                    { value: furnishType, setValue: setFurnishType, options: ['Fully Furnished', 'Semi Furnished', 'Unfurnished'], label: 'Furnish Type' },
                    { value: building, setValue: setBuilding, options: ['Society A', 'Society B', 'Project X', 'Project Y'], label: 'Building/Project/Society' },
                ].map((field, index) => (
                    <div key={index}>
                        <select
                            value={field.value}
                            onChange={(e) => field.setValue(e.target.value)}
                            className="w-full p-2 border border-yellow-300 rounded-lg bg-yellow-50 text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            <option value="" disabled> {field.label}</option>
                            {field.options.map(option => (
                                <option 
                                    key={option} 
                                    value={option}
                                    className="bg-yellow-50 hover:bg-yellow-100">
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
                <button
                    onClick={toggleMoreFilters}
                    className="flex items-center text-yellow-600 hover:text-yellow-800 focus:outline-none"
                >
                    {showMoreFilters ? (
                        <>
                            <FaChevronUp className="mr-2" />
                            Less Filters
                        </>
                    ) : (
                        <>
                            <FaChevronDown className="mr-2" />
                            Advanced Filters
                        </>
                    )}
                </button>
                {showMoreFilters && (
                    <div className="space-y-4 mt-4">
                        {[
                            { value: priceRange, setValue: setPriceRange, options: ['Up to 1,000,000', '1,000,000 - 2,000,000', '2,000,000 - 3,000,000', '3,000,000+'], label: 'Price Range' },
                            { value: ageOfProperty, setValue: setAgeOfProperty, options: ['1-5 years', '5-10 years', '10+ years'], label: 'Age of Property' },
                            { value: tenantType, setValue: setTenantType, options: ['Family', 'Bachelors', 'Company'], label: 'Preferred Tenant Type' },
                            { value: propertySubType, setValue: setPropertySubType, options: ['Apartment', 'Villa', 'Independent Floor', 'Independent House'], label: 'Type' },
                        ].map((filter, index) => (
                            <div key={index}>
                                <select
                                    value={filter.value}
                                    onChange={(e) => filter.setValue(e.target.value)}
                                    className="w-full p-2 border border-yellow-300 rounded-lg bg-yellow-50 text-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                >
                                    <option value="" disabled>Select {filter.label}</option>
                                    {filter.options.map(option => (
                                        <option 
                                            key={option} 
                                            value={option}
                                            className="bg-yellow-50 hover:bg-yellow-100">
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="mt-4">
                <button
                    onClick={handleSearch}
                    className="w-full flex items-center justify-center bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                >
                    <FaSearch className="mr-2" />
                    Search
                </button>
            </div>
        </div>
    ); 
};

export default FindYourHome;
