import React from 'react';

export default function Messagebox() {
  return (
    <div className="w-full px-5 flex flex-col justify-between">
      <div className="flex flex-col mt-5">
        {[
          {
            align: 'end',
            text: 'Welcome to group everyone !',
            img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            bg: 'bg-blue-400',
          },
          {
            align: 'start',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at praesentium, aut ullam delectus odio error sit rem. Architecto nulla doloribus laborum illo rem enim dolor odio saepe, consequatur quas?',
            img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            bg: 'bg-gray-400',
          },
          {
            align: 'end',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, repudiandae.',
            img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            bg: 'bg-blue-400',
          },
          {
            align: 'end',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, reiciendis!',
            img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            bg: 'bg-blue-400',
          },
          {
            align: 'start',
            text: 'happy holiday guys!',
            img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            bg: 'bg-gray-400',
          },
        ].map((message, index) => (
          <div key={index} className={`flex justify-${message.align} mb-4`}>
            {message.align === 'start' && (
              <img
                src={message.img}
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
            )}
            <div
              className={`ml-2 py-3 px-4 ${message.bg} rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white`}
            >
              {message.text}
            </div>
            {message.align === 'end' && (
              <img
                src={message.img}
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
            )}
          </div>
        ))}
      </div>
      <div className="py-5">
        <input
          className="w-full bg-gray-300 py-5 px-3 rounded-xl"
          type="text"
          placeholder="type your message here..."
        />
      </div>
    </div>
  );
}
