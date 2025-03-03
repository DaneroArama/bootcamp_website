import React from 'react';
import { motion } from 'framer-motion';
import teamPhoto from '../img/pic1.png';
import teamPhoto2 from '../img/pic2.png';
import teamPhoto3 from '../img/pic3.png';
import teamPhoto4 from '../img/pic4.png';
import uxmmlogo from '../img/uxmmlogo.png';
import GreenGhost from "../img/Cartoon mascot/GreenGhost.svg";
import BlueRingGhost from "../img/Cartoon mascot/BlueRingGhost.svg";
import RedRectangleGhost from "../img/Cartoon mascot/RedRectangleGhost.svg";
import YellowOvalGhost from "../img/Cartoon mascot/YellowOvalGhost.svg";

export const AboutSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-transparent">
      <div className="grid grid-cols-5 grid-rows-5 gap-2 max-w-7xl w-full h-[800px]">
        {/* Div 1 */}
        <motion.div
          className="col-span-2 row-span-3 bg-red-300 backdrop-blur-sm overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={teamPhoto}
            alt="UX MM Team"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Div 2 */}
        <motion.div
          className="col-start-3 row-span-4 relative overflow-hidden bg-purple-300"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-end h-full">
            {/* Blue Ghost */}
            <motion.img
              src={BlueRingGhost}
              className="absolute top-0 w-[110px] h-[110px] md:w-[260px] md:h-[260px] rotate-45"
              animate={{ y: [-5, 0, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Red Ghost */}
            <motion.img
              src={RedRectangleGhost}
              className="absolute top-24 w-[110px] h-[110px] md:w-[260px] md:h-[260px] rotate-45"
              animate={{ y: [-5, 0, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            {/* Yellow Ghost */}
            <motion.img
              src={YellowOvalGhost}
              className="absolute top-25 w-[110px] h-[110px] md:w-[260px] md:h-[260px] rotate-45"
              animate={{ y: [-5, 0, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Div 3 */}
        <motion.div
          className="col-span-2 col-start-1 row-start-4 bg-green-300 backdrop-blur-sm overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={teamPhoto3}
            alt="UX MM Team"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Div 4 */}
        <motion.div
          className="col-span-2 row-span-3 col-start-1 row-start-5 bg-yellow-300 backdrop-blur-sm overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={teamPhoto4}
            alt="UX MM Team"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Div 6 */}
        <motion.div
          className="col-span-2 row-span-3 col-start-3 row-start-5 bg-purple-300 backdrop-blur-sm overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={teamPhoto}
            alt="UX MM Team"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Div 7 */}
        <motion.div
          className="col-start-4 row-start-4 bg-pink-300 backdrop-blur-sm overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={teamPhoto2}
            alt="UX MM Team"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Div 8 */}
        <motion.div
          className="col-span-2 row-span-3 col-start-4 row-start-1 bg-indigo-300 backdrop-blur-sm overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={teamPhoto3}
            alt="UX MM Team"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Div 9 */}
        <motion.div
          className="row-span-3 col-start-5 row-start-4 bg-teal-300 backdrop-blur-sm overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={teamPhoto4}
            alt="UX MM Team"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};