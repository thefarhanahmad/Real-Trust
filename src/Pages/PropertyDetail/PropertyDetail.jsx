import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div className="container mx-auto p-6 mt-12 lg:p-12">
      {/* Main Property Image Display */}
      <div className="mb-12">
        <img
          src={property.images && property.images.length > 0 ?
            `https://realtrust.techizebuilder.in/api/properties/${property.images[0]}` :
            placeholderImage}
          alt={property.title}
          className="w-full h-[400px] object-cover rounded-xl shadow-1xl border border-gray-200"
          onError={(e) => (e.target.src = placeholderImage)} // Fallback to placeholder image on error
        />
      </div>

      {/* Placeholder Images Section */}
      <div className="mb-12">
        
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-gray-100  rounded-lg border border-gray-300">
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
      <div className="mb-12 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{property.title}</h1>
        <p className="text-3xl font-semibold text-orange-500 mb-6">
          ₹{property.price.toLocaleString('en-IN')}
        </p>
        <p className="text-lg font-bold mb-6 text-black">Type: {capitalizeFirstLetter(property.type)}</p>
        <p className="text-lg mb-6 text-gray-700">
          Location: {property.address}, {property.city}
        </p>
        <p className="text-lg mb-6 text-gray-700">
          {property.bedroom} Bedrooms | {property.bathroom} Bathrooms | {property.area} sq ft
        </p>
        <p className="text-lg mb-6 text-gray-700">
          Status: {capitalizeFirstLetter(property.purpose)}
        </p>
        <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: property.description }}></p>
      </div>

      {/* Features - Only show if features exist */}
      {property.features && property.features.length > 0 && (
        <div className="mb-12 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Features</h2>
          <div className="flex flex-wrap gap-2 border-t border-gray-300 pt-4">
            {property.features.map((feature, index) => (
              <div key={index} className="bg-orange-200 text-orange-800 py-2 px-4 rounded-lg border border-orange-300">
                {feature}
              </div>
            ))}
          </div>
        </div>
      )}


    </div>
  );
};

// Function to capitalize the first letter
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default PropertyDetail;
