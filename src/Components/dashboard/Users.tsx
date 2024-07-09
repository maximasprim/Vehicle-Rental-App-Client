import React from 'react';
import { useFetchUsersQuery } from '../../features/Users/userapi'

export default function Users() {
  const { data: users, error, isLoading } = useFetchUsersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.toString()}</p>;

  return (
    <div className="overflow-x-auto text-base-content bg-base-100 rounded-lg">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Company</th>
            <th>Location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user.id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.job}</td>
              <td>{user.company}</td>
              <td>{user.location}</td>
              <td>{user.lastLogin}</td>
              <td>{user.favoriteColor}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Company</th>
            <th>Location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
