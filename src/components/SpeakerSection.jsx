import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react";
import White from "../img/Second Icon/White.svg";

const SpeakerSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const speakersPerPage = 3;
    const titleRef = useRef(null);

    const speakers = [
        {
            name: "Ye Lin Aung",
            position: "??????",
            description: "Nay Toe is an Arakanese film actor and comedian with the Burmese traditional anyeint troupe Htawara Hninzi. He won Myanmar Motion Picture Academy Awards for Best Actor three times: in 2009 with Moe Nya Einmet Myu, in 2015 with Nat Khat Mhar Tae Tite Pwal and in 2017 with Tar Tay Gyi.",
            confirmed: false,
            image: "" // Add speaker image path here
        },
        {
            name: "Mya Myint Zu",
            position: "Deputy Chief Executive Officer",
            description: "Nay Toe is an Arakanese film actor and comedian with the Burmese traditional anyeint troupe Htawara Hninzi. He won Myanmar Motion Picture Academy Awards for Best Actor three times: in 2009 with Moe Nya Einmet Myu, in 2015 with Nat Khat Mhar Tae Tite Pwal and in 2017 with Tar Tay Gyi.",
            confirmed: false
        },
        {
            name: "Zaw Moe Thant",
            position: "??????",
            description: "Nay Toe is an Arakanese film actor and comedian with the Burmese traditional anyeint troupe Htawara Hninzi. He won Myanmar Motion Picture Academy Awards for Best Actor three times: in 2009 with Moe Nya Einmet Myu, in 2015 with Nat Khat Mhar Tae Tite Pwal and in 2017 with Tar Tay Gyi.",
            confirmed: false
        },
    ];

    // Calculate total pages
    const totalPages = Math.ceil(speakers.length / speakersPerPage);

    // Get current speakers
    const indexOfLastSpeaker = currentPage * speakersPerPage;
    const indexOfFirstSpeaker = indexOfLastSpeaker - speakersPerPage;
    const currentSpeakers = speakers.slice(indexOfFirstSpeaker, indexOfLastSpeaker);

    // Change page with smooth scroll
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        titleRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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

    return (
        <section className="w-full md:w-[80%] mx-auto">
            {/* Black Header Section */}
            <div ref={titleRef} className="bg-black p-4 md:p-6 flex items-center border-white border-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold font-malinton">Speaker List </h2><img src={White} alt="Yellow Star" className="w-12 h-12 pl-3 inline-block text-white" />
            </div>

            {/* Speaker Cards Container */}
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        {currentSpeakers.map((speaker, index) => (
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
                                    className={`bg-white px-4 py-1.5 md:px-10 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base ${!speaker.confirmed ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={!speaker.confirmed}
                                >
                                    <span>Speaker Details </span>
                                    <span>↓</span>
                                </button>
                                </div>
                            </div>
                            {/* Full-width horizontal line */}
                            <div className="w-full h-[2px] bg-black mb-4"></div>
                                    <p className="text-base md:text-lg">
                                        {speaker.confirmed ? speaker.description : "Speaker details will be revealed soon..."}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                {totalPages > 1 && (
                    <motion.div 
                        className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                                currentPage === 1
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-black text-white hover:bg-gray-800 border-2 border-white'
                            }`}
                        >
                            Previous
                        </button>
                        
                        {/* Mobile pagination (with ellipsis) */}
                        <div className="flex gap-1 sm:hidden">
                            {/* First page */}
                            <button
                                onClick={() => paginate(1)}
                                className={`w-8 h-8 rounded-full transition-all duration-300 text-sm ${
                                    currentPage === 1
                                        ? 'bg-[#E7A8E2] text-black'
                                        : 'bg-black text-white hover:bg-gray-800 border-2 border-white'
                                }`}
                            >
                                1
                            </button>
                            
                            {/* Middle section */}
                            {currentPage !== 1 && currentPage !== totalPages ? (
                                <>
                                    {/* Ellipsis before current page if needed */}
                                    {currentPage > 2 && (
                                        <div className="w-8 h-8 flex items-center justify-center text-white text-sm">
                                            ...
                                        </div>
                                    )}
                                    
                                    {/* Current page */}
                                    <button
                                        onClick={() => paginate(currentPage)}
                                        className="w-8 h-8 rounded-full bg-[#E7A8E2] text-black text-sm"
                                    >
                                        {currentPage}
                                    </button>
                                    
                                    {/* Ellipsis after current page if needed */}
                                    {currentPage < totalPages - 1 && (
                                        <div className="w-8 h-8 flex items-center justify-center text-white text-sm">
                                            ...
                                        </div>
                                    )}
                                </>
                            ) : (
                                /* Simple ellipsis when on first or last page */
                                totalPages > 2 && (
                                    <div className="w-8 h-8 flex items-center justify-center text-white text-sm">
                                        ...
                                    </div>
                                )
                            )}
                            
                            {/* Last page (if more than one page) */}
                            {totalPages > 1 && (
                                <button
                                    onClick={() => paginate(totalPages)}
                                    className={`w-8 h-8 rounded-full transition-all duration-300 text-sm ${
                                        currentPage === totalPages
                                            ? 'bg-[#E7A8E2] text-black'
                                            : 'bg-black text-white hover:bg-gray-800 border-2 border-white'
                                    }`}
                                >
                                    {totalPages}
                                </button>
                            )}
                        </div>
                        
                        {/* Desktop pagination (all page numbers) */}
                        <div className="hidden sm:flex gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => paginate(i + 1)}
                                    className={`w-10 h-10 rounded-full transition-all duration-300 ${
                                        currentPage === i + 1
                                            ? 'bg-[#E7A8E2] text-black'
                                            : 'bg-black text-white hover:bg-gray-800 border-2 border-white'
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                                currentPage === totalPages
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-black text-white hover:bg-gray-800 border-2 border-white'
                            }`}
                        >
                            Next
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default SpeakerSection; 