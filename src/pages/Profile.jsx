import React from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import TabNavigation from '../components/Profile/TabNavigation';
import AddressSection from '../components/Profile/AddressSection';
import ActivitiesSection from '../components/Profile/ActivitiesSection';

export default function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <img />
        {/* <h2 className="color-gray-800 font-bold text-4xl mt-2 ml-10">
          Profile
        </h2> */}
      </div>
      <div className="w-full mx-auto p-4 grid grid-cols-3 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <ProfileHeader />
        </div>
        <div className="md:col-span-3">
          <TabNavigation />
          <div className="w-full mx-auto p-4 grid grid-cols-3 md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              <AddressSection />
            </div>
            <div className="md:col-span-2">
              <ActivitiesSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
