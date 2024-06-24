import * as React from 'react';

export default function Payment() {
  return (
    <div className="pt-7 pb-14 pl-4 shadow-sm bg-white bg-opacity-80">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <img loading="lazy" srcSet="..." className="w-full aspect-[1.01]" />
            <div className="flex flex-col px-8 py-16 mt-16 w-full bg-white rounded max-md:px-5 max-md:mt-10">
              <div className="flex gap-5 mt-8 text-base leading-7 text-black">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fc3ecf195cc17fe9d245aa49e25bec05433314c957e756d14e46c6bd0a138f2?"
                  className="shrink-0 w-7 aspect-square"
                />
                <div className="flex-auto">Verify your business</div>
              </div>
              <div className="flex gap-4 text-lg font-bold leading-7 text-black">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 w-7 rounded-2xl border-2 border-solid shadow aspect-[0.37] border-slate-400"
                />
                <div className="flex-auto self-end mt-14 max-md:mt-10">
                  Add bank account
                </div>
              </div>
              <div className="flex flex-col justify-end self-end mt-12 max-w-full text-sm leading-5 text-black bg-black bg-opacity-0 w-[274px] max-md:mt-10">
                <div className="flex gap-2 justify-center px-5 py-2 font-bold rounded bg-slate-400">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/05d9b39cb7ac124ead232a2e8534ecf31533dfdba40e2b12b696ca1b4d65292b?"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div className="flex-auto my-auto">Business account</div>
                </div>
                <div className="flex gap-2 justify-center px-5 py-2 mt-9 rounded bg-black bg-opacity-0">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b6650e723670e408bc9f0fe325611a1e326dedc0959796f151789e0eb2049cd?"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div className="flex-auto my-auto">Personal account</div>
                </div>
              </div>
              <div className="flex gap-4 mt-9">
                <div className="justify-center items-center px-2.5 w-7 h-7 text-sm leading-5 text-gray-700 whitespace-nowrap bg-gray-100 rounded-2xl">
                  3
                </div>
                <div className="flex-auto my-auto text-base leading-7 text-black">
                  Secure account
                </div>
              </div>
              <div className="flex gap-4 self-start mt-14 whitespace-nowrap max-md:mt-10">
                <div className="justify-center items-center px-2.5 w-7 h-7 text-sm leading-5 text-gray-700 bg-gray-100 rounded-2xl">
                  4
                </div>
                <div className="my-auto text-base leading-7 text-black">
                  Review
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center mt-1 w-full bg-stone-500 bg-opacity-0 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col pt-11 pb-16 bg-white max-md:max-w-full">
              <div className="flex flex-col pr-6 pl-14 max-md:px-5 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow mt-12 max-md:mt-10">
                        <div className="flex flex-col items-start pr-10 pl-3.5 text-2xl max-md:pr-5">
                          <div className="text-5xl text-gray-900 max-md:text-4xl">
                            Paypal
                          </div>
                          <div className="mt-10 text-zinc-800">John</div>
                          <div className="mt-6 text-neutral-800">Raul</div>
                          <div className="mt-14 text-2xl text-neutral-800 max-md:mt-10">
                            Sending Payment
                          </div>
                        </div>
                        <div className="flex flex-col justify-center py-px mt-16 text-2xl font-black leading-9 text-orange-200 whitespace-nowrap bg-black bg-opacity-0 max-md:mt-10">
                          <div className="flex z-10 flex-col justify-center px-3.5 py-1.5 -mt-1 w-full bg-amber-600 rounded-[38px]">
                            <div className="flex gap-5 px-5 py-5 bg-white rounded-xl">
                              <div className="shrink-0 self-start bg-white h-[25px] w-[25px]" />
                              <div className="flex-auto">Send</div>
                            </div>
                          </div>
                        </div>
                        <div className="mx-4 mt-16 text-5xl text-red-700 max-md:mx-2.5 max-md:mt-10 max-md:text-4xl">
                          $ 1890.00
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="w-full aspect-[1.64]"
                        />
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="mt-10 w-full rounded aspect-[1.54]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                        <div className="text-2xl text-zinc-400">
                          Security Payment
                        </div>
                        <div className="flex flex-col items-center pr-1 pl-4 mt-16 max-md:mt-10">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="border border-cyan-500 border-solid aspect-[5] w-[191px]"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f26c572f65e4ad48d4f5c21be09c06518a84a3eafa3e97dc1a9dd347dabb51b?"
                            className="mt-7 border border-solid aspect-[5.88] border-zinc-200 w-[191px]"
                          />
                        </div>
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="self-center mt-16 aspect-[1.39] w-[212px] max-md:mt-10"
                        />
                        <div className="self-start mt-9 ml-6 text-xl text-neutral-400 max-md:ml-2.5">
                          Card Balance
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-end mt-3.5 mr-11 text-2xl text-zinc-400 max-md:mr-2.5">
                  2022.003 PHP
                </div>
              </div>
              <div className="flex flex-col pr-6 pl-14 mt-9 max-md:px-5 max-md:max-w-full">
                <div className="self-start ml-5 text-xl text-stone-300 max-md:ml-2.5">
                  Bank Transfer
                </div>
                <div className="mt-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                          <div className="flex flex-col justify-center self-start py-px mt-2.5 text-xl whitespace-nowrap bg-black bg-opacity-0 text-neutral-400">
                            <div className="flex flex-col justify-center px-2 py-1.5 bg-black bg-opacity-0">
                              <div className="justify-center items-start px-3.5 py-6 bg-gray-800 rounded-2xl border border-solid border-zinc-700 max-md:pr-5">
                                Sending
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center px-1.5 py-1 text-xl bg-black bg-opacity-0 text-neutral-400">
                            <div className="flex gap-2 px-4 py-8 bg-gray-900 rounded-2xl border border-solid border-neutral-700">
                              <img
                                loading="lazy"
                                srcSet="..."
                                className="shrink-0 self-start aspect-[1.14] w-[17px]"
                              />
                              <div className="flex-auto">
                                Add Bank Information
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col px-3 py-8 mt-5 bg-white rounded shadow-sm max-md:max-w-full">
                          <div className="flex gap-5 max-md:flex-wrap">
                            <div className="flex flex-col flex-1 grow shrink-0 self-start mt-1.5 text-sm leading-5 basis-0 w-fit">
                              <div className="font-bold text-black">
                                Bank name
                              </div>
                              <div className="flex gap-5 justify-center px-3.5 py-2.5 mt-2 bg-gray-100 rounded text-neutral-300">
                                <div className="my-auto">Bank name</div>
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7105b667d36b1b3c29b325a4df905e343dd8034066f7c2c345c8cd680501b8d5?"
                                  className="shrink-0 w-4 aspect-square"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col flex-1 grow shrink-0 justify-center py-1 basis-0 bg-black bg-opacity-0 w-fit">
                              <div className="text-sm font-bold leading-6 text-black">
                                Branch
                              </div>
                              <div className="flex flex-col justify-center items-end px-16 py-2.5 bg-gray-100 rounded max-md:pl-5">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7105b667d36b1b3c29b325a4df905e343dd8034066f7c2c345c8cd680501b8d5?"
                                  className="w-4 aspect-square"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-5 mt-4 text-sm font-bold leading-6 text-black max-md:flex-wrap">
                            <div className="flex flex-col flex-1 grow shrink-0 justify-center py-1 basis-0 bg-black bg-opacity-0 w-fit">
                              <div>Account number</div>
                              <div className="shrink-0 bg-gray-100 rounded h-[35px]" />
                            </div>
                            <div className="flex flex-col flex-1 grow shrink-0 justify-center py-1 basis-0 bg-black bg-opacity-0 w-fit">
                              <div>Confirm account number</div>
                              <div className="shrink-0 bg-gray-100 rounded h-[35px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col mt-2.5 max-md:mt-10">
                        <div className="flex justify-center items-center px-1.5 py-1 w-full text-lg text-blue-300 whitespace-nowrap bg-black bg-opacity-0">
                          <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-6 pt-6 pb-2.5 aspect-[2.83] max-md:pl-5">
                            <img
                              loading="lazy"
                              srcSet="..."
                              className="object-cover absolute inset-0 size-full"
                            />
                            <div className="relative">Address</div>
                            <img
                              loading="lazy"
                              srcSet="..."
                              className="shrink-0 w-8 aspect-square"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col mt-4">
                          <div className="text-lg text-neutral-400">
                            Connected Bank Information
                          </div>
                          <div className="flex gap-5 justify-between mt-7 text-xl whitespace-nowrap text-neutral-400 max-md:pr-5">
                            <div className="self-start">188K</div>
                            <img
                              loading="lazy"
                              srcSet="..."
                              className="shrink-0 aspect-[0.62] w-[18px]"
                            />
                          </div>
                          <div className="flex gap-5 justify-between mt-7 whitespace-nowrap">
                            <div className="text-base text-neutral-600">
                              e8801/
                            </div>
                            <div className="text-base text-neutral-600">
                              02A3
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
