import React from 'react';
export function Component() {
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {/* Left side: Logo or Application Name */}
      <div className="flex items-center">
        <img src="/Users/stanislav/Neural-Inspired-Knowledge-Database/frontend/src/assets/qan.png" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          CogsFlow.ai
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


