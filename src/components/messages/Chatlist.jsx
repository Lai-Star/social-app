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
          img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Everest Trip 2021',
          message: 'Hi Sam, Welcome',
          img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'MERN Stack',
          message: 'Lusi : Thanks Everyone',
          img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          active: true,
        },
        {
          name: 'Javascript Indonesia',
          message: 'Evan : some one can fix this',
          img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Luis1994',
          message: 'Pick me at 9:00 Am',
          img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Everest Trip 2021',
          message: 'Hi Sam, Welcome',
          img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Luis1994',
          message: 'Pick me at 9:00 Am',
          img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
