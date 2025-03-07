import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const MentorSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const mentorsPerPage = 6;
    const titleRef = useRef(null);

    const mentors = [
        {
            name: "Wai Yi Mon Soe",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: true,
            image: "" // Add mentor image path here
        },
        {
            name: "Thiri",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: true
        },
        {
            name: "Ei Thaw Zin",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: true
        },
        {
            name: "MayVe",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: true
        },
        {
            name: "Ko Khant (Barry)",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: false
        },
        {
            name: "Zawe Kaung Htet",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: false
        },
        {
            name: "MayVe",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: false
        },
        {
            name: "Ko Khant (Barry)",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: true
        },
        {
            name: "Zawe Kaung Htet",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: false
        },
        {
            name: "MayVe",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: false
        },
        {
            name: "Ko Khant (Barry)",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: true
        },
        {
            name: "Zawe Kaung Htet",
            program: "THINK, SPRINT, DESIGN 2025",
            confirmed: false
        }
        // Add more mentors as needed
    ];

    // Calculate total pages
    const totalPages = Math.ceil(mentors.length / mentorsPerPage);

    // Get current mentors
    const indexOfLastMentor = currentPage * mentorsPerPage;
    const indexOfFirstMentor = indexOfLastMentor - mentorsPerPage;
    const currentMentors = mentors.slice(indexOfFirstMentor, indexOfLastMentor);

    // Change page with smooth scroll
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        titleRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="w-full md:w-[80%] mx-auto overflow-hidden">
            {/* Black Header Section */}
            <div ref={titleRef} className="bg-black p-4 md:p-6 flex items-center border-white border-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold font-malinton">Mentor List</h2>
            </div>

            {/* Mentor Cards Grid */}
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {currentMentors.map((mentor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.1, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-row bg-[#363636] relative"
                            >
                                {/* Locked Overlay for Unconfirmed Mentors */}
                                {!mentor.confirmed && (
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-10">
                                        <div className="text-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            <p className="text-sm">Coming Soon</p>
                                        </div>
                                    </div>
                                )}

                                {/* Mentor Image Section */}
                                <div className="w-24 h-24 bg-[#E7A8E2] flex items-center justify-center flex-shrink-0 overflow-hidden">
                                    {mentor.image ? (
                                        <img 
                                            src={mentor.image} 
                                            alt={mentor.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <svg 
                                                className="w-12 h-12 text-gray-600" 
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

                                {/* Mentor Info Section */}
                                <div className="p-4 flex flex-col justify-center">
                                    <h3 className="text-white text-lg font-medium">
                                        {mentor.confirmed ? mentor.name : "Mystery Mentor"}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {mentor.confirmed ? mentor.program : "Program to be announced"}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                {totalPages > 1 && (
                    <motion.div 
                        className="flex justify-center items-center gap-4 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                currentPage === 1 
                                ? 'bg-gray-600 cursor-not-allowed' 
                                : 'bg-black text-white hover:bg-gray-800 border-2 border-white'
                            }`}
                        >
                            Previous
                        </button>
                        
                        <div className="flex gap-2">
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
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                currentPage === totalPages 
                                ? 'bg-gray-600 cursor-not-allowed' 
                                : 'bg-black text-white hover:bg-gray-800 border-2 border-white'
                            }`}
                        >
                            Next
                        </button>
                    </motion.div>
                )}

                {/* Explore All Button */}
                <div className="flex justify-center mt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-black border-white border-2 text-white px-6 py-3 rounded-full flex items-center space-x-2"
                    >
                        <span className="text-purple-400">✧</span>
                        <span>Explore all mentors on event</span>
                        <span>→</span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default MentorSection; 

/*
<img 
    src={mentor.image} 
    alt={mentor.name}
    className="w-full aspect-square object-cover"
/>
*/