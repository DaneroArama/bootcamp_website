import React from 'react';
import teamPhoto from '../img/pic1.png';

export const AboutSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-transparent">
      <div className="grid grid-cols-5 grid-rows-3 gap-2 max-w-7xl w-full">
        <div className="row-span-2 overflow-hidden rounded-2xl">
            <img 
              src={teamPhoto}
              alt="UX mm Team" 
              className="w-full h-full object-cover object-center"
            />
        </div>

        <div className="row-span-3 bg-gray-300 flex items-center justify-center">
            2
        </div>

        <div className="col-start-1 row-start-3 bg-gray-400 flex items-center justify-center">
            3
        </div>

        <div className="row-span-2 col-start-1 row-start-4 bg-gray-500 flex items-center justify-center">
            4
        </div>

        <div className="col-span-2 row-span-2 col-start-2 row-start-4 bg-gray-600 flex items-center justify-center">
            5
        </div>

        <div className="col-span-2 row-span-2 col-start-3 row-start-1 bg-gray-700 flex items-center justify-center">
            6
        </div>

        <div className="col-start-3 row-start-3 bg-gray-800 flex items-center justify-center">
            7
        </div>

        <div className="row-span-3 col-start-4 row-start-3 bg-gray-900 flex items-center justify-center text-white">
            8
        </div>
      </div>
    </div>
  );
};