import React, { useState } from 'react';
import {
  useGetVehicleSpecificationsQuery,
  useCreateVehicleSpecificationMutation,
  useUpdateVehicleSpecificationMutation,
  useDeleteVehicleSpecificationMutation,
} from './vSpecificationsApi';
import { Toaster, toast } from 'sonner';

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
  const [createVehicleSpecification] = useCreateVehicleSpecificationMutation();
  const [updateVehicleSpecification] = useUpdateVehicleSpecificationMutation();
  const [deleteVehicleSpecification, { data: deleteMsg }] = useDeleteVehicleSpecificationMutation();

  const [formState, setFormState] = useState<Partial<TVehicleSpecification>>({
    vehicle_id: 0,
    manufacturer: '',
    model: '',
    year: 0,
    fuel_type: '',
    engine_capacity: '',
    transmission: '',
    seating_capacity: 0,
    color: '',
    features: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = async () => {
    await createVehicleSpecification(formState);
    toast.success('Vehicle specification added successfully');
    setFormState({
      vehicle_id: 0,
      manufacturer: '',
      model: '',
      year: 0,
      fuel_type: '',
      engine_capacity: '',
      transmission: '',
      seating_capacity: 0,
      color: '',
      features: '',
    });
  };

  const handleUpdate = (vehicleSpec_id: number) => {
    const updateVehicleData = {
      ...formState,
      vehicleSpec_id,
    };
    updateVehicleSpecification(updateVehicleData);
    toast.success('Vehicle specification updated successfully');
  };

  const handleDelete = async (vehicleSpec_id: number) => {
    await deleteVehicleSpecification(vehicleSpec_id);
    toast.success(deleteMsg?.msg || 'Vehicle specification deleted successfully');
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
        <h1 className="text-2xl mb-6">Vehicle Specifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="number"
            name="vehicle_id"
            placeholder="Vehicle ID"
            value={formState.vehicle_id}
            onChange={handleChange}
            className="p-2 rounded border border-gray-400"
          />
          <input
            type="text"
            name="manufacturer"
            placeholder="Manufacturer"
            value={formState.manufacturer}
            onChange={handleChange}
            className="p-2 rounded border border-gray-400"
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={formState.model}
            onChange={handleChange}
            className="p-2 rounded border border-gray-400"
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={formState.year}
            onChange={handleChange}
            className="p-2 rounded border border-gray-400"
          />
          <input
            type="text"
            name="fuel_type"
            placeholder="Fuel Type"
            value={formState.fuel_type}
            onChange={handleChange}
            className="p-2 rounded border border-gray-400"
          />
          <input
            type="text"
            name="engine_capacity"
            placeholder="Engine Capacity"
            value={formState.engine_capacity}
            onChange={handleChange}
            className="p-2 rounded border border-gray-400"
          />
          <input
            type="text"
            name="transmission"
            placeholder="Transmission"
            value={formState.transmission}
            onChange={handleChange}
            className="p-2 rounded border border-gray-400"
          />
          <input
            type="number"
            name="seating_capacity"
            placeholder="Seating Capacity"
            value={formState.seating_capacity}
            onChange={handleChange}
            className="p-2 rounded border border-gray-400"
          />
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={formState.color}
            onChange={handleChange}
            className="p-2 rounded border border-gray-400"
          />
          <input
            type="text"
            name="features"
            placeholder="Features"
            value={formState.features}
            onChange={handleChange}
            className="p-2 rounded border border-gray-400"
          />
          <button
            onClick={handleCreate}
            className="p-2 rounded bg-green-500 hover:bg-green-600 transition duration-300"
          >
            Add Specification
          </button>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading data</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data &&
              data.map((spec: TVehicleSpecification) => (
                <div key={spec.vehicleSpec_id} className="bg-gray-700 p-4 rounded">
                  <h2 className="text-xl mb-2">{spec.manufacturer} {spec.model}</h2>
                  <p>Vehicle ID: {spec.vehicle_id}</p>
                  <p>Year: {spec.year}</p>
                  <p>Fuel Type: {spec.fuel_type}</p>
                  <p>Engine Capacity: {spec.engine_capacity}</p>
                  <p>Transmission: {spec.transmission}</p>
                  <p>Seating Capacity: {spec.seating_capacity}</p>
                  <p>Color: {spec.color}</p>
                  <p>Features: {spec.features}</p>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => handleUpdate(spec.vehicleSpec_id)}
                      className="p-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(spec.vehicleSpec_id)}
                      className="p-2 bg-red-500 rounded hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
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
