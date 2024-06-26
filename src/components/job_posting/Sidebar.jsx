import React from 'react';

export default function Sidebar() {
  return (
    <div className="md:col-span-1 flex flex-col bg-opacity-75 h-full">
      <div className="flex bg-gray-700 p-3 w-full">
        <img
          loading="lazy"
          srcSet="./../img/text.png"
          className="w-8 h-8 mx-4"
          alt="Feed"
        />
        <h2 className="text-2xl font-bold text-left text-white">Feed</h2>
      </div>
      <div className="w-full bg-gray-900 text-white bg-opacity-50 p-4 text-left flex-1">
        <div className="text-left p-4">
          <p className="bottom-0 left-1/2  border-b-2 border-white">
            n need of a math tutor for high school level. Please reach out if
            interested.In need of a math tutor for high school level. Please
            reach out if interested.In need of a math tutor for high school
            level. Please reach out if interested.In need of a math tutor for
            high school level. In need of a math tutor for high school level.
            Please reach out if interested. In need of a math tutor for high
            school level. Please reach out if interested. In need of a math
            tutor for high school level. Please reach out if interested. In need
            of a math tutor for high school level.In need of a math tutor for
            high school level. Please reach out if interested.In need of a math
            tutor for high school level. Please reach out if interested.
          </p>
        </div>
        <div className="p-5">
          <h2 className="ml-2 text-3xl">Posting Requirement</h2>
          <ul className="mt-8">
            <li className="mb-5 flex text-xl p-2 bottom-0 left-1/2  border-b-2 border-white">
              <img
                loading="lazy"
                srcSet="./../img/time3.png"
                className="w-8 h-8 rounded-full mr-2"
              />
              Time Range
              <span className="ml-auto">2 day</span>
            </li>
            <li className="mb-5 flex text-xl p-2 bottom-0 left-1/2  border-b-2 border-white">
              <img
                loading="lazy"
                srcSet="./../img/location2.png"
                className="w-8 h-8 rounded-full mr-2"
              />
              Location
              <sapn className="ml-auto">Canada</sapn>
            </li>
            <li className="mb-5 flex text-xl p-2 bottom-0 left-1/2  border-b-2 border-white">
              <img
                loading="lazy"
                srcSet="./../img/bonus.png"
                className="w-8 h-8 rounded-full mr-2"
              />
              Bonus
              <span className="ml-auto">150$</span>
            </li>
          </ul>
        </div>
        <div className="p-8">
          <ul className="mt-2 text-xl">
            <li className="p-2">Time Range</li>
            <li className="p-2">Time Range</li>
            <li className="p-2">Time Range</li>
          </ul>
        </div>
        <div>
          <div>
            <h2 className="m-4 text-3xl">Community Member</h2>
            <ul>
              {Array.from({ length: 4 }).map((_, index) => (
                <li key={index} className="mb-2 flex items-center p-4">
                  <img
                    src={`/img/avatars/4.png`}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2 flex flex-col">
                    <span className="font-bold">John Raul</span>
                    <span>Posting for Buying Bicycles Items</span>
                  </div>
                  <div className="ml-auto flex items-center">
                    <span>$100</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
