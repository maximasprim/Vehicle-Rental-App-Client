import React, { useState } from 'react';

interface Notification {
  id: number;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, type: 'success', message: 'Operation was successful!' },
    { id: 2, type: 'error', message: 'There was an error processing your request.' },
    { id: 3, type: 'warning', message: 'Warning! Please check your inputs.' },
    { id: 4, type: 'info', message: 'This is some information for you.' },
  ]);

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`max-w-xs w-full p-10 rounded shadow-lg flex items-start gap-4 transition-transform transform ${
            notification.type === 'success'
              ? 'bg-green-100 text-green-700'
              : notification.type === 'error'
              ? 'bg-red-100 text-red-700'
              : notification.type === 'warning'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-blue-100 text-blue-700'
          }`}
        >
          <div className="flex-1">
            <p className="font-bold capitalize">{notification.type}</p>
            <p>{notification.message}</p>
          </div>
          <button
            onClick={() => removeNotification(notification.id)}
            className="ml-2 text-xl font-bold leading-none text-gray-700 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
