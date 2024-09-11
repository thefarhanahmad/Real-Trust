import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaBed, FaShower, FaVectorSquare, FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope, FaLine } from 'react-icons/fa'; // Imported new icons

const placeholderImage = 'https://via.placeholder.com/400'; // Placeholder image URL

const PropertyDetail = () => {
  const { slug } = useParams(); // Extract slug from URL

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get('https://realtrust.techizebuilder.in/api/properties');
        const properties = response.data.properties;

        // Find the property with the matching slug
        const matchedProperty = properties.find(prop => prop.slug === slug);
        if (matchedProperty) {
          setProperty(matchedProperty);
        } else {
          setError('Property not found');
        }
      } catch (error) {
        setError('Error fetching property details');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [slug]);

  if (loading) {
    return <div className="text-center text-gray-800">Loading property details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="w-full p-4 mt-12 lg:p-12"> {/* Changed container to full width */}
      {/* Main Container with Shadow and Border */}
      <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-full"> {/* Ensure this div is full width */}

        {/* Main Property Image Display */}
        <div className="relative mb-2 p-6">
          <img
            src={property.images && property.images.length > 0 ?
              `https://realtrust.techizebuilder.in/api/properties/${property.images[0]}` :
              placeholderImage}
            alt={property.title}
            className="w-full h-[400px] object-cover rounded-lg border border-gray-200"
            onError={(e) => (e.target.src = placeholderImage)} // Fallback to placeholder image on error
          />
        </div>

        {/* Placeholder Images Section */}
        <div className="mb-6 px-6">
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg border border-gray-300">
                <img
                  src={placeholderImage}
                  alt={`Placeholder ${index + 1}`}
                  className="w-full h-[120px] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="mb-12 ">
          {/* Header Row: Title, Price, Type, and Purpose */}
          <div className="flex justify-between items-center mb-6 bg-gray-300">
            {/* Title */}
            <h1 className="text-md text-gray-900 px-3" style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>
              {property.title}
            </h1>

            {/* Right Side: Price, Type, and Purpose */}
            <div className="flex items-center space-x-0">
              {/* Purpose Button */}
              <button className="bg-[#181818] font-semibold text-white px-6 py-2 text-lg">
                {capitalizeFirstLetter(property.purpose)}
              </button>
              {/* Price and Type */}
              <div className="flex items-center py-1 bg-[#54caee] text-white px-4">
                <span className="text-lg font-semibold">₹{property.price.toLocaleString('en-IN')}</span>
                <span className="mx-1 " style={{ fontSize: '24px' }}>-</span>
                <span className="text-md ">{capitalizeFirstLetter(property.type)}</span>
              </div>
            </div>
          </div>

          {/* Bedroom, Bathroom, Area Row */}
          <div className="flex items-center space-x-8 m-6 mb-4 bg-gray-100 text-gray-700 border border-gray-300 p-2 px-6" style={{ fontSize: '16px' }}>
            <div className="flex items-center">
              <FaBed className="mr-2" />
              <span>{property.bedroom} Bedrooms</span>
            </div>
            <div className="flex items-center">
              <FaShower className="mr-2" />
              <span>{property.bathroom} Bathrooms</span>
            </div>
            <div className="flex items-center">
              <FaVectorSquare className="mr-2" />
              <span>{property.area} sq ft</span>
            </div>
          </div>

          {/* Location */}
          <p className="text-md mb-4 px-6 text-gray-700">
            Location: {property.address}, {property.city}
          </p>

          {/* Description */}
          <p className="text-gray-600 px-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: property.description }}></p>
        </div>

        {/* Additional Details */}
        <div className="mb-12 px-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Additional Details</h2>
          <div className="space-y-2 items-center text-md"> {/* Removed space-y to avoid gaps between borders */}
            {/* Add a top border only to every item except the first */}
            <p className="px-4 py-2 hover:bg-gray-100 border-t border-gray-300">APPLIANCES: Built-In & Freestanding Range, Dishwasher</p>
            <p className="px-4 py-2 hover:bg-gray-100 border-t border-gray-300">BATHROOM DESCRIPTION: Shower Over Tub, Tile Walls</p>
            <p className="px-4 py-2 hover:bg-gray-100 border-t border-gray-300">BEDROOM FEATURES: Main Floor Bedroom, Master Suite, Walk-In Closet</p>
            <p className="px-4 py-2 hover:bg-gray-100 border-t border-gray-300">DINING AREA: Living/Dining Combo</p>
            <p className="px-4 py-2 hover:bg-gray-100 border-t border-gray-300">DOORS & WINDOWS: Bay Window</p>
            <p className="px-4 py-2 hover:bg-gray-100 border-t border-gray-300">ENTRY LOCATION: Ground Level - no steps</p>
            <p className="px-4 py-2 hover:bg-gray-100 border-t border-gray-300">EXTERIOR CONSTRUCTION: Stucco</p>
            <p className="px-4 py-2 hover:bg-gray-100 border-t border-gray-300">FIREPLACE FUEL: Uses Gas Only</p>
            <p className="px-4 py-2 hover:bg-gray-100 border-t border-gray-300">FIREPLACE LOCATION: Living Room</p>
            <p className="px-4 py-2 hover:bg-gray-100 border-t border-gray-300">FLOORS: Ceramic Tile, Vinyl Tile, Wall-to-Wall Carpet</p>
          </div>
        </div>

        {/* Property Map */}
        <div className="w-full mb-6 px-6 ">
          <span className="inline-flex items-center justify-center text-[18px] font-semibold text-white px-6 py-1 bg-gray-600">
            Property Map
          </span>

          <div className="relative h-[400px]">
            <iframe
              title="Property Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.497007253567!2d77.5954885!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1662e4a5b943%3A0x7b8a08ad989f7641!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1694045802349!5m2!1sen!2sin"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        {/* Share This Section */}
        <div className="bg-gray-200 m-6 mb-12">
          <div className="flex space-x-8 items-center">
            <p className='bg-gray-600 font-bold text-white px-4 py-3'>Share this</p>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-800 border-r border-gray-300 pr-4">
              <FaFacebookF size={20} className="text-gray-600 mr-2" />
              <span className='hover:text-orange-500'>Facebook</span>
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-800 border-r border-gray-300 pr-4">
              <FaTwitter size={22} className="text-gray-600 mr-2" />
              <span className='hover:text-orange-500'>Twitter</span>
            </a>
            <a href={`https://wa.me/?text=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-800 border-r border-gray-300 pr-4">
              <FaWhatsapp size={22} className="text-gray-600 mr-2" />
              <span className='hover:text-orange-500'>WhatsApp</span>
            </a>
            <a href={`mailto:?subject=Check this property&body=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-800 border-r border-gray-300 pr-4">
              <FaEnvelope size={22} className="text-gray-600 mr-2" />
              <span className='hover:text-orange-500'>Email</span>
            </a>
            <a href={`https://line.me/R/msg/text/?${window.location.href}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-800">
              <FaLine size={22} className="text-gray-600 mr-2" />
              <span className='hover:text-orange-500'>Line</span>
            </a>
          </div>
        </div>



        {/* Features - Only show if features exist */}
        {property.features && property.features.length > 0 && (
          <div className="mb-12 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Features</h2>
            <div className="flex flex-wrap gap-2 border-t border-gray-300 pt-4">
              {property.features.map((feature, index) => (
                <div key={index} className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default PropertyDetail;
