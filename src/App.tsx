import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/useAuthStore';
import { Auth } from './components/Auth';
import { Sidebar } from './components/Sidebar';
import { Chat } from './components/Chat';

function App() {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <Auth />
        <Toaster />
      </>
    );
  }

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <Chat />
      </div>
      <Toaster />
    </>
  );
}

export default App;