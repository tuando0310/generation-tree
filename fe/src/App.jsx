import { Button } from '@/components/ui/button';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Generation Tree</h1>
          </div>
          {/* Right-side buttons */}
          <div className="flex space-x-4">
            <Button variant="outline" className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
              Sign Up
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to Generation Tree</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          This is a placeholder for your home page content. Start building your app here!
        </p>
      </main>
    </div>
  );
}

export default App;