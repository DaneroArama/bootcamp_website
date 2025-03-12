import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Barry from "../img/Mentors/Aye Chan Pyae.webp";
import Thiri from "../img/Organizers/thiri.webp";
import GreenStar from "../img/Second Icon/Green Star.svg";

const OrganizerSection = () => {
    const [selectedOrganizer, setSelectedOrganizer] = useState(null);
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);
    const titleRef = useRef(null);
    const bioContentRef = useRef(null);

    // Effect to prevent body scrolling when modal is open
    useEffect(() => {
        if (selectedOrganizer) {
            // Disable scrolling on body
            document.body.style.overflow = 'hidden';
            
            // Check if content is scrollable after render
            setTimeout(() => {
                checkIfScrollable();
            }, 100);
        } else {
            // Re-enable scrolling on body
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to ensure scrolling is re-enabled when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedOrganizer]);

    // Check if bio content is scrollable
    const checkIfScrollable = () => {
        if (bioContentRef.current) {
            const element = bioContentRef.current;
            setShowScrollIndicator(element.scrollHeight > element.clientHeight);
        }
    };

    // Handle scroll event to hide indicator when at bottom
    const handleScroll = (e) => {
        const element = e.target;
        const isAtBottom = Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 10;
        setShowScrollIndicator(!isAtBottom);
    };

    const trainers = [
        {
            name: "Ma Thiri Phyo Naing",
            role: "ORGANIZER",
            bio: "Thiri Phyo Naing is a passionate UX/UI designer with a talent for creating simple, user-friendly digital product experiences. With experience in agency and job platform design, she blends creativity, problem-solving, and empathy to craft impactful designs.\n" +
                "\n" +
                "Her journey began at Startup Weekend Yangon 2022, where she showcased her skills and built valuable connections, leading to her first role as a UX/UI designer at Logy, a design agency startup. In December 2023, she returned to Startup Weekend Yangon as a finalist, impressing with her creative thinking and presentation skills. Thiri's dedication to innovation was further recognized when she won first prize in the Youth Innovation Challenge, where her team excelled in problem-solving and creative ideas.\n" +
                "\n" +
                "Now, Thiri is a Volunteering and Coordination Specialist at UX Myanmar (UXMM), she dreams of making UX/UI design a strong and recognized field in Myanmar and inspiring the next generation of designers. With her passion for design and commitment to community, Thiri Phyo Naing is making a positive impact on Myanmar's UI/UX design industry.",
            confirmed: true,
            image: Thiri
        },
        {
            name: "Mayve",
            role: "ORGANIZER",
            bio: "Hehe I don't know anything yet",
            confirmed: true,
            image: Barry
        },
    ];

    // Open trainer bio modal
    const openBioModal = (trainer) => {
        setSelectedOrganizer(trainer);
        document.body.style.overflow = 'hidden';
    };

    // Close trainer bio modal
    const closeBioModal = () => {
        setSelectedOrganizer(null);
        document.body.style.overflow = 'auto';
    };

    // Get role color based on trainer role
    const getRoleColor = (role) => {
        switch (role) {
            case "ORGANIZER":
                return "text-green-400";
        }
    };

    // Get role badge background based on trainer role
    const getRoleBadgeColor = (role) => {
        switch (role) {
            case "ORGANIZER":
                return "bg-green-400/20 border-green-400/50";
        }
    };

    return (
        <section className="w-full md:w-[80%] mx-auto overflow-hidden">
            {/* Black Header Section */}
            <div ref={titleRef} className="bg-black p-4 md:p-6 flex items-center border-white border-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold font-malinton">Organizer List</h2><img src={GreenStar} alt="Yellow Star" className="w-12 h-12 pl-3 inline-block text-white" />
            </div>

            {/* Trainer Cards Grid */}
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => trainer.confirmed && openBioModal(trainer)}
                            className={`bg-[#1A1A1A] relative overflow-hidden cursor-pointer ${!trainer.confirmed ? 'pointer-events-none' : ''}`}
                        >
                            {/* Locked Overlay for Unconfirmed Trainers */}
                            {!trainer.confirmed && (
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-10">
                                    <div className="text-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <p className="text-sm">Coming Soon</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center">
                                {/* Trainer Image Section */}
                            <div className="w-24 h-24 bg-[#E7A8E2] flex items-center justify-center flex-shrink-0">
                                    {trainer.image ? (
                                        <img
                                            loading="lazy"
                                            src={trainer.image} 
                                            alt={trainer.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-[#E7A8E2]">
                                            <svg 
                                                className="w-10 h-10 text-white" 
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

                                {/* Trainer Info Section */}
                                <div className="px-4 py-2 flex-grow">
                                    <h3 className="text-white text-lg font-medium">
                                        {trainer.confirmed ? trainer.name : "Mystery Trainer"}
                                    </h3>
                                    
                                    {/* Role Badge */}
                                    <div className={`inline-block px-2 py-1 rounded-full text-xs border ${getRoleBadgeColor(trainer.role)} mt-1`}>
                                        <span className={getRoleColor(trainer.role)}>
                                            {trainer.confirmed ? trainer.role : "Role to be announced"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Explore All Button */}
                <div className="flex justify-center mt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-black border-white border-2 text-white px-6 py-3 rounded-full flex items-center space-x-2"
                    >
                        <span className="text-green-400">✧</span>
                        <span>This is our organizers of the bootcamp</span>
                    </motion.button>
                </div>
            </div>

            {/* Bio Modal */}
            <AnimatePresence>
                {selectedOrganizer && (
                    <motion.div 
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeBioModal}
                    >
                        <motion.div 
                            className="bg-[#1A1A1A] max-w-4xl w-full rounded-lg overflow-hidden max-h-[90vh]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Image Section (Top on mobile, Right on desktop) */}
                                <div className="w-full md:w-[300px] h-[200px] md:h-auto flex-shrink-0 bg-[#E7A8E2]">
                                    {selectedOrganizer.image ? (
                                        <img 
                                            src={selectedOrganizer.image}
                                            alt={selectedOrganizer.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-[#E7A8E2]">
                                            <svg 
                                                className="w-24 h-24 text-white" 
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

                                {/* Content Section (Bottom on mobile, Left on desktop) */}
                                <div className="flex-1 flex flex-col p-4">
                                    {/* Header with close button */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h2 className="text-white text-2xl font-bold">{selectedOrganizer.name}</h2>
                                            <div className={`inline-block px-3 py-1 rounded-full text-sm border ${getRoleBadgeColor(selectedOrganizer.role)} mt-2`}>
                                                <span className={getRoleColor(selectedOrganizer.role)}>
                                                    {selectedOrganizer.role}
                                                </span>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={closeBioModal}
                                            className="text-gray-400 hover:text-white"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Bio Content - Scrollable with fixed height */}
                                    <div 
                                        ref={bioContentRef}
                                        onScroll={handleScroll}
                                        className="overflow-y-auto scrollbar-hide relative touch-auto" 
                                        style={{ 
                                            scrollbarWidth: 'none', 
                                            msOverflowStyle: 'none',
                                            WebkitOverflowScrolling: 'touch',
                                            height: '30vh',
                                            minHeight: '150px',
                                            maxHeight: '50vh'
                                        }}
                                    >
                                        <div className="text-gray-300 space-y-4 pr-4 pb-10">
                                            {selectedOrganizer.bio.split('\n\n').map((paragraph, index) => (
                                                <p key={index} className="text-sm md:text-base">
                                                    {paragraph.split('\n').map((line, lineIndex) => (
                                                        <React.Fragment key={lineIndex}>
                                                            {line}
                                                            {lineIndex < paragraph.split('\n').length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            ))}
                                        </div>
                                        
                                        {/* Scroll indicator arrow - Positioned at bottom */}
                                        {showScrollIndicator && (
                                            <div className="sticky bottom-0 left-0 w-full bg-gradient-to-t from-[#1A1A1A] to-transparent h-14 flex justify-center items-end pb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default OrganizerSection;

/*
<img 
    src={trainer.image} 
    alt={trainer.name}
    className="w-full aspect-square object-cover"
/>
*/