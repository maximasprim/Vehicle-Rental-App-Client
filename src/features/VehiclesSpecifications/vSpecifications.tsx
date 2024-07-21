import React, { useEffect, useState } from 'react';
import {
  useGetVehicleSpecificationsQuery,
  useCreateVehicleSpecificationMutation,
  useUpdateVehicleSpecificationMutation,
  useDeleteVehicleSpecificationMutation,
} from './vSpecificationsApi';
import { Toaster, toast } from 'sonner';
import VehicleSpecificationForm from '../../Components/Add Specification Form';
import ActionButton from '../../Components/Action Button';
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
  const { data, error, isLoading,refetch } = useGetVehicleSpecificationsQuery();
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

  const [selectedSpec, setSelectedSpec] = useState<null | TVehicleSpecification>(null);

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

  const fetchVSpecificationsAndUpdateStorage = async () => {
    try {
      await refetch();
      localStorage.setItem('vehicleSpecifications', JSON.stringify(data));
    } catch (error) {
      console.error('Failed to refetch vehicle specifications:', error);
    }
  };

  useEffect(() => {
    fetchVSpecificationsAndUpdateStorage();
  },[data]);

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

  const handleCardClick = (spec: TVehicleSpecification) => {
    setSelectedSpec(spec);
  };

  const handleBackToList = () => {
    setSelectedSpec(null);
  };

  const getImageForSpec = (model: string) => {
    const imageName = model.toLowerCase();
    const image = images.find(img => img.id.toLowerCase() === imageName);
    return image ? `https://res.cloudinary.com/dcwglllgt/image/upload/${image.id}.jpg` :
      `https://via.placeholder.com/300x200?text=${encodeURIComponent(model)}`;
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
      <div className="min-h-screen bg-gray-800 text-white p-6 h-screen overflow-y-auto">
        <h1 className="text-2xl mb-6">Vehicle Specifications</h1>
        <VehicleSpecificationForm
          formState={formState}
          handleChange={handleChange}
          handleCreate={handleCreate}
        />
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
            <h2 className="text-xl font-bold mb-4 text-center">{selectedSpec.manufacturer} {selectedSpec.model}</h2>
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
            <div className="flex justify-between mt-4">
              <ActionButton
                label="Update"
                onClick={() => handleUpdate(selectedSpec.vehicleSpec_id)}
                color="blue"
              />
              <ActionButton
                label="Delete"
                onClick={() => handleDelete(selectedSpec.vehicleSpec_id)}
                color="red"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data &&
              data.map((spec: TVehicleSpecification) => {
                const imageUrl = getImageForSpec(spec.model);

                return (
                  <div
                    key={spec.vehicleSpec_id}
                    className="bg-gray-700 p-6 rounded-lg shadow-lg cursor-pointer "
                    onClick={() => handleCardClick(spec)}
                  >
                    <img
                      src={imageUrl}
                      alt={`${spec.manufacturer} ${spec.model}`}
                      className="w-full h-48 object-cover mb-4 rounded transition-transform duration-300 ease-in-out"
                    />
                    <h2 className="text-xl font-bold mb-4 text-center">{spec.manufacturer} {spec.model}</h2>
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
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default VehicleSpecifications;
