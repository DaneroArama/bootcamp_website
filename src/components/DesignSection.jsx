import React from 'react';

export const DesignSection = () => {
  return (
      <div className="flex flex-wrap gap-4 p-4">
        <div
            className="bg-green-500 w-full md:w-1/3 h-40 border-2 border-black rounded-lg shadow-lg transition-transform transform hover:scale-105"></div>
        <div className="bg-pink-200 w-full md:w-1/3 h-40 border-2 border-black rounded-lg shadow-lg relative">
          <div className="absolute top-0 left-0 flex flex-col items-center space-y-2 p-2">
            <div
                className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-transform transform hover:scale-110">
              <span className="text-white">😊</span>
            </div>
            <div
                className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-transform transform hover:scale-110">
              <span className="text-white">😊</span>
            </div>
            <div
                className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-transform transform hover:scale-110">
              <span className="text-white">😊</span>
            </div>
          </div>
        </div>
        <div
            className="bg-black w-full md:w-1/3 h-40 border-2 border-black flex items-center justify-center rounded-lg shadow-lg">
          <span className="text-purple-500 text-3xl font-bold">design!</span>
        </div>
        <div
            className="bg-green-500 w-full md:w-1/3 h-40 border-2 border-black rounded-lg shadow-lg transition-transform transform hover:scale-105"></div>
        <div
            className="bg-green-500 w-full md:w-1/3 h-40 border-2 border-black rounded-lg shadow-lg transition-transform transform hover:scale-105"></div>
        <div
            className="bg-green-500 w-full md:w-1/3 h-40 border-2 border-black rounded-lg shadow-lg transition-transform transform hover:scale-105"></div>
      </div>
  );
};