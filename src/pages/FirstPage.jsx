import React from 'react';
import '../App.css';
import '../index.css';
import LogoNavbar from '../components/home/LogoNavbar';
import ProfileCard from '../components/home/ProfileCard';

const profiles = [
  {
    id: 1,
    name: 'Ben Goro',
    description:
      'Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat',
    avatar: '/img/girl.JFIF',
  },
  {
    id: 2,
    name: 'Jane Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    avatar: '/img/girl.JFIF',
  },
  {
    id: 3,
    name: 'John Smith',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    avatar: '/img/girl.JFIF',
  },
];

export default function FirstPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <LogoNavbar />
      <div className="flex-grow"></div>
      <div className="flex justify-center space-x-4 pb-8">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            description={profile.description}
            avatar={profile.avatar}
          />
        ))}
      </div>
    </div>
  );
}
