import * as React from 'react';
import CreditCard from '../components/payment/CreditCard';

export default function Payment() {
  return (
    <div className="pt-7 pb-14 pl-4 shadow-sm bg-white bg-opacity-80">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {/* Left */}
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
        {/* End Left */}
        <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
          {/*  */}
          <div className="bg-white shadow-md rounded-md w-full max-w-4xl p-6">
            <div className="flex flex-col lg:flex-row justify-center pb-5">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:pr-8 lg:border-r-2 border-gray-300">
                <CreditCard />
              </div>
              <div className="w-full lg:w-1/2 lg:pl-8">
                <div className="flex flex-col space-y-3 py-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="visa"
                      className="mr-2"
                      defaultChecked
                    />
                    <label
                      htmlFor="visa"
                      className="flex items-center border rounded w-full p-3"
                    >
                      <i className="fab fa-cc-visa text-blue-600 pr-2"></i>
                      Visa / Master Card
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="mastercard"
                      className="mr-2"
                      defaultChecked
                    />
                    <label
                      htmlFor="mastercard"
                      className="flex items-center border rounded w-full p-3"
                    >
                      <i className="fab fa-cc-mastercard text-gray-700 pr-2"></i>
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="bg-gray-100 rounded p-4">
                  <div className="mb-4">
                    <h4>Order Recap</h4>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div>Contracted Price</div>
                    <div>$186.76</div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div>Amount toward deductible</div>
                    <div>$0.00</div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div>Coinsurance (0%)</div>
                    <div>+ $0.00</div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div>Copayment</div>
                    <div>+ $40.00</div>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between pt-3 mb-2">
                    <div>Total Deductible, Coinsurance, and Copay</div>
                    <div>$40.00</div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div>
                      Maximum out-of-pocket on Insurance Policy (not reached)
                    </div>
                    <div>$6500.00</div>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between pt-3 mb-2">
                    <div>Insurance Responsibility</div>
                    <div>
                      <b>$71.76</b>
                    </div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div>
                      Patient Balance{' '}
                      <i className="fa fa-question-circle text-gray-700"></i>
                    </div>
                    <div>
                      <b>$71.76</b>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between pt-3">
                    <div>
                      <b>Total</b>
                    </div>
                    <div>
                      <b className="text-green-600">$85.00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}
