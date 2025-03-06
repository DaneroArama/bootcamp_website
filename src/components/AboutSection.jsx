import React from 'react';
import { motion } from 'framer-motion';
import teamPhoto from '../img/pic1.png';
import teamPhoto2 from '../img/pic2.png';
import teamPhoto3 from '../img/pic3.png';
import teamPhoto4 from '../img/pic4.png';
import uxmmlogo from '../img/uxmmlogo.png';
import BlueRingGhost from "../img/Cartoon mascot/BlueRingGhost.svg";
import RedRectangleGhost from "../img/Cartoon mascot/RedRectangleGhost.svg";
import YellowOvalGhost from "../img/Cartoon mascot/YellowOvalGhost.svg";
import One from "../img/Event Logo & Icon/Participant.svg";
import Two from "../img/Event Logo & Icon/Mentor.svg";
import Three from "../img/Event Logo & Icon/Speaker.svg";
import Four from "../img/Event Logo & Icon/Group 1000007090.svg";

export const AboutSection = () => {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Desktop Layout */}
      <div className="hidden sm:flex justify-center items-center p-10">
        <div className="grid grid-cols-5 grid-rows-6 gap-2 max-w-7xl w-full h-[800px]">
          {/* Div 1 */}
          <motion.div
            className="col-span-2 row-span-3 backdrop-blur-sm overflow-hidden"
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
              <motion.img
                src={BlueRingGhost}
                className="absolute top-0 -right-20 w-[260px] h-[260px]"
                animate={{ y: [-5, 0, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={RedRectangleGhost}
                className="absolute top-[30%] -right-20 w-[260px] h-[260px]"
                animate={{ y: [-5, 0, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.img
                src={YellowOvalGhost}
                className="absolute top-30 -right-20 w-[260px] h-[260px]"
                animate={{ y: [-5, 0, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Div 3 */}
          <motion.div
            className="col-span-2 col-start-1 row-start-4 bg-transparent flex justify-around items-center overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 rounded-full"><img src={One} alt="blue" className="w-full h-full"/></div>
            <div className="w-24 h-24 rounded-full"><img src={Two} alt="blue" className="w-full h-full"/></div>
            <div className="w-24 h-24 rounded-full"><img src={Three} alt="blue" className="w-full h-full"/></div>
            <div className="w-24 h-24 rounded-full"><img src={Four} alt="blue" className="w-full h-full"/></div>
          </motion.div>

          {/* Div 4 */}
          <motion.div
            className="col-span-2 row-span-4 col-start-1 row-start-5 bg-black border-4 border-white flex flex-wrap gap-4 justify-center items-center overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <button className="px-5 py-3 bg-white border-2 border-gray-200 rounded-full text-black font-medium text-lg">
              Community Events
            </button>
            <button className="px-5 py-3 bg-blue-600 rounded-full text-white font-medium text-lg">
              Mentorship
            </button>
            <button className="px-5 py-3 bg-pink-300 rounded-full text-black font-medium text-lg">
              Volunteer Opportunities
            </button>
            <div className="text-pink-300 font-bold text-4xl">
              DESIGN
            </div>
          </motion.div>

          {/* Div 5 */}
          <motion.div
            className="col-span-2 row-span-4 col-start-3 row-start-5 backdrop-blur-sm overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={teamPhoto3}
              alt="UX MM Team"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Div 6 */}
          <motion.div
            className="col-start-4 row-start-4 bg-transparent overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={uxmmlogo}
              alt="UXMM Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Div 7 */}
          <motion.div
            className="col-span-2 row-span-3 col-start-4 row-start-1 backdrop-blur-sm overflow-hidden"
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
            className="row-span-4 col-start-5 row-start-4 backdrop-blur-sm overflow-hidden"
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

      {/* Mobile Layout */}
      <div className="sm:hidden flex justify-center items-center p-4">
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {/* Div 1 */}
          <motion.div
            className="aspect-square overflow-hidden"
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
            className="aspect-square overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={teamPhoto2}
              alt="UX MM Team"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Div 2 */}
          <motion.div
            className="aspect-square relative overflow-hidden bg-purple-300 col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.img
                src={BlueRingGhost}
                className="absolute w-[150px] h-[150px]"
                animate={{ y: [-5, 0, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={RedRectangleGhost}
                className="absolute w-[150px] h-[150px]"
                animate={{ y: [-5, 0, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.img
                src={YellowOvalGhost}
                className="absolute w-[150px] h-[150px]"
                animate={{ y: [-5, 0, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Div 3 */}
          <motion.div
            className="col-span-2 flex justify-around items-center py-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16"><img src={One} alt="blue" className="w-full h-full"/></div>
            <div className="w-16 h-16"><img src={Two} alt="blue" className="w-full h-full"/></div>
            <div className="w-16 h-16"><img src={Three} alt="blue" className="w-full h-full"/></div>
            <div className="w-16 h-16"><img src={Four} alt="blue" className="w-full h-full"/></div>
          </motion.div>

          {/* Div 4 */}
          <motion.div
            className="col-span-2 bg-black border-2 border-white p-6 flex flex-col gap-4 items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap gap-2 justify-center">
              <button className="px-4 py-2 bg-white rounded-full text-black font-medium text-sm">
                Community Events
              </button>
              <button className="px-4 py-2 bg-blue-600 rounded-full text-white font-medium text-sm">
                Mentorship
              </button>
              <button className="px-4 py-2 bg-pink-300 rounded-full text-black font-medium text-sm">
                Volunteer Opportunities
              </button>
            </div>
            <div className="text-pink-300 font-bold text-3xl">
              DESIGN
            </div>
          </motion.div>

          {/* Div 5 */}
          <motion.div
            className="aspect-square overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={teamPhoto3}
              alt="UX MM Team"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Div 8 */}
          <motion.div
            className="aspect-square overflow-hidden"
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
            className="col-span-2 py-4 flex justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={uxmmlogo}
              alt="UXMM Logo"
              className="h-20 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};