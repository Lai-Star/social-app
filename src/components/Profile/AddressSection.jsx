import React from 'react';

export default function AddressSection() {
  return (
    <div className="relative bg-gray-100 pb-20 rounded-lg shadow-md w-[90%] ">
      <h2 className="text-xl font-bold mb-2 p-5">Address</h2>
      <div className="flex">
        <img src="/img/address_image.JFIF" alt="Address" className="w-[50%]" />
        <img src="/img/address_image.JFIF" alt="Address" className="w-[50%]" />
        <div className="absolute bottom-1 left-4 flex items-center w-full mx-auto p-4 grid-cols-2 md:grid-cols-2 gap-4">
          <div className="md:col-span-1 flex">
            <img
              src="/img/avatar.JFIF "
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <span className="ml-2 text-black m-auto">John Raul</span>
          </div>
          <div className="md:col-span-1">
            <span className="ml-auto text-gray-400">Follow: 9</span>
          </div>
        </div>
      </div>
    </div>
  );
}
