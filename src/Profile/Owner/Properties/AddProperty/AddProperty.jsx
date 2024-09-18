import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const AddProperty = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="bg-gray-50 p-4 rounded-lg shadow-md max-w-7xl ">
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="space-y-4 ">
                        <h2 className='text-lg mb-10 font-semibold text-black '> Create Your Property</h2>
                        <div>
                            <label className="block  text-gray-700">Property Title</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter property title"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Furnish Type</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                required
                            >
                                <option value="" disabled>Please select</option>
                                <option value="furnished">Furnished</option>
                                <option value="semi-furnished">Semi-Furnished</option>
                                <option value="unfurnished">Unfurnished</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">City</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter city"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Locality</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter locality"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Society Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter society name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Area</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter Area"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Description</label>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter description"
                                required
                                rows="4"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded flex items-center"
                                onClick={handlePrevious}
                                disabled={step === 1}
                            >
                                <AiOutlineLeft className="mr-2" /> Previous
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
                                onClick={handleNext}
                            >
                                Next <AiOutlineRight className="ml-2" />
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">Finance Details</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700">Price</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    placeholder="Enter price"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Deposit</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    placeholder="Enter deposit amount"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Monthly Rent</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    placeholder="Enter monthly rent"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Maintenance</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    placeholder="Enter maintenance cost"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded flex items-center"
                                onClick={handlePrevious}
                            >
                                <AiOutlineLeft className="mr-2" /> Previous
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
                                onClick={handleNext}
                            >
                                Next <AiOutlineRight className="ml-2" />
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Gallery Image</label>
                            <input
                                type="file"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded flex items-center"
                                onClick={handlePrevious}
                            >
                                <AiOutlineLeft className="mr-2" /> Previous
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
                                onClick={handleNext}
                            >
                                Next <AiOutlineRight className="ml-2" />
                            </button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700">Purpose</label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                >
                                    <option value="" disabled>Please select</option>
                                    <option value="rent">Rent</option>
                                    <option value="sale">Sale</option>
                                    <option value="commercial">Commercial</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700">Type</label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                >
                                    <option value="" disabled>Please select</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="villa">Villa</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700">Door Facing</label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                >
                                    <option value="" disabled>Please select</option>
                                    <option value="north">North</option>
                                    <option value="south">South</option>
                                    <option value="east">East</option>
                                    <option value="west">West</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700">Tenant Type</label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                >
                                    <option value="" disabled>Please select</option>
                                    <option value="individual">Individual</option>
                                    <option value="family">Family</option>
                                    <option value="group">Group</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700">Bedrooms</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    placeholder="Enter number of bedrooms"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Bathrooms</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    placeholder="Enter number of bathrooms"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Balconies</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    placeholder="Enter number of balconies"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">BHK</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    placeholder="Enter BHK"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Date Listed</label>
                                <input
                                    type="date"
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700">Features</label>
                            <div className="flex flex-wrap gap-4 mt-1">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="swimming-pool"
                                        className="mr-2"
                                    />
                                    <label htmlFor="swimming-pool" className="text-gray-700">Swimming Pool</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="home-theater"
                                        className="mr-2"
                                    />
                                    <label htmlFor="home-theater" className="text-gray-700">Home Theater</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="fire-alarm"
                                        className="mr-2"
                                    />
                                    <label htmlFor="fire-alarm" className="text-gray-700">Fire Alarm</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="marble-floors"
                                        className="mr-2"
                                    />
                                    <label htmlFor="marble-floors" className="text-gray-700">Marble Floors</label>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded flex items-center"
                                onClick={handlePrevious}
                            >
                                <AiOutlineLeft className="mr-2" /> Previous
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
                                onClick={handleNext}
                            >
                                Next <AiOutlineRight className="ml-2" />
                            </button>
                        </div>
                    </div>
                )}

                {step === 5 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Map Location</label>
                            <input
                                type="url"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter map location URL"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Featured Image</label>
                            <input
                                type="file"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded flex items-center"
                                onClick={handlePrevious}
                            >
                                <AiOutlineLeft className="mr-2" /> Previous
                            </button>
                            <button
                                type="submit"
                                className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default AddProperty;
