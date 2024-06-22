import React from 'react';

export default function ProfileHeader() {
  return (
    <div className="relative bg-black text-white p-1 w-[90%] rounded-lg m-auto">
      <img
        src="/img/girl.JFIF"
        alt="Profile"
        className="w-[100%] object-cover m-auto rounded-t-lg"
      />
      <div className="absolute bottom-[100px] left-20 bg-black bg-opacity-75 p-7 rounded-lg">
        <h2 className="text-3xl font-bold text-shadow-md">John Raul</h2>
        <div className="flex justify-center mt-2">
          <button className="bg-blue-500 text-white px-5 py-2 rounded">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
