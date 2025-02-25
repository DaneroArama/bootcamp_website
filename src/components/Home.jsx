import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import Squares from './SquareBackground';
import attendee1 from '../img/Logo.png'; // Adjust the path as necessary
import attendee2 from '../img/Logo.png'; // Adjust the path as necessary
import attendee3 from '../img/Logo.png'; // Adjust the path as necessary
import mentor1 from '../img/Logo.png'; // Adjust the path as necessary
import mentor2 from '../img/Logo.png'; // Adjust the path as necessary
import mentor3 from '../img/Logo.png'; // Adjust the path as necessary
import speaker1 from '../img/Logo.png'; // Adjust the path as necessary
import speaker2 from '../img/Logo.png'; // Adjust the path as necessary

export const Home = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Transform for hero section with smoother transition
    const heroY = useTransform(
        scrollYProgress,
        [0, 0.7, 1],        // Three points for smoother movement
        [0, -300, -400],    // Gradual movement values
    );
    
    // Smoother scale transition
    const heroScale = useTransform(
        scrollYProgress,
        [0, 0.7],         // Longer scale duration
        [1.2, 1]
    );
    
    // Keep opacity smooth
    const heroOpacity = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 1]
    );

    // Smoother position transition
    const heroPosition = useTransform(
        scrollYProgress,
        [0, 0.95, 1],     // Three points for smooth transition
        ['fixed', 'fixed', 'absolute']  // Position values
    );
    
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0">
                <Squares
                    direction="diagonal"
                    speed={0.2}
                    borderColor="#ffffff"
                    squareSize={80}
                    hoverFillColor="rgba(245, 176, 65, 0.1)"
                />
            </div>

            {/* Hero Section with Scroll-based Pin */}
            <div ref={heroRef} className="h-[100vh] relative">
                <motion.div
                    className="left-0 right-0 z-10 flex items-center justify-center h-screen"
                    style={{
                        y: heroY,
                        scale: heroScale,
                        opacity: heroOpacity,
                        position: heroPosition, // Use the transform for positioning
                        top: 0,                   // Remove the conflicting top property
                    }}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-7xl mx-auto text-center space-y-4 text-white">
                        <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold">
                            Design Your <span className="bg-[#F5B041] px-8 py-3 text-xl md:text-xl lg:text-5xl rounded-full">Future</span> with
                        </h1>
                        <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold">
                            Real-W<span className="text-green-500">🍀</span>rld <span className="inline-flex items-center space-x-2 border-2 border-purple-500 rounded-full px-6 py-2 text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out cursor-pointer">
                                <svg className="w-60 h-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h40M24 5l7 7-7 7"></path>
                                </svg>
                            </span> Experience
                        </h1>
                    </div>
                </motion.div>
            </div>

            {/* Cards Section */}
            <div className="relative z-10 px-4 md:px-8 lg:px-10 py-12">
                {/* Info Cards Grid */}
                <motion.div 
                    className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1.6fr_1.3fr_1.2fr] gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Bootcamp Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="bg-emerald-500 p-10 border-white border-4 text-white flex flex-col justify-between"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-gothic">BOOTCAMP</h3>
                        <div>
                            <p className="text-2xl font-semibold font-malinton">Think, Sprint, Design</p>
                            <p className="font-malinton text-xl">2025</p>
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-red-400 p-10 border-white border-4 text-white flex flex-col justify-between"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-gothic">LOCATION</h3>
                        <div>
                            <p className="text-2xl font-semibold mb-6 font-malinton">SITE Yangon Campus</p>
                            <p className="font-malinton text-xl">123, Nat mauk Street</p>
                        </div>
                    </motion.div>

                    {/* Attendees Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-blue-500 p-10 border-white border-4 text-white flex flex-col justify-between"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-gothic">100 +</h3>
                        <div className="flex mb-6">
                            <img src={attendee1} alt="Attendee 1" className="w-12 h-12 rounded-full -mr-2" />
                            <img src={attendee2} alt="Attendee 2" className="w-12 h-12 rounded-full -mr-2" />
                            <img src={attendee3} alt="Attendee 3" className="w-12 h-12 rounded-full" />
                        </div>
                        <p className="font-malinton text-xl">Total Person</p>
                    </motion.div>

                    {/* Date & Time Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-[#F5B041] p-10 border-white border-4 flex flex-col justify-between"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-gothic">DATE & TIME</h3>
                        <div>
                            <p className="text-2xl font-semibold mb-6 font-malinton">March 2nd/3rd</p>
                            <p className="font-malinton text-xl">12 PM to 3 PM</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Mentors, Speakers & Opportunities Section */}
                <motion.div 
                    className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1.2fr_1.6fr] gap-6 mt-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Mentors Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-purple-200 p-8 border-white border-4 flex flex-col justify-between"
                    >
                        <h3 className="text-3xl font-bold mb-6 font-gothic">MENTORS</h3>
                        <div className="flex mb-6">
                            <img src={mentor1} alt="Mentor 1" className="w-12 h-12 rounded-full -mr-2" />
                            <img src={mentor2} alt="Mentor 2" className="w-12 h-12 rounded-full -mr-2" />
                            <img src={mentor3} alt="Mentor 3" className="w-12 h-12 rounded-full" />
                        </div>
                        <p className="text-xl font-malinton">Over 20+ Mentors</p>
                    </motion.div>

                    {/* Speakers Card */}
                    <motion.div
                        variants={{
                            hidden: { x: 100, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-purple-500 p-8 border-white border-4 text-white flex flex-col justify-between"
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
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-white p-8 border-white border-4 relative flex flex-col justify-between"
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