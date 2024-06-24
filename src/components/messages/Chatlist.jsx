import React from 'react';

export default function Chatlist() {
  return (
    <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
      {/* Search component */}
      <div className="border-b-2 py-4 px-2">
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white float-left">
          Chats
        </h1>
        <input
          type="text"
          placeholder="search chatting"
          className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
        />
      </div>
      {/* End Search component */}
      {/* User list */}
      {[
        {
          name: 'Luis1994',
          message: 'Pick me at 9:00 Am',
          img: './img/avatars/9.png',
        },
        {
          name: 'Everest Trip 2021',
          message: 'Hi Sam, Welcome',
          img: './img/avatars/8.png',
        },
        {
          name: 'MERN Stack',
          message: 'Lusi : Thanks Everyone',
          img: './img/avatars/12.png',
          active: true,
        },
        {
          name: 'Javascript Indonesia',
          message: 'Evan : some one can fix this',
          img: './img/avatars/5.png',
        },
        {
          name: 'Luis1994',
          message: 'Pick me at 9:00 Am',
          img: './img/avatars/1.png',
        },
        {
          name: 'Everest Trip 2021',
          message: 'Hi Sam, Welcome',
          img: './img/avatars/11.png',
        },
        {
          name: 'Luis1994',
          message: 'Pick me at 9:00 Am',
          img: './img/avatars/10.png',
        },
      ].map((user, index) => (
        <div
          key={index}
          className={`flex flex-row py-4 px-2 items-center border-b-2 ${user.active ? 'border-l-4 border-blue-400' : ''}`}
        >
          <div className="w-1/4">
            <img
              src={user.img}
              className="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div className="w-full">
            <div className="text-lg font-semibold">{user.name}</div>
            <span className="text-gray-500">{user.message}</span>
          </div>
        </div>
      ))}
      {/* End User list */}
    </div>
  );
}
