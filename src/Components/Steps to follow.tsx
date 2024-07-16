import React from 'react';
import { Link } from 'react-router-dom';

interface Step {
  title: string;
  description: string;
  icon?: string;
  route?: string;
}

const steps: Step[] = [
  {
    title: 'Choose Your Car',
    description: 'Browse our wide range of vehicles and choose the one that best suits your needs.',
    icon: '🚗',
    route: '/vehicleslist', // Define the route for the first step
  },
  {
    title: 'Book Online',
    description: 'Reserve your car online with our easy-to-use booking system.',
    icon: '💻',
    route: '/vehicleslist', // Define the route for the second step
  },
  {
    title: 'Pick Up',
    description: 'Visit our location to pick up your vehicle at the scheduled time.',
    icon: '📅',
    route: '/vehicleslist',
  },
  {
    title: 'Drive Away',
    description: 'Enjoy your journey with our well-maintained vehicles.',
    icon: '🛣️',
    route: '/vehicleslist',
  },
  {
    title: 'Return the Car',
    description: 'Bring the car back to our location at the end of your rental period.',
    icon: '🏁',
    route: '/vehicleslist',
  },
];

const EasySteps: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-gray-800 text-white p-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Easy Steps to Rent a Car from Maximus Carbook</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {step.icon && <div className="text-6xl mb-6">{step.icon}</div>}
            <h2 className="text-2xl font-bold mb-4">
              {step.route ? (
                <Link to={step.route} className="hover:text-blue-300">
                  {step.title}
                </Link>
              ) : (
                step.title
              )}
            </h2>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EasySteps;
