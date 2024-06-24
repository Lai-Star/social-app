import React from 'react';

export default function PostingHeader() {
  return (
    <div className="flex gap-3 max-md:flex-wrap max-md:max-w-full">
      <div className="justify-center px-5 py-3.5 text-base leading-6 text-black bg-white rounded shadow-sm max-md:pr-5">
        Posting Picture
      </div>
      <div className="flex flex-auto gap-5 justify-between self-start py-2 pr-20 bg-white rounded shadow max-md:flex-wrap max-md:max-w-full">
        <div className="self-start text-base leading-6 text-zinc-900">Atoo</div>
        <div className="my-auto text-base leading-6 text-zinc-900">
          Scm6Omtad
        </div>
        <div className="flex gap-5 items-start">
          <img
            loading="lazy"
            srcSet="./img/address_image.jfif"
            className="shrink-0 self-start w-5 aspect-[0.95]"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 self-start w-5 aspect-square"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 my-auto w-5 aspect-[1.54]"
          />
        </div>
      </div>
    </div>
  );
}
