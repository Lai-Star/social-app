import * as React from 'react';

export default function ListFeed() {
  return (
    <div className="flex flex-col pb-4 bg-gray-50 shadow-sm">
      <div className="flex gap-5 justify-center p-4 w-full whitespace-nowrap bg-gray-100 shadow-md max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
          <div className="text-2xl font-bold leading-8 text-gray-800">
            CawGo
          </div>
          <div className="flex gap-5 self-start text-base leading-6 text-gray-600">
            <div className="grow">Home</div>
            <div>Explore</div>
            <div>Notifications</div>
            <div>Profile</div>
          </div>
        </div>
        <div className="justify-center py-4 text-base leading-6 bg-blue-100 rounded-lg border border-gray-300 border-solid text-zinc-400">
          Search...
        </div>
      </div>
      <div className="mt-1.5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-4 py-20 w-full text-lg font-bold leading-7 text-gray-800 whitespace-nowrap bg-white shadow-md max-md:mt-3.5">
              <div className="mt-2">Filters</div>
              <div className="shrink-0 mt-6 bg-white rounded-lg border border-gray-300 border-solid h-[39px]" />
              <div className="shrink-0 mt-4 bg-white rounded-lg border border-gray-300 border-solid h-[39px]" />
              <div className="shrink-0 mt-4 bg-white rounded-lg border border-gray-300 border-solid h-[39px]" />
              <div className="shrink-0 mt-4 bg-white rounded-lg border border-gray-300 border-solid h-[39px]" />
              <div className="shrink-0 mt-4 bg-white rounded-lg border border-gray-300 border-solid h-[39px]" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-4 max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-col justify-center p-4 text-base leading-6 bg-white rounded-lg shadow-md text-zinc-400 max-md:max-w-full">
                <div className="justify-center items-start px-3.5 py-5 bg-white rounded-lg border border-blue-300 border-solid max-md:pr-5 max-md:max-w-full">
                  What do you want to share today?
                </div>
              </div>
              <div className="flex flex-col px-10 mt-6 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col py-8 bg-white rounded-lg shadow-md max-md:max-w-full">
                  <div className="flex flex-col px-6 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-4">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="shrink-0 w-12 aspect-square"
                        />
                        <div className="flex flex-col my-auto">
                          <div className="text-xl font-bold leading-7 text-gray-800">
                            Item for Sale: Bicycle
                          </div>
                          <div className="mt-2 text-base leading-6 text-gray-500">
                            Posted by User1 • 2 hours ago
                          </div>
                        </div>
                        <div className="self-start text-sm font-bold leading-7 text-gray-800">
                          California, US
                        </div>
                      </div>
                      <div className="my-auto text-base font-bold leading-6 text-blue-600">
                        $150
                      </div>
                    </div>
                    <div className="mt-3 text-base leading-6 text-gray-700 max-md:max-w-full">
                      A lightly used bicycle in excellent condition. Contact for
                      more details.
                    </div>
                  </div>
                  <div className="flex gap-4 self-start mt-6 text-base leading-6 text-center text-gray-500">
                    <div>View More</div>
                    <div>Comments</div>
                  </div>
                </div>
                <div className="flex flex-col py-7 mt-4 bg-white rounded-lg shadow-md max-md:max-w-full">
                  <div className="flex flex-col px-6 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
                      <div className="flex flex-auto gap-4">
                        <div className="flex overflow-hidden relative flex-col justify-center items-center w-12 rounded-full aspect-square">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="object-cover absolute inset-0 size-full"
                          />
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="w-full aspect-square"
                          />
                        </div>
                        <div className="flex flex-col my-auto">
                          <div className="text-xl font-bold leading-7 text-gray-800">
                            Looking for: Math Tutor
                          </div>
                          <div className="mt-2 text-base leading-6 text-gray-500">
                            Posted by User2 • 3 hours ago
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-auto gap-5 justify-between items-start self-start mt-1.5 font-bold max-md:flex-wrap max-md:max-w-full">
                        <div className="text-sm leading-7 text-gray-800">
                          California, US
                        </div>
                        <div className="mt-3 text-base leading-6 text-blue-600">
                          Negotiable
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-base leading-6 text-gray-700 max-md:max-w-full">
                      In need of a math tutor for high school level. Please
                      reach out if interested.
                    </div>
                  </div>
                  <div className="flex gap-4 self-start mt-6 text-base leading-6 text-center text-gray-500">
                    <div>View More</div>
                    <div>Comments</div>
                  </div>
                </div>
                <div className="flex flex-col py-8 mt-4 bg-white rounded-lg shadow-md max-md:max-w-full">
                  <div className="flex flex-col px-6 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-1 gap-4">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="shrink-0 w-12 aspect-square"
                        />
                        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                          <div className="text-xl font-bold leading-7 text-gray-800">
                            Question: Best Restaurants in Town?
                          </div>
                          <div className="mt-2.5 text-base leading-6 text-gray-500">
                            Posted by User3 • 5 hours ago
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-auto gap-5 justify-between self-start mt-2 font-bold">
                        <div className="text-sm leading-7 text-gray-800">
                          California, US
                        </div>
                        <div className="text-base leading-6 text-blue-600">
                          Negotiable
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-base leading-6 text-gray-700 max-md:max-w-full">
                      Can anyone recommend some good restaurants in the downtown
                      area?
                    </div>
                  </div>
                  <div className="flex gap-4 self-start mt-6 text-base leading-6 text-center text-gray-500">
                    <div>View More</div>
                    <div>Comments</div>
                  </div>
                </div>
                <div className="flex flex-col items-start self-end px-7 py-7 mt-4 max-w-full bg-white rounded-lg shadow-md w-[774px] max-md:px-5 max-md:mr-2.5">
                  <div className="flex gap-5 items-start self-stretch w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-auto gap-0">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e7c51afb241df8b82e41001c0d8a1a46072d717d6def435077904a369a03868?"
                        className="shrink-0 w-12 aspect-square"
                      />
                      <div className="flex flex-col self-start">
                        <div className="text-xl font-bold leading-7 text-gray-800">
                          Item for Sale: Laptop
                        </div>
                        <div className="mt-2 text-base leading-6 text-gray-500">
                          Posted by User4 • 6 hours ago
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-auto gap-5 justify-between mt-3.5 font-bold">
                      <div className="self-start text-sm leading-7 text-gray-800">
                        California, US
                      </div>
                      <div className="text-base leading-6 text-blue-600">
                        $500
                      </div>
                    </div>
                  </div>
                  <div className="mt-2.5 ml-8 text-base leading-6 text-gray-700 max-md:max-w-full">
                    A high-performance laptop, barely used. Perfect for gaming
                    and work.
                  </div>
                  <div className="flex gap-5 justify-between mt-6 text-base leading-6 text-center text-gray-500">
                    <div>View More</div>
                    <div>Comments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
