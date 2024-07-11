// src/features/vehicleSpecifications/VehicleSpecifications.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehicleSpecifications, updateVehicleSpecification as updateVehicleSpecificationLocal, deleteVehicleSpecification as deleteVehicleSpecificationLocal } from './vSpecificationsSlice';
import { RootState, AppDispatch } from '../../app/Store';
import { useAddVehicleSpecificationMutation, useUpdateVehicleSpecificationMutation, useDeleteVehicleSpecificationMutation } from './vSpecificationsApi';

const VehicleSpecification: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const vehicleSpecifications = useSelector((state: RootState) => state.vehicleSpecifications.vehicleSpecifications);
  const loading = useSelector((state: RootState) => state.vehicleSpecifications.loading);
  const error = useSelector((state: RootState) => state.vehicleSpecifications.error);

  const initialSpecificationState = { id: 0, vehicleId: 0, key: '', value: '' };
  const [newVehicleSpecification, setNewVehicleSpecification] = useState(initialSpecificationState);
  const [addVehicleSpecification] = useAddVehicleSpecificationMutation();
  const [editMode, setEditMode] = useState(false);
  const [updateVehicleSpecification] = useUpdateVehicleSpecificationMutation();
  const [deleteVehicleSpecification] = useDeleteVehicleSpecificationMutation();

  useEffect(() => {
    dispatch(fetchVehicleSpecifications());
  }, [dispatch]);

  const handleAddVehicleSpecification = async () => {
    try {
      console.log("Adding vehicle specification:", newVehicleSpecification);
      await addVehicleSpecification(newVehicleSpecification).unwrap();
      dispatch(fetchVehicleSpecifications());
      setNewVehicleSpecification(initialSpecificationState); // Reset the form after adding vehicle specification
    } catch (err) {
      console.error('Failed to add vehicle specification:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewVehicleSpecification((prevVehicleSpecification) => ({ ...prevVehicleSpecification, [name]: value }));
  };

  const handleUpdateVehicleSpecification = async () => {
    try {
      if (!newVehicleSpecification.id) {
        console.error('No vehicle specification ID found for update.');
        return;
      }
      console.log("Updating vehicle specification:", newVehicleSpecification);
      const updatedVehicleSpecification = await updateVehicleSpecification(newVehicleSpecification).unwrap();
      dispatch(updateVehicleSpecificationLocal(updatedVehicleSpecification));
      setNewVehicleSpecification(initialSpecificationState);
      setEditMode(false);
      console.log("Vehicle specification updated successfully:", updatedVehicleSpecification);
    } catch (error) {
      console.error('Failed to update vehicle specification:', error);
    }
  };

  const handleEditVehicleSpecification = (vehicleSpecification: any) => {
    console.log("Editing vehicle specification:", vehicleSpecification);
    setNewVehicleSpecification(vehicleSpecification);
    setEditMode(true);
  };

  const handleDeleteVehicleSpecification = async (id: number) => {
    try {
      await deleteVehicleSpecification(id).unwrap();
      dispatch(deleteVehicleSpecificationLocal(id));
    } catch (error) {
      console.error('Failed to delete vehicle specification:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Vehicle Specifications</h2>
      <form onSubmit={(e) => { e.preventDefault(); editMode ? handleUpdateVehicleSpecification() : handleAddVehicleSpecification(); }}>
        <input
          type="text"
          name="manufacturer"
          placeholder="Manufacturer"
          value={newVehicleSpecification.key}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={newVehicleSpecification.value}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={newVehicleSpecification.value}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fuel_type"
          placeholder="Fuel_type"
          value={newVehicleSpecification.value}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="engine_capacity"
          placeholder="Engine_capacity"
          value={newVehicleSpecification.value}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="return_date"
          placeholder="Return_date"
          value={newVehicleSpecification.value}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="total_amount"
          placeholder="Total_amount"
          value={newVehicleSpecification.value}
          onChange={handleInputChange}
        />
        <select
          name="status"
          value={newVehicleSpecification.booking_status ? "available" : "unavailable"}
          onChange={handleInputChange}
          className="mr-2 p-2 border border-gray-300 rounded"
        >
          <option value="available">Available</option>
          <option value="unavailable">UnAvailable</option>
        </select>
        <button type="submit">{editMode ? 'Update' : 'Add'} Specification</button>
      </form>
      <ul>
        {vehicleSpecifications.map((vehicleSpecification) => (
          <li key={vehicleSpecification.id}>
            {vehicleSpecification.key}: {vehicleSpecification.value}
            <button onClick={() => handleEditVehicleSpecification(vehicleSpecification)}>Edit</button>
            <button onClick={() => handleDeleteVehicleSpecification(vehicleSpecification.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleSpecification;
