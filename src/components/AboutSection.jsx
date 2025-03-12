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
import DESIGN from '../img/Event Logo & Icon/DESIGN.svg';
import PurpleStar from '../img/Second Icon/Purple Star.svg';
import GreenStar from '../img/Second Icon/Green Star.svg';

export const AboutSection = () => {
  const desktopRef = React.useRef(null);
  const mobileRef = React.useRef(null); // Add a separate ref for mobile
  const isDesktopInView = useInView(desktopRef, { once: true });
  const isMobileInView = useInView(mobileRef, { once: true, amount: 0.1 }); // Lower threshold for mobile // Add separate inView for mobile

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
      <div className="min-h-screen bg-transparent p-0 md:p-10">

        {/* Text Section */}
        <div className="w-full px-4 md:px-12 py-12">
          {/* About UXMM Section */}
          <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-xl md:text-2xl font-bold font-gothic uppercase tracking-wider"
            >
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.05, color: "#E9A0E9" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About UXMM
              </motion.span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-2"
            >
              <motion.p 
                className="text-xl md:text-2xl text-white leading-normal md:leading-relaxed"
                whileInView={{ 
                  textShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 8px rgba(255,255,255,0.3)", "0px 0px 0px rgba(255,255,255,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                Since 2020,
                <motion.strong 
                  className="font-bold"
                  whileHover={{ color: "#FD5359" }}
                > UXMM (User Experience Myanmar)</motion.strong> has been a{' '}
                <motion.strong 
                  className="font-bold"
                  whileHover={{ color: "#E9A0E9" }}
                >volunteer-driven, non-profit organization</motion.strong> dedicated to supporting designers through{' '}
                <motion.strong 
                  className="font-bold"
                  whileHover={{ color: "#EBFF00" }}
                >resources, education, and networking</motion.strong>.
              </motion.p>
              <motion.p 
                className="text-xl md:text-2xl text-white leading-normal md:leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                We provide
                <motion.strong 
                  className="font-bold"
                  whileHover={{ color: "#4A7BF7" }}
                > meetups, conferences, workshops, and mentorship</motion.strong> to foster innovation, collaboration, and continuous learning. Our mission is to advance{' '}
                <motion.strong 
                  className="font-bold"
                  whileHover={{ color: "#EBFF00" }}
                >design and technology</motion.strong> in Myanmar and beyond
              </motion.p>
            </motion.div>
          </div>

          {/* About Bootcamp Section */}
          <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-xl md:text-2xl font-bold font-gothic uppercase tracking-wider"
            >
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.05, color: "#EBFF00" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About Bootcamp
              </motion.span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-2"
            >
              <motion.p 
                className="text-xl md:text-2xl text-white leading-normal md:leading-relaxed"
                whileInView={{ 
                  textShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 8px rgba(235,255,0,0.3)", "0px 0px 0px rgba(255,255,255,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                Gain essential 
                <motion.strong
                  className="font-bold"
                  whileHover={{ color: "#4A7BF7" }}
                > UX/UI skills</motion.strong> in
                <motion.strong
                  className="font-bold"
                  whileHover={{ color: "#E9A0E9" }}
                > user research</motion.strong>,
                <motion.strong
                  className="font-bold"
                  whileHover={{ color: "#EBFF00" }}
                > interaction design</motion.strong>, and
                <motion.strong
                  className="font-bold"
                  whileHover={{ color: "#4A7BF7" }}
                > prototyping</motion.strong>.
              </motion.p>
              <motion.p 
                className="text-xl md:text-2xl text-white leading-normal md:leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Work on 
                <motion.strong
                  className="font-bold"
                  whileHover={{ color: "#E9A0E9" }}
                > real projects</motion.strong>, get
                <motion.strong
                  className="font-bold"
                  whileHover={{ color: "#EBFF00" }}
                > expert mentorship</motion.strong>, and build a
                <motion.strong
                  className="font-bold"
                  whileHover={{ color: "#4A7BF7" }}
                > portfolio</motion.strong> while networking. Launch your UX/UI career with
                <motion.strong
                  className="font-bold"
                  whileHover={{ scale: 1.1, color: "#EBFF00" }}
                  transition={{ type: "spring", stiffness: 300 }}
                > confidence</motion.strong>!
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex justify-center items-center px-4 md:px-12 py-12" ref={desktopRef}>
          <motion.div
              className="grid grid-cols-5 grid-rows-6 gap-2 w-full h-[800px]"
              variants={containerVariants}
              initial="hidden"
              animate={isDesktopInView ? "show" : "hidden"}
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
                className="col-span-2 row-span-4 col-start-1 row-start-5 p-3 bg-black border-4 border-white flex flex-wrap gap-0 justify-center items-center overflow-hidden"
                variants={divVariants.bottomLeft}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
              <div className="flex flex-row gap-4 justify-center items-center w-full">
                <button className="px-5 py-3 bg-black border-white border-2 rounded-full font-malinton text-2xl text-white font-medium">
                  Community Events
                </button>
                <button className="px-5 py-3 bg-[#4A7BF7] rounded-full text-black font-malinton text-2xl font-medium">
                  Mentorship
                </button>
              </div>

              <div className="flex w-full items-center justify-center relative">
                <img
                    src={PurpleStar}
                    alt="Purple Star"
                    className="w-10 h-10 absolute left-5"
                />
                <button className="px-5 py-3 bg-[#E9A0E9] rounded-full text-black text-2xl font-medium font-malinton mx-auto">
                  Volunteer Opportunities
                </button>
                <img
                    src={GreenStar}
                    alt="Green Star"
                    className="w-10 h-10 absolute right-5"
                />
              </div>

              <div className="w-full flex justify-center mt-4">
                <img
                    src={DESIGN}
                    alt="DESIGN"
                    className="w-[80%] h-auto"
                />
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
        <div className="sm:hidden flex justify-center items-center p-4" ref={mobileRef}>
          <motion.div 
              className="grid grid-cols-2 gap-4 w-full max-w-md"
              variants={containerVariants}
              initial="hidden"
              animate={isMobileInView ? "show" : "hidden"}
          >
            {/* Mobile divs content... */}
            {/* Div 1 */}
            <motion.div
                className="aspect-square overflow-hidden"
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

            {/* Div 7 */}
            <motion.div
                className="aspect-square overflow-hidden"
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

            {/* Div 2 */}
            <motion.div
                className="aspect-square relative overflow-hidden h-[200px] w-full bg-purple-300 col-span-2"
                variants={divVariants.middle}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.img
                    src={BlueRingGhost}
                    className="absolute w-[150px] h-[150px] left-0 -bottom-10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: [-5, 0, -5], 
                      opacity: 1,
                      transition: { 
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 0.5 }
                      }
                    }}
                />
                <motion.img
                    src={RedRectangleGhost}
                    className="absolute w-[150px] h-[150px] left-[30%] -bottom-10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: [-5, 0, -5], 
                      opacity: 1,
                      transition: { 
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                        opacity: { duration: 0.5, delay: 0.2 }
                      }
                    }}
                />
                <motion.img
                    src={YellowOvalGhost}
                    className="absolute w-[150px] h-[150px] left-[60%] -bottom-10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: [-5, 0, -5], 
                      opacity: 1,
                      transition: { 
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                        opacity: { duration: 0.5, delay: 0.4 }
                      }
                    }}
                />
              </div>
            </motion.div>

            {/* Div 3 */}
            <motion.div
                className="col-span-2 flex justify-around items-center py-4"
                variants={divVariants.middle}
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
                className="col-span-2 bg-black border-2 border-white p-2 flex flex-col gap-3 items-center"
                variants={divVariants.middle}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
              <div className="flex flex-row gap-4 justify-center items-center w-full">
                <button className="px-3 py-3 bg-black border border-white rounded-full font-malinton text-white font-medium">
                  Community Events
                </button>
                <button className="px-3 py-3 bg-[#4A7BF7] rounded-full text-white font-malinton font-medium">
                  Mentorship
                </button>
              </div>

              <div className="flex w-full items-center justify-center relative">
                <img
                    src={PurpleStar}
                    alt="Purple Star"
                    className="w-10 h-10 absolute left-0"
                />
                <button className="px-5 py-3 bg-[#E9A0E9] rounded-full text-black font-malinton font-medium mx-auto">
                  Volunteer Opportunities
                </button>
                <img
                    src={GreenStar}
                    alt="Green Star"
                    className="w-10 h-10 absolute right-0"
                />
              </div>

              <div className="w-full flex justify-center mt-4">
                <img
                    src={DESIGN}
                    alt="DESIGN"
                    className="w-[80%] h-auto"
                />
              </div>
            </motion.div>

            {/* Div 5 */}
            <motion.div
                className="aspect-square overflow-hidden"
                variants={divVariants.bottomLeft}
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
                variants={divVariants.bottomLeft}
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
                variants={divVariants.bottom}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
              <img
                  src={uxmmlogo}
                  alt="UXMM Logo"
                  className="h-20 object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
  );
};