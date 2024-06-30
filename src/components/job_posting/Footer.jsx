import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="w-full grid grid-cols-3 h-full md:grid-cols-3 flex justify-between items-center bg-gray-900 text-white">
      <div className="flex items-center md:col-span-1 m-8">
        <img
          src="./../img/avatars/8.png" // Replace with the actual path to the profile image
          alt="Poster"
          className="w-20 h-20 mr-4"
        />
        <div>
          <h3 className="text-lg font-bold">Poster Name</h3>
          <p className="text-gray-400">Poster Information</p>
        </div>
      </div>
      <div className="md:col-span-2 h-full flex items-center justify-around space-x-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="text-center">
          <h4 className="text-lg">Profile</h4>
          <Link to="/profile" target="_blank" className="link hover:underline">
            <p className="text-gray-400">view details</p>
          </Link>
        </div>
        <div className="text-center">
          <h4 className="text-lg">Follow</h4>
          <p className="text-gray-400">98</p>
        </div>
        <div className="text-center">
          <h4 className="text-lg">Connect</h4>
          <p className="text-gray-400">78</p>
          {/* Add icon or additional details as needed */}
        </div>
      </div>
    </div>
  );
}
