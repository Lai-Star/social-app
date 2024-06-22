import React from 'react';

export default function ActivitiesSection() {
  return (
    <div className="bg-gray-100 relative rounded-lg shadow-md w-[72%] m-auto">
      <h2 className="text-xl font-bold mb-12 bg-gray-400 p-2 rounded-lg text-center">
        Activities
      </h2>
      <div className="absolute top-12 left-4 flex items-center">
        <img
          src="/img/avatar.JFIF"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className=" mb-4">
        <img
          src="/img/house2.JFIF"
          alt="Activity"
          className="w-[82%] m-auto rounded-lg"
        />
      </div>
      <div className="flex justify-around text-center">
        <div>
          <i className="fas fa-star text-blue-500"></i>
          <p className="mt-1">100</p>
        </div>
        <div>
          <i className="fas fa-star text-blue-500"></i>
          <p className="mt-1">100</p>
        </div>
        <div>
          <i className="fas fa-star text-blue-500"></i>
          <p className="mt-1">100</p>
        </div>
        <div>
          <i className="fas fa-star text-gray-500"></i>
          <p className="mt-1">100</p>
        </div>
      </div>
    </div>
  );
}
