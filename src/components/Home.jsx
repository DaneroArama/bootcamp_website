import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mentor1 from "../img/Mentors/Ko Myo Maung Maung.webp"; // Adjust the path as necessary
import mentor2 from "../img/Mentors/Barry.webp"; // Adjust the path as necessary
import mentor3 from "../img/Mentors/Min Nanda Zan.webp"; // Adjust the path as necessary
import mentor4 from "../img/Mentors/Zwekaunghtet.webp";
import mentor5 from "../img/Mentors/Aye Chan Pyae.webp";
import speaker1 from '../img/Logo.png'; // Adjust the path as necessary
import speaker2 from '../img/Logo.png'; // Adjust the path as necessary
import speaker3 from '../img/Logo.png'; // Adjust the path as necessary
import speaker4 from '../img/Logo.png'; // Adjust the path as necessary
import speaker5 from '../img/Logo.png'; // Adjust the path as necessary
import YIC from '../img/YIC.png';
import BlueSquishyGhost from '../img/Cartoon mascot/BlueSquishyGhost.svg';
import GreenGhost from '../img/Cartoon mascot/GreenGhost.svg';
import RedRectangleGhost from '../img/Cartoon mascot/RedRectangleGhost.svg';
import YellowOvalGhost from '../img/Cartoon mascot/YellowOvalGhost.svg';
import Mentor from '../img/Event Logo & Icon/Mentor.svg'
import Speaker from '../img/Event Logo & Icon/Speaker.svg'
import BlueFlower from '../img/Second Icon/Blue Flower.svg';
import GreenStar from '../img/Second Icon/Green Star.svg';
import { LinkPreview } from "./ui/LinkPreview";
import AnimatedAvatar from "./ui/AnimatedAvatar";
gsap.registerPlugin(ScrollTrigger);

const mentor = [
    {
        id: 1,
        name: "Ko Myo Maung Maung",
        designation: "Mentor",
        image: mentor1
    },
    {
        id: 2,
        name: "Ko Khant",
        designation: "Mentor",
        image: mentor2
   },
    {
        id: 3,
        name: "Min Nanda Zan",
        designation: "Mentor",
        image: mentor3
    },
    {
        id: 4,
        name: "Zwe Kaung Htet",
        designation: "Mentor",
        image: mentor4
    },
    {
        id: 5,
        name: "Aye Chan Pyae",
        designation: "Mentor",
        image: mentor5
    },
];

