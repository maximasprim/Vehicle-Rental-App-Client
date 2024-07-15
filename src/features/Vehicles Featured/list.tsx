import React from 'react';
import { useGetVehicleSpecificationsQuery } from './listApi';
import { Toaster, toast } from 'sonner';

export interface TVehicleSpecification {
  vehicleSpec_id: number;
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

const VehicleSpecification: React.FC = () => {
  const { data, error, isLoading } = useGetVehicleSpecificationsQuery();

  const handleBooking = (vehicleSpec_id: number) => {
    toast.success('Booking started for vehicle ID ' + vehicleSpec_id);
    // Add booking logic here
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
        <h1 className="text-2xl mb-6">Available Vehicles</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading data</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data &&
              data.map((spec: TVehicleSpecification) => (
                <div key={spec.vehicleSpec_id} className="bg-gray-700 p-4 rounded">
                  <img
                    src={`https://via.placeholder.com/150?text=${spec.manufacturer} ${spec.model}`}
                    alt={`${spec.manufacturer} ${spec.model}`}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h2 className="text-xl mb-2">{spec.manufacturer} {spec.model}</h2>
                  <p>Year: {spec.year}</p>
                  <p>Fuel Type: {spec.fuel_type}</p>
                  <p>Engine Capacity: {spec.engine_capacity}</p>
                  <p>Transmission: {spec.transmission}</p>
                  <p>Seating Capacity: {spec.seating_capacity}</p>
                  <p>Color: {spec.color}</p>
                  <p>Features: {spec.features}</p>
                  <button
                    onClick={() => handleBooking(spec.vehicleSpec_id)}
                    className="mt-4 p-2 bg-green-500 rounded hover:bg-green-600 transition duration-300"
                  >
                    Book Now
                  </button>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default VehicleSpecification;
