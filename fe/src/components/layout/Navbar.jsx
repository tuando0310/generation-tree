import { getPersonByUserId } from '@/api/person';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
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

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear JWT
    setUser(null); // Reset user state
  };
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Generation Tree
            </Link>
          </div>
          {/* Right-side buttons */}
          <div className="flex space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
                    {user.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-gray-900 dark:text-white">{user.name}</span>
                <Button
                  variant="outline"
                  className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button
                  asChild
                  variant="outline"
                  className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/login">Login</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;