// src/features/vehicles/Vehicles.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../app/Store';
import { fetchVehicles, updateVehicle as updateVehicleLocal, deleteVehicle as deleteVehicleLocal } from './VehiclesSlice';
import { useAddVehicleMutation, useUpdateVehicleMutation, useDeleteVehicleMutation } from './VehiclesApi';
import { Vehicle } from './VehiclesApi';

const VehiclesList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const vehicles = useSelector((state: RootState) => state.vehicles.vehicles);
  const loading = useSelector((state: RootState) => state.vehicles.loading);
  const error = useSelector((state: RootState) => state.vehicles.error);

  const initialVehicleState = { id: 0, make: '', model: '', year: 0, registrationNumber: '', status: 'available' };
  const [newVehicle, setNewVehicle] = useState<Partial<Vehicle>>(initialVehicleState);
  const [addVehicle] = useAddVehicleMutation();
  const [editMode, setEditMode] = useState(false);
  const [updateVehicle] = useUpdateVehicleMutation();
  const [deleteVehicle] = useDeleteVehicleMutation();

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  const handleAddVehicle = async () => {
    try {
      console.log("Adding vehicle:", newVehicle);
      await addVehicle(newVehicle).unwrap();
      dispatch(fetchVehicles());
      setNewVehicle(initialVehicleState); // Reset the form after adding vehicle
    } catch (err) {
      console.error('Failed to add vehicle:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewVehicle((prevVehicle) => ({ ...prevVehicle, [name]: value }));
  };

  const handleUpdateVehicle = async () => {
    try {
      if (!newVehicle.id) {
        console.error('No vehicle ID found for update.');
        return;
      }
      console.log("Updating vehicle:", newVehicle);
      const updatedVehicle = await updateVehicle(newVehicle).unwrap();
      dispatch(updateVehicleLocal(updatedVehicle));
      setNewVehicle(initialVehicleState);
      setEditMode(false);
      console.log("Vehicle updated successfully:", updatedVehicle);
    } catch (error) {
      console.error('Failed to update vehicle:', error);
    }
  };

  const handleEditVehicle = (vehicle: Vehicle) => {
    console.log("Editing vehicle:", vehicle);
    setNewVehicle(vehicle);
    setEditMode(true);
  };
  

  const handleDeleteVehicle = async (id: number) => {
    try {
      console.log("Deleting vehicle with ID:", id);
      await deleteVehicle(id).unwrap();
      dispatch(deleteVehicleLocal(id));
    } catch (err) {
      console.error('Failed to delete vehicle:', err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vehicles List</h1>
      <div className="mb-4">
        <h2 className="text-xl font-bold">{editMode ? 'Edit Vehicle' : 'Add Vehicle'}</h2>
        <input
          type="text"
          name="rental_rate"
          value={newVehicle.rental_rate}
          onChange={handleInputChange}
          placeholder="Rental Rate"
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        
        
        <select
          name="status"
          value={newVehicle.availability ? "available" : "unavailable"}
          onChange={handleInputChange}
          className="mr-2 p-2 border border-gray-300 rounded"
        >
          <option value="available">true</option>
          <option value="unavailable">false</option>
        </select>
        <button
          onClick={editMode ? handleUpdateVehicle : handleAddVehicle}
          className="p-2 bg-blue-500 text-white rounded"
        >
          {editMode ? 'Update' : 'Add'}
        </button>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Rental_rate</th>
            
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={vehicle.id}>
              <td>{index + 1}</td>
              <td>{vehicle.rental_rate}</td>
              <td>{vehicle.availability}</td>
              <td>
                <button onClick={() => handleEditVehicle(vehicle)} className="mr-2 p-2 bg-yellow-500 text-white rounded">Edit</button>
                <button onClick={() => handleDeleteVehicle(vehicle.id)} className="p-2 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehiclesList;
