import React from 'react';
import { motion, useInView } from 'framer-motion';
import teamPhoto from '../img/pic1.webp';
import teamPhoto2 from '../img/pic2.webp';
import teamPhoto3 from '../img/pic3.webp';
import teamPhoto4 from '../img/pic4.webp';
import uxmmlogo from '../img/uxmmlogo.png';
import BlueRingGhost from "../img/Cartoon mascot/BlueRingGhost.svg";
import RedRectangleGhost from "../img/Cartoon mascot/RedRectangleGhost.svg";
import YellowOvalGhost from "../img/Cartoon mascot/YellowOvalGhost.svg";
import One from "../img/Event Logo & Icon/Participant.svg";
import Two from "../img/Event Logo & Icon/Mentor.svg";
import Three from "../img/Event Logo & Icon/Speaker.svg";
import Four from "../img/Event Logo & Icon/Group 1000007090.svg";

export const AboutSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const divVariants = {
    // Div 1 (top-left)
    topLeft: {
      hidden: { x: -100, y: -100, opacity: 0 },
      show: { x: 0, y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    },
    // Div 2 (middle)
    middle: {
      hidden: { scale: 0, opacity: 0 },
      show: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    },
    // Div 3 (left)
    left: {
      hidden: { x: -100, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    },
    // Div 4 (bottom-left)
    bottomLeft: {
      hidden: { x: -100, y: 100, opacity: 0 },
      show: { x: 0, y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    },
    // Div 5 (bottom)
    bottom: {
      hidden: { y: 100, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    },
    // Div 6 (center-right)
    centerRight: {
      hidden: { x: 100, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    },
    // Div 7 (top-right)
    topRight: {
      hidden: { x: 100, y: -100, opacity: 0 },
      show: { x: 0, y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    },
    // Div 8 (bottom-right)
    bottomRight: {
      hidden: { x: 100, y: 100, opacity: 0 },
      show: { x: 0, y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    },
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Text Section */}
      <div className="w-full px-4 md:px-12 py-12">
        {/* About UXMM Section */}
        <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-8 mb-16">
          <div className="text-white text-2xl md:text-3xl font-bold font-gothic uppercase tracking-wider">
            About UXMM
          </div>
          <div className="space-y-2">
            <p className="text-xl md:text-3xl text-white leading-normal md:leading-relaxed">
              Since 2020,
              <strong className="font-bold"> UXMM (User Experience Myanmar)</strong> has been a{' '}
              <strong className="font-bold">volunteer-driven, non-profit organization</strong> dedicated to supporting designers through{' '}
              <strong className="font-bold">resources, education, and networking</strong>.
            </p>
            <p className="text-xl md:text-3xl text-white leading-normal md:leading-relaxed">
              We provide 
              <strong className="font-bold"> meetups, conferences, workshops, and mentorship</strong> to foster innovation, collaboration, and continuous learning. Our mission is to advance{' '}
              <strong className="font-bold">design and technology</strong> in Myanmar and beyond
            </p>
          </div>
        </div>

        {/* About Bootcamp Section */}
        <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-8">
          <div className="text-white text-2xl md:text-3xl font-bold font-gothic uppercase tracking-wider">
            About Bootcamp
          </div>
          <div className="space-y-2">
            <p className="text-xl md:text-3xl text-white leading-normal md:leading-relaxed">
              Gain essential UX/UI skills in user research, interaction design, and prototyping.
            </p>
            <p className="text-xl md:text-3xl text-white leading-normal md:leading-relaxed">
              Work on real projects, get expert mentorship, and build a portfolio while networking. Launch your UX/UI career with confidence!
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex justify-center items-center px-4 md:px-12 py-12" ref={ref}>
        <motion.div 
          className="grid grid-cols-5 grid-rows-6 gap-2 w-full h-[800px]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Div 1 */}
          <motion.div
            className="col-span-2 row-span-3 backdrop-blur-sm overflow-hidden"
            variants={divVariants.topLeft}
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
            variants={divVariants.middle}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-end h-full">
              <motion.img
                src={BlueRingGhost}
                className="absolute top-0 -right-20 w-[260px] h-[260px]"
                initial={{ rotate: -90 }}
                animate={{ y: [-5, 0, -5], rotate: -90 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={RedRectangleGhost}
                className="absolute top-[30%] -right-20 w-[260px] h-[260px]"
                initial={{ rotate: -90 }}
                animate={{ y: [-5, 0, -5], rotate: -90 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.img
                src={YellowOvalGhost}
                className="absolute top-30 -right-20 w-[260px] h-[260px]"
                initial={{ rotate: -90 }}
                animate={{ y: [-5, 0, -5], rotate: -90 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Div 3 */}
          <motion.div
            className="col-span-2 col-start-1 row-start-4 bg-transparent flex justify-around items-center overflow-hidden"
            variants={divVariants.left}
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
            variants={divVariants.bottomLeft}
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
            variants={divVariants.bottom}
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
            variants={divVariants.centerRight}
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
            variants={divVariants.topRight}
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
            variants={divVariants.bottomRight}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={teamPhoto4}
              alt="UX MM Team"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
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
            className="aspect-square relative overflow-hidden h-[200px] w-full bg-purple-300 col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.img
                src={BlueRingGhost}
                className="absolute w-[150px] h-[150px] left-0 -bottom-10"
                animate={{ y: [-5, 0, -5]}}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={RedRectangleGhost}
                className="absolute w-[150px] h-[150px] left-[30%] -bottom-10"
                animate={{ y: [-5, 0, -5]}}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.img
                src={YellowOvalGhost}
                className="absolute w-[150px] h-[150px] left-[60%] -bottom-10"
                animate={{ y: [-5, 0, -5]}}
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