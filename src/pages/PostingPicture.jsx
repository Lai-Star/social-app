import * as React from 'react';
import PostingHeader from '../components/posting/PostingHeader';

export default function PostingPicture() {
  return (
    <div className="flex flex-col pt-3 pr-6 pb-20 bg-white rounded shadow-sm max-md:pr-5">
      {/* Posting Header */}
      <PostingHeader />
      {/* End Posting Header */}

      <div className="flex flex-col self-center mt-2 w-full max-w-[1111px] max-md:max-w-full">
        {/* Main Picture */}
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="./img/posting_img/1.jpg"
                className="w-full aspect-[1.79] max-md:mt-2.5 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-3 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col pt-1 pb-3 mx-auto w-full rounded shadow-sm bg-neutral-800">
                      <div className="flex gap-3">
                        <img
                          loading="lazy"
                          srcSet="./img/posting_img/2.jpg"
                          className="shrink-0 max-w-full aspect-[1.19] w-[152px]"
                        />
                        <img
                          loading="lazy"
                          srcSet="./img/posting_img/3.jpg"
                          className="shrink-0 self-start max-w-full aspect-[1.18] w-[143px]"
                        />
                      </div>
                      <div className="flex gap-2.5">
                        <img
                          loading="lazy"
                          srcSet="./img/posting_img/7.jpg"
                          className="shrink-0 max-w-full aspect-[1.1] w-[152px]"
                        />
                        <img
                          loading="lazy"
                          srcSet="./img/posting_img/10.jpg"
                          className="shrink-0 max-w-full aspect-[1.03] w-[146px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-center pt-0.5 pr-px pb-2 pl-1.5 w-full rounded shadow-sm bg-neutral-800">
                      <img
                        loading="lazy"
                        srcSet="./img/posting_img/25.jfif"
                        className="aspect-[1.2] w-[198px]"
                      />
                      <img
                        loading="lazy"
                        srcSet="./img/posting_img/26.jfif"
                        className="aspect-[1.33] w-[198px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Main Picture */}

        {/* Main Part */}
        <div className="mt-5 text-lg leading-7 text-zinc-900 max-md:max-w-full">
          Hwwtory
        </div>
        <div className="flex gap-2 px-0.5 mt-3 text-lg leading-5 whitespace-nowrap text-zinc-900 max-md:flex-wrap">
          <div className="flex flex-col">
            <img
              loading="lazy"
              srcSet="./img/posting_img/23.jfif"
              className="self-center aspect-[1.14] w-[204px]"
            />
            <div className="justify-center px-4 py-1 mt-2 rounded bg-neutral-800">
              CNCu
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="./img/posting_img/8.jpg"
            className="shrink-0 max-w-full aspect-[1.09] w-[229px]"
          />
          <img
            loading="lazy"
            srcSet="./img/posting_img/20.jpg"
            className="shrink-0 max-w-full aspect-[1.06] w-[225px]"
          />
          <img
            loading="lazy"
            srcSet="./img/posting_img/22.jpg"
            className="shrink-0 max-w-full aspect-[1.03] w-[218px]"
          />
          <img
            loading="lazy"
            srcSet="./img/posting_img/27.jfif"
            className="shrink-0 max-w-full aspect-[0.95] w-[201px]"
          />
        </div>
        <div className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-3 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base leading-6 whitespace-nowrap text-zinc-900 max-md:mt-1.5">
                      <img
                        loading="lazy"
                        srcSet="./img/posting_img/14.jfif"
                        className="self-center aspect-[0.88] w-[212px]"
                      />
                      <div className="mt-3">ohn</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                    <div className="px-1 pb-2 w-full rounded shadow-sm bg-neutral-900 max-md:mt-1.5 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            srcSet="./img/posting_img/17.jfif"
                            className="grow w-full aspect-[0.94] max-md:mt-3.5"
                          />
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            srcSet="./img/posting_img/18.jfif"
                            className="grow w-full aspect-[0.93] max-md:mt-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-3">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="./img/posting_img/13.jfif"
                      className="shrink-0 w-52 max-w-full aspect-[0.88] max-md:mt-3.5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base leading-6 whitespace-nowrap text-zinc-900 max-md:mt-4">
                      <img
                        loading="lazy"
                        srcSet="./img/posting_img/16.jfif"
                        className="self-center aspect-[0.83] w-[197px]"
                      />
                      <div className="self-start mt-5 ml-4 max-md:ml-2.5">
                        san
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Main Part */}

        {/* Category */}
        <div className="flex gap-5 justify-between px-5 py-4 mt-3.5 w-full text-lg leading-7 whitespace-nowrap rounded shadow-sm bg-neutral-800 text-neutral-300 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
          <div className="self-start mt-3">Caption</div>
          <div className="flex gap-4">
            <img
              loading="lazy"
              srcSet="./img/posting_img/32.jfif"
              className="shrink-0 aspect-[1.1] w-[34px]"
            />
            <div className="self-start mt-3">Tags</div>
          </div>
          <div className="flex gap-5 self-start">
            <img
              loading="lazy"
              srcSet="./img/posting_img/3.jpg"
              className="shrink-0 w-7 aspect-[0.93]"
            />
            <div className="self-start mt-3">Population</div>
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 my-auto aspect-[0.85] w-[17px]"
          />
        </div>
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-3 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col pb-20 text-base leading-6 whitespace-nowrap aspect-[0.87] text-zinc-900 max-md:mt-1.5">
                      <img
                        loading="lazy"
                        srcSet="./img/posting_img/31.jfif"
                        className="object-cover absolute inset-0 size-full"
                      />
                      D0c0e90s
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                    <div className="grow px-1 pb-2 w-full rounded shadow-sm bg-neutral-900 max-md:mt-1.5 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            srcSet="./img/posting_img/11.jfif"
                            className="grow w-full aspect-[0.94] max-md:mt-3.5"
                          />
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            srcSet="./img/posting_img/9.jfif"
                            className="grow w-full aspect-[0.93] max-md:mt-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
              <div className="px-px max-md:mt-3">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="./img/posting_img/17.jfif"
                      className="shrink-0 w-52 max-w-full aspect-[0.88] max-md:mt-3.5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="./img/posting_img/17.jfif"
                      className="grow shrink-0 max-w-full aspect-[0.81] w-[195px] max-md:mt-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Category */}
      </div>
    </div>
  );
}
