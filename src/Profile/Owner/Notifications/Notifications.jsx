
import React from 'react';

// Placeholder notifications data
const placeholderNotifications = [
    { id: 1, title: 'New Property Listed', message: 'A new property has been listed in your area.', read: false },
    { id: 2, title: 'Maintenance Reminder', message: 'Your property requires maintenance this week.', read: true },
    { id: 3, title: 'New Request Received', message: 'You have received a new request from a prospective tenant.', read: false },
];

const Notifications = ({ notifications = placeholderNotifications, onMarkAsRead }) => {
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
