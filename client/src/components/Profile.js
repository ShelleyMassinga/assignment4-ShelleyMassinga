import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    fetch('http://localhost:8080/api/auth/profile', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setUpdatedUser({ name: data.name, email: data.email });
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        navigate('/login');
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8080/api/auth/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(updatedUser)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update profile');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        setEditMode(false);
      })
      .catch(error => console.error('Error updating profile:', error));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-info">
        {editMode ? (
          <>
            <label>
              <strong>Name:</strong>
              <input
                type="text"
                name="name"
                value={updatedUser.name}
                onChange={handleChange}
              />
            </label>
            <label>
              <strong>Email:</strong>
              <input
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleSave} className="save-button">
              Save
            </button>
            <button onClick={handleEditToggle} className="cancel-button">
              Cancel
            </button>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={handleEditToggle} className="edit-button">
              Edit
            </button>
          </>
        )}
      </div>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}

export default Profile;
