import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to Generation Tree</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              This is a placeholder for your home page content. Start building your app here!
            </p>
          </main>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;