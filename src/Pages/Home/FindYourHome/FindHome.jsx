import React, { useState } from 'react';
import Select from 'react-select';
import { FaSearch, FaChevronDown, FaChevronUp, FaSpinner } from 'react-icons/fa';

const FindHome = () => {
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [propertyType, setPropertyType] = useState('');
    const [bhkType, setBhkType] = useState('');
    const [furnishType, setFurnishType] = useState('Any');
    const [showMoreFilters, setShowMoreFilters] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLocationChange = (selectedOptions) => {
        setSelectedLocations(selectedOptions || []);
    };

    const handlePropertyTypeChange = (value) => {
        setPropertyType(value);
    };

    const handleBhkTypeChange = (e) => {
        setBhkType(e.target.value);
    };

    const handleSearch = () => {
        setIsLoading(true);
        setTimeout(() => {
            console.log({
                locations: selectedLocations.map(option => option.value),
                propertyType,
                bhkType,
                furnishType
            });
            setIsLoading(false);
        }, 2000);
    };

    const locations = [
        { value: 'Bangalore', label: 'Bangalore' },
        { value: 'Indiranagar', label: 'Indiranagar, Bangalore' },
        { value: 'Whitefield', label: 'Whitefield, Bangalore' },
        { value: 'Koramangala', label: 'Koramangala, Bangalore' },
        { value: 'MG Road', label: 'MG Road, Bangalore' },
        { value: 'HSR Layout', label: 'HSR Layout, Bangalore' },
        { value: 'Jayanagar', label: 'Jayanagar, Bangalore' },
    ];

    const propertyTypes = [
        { value: 'Rent', label: 'Rent' },
        { value: 'Sale', label: 'Sale' },
        { value: 'Commercial', label: 'Commercial' },
        { value: 'Upcoming Project', label: 'Upcoming Project' }
    ];

    const furnishTypes = [
        { value: '', label: 'Select Furnish Type' },
        { value: 'Fully Furnished', label: 'Fully Furnished' },
        { value: 'Semi Furnished', label: 'Semi Furnished' },
        { value: 'Unfurnished', label: 'Unfurnished' }
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderColor: '#E2E8F0',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#CBD5E0',
            },
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 9999,
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#2D3748',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#A0AEC0',
        }),
        container: (provided) => ({
            ...provided,
            width: '100%',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '0',
        }),
        indicatorSeparator: () => ({}),
    };

    return (
        <div className="bg-gray-100 p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="bg-white shadow-lg rounded-lg p-6 mx-auto w-full max-w-6xl">
                

                {/* Property Type Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {propertyTypes.map(type => (
                        <button
                            key={type.value}
                            onClick={() => handlePropertyTypeChange(type.value)}
                            className={`py-2 px-6 rounded-full ${
                                propertyType === type.value
                                    ? 'bg-[rgb(236,137,77)] text-white'
                                    : 'bg-[rgb(236,137,77)] text-white'
                            }`}
                            style={{ cursor: 'pointer' }}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>

                {/* Centered Select Locality */}
                <div className="flex justify-center mb-6">
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <label className="block text-gray-700 font-medium mb-2">Select Locality</label>
                        <Select
                            isMulti
                            options={locations}
                            value={selectedLocations}
                            onChange={handleLocationChange}
                            className="basic-single"
                            classNamePrefix="select"
                            styles={customStyles}
                        />
                    </div>
                </div>

                {/* BHK Type */}
                <div className="flex justify-center mb-6">
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <label className="block text-gray-700 font-medium mb-2 text-left">BHK Type:</label>
                        <div className="flex flex-wrap gap-4 justify-start">
                            {['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '6 BHK'].map((bhk) => (
                                <label key={bhk} className="flex items-center">
                                    <input
                                        type="radio"
                                        value={bhk}
                                        checked={bhkType === bhk}
                                        onChange={handleBhkTypeChange}
                                        className="form-radio text-orange-500 border-orange-500 focus:ring-orange-500"
                                    />
                                    <span className="ml-2 text-sm md:text-base">{bhk}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Advanced Search Filters */}
                {showMoreFilters && (
                    <div className="flex flex-wrap gap-6 justify-center mb-6">
                        <div className="w-full md:w-1/3 lg:w-1/4">
                            <Select
                                options={[
                                    { value: '', label: 'Select Price Range' },
                                    { value: 'Up to 1,000,000', label: 'Up to 1,000,000' },
                                    { value: '1,000,000 - 2,000,000', label: '1,000,000 - 2,000,000' },
                                    { value: '2,000,000 - 3,000,000', label: '2,000,000 - 3,000,000' },
                                    { value: '3,000,000+', label: '3,000,000+' },
                                ]}
                                styles={customStyles}
                                placeholder="Select Price Range"
                            />
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/4">
                            <Select
                                options={[
                                    { value: '', label: 'Select Property Sub-Type' },
                                    { value: 'Apartment', label: 'Apartment' },
                                    { value: 'Villa', label: 'Villa' },
                                    { value: 'Independent Floor', label: 'Independent Floor' },
                                    { value: 'Independent House', label: 'Independent House' },
                                ]}
                                styles={customStyles}
                                placeholder="Select Property Sub-Type"
                            />
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/4">
                            <Select
                                value={furnishTypes.find(furnish => furnish.value === furnishType)}
                                onChange={(e) => setFurnishType(e ? e.value : 'Any')}
                                options={furnishTypes}
                                styles={customStyles}
                                placeholder="Select Furnish Type"
                            />
                        </div>
                    </div>
                )}

                <div className="flex flex-col md:flex-row md:justify-between items-center mt-6">
                    <button
                        onClick={() => setShowMoreFilters(!showMoreFilters)}
                        className="text-orange-600 flex items-center text-lg font-semibold hover:text-orange-700 focus:outline-none mb-4 md:mb-0"
                    >
                        {showMoreFilters ? 'Less Filters' : 'Advanced Search Filters'}
                        {showMoreFilters ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                    </button>
                    <button
                        onClick={handleSearch}
                        disabled={isLoading}
                        className={`flex items-center py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700 transition-colors duration-300 ease-in-out 
                            ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[rgb(236,137,77)] text-white'}
                        `}
                    >
                        {isLoading ? <FaSpinner className="animate-spin mr-2" /> : <FaSearch className="mr-2" />}
                        {isLoading ? 'Searching...' : 'Search'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindHome;
