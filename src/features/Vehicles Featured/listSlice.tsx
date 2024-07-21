import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetVehicleSpecificationsQuery } from '../VehiclesSpecifications/vSpecificationsApi';
import { Toaster, toast } from 'sonner';
import { images } from '../../Components/Cloudinary/cloudinary';

export interface TVehicleSpecification {
  vehicleSpec_id: number;
  vehicle_id: number;
  manufacturer: string;
  model: string;
  year: number;
  fuel_type: string;
  engine_capacity: string;
  transmission: string;
  seating_capacity: number;
  color: string;
  features: string;
}

const VehicleSpecifications: React.FC = () => {
  const { data, error, isLoading } = useGetVehicleSpecificationsQuery();
  const navigate = useNavigate();

  const [selectedSpec, setSelectedSpec] = useState<null | TVehicleSpecification>(null);

  const handleBooking = (vehicleSpec_id: number) => {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      navigate(`/bookingForm?vehicleSpec_id=${vehicleSpec_id}`);
    } else {
      toast.error('Please log in to book a vehicle');
      navigate('/login');
    }
  };

  const handleCardClick = (spec: TVehicleSpecification) => {
    setSelectedSpec(spec);
  };

  const handleBackToList = () => {
    setSelectedSpec(null);
  };

  const getImageForSpec = (model: string) => {
    const imageName = model.toLowerCase();
    const image = images.find(img => img.id.toLowerCase() === imageName);
    return image
      ? `https://res.cloudinary.com/dcwglllgt/image/upload/${image.id}.jpg`
      : `https://via.placeholder.com/300x200?text=${encodeURIComponent(model)}`;
  };

  return (
    <>
      <Toaster
        toastOptions={{
          classNames: {
            error: 'bg-red-400',
            success: 'text-green-400',
            warning: 'text-yellow-400',
            info: 'bg-blue-400',
          },
        }}
      />
      <div className="min-h-screen bg-gray-800 text-white p-6">
        <h1 className="text-6xl text-orange-300 mb-6">Available Vehicles</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading data</p>
        ) : selectedSpec ? (
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <button
              onClick={handleBackToList}
              className="mb-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition duration-300"
            >
              Back to List
            </button>
            <img
              src={getImageForSpec(selectedSpec.model)}
              alt={`${selectedSpec.manufacturer} ${selectedSpec.model}`}
              className="w-full h-96 object-cover mb-4 rounded transition-transform duration-300 ease-in-out"
            />
            <h2 className="text-xl font-bold mb-4 text-center">
              {selectedSpec.manufacturer} {selectedSpec.model}
            </h2>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Vehicle ID:</span>
                <span className="text-green-300">{selectedSpec.vehicle_id}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Year:</span>
                <span className="text-green-300">{selectedSpec.year}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Fuel Type:</span>
                <span className="text-green-300">{selectedSpec.fuel_type}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Engine Capacity:</span>
                <span className="text-green-300">{selectedSpec.engine_capacity}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Transmission:</span>
                <span className="text-green-300">{selectedSpec.transmission}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Seating Capacity:</span>
                <span className="text-green-300">{selectedSpec.seating_capacity}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Color:</span>
                <span className="text-green-300">{selectedSpec.color}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Features:</span>
                <span className="text-green-300">{selectedSpec.features}</span>
              </div>
            </div>
            <button
              onClick={() => handleBooking(selectedSpec.vehicleSpec_id)}
              className="mt-4 p-2 w-full bg-green-500 rounded hover:bg-green-600 transition duration-300"
            >
              Book Now
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data &&
              data.map((spec: TVehicleSpecification) => (
                <div
                  key={spec.vehicleSpec_id}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleCardClick(spec)}
                >
                  <img
                    src={getImageForSpec(spec.model)}
                    alt={`${spec.manufacturer} ${spec.model}`}
                    className="w-full h-48 object-cover mb-4 rounded transition-transform duration-300 ease-in-out"
                  />
                  <h2 className="text-xl font-bold mb-4 text-center">
                    {spec.manufacturer} {spec.model}
                  </h2>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Vehicle ID:</span>
                      <span className="text-green-300">{spec.vehicle_id}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Year:</span>
                      <span className="text-green-300">{spec.year}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Fuel Type:</span>
                      <span className="text-green-300">{spec.fuel_type}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Engine Capacity:</span>
                      <span className="text-green-300">{spec.engine_capacity}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Transmission:</span>
                      <span className="text-green-300">{spec.transmission}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Seating Capacity:</span>
                      <span className="text-green-300">{spec.seating_capacity}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Color:</span>
                      <span className="text-green-300">{spec.color}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold">Features:</span>
                      <span className="text-green-300">{spec.features}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default VehicleSpecifications;
