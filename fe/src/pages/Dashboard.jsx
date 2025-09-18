import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { getPersonByUserId } from '@/api/person';

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
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : user ? (
        <div className="text-center">
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src={user.avatarUrl || ''} alt="User avatar" />
            <AvatarFallback className="text-4xl">
              {user.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <h2 className="mt-4 text-xl font-semibold text-gray-700">
            {user.name || user.email}
          </h2>
          <p className="text-gray-500">Start your family tree here</p>
        </div>
      ) : (
        <p className="text-gray-600">Not logged in</p>
      )}
    </div>
    </div>
  );
}

export default Dashboard;