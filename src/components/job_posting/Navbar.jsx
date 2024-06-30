import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ setShowFeed }) {
  return (
    <>
      <nav className="w-full grid grid-cols-3 md:grid-cols-8 flex-col bg-gray-900 text-white p-2 flex justify-between items-center">
        <div className="items-center col-span-4">
          <h1 className="text-2xl font-bold">CawGo</h1>
        </div>
        <div className="flex items-center ml-auto col-span-2">
          <img
            src="./img/list2.png"
            className="h-8 w-8 mr-3"
            onClick={() => setShowFeed(true)} // onClick event to show FeedPart
          />
          <img
            src="./img/list3.png"
            className="h-8 w-8 mr-3"
            onClick={() => setShowFeed(false)} // onClick event to show JobList
          />
        </div>
        <div className="flex items-center relative ml-auto col-span-2">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black p-2 pl-10 pr-4 rounded w-30"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-3 text-gray-500"
          />
        </div>
      </nav>
    </>
  );
}

// Add PropTypes validation
Navbar.propTypes = {
  setShowFeed: PropTypes.func.isRequired,
};
