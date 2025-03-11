import React from 'react';
import { motion } from 'framer-motion';
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
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-emerald-400 p-10 border-black border-4 text-white flex flex-col justify-between cursor-pointer relative overflow-hidden"
                    >
                        <motion.img
                            src={GreenGhost}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        />
                        <h3 className="text-3xl font-bold mb-6 font-gothic relative z-10">Think, Sprint, Design</h3>
                        <div className="relative z-10">
                            <p className="text-2xl font-semibold font-malinton">1st Myanmar In-person Bootcamp</p>
                            <p className="font-malinton text-xl">2025</p>
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-red-300 p-10 border-black border-4 text-white flex flex-col justify-between cursor-pointer relative overflow-hidden"
                    >
                        <motion.img
                            src={RedRectangleGhost}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        />
                        <h3 className="text-3xl font-bold mb-1 font-gothic relative z-10">LOCATION</h3>
                        <div className="relative z-10">
                            <p className="text-2xl font-semibold mt-8 mb-0 font-malinton">CTZPay Office</p>
                            <LinkPreview
                                url="https://maps.app.goo.gl/noQkfVBmHF4yjzwC8"
                                className="font-malinton text-lg"
                            >Yangon Innovation Centre (YIC) , Kyan Mar Yay Seik Khan</LinkPreview>
                        </div>
                    </motion.div>

                    {/* Attendees Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-blue-500 p-10 border-black border-4 text-white flex flex-col justify-between cursor-pointer relative overflow-hidden"
                    >
                        <motion.img
                            src={BlueSquishyGhost}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        />
                        <h3 className="text-3xl font-bold mb-6 font-gothic relative z-10">DATE & TIME</h3>
                        <div className="relative z-10">
                            <p className="text-2xl font-semibold font-malinton">April 5th to 6th</p>
                            <p className="font-malinton text-xl">9am to 4pm</p>
                        </div>
                    </motion.div>

                    {/* Register Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-[#F5B041] p-10 border-black border-4 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                    >
                        <motion.img
                            src={YellowOvalGhost}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        />
                        <h3 className="text-3xl font-bold mb-6 font-gothic relative z-10">Register</h3>
                        <div className="relative z-10">
                            <p className="text-2xl font-semibold mb-6 font-malinton">Stay Tuned</p>
                            <p className="font-malinton text-xl">Will Be Announced</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Mentors, Speakers & Opportunities Section */}
                <motion.div 
                    className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1.2fr_1.6fr] gap-6 mt-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-50px" }}
                >
                    {/* Mentors Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-purple-200 p-8 border-black border-4 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                    >
                        <motion.img
                            src={Mentor}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        />
                        <h3 className="text-3xl font-bold mb-6 font-gothic relative z-10">MENTORS</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row ">
                                <AnimatedAvatar items={mentor}/>
                            </div>
                            <p className="text-xl font-malinton relative z-10">Over 20+ Mentors</p>
                        </div>
                    </motion.div>

                    {/* Speakers Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-purple-500 p-8 border-black border-4 text-white flex flex-col justify-between cursor-pointer relative overflow-hidden"
                    >
                        <motion.img
                            src={Speaker}
                            className="absolute -right-5 bottom-10 w-[180px] h-[180px]"
                            animate={{ y: [-8, 0, -8] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        />
                        <h3 className="text-3xl font-bold mb-6 font-gothic relative z-10">SPEAKERS</h3>
                        <div className="flex relative z-10">
                            <AnimatedAvatar items={mentor}/>
                        </div>
                        <p className="text-xl font-malinton relative z-10">Ko Lamin & Ko Harry</p>
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