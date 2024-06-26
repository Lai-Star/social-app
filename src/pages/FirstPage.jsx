import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import ProfileCard from '../components/home/ProfileCard';
import LoginCard from '../components/home/LoginCard';

// const profiles = [
//   {
//     id: 1,
//     name: 'Ben Goro',
//     description:
//       'Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat',
//     avatar: '/img/avatars/2.png',
//   },
//   {
//     id: 2,
//     name: 'Jane Doe',
//     description:
//       'Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat',
//     avatar: '/img/avatars/3.png',
//   },
//   {
//     id: 3,
//     name: 'John Smith',
//     description:
//       'Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat',
//     avatar: '/img/avatars/6.png',
//   },
// ];

export default function FirstPage() {
  const [showLoginCard, setShowLoginCard] = useState(false);

  const handleLoginClick = () => {
    setShowLoginCard(true);
  };

  const handleCloseLoginCard = () => {
    setShowLoginCard(false);
  };

  return (
    <div className="relative">
      <div className="flex flex-col justify-center bg-white blur-none">
        <div className="flex overflow-hidden relative flex-col py-16 w-full min-h-[1430px] max-md:max-w-full">
          <img
            loading="lazy"
            src="../img/home_imgs.webp"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col pr-6 pl-20 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-4 mt-3.5 text-3xl font-bold leading-9 text-white whitespace-nowrap">
                <img
                  loading="lazy"
                  srcSet="../img/logo.WEBP"
                  className="shrink-0 aspect-square rounded-full w-[63px]"
                />
                <div className="flex-auto my-auto text-black">CawGo</div>
              </div>
              <div className="flex gap-3 text-2xl leading-10 text-teal-200 max-md:flex-wrap">
                <div className="flex gap-2 px-6 whitespace-nowrap bg-cyan-500 rounded-[54px]">
                  <button className="flex my-auto" onClick={handleLoginClick}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a0993de91e2aab2d29bce5e9300ac832502cfecf92b5228a60d1aaec9b775d9?"
                      className="ml-0 p shrink-0 w-12 aspect-[1.05]"
                    />
                    LOGIN
                  </button>
                </div>

                <div className="justify-center px-10 py-3 my-auto bg-orange-500 rounded shadow-sm rounded-[54px] max-md:px-5">
                  <button>SIGN UP</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative flex-col px-7 mt-11 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full float-end">
                <div className="flex gap-3 items-start pb-9 pl-7 bg-cyan-500 shadow rounded-[122px] max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                  <div className="flex-auto self-start mt-0 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-start">
                          <img
                            loading="lazy"
                            srcSet="./img/avatars/5.png"
                            className="aspect-square w-[85px] rounded-full"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4a444c9a9851ee7224b84d394c99aeab5bdfe0021c55404665603eb2190df?"
                            className="mt-5 ml-3.5 shadow aspect-[2.5] w-[247px] max-md:ml-2.5"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/04c2050eeb09a4695b9ab2aa19ce6aca2aebfa937eff2ede2f8210c360effb67?"
                          className="self-stretch my-auto shadow aspect-[2.27] w-[222px] max-md:mt-9"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cde5d301fd9e654fbcb3315421ef4fa1096e6b6ecfd89428f0285eaad443394d?"
                    className="z-10 shrink-0 self-end mt-0 shadow aspect-[0.98] w-[59px]"
                  />
                </div>
                <img
                  loading="lazy"
                  srcSet="./img/avatars/1.png"
                  className="z-10 self-end mt-0 mr-12 w-20 aspect-[1.01] max-md:mr-2.5 rounded-full"
                />
              </div>
            </div>
            <div className="self-end mt-32 mr-48 max-w-full w-[711px] max-md:mt-10 max-md:mr-2.5">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 justify-between items-start max-md:mt-10"></div>
                </div>
                <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                  <div className="grow mt-3.5 max-md:mt-10">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                        <div className="shrink-0 mx-auto bg-cyan-600 border border-cyan-900 border-solid h-[117px] rounded-[70px] w-[117px] max-md:mt-10" />
                      </div>
                      <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pt-6 mt-32 w-full text-xs text-teal-300 whitespace-nowrap bg-black bg-opacity-0 max-md:mt-10">
                          <div className="items-start px-12 pt-5 pb-20 bg-cyan-600 border border-cyan-800 border-solid h-[135px] rounded-[70px] w-[135px] max-md:px-5">
                            Piatiaco
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden relative self-center px-1 py-1.5 mt-12 w-full max-w-[1368px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {/* Profile Card */}
              {/* {profiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  name={profile.name}
                  description={profile.description}
                  avatar={profile.avatar}
                />
              ))} */}
              {/* End Profile Card */}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showLoginCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-lg shadow-lg p-8 max-w-sm lg:max-w-4xl w-full"
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={handleCloseLoginCard}
              >
                &times;
              </button>
              <LoginCard />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
