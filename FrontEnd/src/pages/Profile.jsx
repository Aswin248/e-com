// src/pages/Profile.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/users');
        setUsers(res.data);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('❌ Could not load users.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>All User Profiles</h2>

        {loading && <p>Loading users...</p>}
        {error && <p className="text-danger">{error}</p>}

        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-md-4">
              <div className="card p-3 m-2 shadow-sm">
                <h4>{user.name}</h4>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phoneNum}</p>
                <p><strong>Password:</strong> {user.password}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
