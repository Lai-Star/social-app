import React from 'react';
import Navbar from '../components/job_posting/Navbar';
import Sidebar from '../components/job_posting/Sidebar';
import FeedPart from '../components/job_posting/FeedPart';
import Footer from '../components/job_posting/Footer';
export default function JobPosting() {
  return (
    <div className="flex flex-col bg-white blur-none">
      <div className="flex overflow-hidden relative flex-col w-full min-h-full max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="./img/feed.jfif"
          className="object-cover absolute inset-0 size-full opacity-70"
        />
        <div className="relative w-full">
          <div className="w-full">
            <Navbar />
            <div className="w-full grid grid-cols-3 md:grid-cols-3">
              <Sidebar />
              <FeedPart />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
