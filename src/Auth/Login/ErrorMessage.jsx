import React from 'react';

const ErrorMessage = ({ message }) => (
  message ? (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
      <strong className="font-bold">Error ! </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  ) : null
);

export default ErrorMessage;
