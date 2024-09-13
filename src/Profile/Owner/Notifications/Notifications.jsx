// src/components/Notifications.js
import React from 'react';

const Notifications = ({ notifications, onMarkAsRead }) => {
    return (
        <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
            <div>
                {notifications.length === 0 ? (
                    <p>No notifications.</p>
                ) : (
                    <ul>
                        {notifications.map(notification => (
                            <li
                                key={notification.id}
                                onClick={() => onMarkAsRead(notification.id)}
                                className={`p-4 mb-2 rounded-lg cursor-pointer ${notification.read ? 'bg-gray-200' : 'bg-red-200'}`}
                            >
                                <h3 className="text-lg font-semibold text-gray-800">{notification.title}</h3>
                                <p>{notification.message}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Notifications;
