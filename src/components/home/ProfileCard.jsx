import React from 'react';
import PropTypes from 'prop-types';

export default function ProfileCard({ name, description, avatar }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black bg-opacity-75 p-5">
      <div className="relative z-10 ml-5">
        <div className="flex items-center space-x-4">
          <img className="w-16 h-16 rounded-full" src={avatar} alt="Avatar" />
          <div>
            <div className="text-xl font-bold text-white">{name}</div>
          </div>
        </div>
        <div className="mt-2 text-black bg-white rounded-lg p-4">
          {description}
        </div>
        <button className="mt-2 bg-cyan-500 text-white font-semibold py-1 px-4 rounded-full hover:bg-cyan-700">
          Connects
        </button>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
