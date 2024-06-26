import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function FeedPart() {
    return (
      <div className="md:col-span-2 flex flex-col bg-opacity-75 bg-white">
        <nav className="w-full bg-gray-900 text-white p-2 flex justify-between items-center">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold">CawGo</h1>
            </div>
            <div className="flex items-center relative ml-auto">
              <input type="text" placeholder="Search" className="bg-white text-black p-2 pl-10 pr-4 rounded w-30" />
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-500" />
            </div>
        </nav>
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 gap-1">
            <div className="relative bg-gray-900 text-white">
             <img
                src="./../img/bicycle2.jfif"
                alt="Item"
                className="w-full h-64 object-cover"
              />
              <div className=" w-full p-4 bg-black bg-opacity-75">
                <h2 className="text-xl font-bold">Item for Sale: Bicycle</h2>
                <p className="h-[80px]">
                  In need of a math tutor for high school level. Please reach out if
                  interested...
                  In need of a math tutor for high school level. Please reach out if
                 
                </p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Comment</button>
              </div>
            </div>
            <div className="relative bg-gray-900 text-white">
             <img
                src="./../img/bicycle.jpg"
                alt="Item"
                className="w-full h-64 object-cover"
              />
              <div className=" w-full p-4 bg-black bg-opacity-75">
                <h2 className="text-xl font-bold">Item for Sale: Bicycle</h2>
                <p className="h-[80px]">
                  In need of a math tutor for high school level. Please reach out if
                  interested...
                  In need of a math tutor for high school level. Please reach out if
                </p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Comment</button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4 text-left shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-2xl font-bold">Item for Sale: Bicycle</h2>
          </div>
          <div className="relative">
            <img
              src="./../img/bicycle3.jpg"
              alt="Item"
              className="w-full h-[500px] object-cover"
            />
          </div>
            <div className="p-4">
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-2xl font-bold">Item for Sale: Bicycle</h2>
                <span className="text-2xl font-bold">$150</span>
              </div>
              <p className="text-gray-700 mt-4">
                In need of a math tutor for high school level. Please reach out if interested. In need of a math tutor for high school level. Please reach out if interested. In need of a math tutor for high school level. Please reach out if interested. In need of a math tutor for high school level. Please reach out if interested. In need of a math tutor for high school level. Please reach out if interested. In need of a math tutor for high school level. Please reach out if interested. In need of a math tutor for high school level. Please reach out if interested.
              </p>
              <div className="flex mt-4 space-x-4">
                <button className="bg-orange-500 text-white px-4 py-2 rounded">Comment</button>
              </div>
            </div>
      </div>
    </div>
    )
}