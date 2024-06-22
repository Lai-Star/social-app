import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function MapSidebar() {
  return (
    <div className="hide-scrollbar absolute bg-opacity-95 top-0 ml-[300px] w-2/7 bg-black overflow-y-scroll z-10 text-white">
      <div className="mb-0">
        <div className="mb-4 flex items-center bg-white p-4 rounded shadow">
          <img
            src="/img/girl.JFIF"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-2 flex flex-col">
            <span className="text-black font-bold">John Raul</span>
            <span className="text-black">
              Posting for Buying Bicycles Items
            </span>
          </div>
          <div className="ml-auto">
            <FontAwesomeIcon
              icon={faMicrophone}
              className="w-6 h-6 text-black mr-2"
            />
            <FontAwesomeIcon icon={faVideo} className="w-6 h-6 text-black" />
          </div>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-800 text-white p-2 rounded w-full mb-4"
        />
        <div className="mb-4 p-4">
          <span className="font-bold">Community Member List</span>
          <span className="float-right">Min:$100, Max: 150</span>
        </div>
        <ul>
          {Array.from({ length: 8 }).map((_, index) => (
            <li key={index} className="mb-2 flex items-center bg-gray-800 p-4">
              <img
                src={`/img/girl.JFIF`}
                alt="Avatar"
                className="w-12 h-10 rounded-full"
              />
              <div className="ml-2 flex flex-col">
                <span className="font-bold">John Raul</span>
                <span>Posting for Buying Bicycles Items</span>
              </div>
              <div className="ml-auto flex items-center">
                <FontAwesomeIcon icon={faMicrophone} className="w-6 h-6 mr-3" />
                <FontAwesomeIcon icon={faVideo} className="w-6 h-6 mr-3" />
                <span>$100</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
