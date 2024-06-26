import React from 'react';
import '../../styles/ProfileCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function ProfileHeader() {
  return (
    <>
      <div className="relative max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-auto cursor-pointer">
        <div className="bg-black h-full w-full bg-opacity-50 absolute"></div>
        <img
          src="./img/profile.jpg"
          className="w-full transition-all duration-200"
          alt="Profile"
        />
        <div className="absolute bottom-16 left-8 text-white text-2xl font-bold drop-shadow-lg transition-all duration-200">
          JOHN DOE
        </div>
        <div className="absolute bottom-12 left-8 text-white text-sm transition-all duration-200">
          @johndoesurname
        </div>
        <div className="absolute bottom-8 right-8 text-white transition-all duration-200">
          <a
            href="#"
            className="text-white hover:text-blue-500 transition duration-200 m-2"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition duration-200 m-2"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-700 transition duration-200 m-2"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
      </div>
    </>
  );
}
