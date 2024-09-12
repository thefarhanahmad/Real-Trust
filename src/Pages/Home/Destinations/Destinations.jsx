import React from 'react';
import Destinations1 from './img/destinations1.jpeg';
import Destinations2 from './img/destinations2.jpeg';
import Destinations3 from './img/destinations3.jpeg';
import Destinations4 from './img/destinations4.jpeg';
import Destinations5 from './img/destinations5.jpeg';

const destinations = [
    { name: 'Beautiful Beaches - Bangalore', image: Destinations1 },
    { name: 'Mountain Retreat - Bangalore', image: Destinations2 },
    { name: 'City Escape - Bangalore', image: Destinations3 },
    { name: 'Countryside Charm - Bangalore', image: Destinations4 },
    { name: 'Desert Oasis - Bangalore', image: Destinations5 },
];

const Destinations = () => {
    return (
        <div className="bg-gray-100  py-6 px-4 sm:px-8 md:px-10 lg:px-12">
            <div className="bg-white shadow-lg border border-gray-300 rounded-lg mx-auto w-full max-w-6xl p-6">
                {/* First Row: 2 Destinations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {destinations.slice(0, 2).map((dest, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200">
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/30 via-transparent to-transparent text-white text-center py-4 z-10 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-bold shadow-lg transform scale-75 transition-transform duration-500 hover:scale-100">
                                    {dest.name}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Row: 3 Destinations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {destinations.slice(2).map((dest, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200">
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-[150px] sm:h-[200px] md:h-[250px] object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/30 via-transparent to-transparent text-white text-center py-4 z-10 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-bold shadow-lg transform scale-75 transition-transform duration-500 hover:scale-100">
                                    {dest.name}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;
