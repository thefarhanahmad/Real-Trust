import React from 'react';
import Homeimg from './img/Home.jpeg';
import singleHome1 from './img/singlehome1.jpeg';
import singleHome3 from './img/singlehome3.jpeg';
import singleHome4 from './img/singlehome4.jpeg';
import singleHome5 from './img/singlehome5.jpeg';
import singleHome6 from './img/singlehome6.jpeg';
import singleHome7 from './img/singlehome7.jpeg';
import singleHome8 from './img/singleHome8.jpeg';
import singleHome9 from './img/singleHome9.jpeg';
import singleHome10 from './img/singleHome10.jpeg';

const SingleHome = () => {
    const relatedImages = [
        singleHome1, singleHome3, singleHome4, singleHome5,
        singleHome6, singleHome7, singleHome8, singleHome9, singleHome10
    ];

    const features = [
        "2 Stories", "Central Heating", "Dual Sinks", "Electric Range", 
        "Fire Alarm", "Fireplace", "Home Theater", "Laundry Room", 
        "Lawn", "Marble Floors", "Swimming Pool"
    ];

    return (
        <div className="container mx-auto p-6 mt-12 lg:p-12">
            {/* Main Home Image */}
            <div className="mb-12">
                <img
                    src={Homeimg}
                    alt="Main view of the home"
                    className="w-full h-[600px] object-cover rounded-xl shadow-2xl border border-gray-200"
                />
            </div>

            {/* Property Details */}
            <div className="mb-12 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">FL-5, Pinecrest, FL, USA</h1>
                <p className="text-3xl font-semibold text-yellow-500 mb-6">For Sale $580,000</p>
                <p className="text-lg mb-6 text-gray-700">RH-8561-PROPERTY 5500 sq ft | 4 Bedrooms | 4 Bathrooms | 2 Garages | 2017 Year Built</p>
                <p className="text-gray-600 leading-relaxed">
                    Beautiful home on a quiet, tree-lined street. Addition and renovation create a desirable layout with a gracious master suite, oversized walk-in closet, and lovely bathroom! Formal living room with working fireplace and French doors open to a gorgeous, lushly landscaped yard. Home features formal dining room, elegant kitchen with wood-beamed ceilings, bright breakfast room off the family room overlooking the magnificent pool and patio. Details like crown molding, coral rock wall, marble, and hardwood floors, tumbled marble driveway, and lovely front porch create a wonderful ambiance.
                </p>
            </div>

            {/* Related Images */}
            <div className="grid grid-cols-1 gap-6 mb-12">
                {/* First Row: 3 images */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                    {relatedImages.slice(0, 3).map((img, index) => (
                        <div key={index} className="relative">
                            <img
                                src={img}
                                alt={`Related image ${index + 1}`}
                                className="w-full h-60 object-cover rounded-lg shadow-md border border-gray-200"
                            />
                        </div>
                    ))}
                </div>

                {/* Second Row: 2 images */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                    {relatedImages.slice(3, 5).map((img, index) => (
                        <div key={index + 3} className="relative">
                            <img
                                src={img}
                                alt={`Related image ${index + 4}`}
                                className="w-full h-60 object-cover rounded-lg shadow-md border border-gray-200"
                            />
                        </div>
                    ))}
                </div>

                {/* Third Row: 4 images */}
                <div className="grid grid-cols-4 gap-6">
                    {relatedImages.slice(5).map((img, index) => (
                        <div key={index + 5} className="relative">
                            <img
                                src={img}
                                alt={`Related image ${index + 6}`}
                                className="w-full h-52 object-cover rounded-lg shadow-md border border-gray-200"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Details */}
            <div className="mb-12 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Additional Details</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>APPLIANCES: Built-In & Freestanding Range, Dishwasher</li>
                    <li>BATHROOM DESCRIPTION: Shower Over Tub, Tile Walls</li>
                    <li>BEDROOM FEATURES: Main Floor Bedroom, Master Suite, Walk-In Closet</li>
                    <li>DINING AREA: Living/Dining Combo</li>
                    <li>DOORS & WINDOWS: Bay Window</li>
                    <li>ENTRY LOCATION: Ground Level - no steps</li>
                    <li>EXTERIOR CONSTRUCTION: Stucco</li>
                    <li>FIREPLACE FUEL: Uses Gas Only</li>
                    <li>FIREPLACE LOCATION: Living Room</li>
                    <li>FLOORS: Ceramic Tile, Vinyl Tile, Wall-to-Wall Carpet</li>
                    <li>HEAT: Forced Air</li>
                </ul>
            </div>

            {/* Features */}
            <div className="mb-12 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Features</h2>
                <div className="flex flex-wrap gap-2 border-t border-gray-300 pt-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-yellow-200 text-yellow-800 py-2 px-4 rounded-lg border border-yellow-300"
                        >
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleHome;
