import { Button } from '@/components/ui/button';

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; // Simple redirect to home
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Welcome to your dashboard! This is a placeholder for your family tree app.
        </p>
        <Button onClick={handleLogout} className="mt-4 bg-red-600 hover:bg-red-700 text-white">
          Logout
        </Button>
      </main>
    </div>
  );
}

export default Dashboard;