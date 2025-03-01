import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Squares from './SquareBackground';
import attendee1 from '../img/Logo.png'; // Adjust the path as necessary
import attendee2 from '../img/Logo.png'; // Adjust the path as necessary
import attendee3 from '../img/Logo.png'; // Adjust the path as necessary
import mentor1 from '../img/Logo.png'; // Adjust the path as necessary
import mentor2 from '../img/Logo.png'; // Adjust the path as necessary
import mentor3 from '../img/Logo.png'; // Adjust the path as necessary
import speaker1 from '../img/Logo.png'; // Adjust the path as necessary
import speaker2 from '../img/Logo.png'; // Adjust the path as necessary

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Hero Section with Scroll-based Pin */}
                <div className="left-0 right-0 z-10 flex items-center justify-center py-12">
                    <div className="max-w-8xl mx-auto text-center space-y-4 text-white">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                            Design Your <span className="bg-[#F5B041] px-8 py-3 text-2xl md:text-2xl lg:text-5xl rounded-full">Future</span> with
                        </h1>
                        <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold">
                            Real-W<span className="text-green-500">🍀</span>rld
                            <span className="inline-flex items-center space-x-2 border-2 border-purple-500 rounded-full px-6 py-2 text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out cursor-pointer">
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
                            </span>
                            Experience
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
                        className="bg-emerald-500 p-10 border-black border-4 text-white flex flex-col justify-between cursor-pointer"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-gothic">Think, Sprint, Design</h3>
                        <div>
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
                        className="bg-red-400 p-10 border-black border-4 text-white flex flex-col justify-between cursor-pointer"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-gothic">LOCATION</h3>
                        <div>
                            <p className="text-2xl font-semibold mb-6 font-malinton">Citizens Pay Office</p>
                            <p className="font-malinton text-lg">Yangon Innovation Centre (YIC) , Kyan Mar Yay Seik Khan</p>
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
                        className="bg-blue-500 p-10 border-black border-4 text-white flex flex-col justify-between cursor-pointer"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-gothic">DATE & TIME</h3>
                        <div>
                            <p className="text-2xl font-semibold font-malinton">April 5th to 6th</p>
                            <p className="font-malinton text-xl">9am to 4pm</p>
                        </div>
                    </motion.div>

                    {/* Date & Time Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-[#F5B041] p-10 border-black border-4 flex flex-col justify-between cursor-pointer"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-gothic">Register</h3>
                        <div>
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
                        className="bg-purple-200 p-8 border-black border-4 flex flex-col justify-between cursor-pointer"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-gothic">MENTORS</h3>
                        <div className="flex mb-6">
                            <img src={mentor1} alt="Mentor 1" className="w-12 h-12 rounded-full -mr-2" />
                            <img src={mentor2} alt="Mentor 2" className="w-12 h-12 rounded-full -mr-2" />
                            <img src={mentor3} alt="Mentor 3" className="w-12 h-12 rounded-full" />
                        </div>
                        <p className="text-xl font-malinton">Over 20+ Mentors</p>
                        <p className="text-xl font-malinton"> From Different Industry Experts</p>
                    </motion.div>

                    {/* Speakers Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-purple-500 p-8 border-black border-4 text-white flex flex-col justify-between cursor-pointer"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-gothic">SPEAKERS</h3>
                        <div className="flex">
                            <img src={speaker1} alt="Speaker 1" className="w-12 h-12 rounded-full -mr-2" />
                            <img src={speaker2} alt="Speaker 2" className="w-12 h-12 rounded-full" />
                        </div>
                        <p className="text-xl font-malinton">Ko Lamin & Ko Harry</p>
                    </motion.div>

                    {/* Opportunities Section */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-white p-8 border-black border-4 relative flex flex-col justify-between cursor-pointer"
                    >
                        <div className="flex flex-wrap gap-4 justify-center items-center">
                            <div className="bg-purple-600 rounded-full p-3">
                                <div className="w-8 h-8 text-white">&#8594;</div>
                            </div>
                            <button className="px-8 py-3 bg-white border-2 border-gray-200 rounded-full text-black font-medium text-lg">
                                Community Events
                            </button>
                            <button className="px-8 py-3 bg-blue-600 rounded-full text-white font-medium text-lg">
                                Mentorship
                            </button>
                            <button className="px-8 py-3 bg-pink-300 rounded-full text-black font-medium text-lg">
                                Volunteer Opportunities
                            </button>
                            <button className="px-8 py-3 bg-white border-2 border-gray-200 rounded-full text-black font-medium text-lg">
                                Research
                            </button>
                            <button className="px-8 py-3 bg-white border-2 border-gray-200 rounded-full text-blue-600 font-medium text-lg">
                                Jobs
                            </button>
                            <button className="px-8 py-3 bg-[#F5B041] rounded-full text-black font-medium text-lg">
                                Internship
                            </button>
                            <button className="px-8 py-3 bg-black rounded-full text-white font-medium text-lg">
                                Service
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};