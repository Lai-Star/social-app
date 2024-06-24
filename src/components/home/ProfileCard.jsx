import React from 'react';
import PropTypes from 'prop-types';

export default function ProfileCard({ name, description, avatar }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden relative flex-col grow items-start px-12 py-10 mt-1 min-h-[306px] max-md:px-5 max-md:mt-3 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 ml-3.5 text-3xl font-bold leading-8 text-white max-md:ml-2.5">
          <img
            loading="lazy"
            src={avatar}
            className="shrink-0 border border-white border-solid aspect-square w-[66px]"
          />
          <div className="flex-auto my-auto">{name}</div>
        </div>
        <div className="relative justify-center self-stretch px-4 pt-2.5 pb-1 mt-4 text-xl leading-8 rounded shadow-sm bg-zinc-100 text-zinc-700">
          {description}
        </div>
        <div className="relative justify-center items-start px-8 py-3.5 mt-3.5 max-w-full text-sm font-black leading-5 text-blue-300 whitespace-nowrap bg-teal-500 rounded-3xl w-[136px] max-md:px-5">
          Connects
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
