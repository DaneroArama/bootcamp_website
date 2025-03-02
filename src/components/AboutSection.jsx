import React from 'react';
import { motion } from 'framer-motion';
import teamPhoto from '../img/pic1.png';
import teamPhoto2 from '../img/pic2.png';
import teamPhoto3 from '../img/pic3.png';
import teamPhoto4 from '../img/pic4.png';
import uxmmlogo from '../img/uxmmlogo.png';

export const AboutSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-transparent">
      <div className="grid grid-cols-5 grid-rows-3 gap-2 max-w-7xl w-full">

        <motion.div
          className="row-span-2 col-span-2 bg-red-300 backdrop-blur-sm overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={teamPhoto}
            alt="UX MM Team"
            className="w-full h-full  object-contain object-center"
          />
        </motion.div>

          <motion.div
              className="row-span-3 col-span-1 bg-red-300 backdrop-blur-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
          >
              <img
                  src={teamPhoto}
                  alt="UX MM Team"
                  className="w-full h-full  object-contain object-center"
              />
          </motion.div>

          <motion.div
              className="row-span-2 col-span-2 bg-red-300 backdrop-blur-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
          >
              <img
                  src={teamPhoto}
                  alt="UX MM Team"
                  className="w-full h-full  object-contain object-center"
              />
          </motion.div>

          <motion.div
              className="row-span-1 col-span-2 bg-red-300 backdrop-blur-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
          >
              <img
                  src={teamPhoto}
                  alt="UX MM Team"
                  className="w-full h-full  object-contain object-center"
              />
          </motion.div>


      </div>
    </div>
  );
};