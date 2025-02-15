import React from 'react';
import { Hash, LogOut, Settings, Users } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

export const Sidebar = () => {
  const { signOut } = useAuthStore();

  const channels = [
    { id: 1, name: 'general' },
    { id: 2, name: 'random' },
    { id: 3, name: 'help' },
  ];

  return (
    <div className="w-64 bg-gray-900 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-white font-bold text-xl">Discord Clone</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="px-2 py-4">
          <div className="text-gray-400 flex items-center px-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Channels</span>
          </div>
          
          {channels.map((channel) => (
            <button
              key={channel.id}
              className="flex items-center text-gray-400 hover:text-gray-200 hover:bg-gray-800 px-2 py-1 rounded w-full"
            >
              <Hash className="w-4 h-4 mr-2" />
              {channel.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-700" />
            <span className="text-gray-300 text-sm">Username</span>
          </div>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-gray-200">
              <Settings className="w-5 h-5" />
            </button>
            <button 
              className="text-gray-400 hover:text-gray-200"
              onClick={() => signOut()}
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};