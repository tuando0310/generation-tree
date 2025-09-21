import Navbar from '@/components/layout/Navbar';
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';
import { getPersonByUserId } from '@/api/person';
import UserNode from '@/components/pieces/UserNode';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          const userId = decoded.userId;
          console.log(userId);
          const personData = await getPersonByUserId(userId);
          setUser({
            name: personData.name || 'User', 
            email: personData.email || '',
            image: personData.image || null 
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
          localStorage.removeItem('token'); 
        }
      }
      setLoading(false);
    };
    fetchUserData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar user = {user}/>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : user ? (
        <UserNode user={user} />
      ) : (
        <p className="text-gray-600">Not logged in</p>
      )}
    </div>
    </div>
  );
}

export default Dashboard;