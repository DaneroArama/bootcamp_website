import React from 'react';

export const DesignSection = () => {
  return (
      <>
          <div className="grid grid-cols-5 grid-rows-3 gap-2 h-full">
              <div className="row-span-2 bg-gray-200 flex items-center justify-center">1</div>
              <div className="row-span-3 bg-gray-300 flex items-center justify-center">2</div>
              <div className="col-start-1 row-start-3 bg-gray-400 flex items-center justify-center">3</div>
              <div className="row-span-2 col-start-1 row-start-4 bg-gray-500 flex items-center justify-center">4</div>
              <div className="col-span-2 row-span-2 col-start-2 row-start-4 bg-gray-600 flex items-center justify-center">5</div>
              <div className="col-span-2 row-span-2 col-start-3 row-start-1 bg-gray-700 flex items-center justify-center">6</div>
              <div className="col-start-3 row-start-3 bg-gray-800 flex items-center justify-center">7</div>
              <div className="row-span-3 col-start-4 row-start-3 bg-gray-900 flex items-center justify-center text-white">8</div>
          </div>
          );
      </>
  );
};