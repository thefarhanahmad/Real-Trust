import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScheduleForm = () => {
  const [propertyName, setPropertyName] = useState('Villa on Grand Avenue');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [visitType, setVisitType] = useState('Bachelors Girl'); // Default value for visit type
  const [companyName, setCompanyName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Store values in localStorage
    localStorage.setItem('propertyName', propertyName);
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('visitType', visitType);
    localStorage.setItem('companyName', companyName);

    // Navigate to the confirmation page
    navigate('/scheduleconfirmation');
  };

  return (
    <div className="w-full mt-20 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-black text-center mb-6">Schedule a Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="property-name" className="block text-black mb-2">Property Name:</label>
          <select 
            id="property-name" 
            name="property-name" 
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            required 
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="Villa on Grand Avenue">Villa on Grand Avenue</option>
            <option value="Villa on Hollywood Boulevard">Villa on Hollywood Boulevard</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="full-name" className="block text-black mb-2">Full Name:</label>
          <input 
            type="text" 
            id="full-name" 
            name="full-name" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required 
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="visit-type" className="block text-black mb-2">Visit Type:</label>
          <select 
            id="visit-type" 
            name="visit-type" 
            value={visitType}
            onChange={(e) => setVisitType(e.target.value)}
            required 
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="Bachelors Girl">Bachelors Girl</option>
            <option value="Bachelors Boy">Bachelors Boy</option>
            <option value="Family">Family</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="company-name" className="block text-black mb-2">Company Name:</label>
          <input 
            type="text" 
            id="company-name" 
            name="company-name" 
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required 
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Schedule a Visit
        </button>
      </form>
    </div>
  );
};

export default ScheduleForm;
