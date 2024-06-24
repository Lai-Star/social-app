import * as React from 'react';
import ProfileCard from '../components/home/ProfileCard';

const profiles = [
  {
    id: 1,
    name: 'Ben Goro',
    description:
      'Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat',
    avatar: '/img/avatars/2.png',
  },
  {
    id: 2,
    name: 'Jane Doe',
    description:
      'Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat',
    avatar: '/img/avatars/3.png',
  },
  {
    id: 3,
    name: 'John Smith',
    description:
      'Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat',
    avatar: '/img/avatars/6.png',
  },
];

export default function FirstPage() {
  return (
    <div className="flex flex-col justify-center bg-white blur-none">
      <div className="flex overflow-hidden relative flex-col py-10 h-screen w-full max-md:max-w-full">
        <img
          loading="lazy"
          src="./img/home_img.webp"
          className="object-cover absolute inset-0 size-full"
        />
        {/* Header */}
        <div className="flex relative flex-col pr-6 pl-20 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-4 mt-3.5 text-xl font-bold leading-9 text-white whitespace-nowrap">
              <img
                loading="lazy"
                srcSet="../img/logo.WEBP"
                className="shrink-0 aspect-square rounded-full w-[40px]"
              />
              <div className="flex-auto my-auto text-white">CawGo</div>
            </div>
            <div className="flex gap-5 text-base leading-10 text-teal-100 max-md:flex-wrap">
              <div className="flex gap-2 px-6 whitespace-nowrap bg-black bg-opacity-40 rounded-[54px]">
                <div className="flex-auto my-auto">LOGIN</div>
              </div>
              <div className="justify-center px-10 my-auto bg-orange-500 shadow-sm rounded-[54px] max-md:px-5">
                SIGN UP
              </div>
            </div>
          </div>
        </div>
        {/* End Header */}

        {/* Profile Card */}
        <div className="flex items-center justify-center absolute bottom-5 w-full">
          <div className="overflow-hidden relative self-center px-1 py-1.5 mt-12 w-full max-w-[1368px] max-md:mt-10 max-md:max-w-full">
            <div className="flex max-md:flex-col justify-center  max-md:gap-1 gap-1">
              {/* Profile Card */}
              {profiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  name={profile.name}
                  description={profile.description}
                  avatar={profile.avatar}
                />
              ))}
              {/* End Profile Card */}
            </div>
          </div>
        </div>
        {/* End Profile Card */}
      </div>
    </div>
  );
}
