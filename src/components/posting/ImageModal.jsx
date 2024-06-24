import * as React from 'react';

export default function ImageModal() {
  return (
    <div className="px-6 py-9 bg-white rounded-lg border border-solid border-stone-50 max-w-[800px] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-3xl font-medium leading-10 text-zinc-900 max-md:mt-10">
            <div>Post a new picture</div>
            <img
              loading="lazy"
              srcSet="..."
              className="mt-2 w-full aspect-[0.7]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c54b9263f1a86c705dfa55b8725f2db718dfdb49a3e11032c533d8c7597684bf?"
              className="self-end w-6 aspect-square max-md:mr-2.5"
            />
            <div className="flex flex-col justify-center pt-1.5 mt-9 bg-black bg-opacity-0">
              <div className="text-sm font-bold leading-5 text-gray-700">
                Name:
              </div>
              <div className="flex flex-col justify-center mt-1 text-base leading-7 bg-white rounded border border-solid border-zinc-400 text-zinc-900">
                <div className="justify-center items-start px-5 py-4 rounded border-solid bg-black bg-opacity-0 border-[5px] border-zinc-400 border-opacity-20">
                  Work wear idea |
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-1 mt-5 mr-3 text-sm font-bold leading-5 text-gray-700 whitespace-nowrap bg-black bg-opacity-0 max-md:mr-2.5 max-md:ml-1">
              <div>Description:</div>
              <div className="shrink-0 mt-1.5 bg-gray-100 rounded h-[166px]" />
            </div>
            <div className="flex flex-col justify-center py-1 mt-6 mr-3 text-sm font-bold leading-5 text-gray-700 bg-black bg-opacity-0 max-md:mr-2.5 max-md:ml-1">
              <div>Invite collaborators (Optional):</div>
              <div className="shrink-0 mt-1.5 bg-gray-100 rounded h-[43px]" />
            </div>
            <div className="flex gap-5 justify-between mt-6 mr-3 w-full max-md:mr-2.5 max-md:ml-1">
              <div className="flex gap-2 self-start mt-1.5 text-sm font-bold leading-5 text-zinc-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0938484c562d2742a1b994d95f4dcfbcce5aff0a31766bec15a38604272c800d?"
                  className="shrink-0 aspect-square w-[18px]"
                />
                <div className="flex-auto my-auto">Private collection:</div>
              </div>
              <div className="flex flex-col justify-center items-start py-0.5 fill-neutral-300">
                <div className="shrink-0 w-5 h-5 bg-white rounded-full" />
              </div>
            </div>
            <div className="flex gap-3 self-end mt-9 text-base leading-7 whitespace-nowrap">
              <div className="justify-center p-4 rounded-lg bg-black bg-opacity-0 text-zinc-400">
                Cancel
              </div>
              <div className="justify-center px-12 py-4 text-white bg-cyan-500 rounded-3xl max-md:px-5">
                Post
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
