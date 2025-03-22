import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import uxmmlogo from '../img/uxmm_nav_logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['home', 'speakers', 'trainers', 'programs', 'sponsors'];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Close mobile menu first
            setIsMenuOpen(false);
            
            // Wait for mobile menu to close before scrolling
            setTimeout(() => {
                const navHeight = 80; // Height of your navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = window.pageYOffset + elementPosition - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100); // Match this with your mobile menu animation duration
        }
    };

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'backdrop-blur-sm bg-black/50' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div 
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img 
                            src={uxmmlogo} 
                            alt="UX MM Logo" 
                            className="h-12 w-auto cursor-pointer"
                            onClick={() => scrollToSection('home')}
                        />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((section, index) => (
                                <motion.button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium font-malinton"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </motion.button>
                            ))}
                        </div>

                        {/* Register Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                            className="bg-black border-white border-2 text-white px-3 py-2 rounded-full flex items-center space-x-2 hover:bg-white hover:text-black hover:border-black"
                            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeCDWlyR4HPWXe3PRhybZkwRq49Er1CBdcf-Gty-HGqSDuJ5w/viewform?usp=dialog', '_blank')}
                        >
                            <span className="text-purple-400">✧</span>
                            <span>Register Now!</span>
                            <span>→</span>
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <motion.div 
                        className="md:hidden"
                        whileTap={{ scale: 0.95 }}
                    >
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/90 backdrop-blur-sm"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((section, index) => (
                                <motion.button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left font-malinton"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </motion.button>
                            ))}
                            
                            {/* Mobile Register Button */}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.7 }}
                                className="w-full bg-black border-white border-2 text-white px-6 py-3 rounded-full flex items-center space-x-2"
                                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeCDWlyR4HPWXe3PRhybZkwRq49Er1CBdcf-Gty-HGqSDuJ5w/viewform?usp=dialog', '_blank')}
                            >
                                <span className="text-purple-400">✧</span>
                                <span>Register Now!</span>
                                <span>→</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;