import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react";
import White from "../img/Second Icon/White.svg";
import Black from "../img/Second Icon/BlackStar.svg";
const SpeakerSection = () => {
    const [expandedSpeaker, setExpandedSpeaker] = useState(null);
    const titleRef = useRef(null);

    const speakers = [
        {
            name: "Ye Lin Aung",
            position: "Deputy Chief Executive Officer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante nec augue tincidunt fermentum vel nec nunc. Nullam nec nunc nec augue tincidunt fermentum vel nec nunc. Nullam nec nunc nec augue tincidunt fermentum vel nec nunc. Nullam nec nunc nec augue tincidunt fermentum vel nec nunc. Nullam nec nunc nec augue tincidunt fermentum vel nec nunc. Nullam nec nunc nec augue tincidunt fermentum vel nec nunc. Nullam nec nunc nec augue tincidunt fermentum vel nec nunc. Nullam nec nunc nec augue tincidunt fermentum vel nec nunc. Nullam nec nunc nec augue tincidunt fermentum vel nec nunc. Nullam nec nunc nec augue tincidunt fermentum vel nec nunc.",
            confirmed: false,
            image: "" // Add speaker image path here
        },
    ];

    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        },
        exit: { opacity: 0 }
    };

    const toggleSpeakerDetails = (index) => {
        if (expandedSpeaker === index) {
            setExpandedSpeaker(null);
        } else {
            setExpandedSpeaker(index);
        }
    };

    // Remove pagination-related code and use speakers directly
    return (
        <section className="w-full md:w-[80%] mx-auto">
            {/* Black Header Section */}
            <div ref={titleRef} className="bg-black p-4 md:p-6 flex items-center border-white border-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold font-malinton">Speaker List </h2>
                <img src={White} alt="Yellow Star" className="w-12 h-12 pl-3 inline-block text-white" />
            </div>

            {/* Speaker Cards Container */}
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        {speakers.map((speaker, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                                className={`bg-[#E7A8E2] p-4 md:p-6 mb-4 md:mb-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start relative ${!speaker.confirmed ? 'select-none' : ''}`}
                            >
                                {/* Locked Overlay for Unconfirmed Speakers */}
                                {!speaker.confirmed && (
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-10">
                                        <div className="text-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            <p className="text-lg font-bold">Coming Soon</p>
                                            <p className="text-sm">Speaker to be announced</p>
                                        </div>
                                    </div>
                                )}

                        {/* Image Placeholder */}
                                <div className="w-full md:w-64 h-48 md:h-64 bg-gray-300 flex-shrink-0 overflow-hidden">
                                    {speaker.image ? (
                                        <img 
                                            src={speaker.image} 
                                            alt={speaker.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-300">
                                            <svg 
                                                className="w-16 h-16 text-gray-400" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="2" 
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                        {/* Content */}
                        <div className="flex-grow w-full">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-3 md:gap-0">
                                <div className="w-full">
                                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                                        {speaker.confirmed ? speaker.name : "Mystery Speaker"}
                                    </h3>
                                    <p className="text-lg md:text-xl mb-2">
                                        {speaker.confirmed ? speaker.position : "Role to be announced"}
                                    </p>
                                </div>
                                <div className="pb-3">
                                    <button
                                        onClick={() => speaker.confirmed && toggleSpeakerDetails(index)}
                                        className={`border-2 border-black px-7 py-2 md:py-4 rounded-full flex flex-row items-center gap-1 text-sm md:text-base whitespace-nowrap w-fit overflow-hidden ${!speaker.confirmed ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={!speaker.confirmed}
                                    >
                                        <img src={Black} alt="Black Star" className="w-4 h-4 flex-shrink-0" />
                                        <span className="font-malinton">Speaker Details</span>
                                        <span className={`px-2 font-malinton flex-shrink-0 transition-transform duration-300 ${expandedSpeaker === index ? 'rotate-180' : ''}`}>↓</span>
                                    </button>
                                </div>
                            </div>
                            {/* Full-width horizontal line */}
                            <div className="w-full h-[2px] bg-black mb-4"></div>
                                    <div className="relative">
                                        <div className={`transition-all duration-300 overflow-hidden ${expandedSpeaker === index ? 'max-h-[1000px]' : 'max-h-[150px]'}`}>
                                            <p className="text-base md:text-lg">
                                                {speaker.confirmed ? speaker.description : "Speaker details will be revealed soon..."}
                                            </p>
                                        </div>
                                        {expandedSpeaker !== index && speaker.confirmed && (
                                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#E7A8E2] to-transparent"></div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SpeakerSection;