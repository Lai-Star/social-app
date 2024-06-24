import React from 'react';
import PropTypes from 'prop-types';

export default function ProfileCard({ name, description, avatar }) {
  return (
    <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full border-white border-2">
      <div className="flex overflow-hidden bg-black bg-opacity-80 relative flex-col grow items-start px-8 py-6 min-h-[106px] max-md:px-5 max-md:max-w-full">
        <div className="flex relative gap-5 ml-3.5 text-3xl font-bold leading-8 text-white max-md:ml-2.5">
          <img
            loading="lazy"
            src={avatar}
            className="shrink-0 border border-white border-solid aspect-square w-[36px] rounded-full"
          />
          <div className="flex-auto my-auto text-xl">{name}</div>
        </div>
        <div className="relative justify-center self-stretch px-1 pt-0.5 pb-1 mt-4 text-base leading-7 rounded shadow-sm bg-zinc-100 text-zinc-700">
          {description}
        </div>
        <div className="relative justify-center items-start px-4 py-1.5 mt-3.5 max-w-full text-sm font-black leading-5 text-white whitespace-nowrap bg-teal-500 rounded-3xl w-[106px] max-md:px-5">
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
