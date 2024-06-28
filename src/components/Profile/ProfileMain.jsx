import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const images = [
  'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80',
  'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80',
  'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80',
];

export default function ProfileMain() {
  return (
    <div className="w-full">
      <div className="flex-1 w-full bg-gray-400 text-2xl text-gray-900 font-bold p-3 pl-10 text-left rounded-lg">
        Profile
      </div>
      <div className="bg-black">
        <div className="italic font-serif p-4 text-2xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          John Doe&apos;s details
        </div>
      </div>
      <div className="flex w-full grid grid-cols-3 md:grid-cols-3 flex-col mt-6 gap-10">
        <div className="md:col-span-2 w-full">
          <div className="font-bold bg-gray-400 w-full p-5 text-left rounded-lg">
            Address
          </div>
          <div className="w-full flex rounded-lg">
            <img className="w-full rounded-lg" src="./img/address.jfif" />
            <img className="w-full rounded-lg" src="./img/address2.jfif" />
          </div>
          <div className="w-full flex bg-gray-200 p-5 items-center rounded-lg">
            <img
              src="./img/avatars/5.png"
              className="w-14 h-14 mr-2 rounded-full"
            />
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-gray-500 text-3xl mr-2"
            />
            <span className="text-2xl">1234 Main St, Anytown, USA</span>
          </div>
        </div>

        <div className="md:col-span-1 w-full">
          <div className="w-full flex-1 p-3 bg-gray-400 rounded-lg">
            Activities
          </div>
          <div className="w-full bg-gray-200 rounded-lg p-2">
            <img
              src="./img/activity_img.PNG"
              className="w-[90%] m-auto rounded-lg"
            />
            <div className="flex justify-around text-center">
              <div>
                <i className="fas fa-star text-blue-500"></i>
                <p className="mt-1">100</p>
              </div>
              <div>
                <i className="fas fa-star text-blue-500"></i>
                <p className="mt-1">100</p>
              </div>
              <div>
                <i className="fas fa-star text-blue-500"></i>
                <p className="mt-1">100</p>
              </div>
              <div>
                <i className="fas fa-star text-gray-500"></i>
                <p className="mt-1">100</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full m-2">
        <div className="grid grid-cols-3 col-span-2 items-center">
          <div className="col-span-1 text-2xl font-bold text-left m-2">
            Posted
          </div>
          <div className="col-span-1 hover:text-sky-700 cursor-pointer">
            More
          </div>
        </div>
        <div className="grid grid-cols-6 col-span-6 gap-2">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl col-span-1 max-h-[14rem]"
            >
              <img
                className="h-full w-full object-cover"
                src={src}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 col-span-3 mt-4 gap-5">
          <div className="col-span-1 items-center ">
            <div className="flex w-full p-2">
              <div className="text-left text-2xl font-bold">Follows</div>
              <span className="ml-auto hover:text-sky-700 cursor-pointer">
                More
              </span>
            </div>
            <div className="w-full">
              <ul>
                {Array.from({ length: 3 }).map((_, index) => (
                  <li
                    key={index}
                    className="mb-1 flex items-center bg-gray-300 p-4"
                  >
                    <img
                      src={`/img/avatars/1.PNG`}
                      alt="Avatar"
                      className="w-12 h-10 rounded-full"
                    />
                    <div className="ml-2 flex flex-col">
                      <span className="font-bold text-left">John Raul</span>
                    </div>
                    <div className="ml-auto flex items-center">
                      <span>2024.6.28</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-2">
            <div className="text-4xl mt-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500">
              About me
            </div>
            <div className="w-full italic mt-2 text-white p-5 bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg">
              I am a dedicated full-stack engineer with several years of
              professional experience in designing and developing web
              applications. While my expertise lies in leveraging front-end
              technologies like HTML, CSS, JavaScript libraries, and frameworks,
              I have also gained proficiency in back-end development and
              database management through practical experience. Over the years,
              I have honed my problem-solving abilities and developed strong
              communication skills, enabling me to collaborate effectively with
              cross-functional teams. However, I recognize that successful
              projects are the culmination of the efforts of many individuals,
              and I value the contributions of my colleagues
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
