import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import { getPersonByUserId } from '@/api/person';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      ///
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar user={user} />
      <div className="flex-1 flex items-center justify-center">
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : user ? (
          <div className="bg-white p-6 rounded-lg shadow max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Personal Data</h2>
            <div className="space-y-4">
              <div>
                <label className="text-gray-700 font-semibold">Name:</label>
                <p className="text-gray-600">{user.name || 'N/A'}</p>
              </div>
              <div>
                <label className="text-gray-700 font-semibold">Email:</label>
                <p className="text-gray-600">{user.email || 'N/A'}</p>
              </div>
              <div>
                <label className="text-gray-700 font-semibold">User ID:</label>
                <p className="text-gray-600">{user.userId || 'N/A'}</p>
              </div>
            </div>
            <Button
              className="mt-6 w-full"
              onClick={() => navigate('/dashboard')}
            >
              Back to Dashboard
            </Button>
          </div>
        ) : (
          <p className="text-gray-600">Not logged in</p>
        )}
      </div>
    </div>
  );
};

export default Profile;