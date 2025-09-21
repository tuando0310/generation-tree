import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import UserDropdown from '../pieces/UserDropdown';

function Navbar({user}) {
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
             <UserDropdown user={user} />
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