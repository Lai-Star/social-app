import React from 'react';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ProfileMain from '../components/Profile/ProfileMain';

export default function Profile() {
  return (
    <div className="flex w-full grid grid-cols-3 md:grid-cols-3 flex-col min-h-screen gap-3">
      <div className="md:col-span-1">
        <ProfileSidebar />
      </div>
      <div className="md:col-span-2">
        <ProfileMain />
      </div>
    </div>
  );
}
