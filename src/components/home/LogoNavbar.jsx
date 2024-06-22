import React from 'react';

export default function LogoNavbar() {
  return (
    <nav className="w-full bg-gray-700">
      <div className=" px-4">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center space-x-2">
            <img
              src="/img/cawgo_logo.webp"
              alt="Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="text-2xl font-semibold text-white">CawGo</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-white font-semibold py-2 px-4 bg-blue-500 rounded-full hover:bg-blue-700">
              <span>
                <img
                  src="/img/Vector.png"
                  className="h-3 w-3 p-0 rounded-full"
                  alt="Icon"
                />
              </span>
              <span>LOGIN</span>
            </button>
            <button className="text-white font-semibold py-2 px-4 bg-orange-500 rounded-full hover:bg-orange-700">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
