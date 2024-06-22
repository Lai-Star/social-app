import * as React from 'react';

export default function MainScreen() {
  return (
    <div className="w-full px-5 flex flex-col justify-between">
      <div className="flex gap-5 justify-between items-start w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="text-xl font-bold leading-8 text-zinc-900">CawGo</div>
        <div className="flex gap-3 justify-center px-4 py-3.5 mt-2.5 text-sm leading-5 text-red-500 bg-white rounded-2xl border border-red-500 border-solid shadow-sm">
          <div className="shrink-0 w-2.5 h-2.5 bg-red-500 rounded-full" />
          <div>12:00</div>
        </div>
      </div>
      <div className="flex gap-4 items-center self-start mt-6 ml-5 text-sm leading-5 text-zinc-700 max-md:ml-2.5">
        <div className="flex flex-col justify-center self-stretch text-xs leading-5 text-white whitespace-nowrap bg-black bg-opacity-0">
          <div className="flex gap-1 justify-center px-2 py-1.5 bg-blue-600 rounded-2xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4a3bb1353ac5b3552dcf89b61abe6257b5b9fef458f40cf13628f1fc3a4f755?"
              className="shrink-0 w-4 aspect-square"
            />
            <div className="my-auto">Internal</div>
          </div>
        </div>
        <div className="flex gap-2 self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb52b418b35eb83028a34308a866ae8fe92d809790476d3408fe9ad520d26ff3?"
            className="shrink-0 w-4 aspect-square"
          />
          <div>Sep 02, 2022</div>
        </div>
        <div className="flex gap-4 self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab945d97492f4deb0b44095e776333d747b91438e6006a9d246e269ae23ddf01?"
            className="shrink-0 w-px border border-solid aspect-[0.07] border-zinc-200 stroke-[1px] stroke-zinc-200"
          />
          <div className="flex-auto my-auto">08:00 - 09:00 AM</div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-6 text-sm leading-5 text-white bg-gray-50 rounded-lg max-md:pr-5 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-6 pt-6 pb-20 w-full min-h-[469px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-2 justify-center px-2 py-3 rounded shadow-sm bg-zinc-900 bg-opacity-50">
            <div className="shrink-0 my-auto w-2 h-2 rounded-full bg-lime-500 bg-opacity-60" />
            <div className="flex-auto">Benjamin Crawford</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae63a48f2326ff94a07640c8798748d3a1c349f83dc5c7eb294af62637290fd5?"
            className="shrink-0 w-9 aspect-square"
          />
        </div>
      </div>
      <div className="mt-6 max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center mx-auto w-full text-xs leading-5 text-white bg-gray-50 rounded-lg max-md:mt-6">
              <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-2 pt-2.5 pb-20 w-full aspect-[1.63]">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative gap-2 justify-center px-2 py-2.5 rounded shadow-sm bg-zinc-900 bg-opacity-50">
                  <div className="shrink-0 w-2 h-2 bg-lime-600 rounded-full" />
                  <div>Christian Scott</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/51ef12918d68c3f0002c0893ca61dd90edc0b2c5b034bdabd2709a73d8ad01ac?"
                  className="shrink-0 w-7 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center mx-auto w-full text-xs leading-5 text-white bg-gray-50 rounded-lg max-md:mt-6">
              <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-2 pt-1.5 pb-20 w-full aspect-[1.63]">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative gap-2 justify-center px-2 py-2.5 rounded shadow-sm bg-zinc-900 bg-opacity-50">
                  <div className="shrink-0 w-2 h-2 bg-lime-600 rounded-full" />
                  <div>Deborah Chu</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7165b574ce84237a88a33638837ff1839d3a956cb8a4e46831be8e93e0fe8b5?"
                  className="shrink-0 w-7 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center mx-auto w-full text-xs leading-5 text-white bg-gray-50 rounded-lg max-md:mt-6">
              <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-2 pt-1.5 pb-20 w-full aspect-[1.63]">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative gap-2 justify-center px-2 py-2.5 rounded shadow-sm bg-zinc-900 bg-opacity-50">
                  <div className="shrink-0 w-2 h-2 bg-lime-600 rounded-full" />
                  <div>Jordan Nieves</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5bf9c46cdc2cf9fcbe3af7116f8da694e1fb60bd987d5bc8ce5bc17d650960?"
                  className="shrink-0 w-7 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 self-center mt-6 text-base leading-7 text-white max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7ac1e57bfa8d73e74dced4d7dde87b99bbf5bff6e3c80d5a61ad6a2986269db?"
          className="shrink-0 w-11 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc52bc53f1c409317b3b95076ab136fb4e8826c8537a842b26ff196f5818d687?"
          className="shrink-0 w-11 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c181ea1e740df19023cdf879e5c05bfdbb871c3d147632e982a9f239c434f96?"
          className="shrink-0 w-11 aspect-square"
        />
        <div className="justify-center px-4 py-4 bg-red-500 rounded">
          End meeting
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1958c81be1c4b1fc336858db9f99e7c946194f19f920d3ab2764f9e9a0ed0db7?"
          className="shrink-0 w-11 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bca3590801ec371899d49f5665c66e0e1ecbb98cf5f3cfa26eb5ce3829666bf7?"
          className="shrink-0 w-11 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/29dc9cfdba3959b5d73ce44668a29545d9c30ba346c2d9aedfcc77470eb922d9?"
          className="shrink-0 w-11 aspect-square"
        />
      </div>
    </div>
  );
}