export const Home = () => {
    // Create refs for each card to track mouse position
    const bootcampCardRef = useRef(null);
    const locationCardRef = useRef(null);
    const dateCardRef = useRef(null);
    const registerCardRef = useRef(null);
    const mentorsCardRef = useRef(null);
    const speakersCardRef = useRef(null);

    // Function to handle the magnetic effect
    const useMagneticGhost = (ref) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        
        // Add spring physics for smoother movement
        const springConfig = { damping: 15, stiffness: 150 };
        const springX = useSpring(x, springConfig);
        const springY = useSpring(y, springConfig);

        const handleMouseMove = (e) => {
            if (!ref.current) return;
            
            const rect = ref.current.getBoundingClientRect();
            
            // Calculate center of the card
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Calculate distance from mouse to center
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            
            // Set motion values with some dampening
            x.set(distanceX / 8);
            y.set(distanceY / 8);
        };

        const handleMouseLeave = () => {
            // Reset position when mouse leaves
            x.set(0);
            y.set(0);
        };

        return {
            x: springX,
            y: springY,
            handleMouseMove,
            handleMouseLeave
        };
    };

    // Create magnetic effects for each ghost
    const greenGhostMagnetic = useMagneticGhost(bootcampCardRef);
    const redGhostMagnetic = useMagneticGhost(locationCardRef);
    const blueGhostMagnetic = useMagneticGhost(dateCardRef);
    const yellowGhostMagnetic = useMagneticGhost(registerCardRef);
    const mentorGhostMagnetic = useMagneticGhost(mentorsCardRef);
    const speakerGhostMagnetic = useMagneticGhost(speakersCardRef);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Hero Section with Scroll-based Pin */}
                <div className="left-0 right-0 z-10 flex items-center justify-center py-12">
                    <div className="max-w-8xl mx-auto text-center space-y-4 text-white">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                            Design Your <span className="bg-[#F5B041] px-8 py-3 text-2xl md:text-2xl lg:text-5xl rounded-full">Future</span> with <img src={BlueFlower} alt="Yellow Star" className="inline-block w-12 h-12" />
                        </h1>
                        <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold">
                            Real-W<img src={GreenStar} alt="Green Star" className="inline-block w-10 h-10" />rld <span className="inline-flex items-center space-x-2 border-2 border-purple-500 rounded-full px-6 py-2 text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out cursor-pointer">
                                <svg 
                                    className="w-60 h-11 pl-5"
                                    viewBox="0 0 200 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line 
                                        x1="0" 
                                        y1="12" 
                                        x2="180" 
                                        y2="12" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                    />
                                    <line 
                                        x1="160" 
                                        y1="2" 
                                        x2="180" 
                                        y2="12" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                    />
                                    <line 
                                        x1="160" 
                                        y1="22" 
                                        x2="180" 
                                        y2="12" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                    />
                                </svg>
                            </span> Experience
                        </h1>
                    </div>
                </div>


            {/* Cards Section */}
            <div className="relative z-10 px-4 md:px-8 lg:px-10 py-10">
                {/* Info Cards Grid */}
                <motion.div 
                    className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1.6fr_1.3fr_1.2fr] gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-50px" }}
                >
                    {/* Bootcamp Card */}
                    <motion.div
                        ref={bootcampCardRef}
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-emerald-400 p-7 border-black border-4 text-white flex flex-col justify-between cursor-pointer relative overflow-hidden"
                        onMouseMove={greenGhostMagnetic.handleMouseMove}
                        onMouseLeave={greenGhostMagnetic.handleMouseLeave}
                    >
                        <motion.img
                            src={GreenGhost}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            style={{ 
                                x: greenGhostMagnetic.x,
                                y: greenGhostMagnetic.y
                            }}
                        />
                        <h3 className="text-xl mb-16 font-gothic relative z-10">Think, Sprint, Design</h3>
                        <div className="relative z-10">
                            <p className="text-3xl font-semibold font-malinton">1st Myanmar In-person Bootcamp</p>
                            <p className="font-malinton text-xl">2025</p>
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        ref={locationCardRef}
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-red-500 p-7 border-black border-4 text-white flex flex-col justify-between cursor-pointer relative overflow-hidden"
                        onMouseMove={redGhostMagnetic.handleMouseMove}
                        onMouseLeave={redGhostMagnetic.handleMouseLeave}
                    >
                        <motion.img
                            src={RedRectangleGhost}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            style={{ 
                                x: redGhostMagnetic.x,
                                y: redGhostMagnetic.y
                            }}
                        />
                        <h3 className="text-xl mb-16 font-gothic relative z-10">LOCATION</h3>
                        <div className="relative z-10">
                            <LinkPreview
                                className="text-3xl font-semibold mt-8 mb-0 font-malinton"
                                url="https://maps.app.goo.gl/noQkfVBmHF4yjzwC8"
                                imageSrc={YIC}
                                isStatic={true}
                            >
                                <p>CTZPay Office</p>
                            </LinkPreview>

                            <LinkPreview
                                url="https://maps.app.goo.gl/noQkfVBmHF4yjzwC8"
                                className="font-malinton text-lg"
                                imageSrc={YIC}
                                isStatic={true}
                            >
                                Yangon Innovation Centre (YIC) , Kyan Mar Yay Seik Khan
                            </LinkPreview>
                        </div>
                    </motion.div>

                    {/* Attendees Card */}
                    <motion.div
                        ref={dateCardRef}
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-blue-500 p-7 border-black border-4 text-white flex flex-col justify-between cursor-pointer relative overflow-hidden"
                        onMouseMove={blueGhostMagnetic.handleMouseMove}
                        onMouseLeave={blueGhostMagnetic.handleMouseLeave}
                    >
                        <motion.img
                            src={BlueSquishyGhost}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            style={{ 
                                x: blueGhostMagnetic.x,
                                y: blueGhostMagnetic.y
                            }}
                        />
                        <h3 className="text-xl mb-16 font-gothic relative z-10">DATE & TIME</h3>
                        <div className="relative z-10">
                            <p className="text-3xl font-semibold font-malinton">April 5th to 6th</p>
                            <p className="font-malinton text-xl">9am to 4pm</p>
                        </div>
                    </motion.div>

                    {/* Register Card */}
                    <motion.div
                        ref={registerCardRef}
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-[#f6c575] p-7 border-black border-4 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                        onMouseMove={yellowGhostMagnetic.handleMouseMove}
                        onMouseLeave={yellowGhostMagnetic.handleMouseLeave}
                    >
                        <motion.img
                            src={YellowOvalGhost}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            style={{ 
                                x: yellowGhostMagnetic.x,
                                y: yellowGhostMagnetic.y
                            }}
                        />
                        <h3 className="text-xl mb-16 font-gothic relative z-10">Register</h3>
                        <div className="relative z-10">
                            <p className="text-3xl font-semibold mb-6 font-malinton">Stay Tuned</p>
                            <p className="font-malinton text-xl">Will Be Announced</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* TRAINERS, Speakers & Opportunities Section */}
                <motion.div 
                    className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1.2fr_1.6fr] gap-6 mt-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-50px" }}
                >
                    {/* Mentors Card */}
                    <motion.div
                        ref={mentorsCardRef}
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-purple-300 p-7 border-black border-4 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                        onMouseMove={mentorGhostMagnetic.handleMouseMove}
                        onMouseLeave={mentorGhostMagnetic.handleMouseLeave}
                    >
                        <motion.img
                            src={Mentor}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            style={{ 
                                x: mentorGhostMagnetic.x,
                                y: mentorGhostMagnetic.y
                            }}
                        />
                        <h3 className="text-xl mb-16 font-gothic relative z-10">TRAINERS</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row ">
                                <AnimatedAvatar items={mentor}/>
                            </div>
                            <p className="text-xl font-malinton relative z-10">Over 20+ Trainers</p>
                        </div>
                    </motion.div>

                    {/* Speakers Card */}
                    <motion.div
                        ref={speakersCardRef}
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-purple-600 p-7 border-black border-4 text-white flex flex-col justify-between cursor-pointer relative overflow-hidden"
                        onMouseMove={speakerGhostMagnetic.handleMouseMove}
                        onMouseLeave={speakerGhostMagnetic.handleMouseLeave}
                    >
                        <motion.img
                            src={Speaker}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            style={{ 
                                x: speakerGhostMagnetic.x,
                                y: speakerGhostMagnetic.y
                            }}
                        />
                        <h3 className="text-xl mb-16 font-gothic relative z-10">SPEAKERS</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row ">
                                <AnimatedAvatar items={mentor}/>
                            </div>
                            <p className="text-xl font-malinton relative z-10">Ko Lamin & Ko Harry</p>
                        </div>
                        </motion.div>

                    {/* Opportunities Section */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-white p-6 border-black border-4 relative flex flex-col justify-between font-malinton cursor-pointer overflow-hidden"
                    >
                        <div className="flex flex-wrap gap-3 justify-center items-center">
                            <button className="px-5 py-3 bg-white rounded-full border-2 border-black text-black font-medium text-lg flex items-center">
                                <span className="mr-2">→</span>
                                Community Events
                            </button>
                            <button className="px-5 py-3 bg-blue-600 rounded-full text-black font-medium text-lg">
                                Mentorship
                            </button>
                            <img src={require('../img/Second Icon/Yellow Star.svg').default} alt="Yellow Star" className="w-12 h-12" />
                            <button className="px-5 py-3 bg-pink-300 rounded-full text-black font-medium text-lg">
                                Volunteer Opportunities
                            </button>
                            <button className="px-5 py-3 bg-white border-2 border-black rounded-full text-black font-medium text-lg">
                                Research
                            </button>
                            <button className="px-5 py-3 bg-white border-2 border-blue-600 rounded-full text-blue-600 font-medium text-lg">
                                Jobs
                            </button>
                            <button className="px-5 py-3 bg-[#F5B041] rounded-full text-black font-medium text-lg">
                                Internship
                            </button>
                            <img src={require('../img/Second Icon/Purple Star.svg').default} alt="Purple Star" className="w-10 h-10" />
                            <button className="px-8 py-3 bg-black rounded-full text-white font-medium text-lg">
                                Service
                            </button>
                            <img src={require('../img/Second Icon/Green Star.svg').default} alt="Green Star" className="w-12 h-12" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};