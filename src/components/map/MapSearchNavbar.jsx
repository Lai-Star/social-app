import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function MapSearchNavbar() {
  return (
    <nav className="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center relative m-auto w-[70%]">
        <input
          type="text"
          placeholder="Search"
          className="bg-black text-white border border-white p-2 pl-10 pr-4 rounded w-full mr-2"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-3 text-gray-500"
        />
        <button className="mt-2 bg-cyan-500 text-white font-semibold py-1 px-4 rounded-full hover:bg-cyan-700">
          find
        </button>
      </div>
    </nav>
  );
}
