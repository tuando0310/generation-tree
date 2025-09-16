import Navbar from '@/components/layout/Navbar';

function Home() {
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

export default Home;