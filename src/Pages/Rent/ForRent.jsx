import React from 'react';
import FindYourHome from '../Property/FindYourHome/FindYourHome';
import Rent from './Rent';

const ForRent = () => {
    return (
        <div className="flex  flex-col md:flex-row gap-6 p-6 mt-16">
            <div>
                <FindYourHome />
            </div>
            <div className="flex-1">
                <Rent />
            </div>
        </div>
    );
};

export default ForRent;
