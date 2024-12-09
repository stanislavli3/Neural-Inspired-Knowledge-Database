import React from 'react';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {/* Left side: Logo or Application Name */}
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Your App Name
        </span>
      </div>

      {/* Right side: Profile Picture */}
      {/*
      <div className="flex items-center">
        <img
          src="/path/to/profile.jpg"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      </div>
      */}
    </div>
  );
};

export default TopBar;

