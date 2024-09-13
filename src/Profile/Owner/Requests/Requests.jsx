// src/components/Requests.js
import React from 'react';

const Requests = ({ requestHistory }) => {
    return (
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Request History</h2>
            <ul>
                {requestHistory.map((request) => (
                    <li key={request.id} className="border-b border-gray-300 py-2">
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-800">{request.type}</span>
                            <span className="text-gray-600">{request.date}</span>
                        </div>
                        <div className="text-gray-700">{request.status}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Requests;
