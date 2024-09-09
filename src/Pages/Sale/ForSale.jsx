import React from 'react';
import FindYourHome from '../Property/FindYourHome/FindYourHome';
import Sale from './Sale';

const ForSale = () => {
  return (
    <div className="flex  flex-col md:flex-row gap-6 p-6 mt-16">
      <div className="w-full md:w-1/4">
        <FindYourHome />
      </div>
      <div className="w-full md:w-3/4">
        <Sale />
      </div>
    </div>
  );
};

export default ForSale;
