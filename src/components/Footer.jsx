import React from 'react';
import { motion } from 'framer-motion';
import uxmmlogo from '../img/uxmm_nav_logo.png';

const Footer = () => {
    const navItems = ['home', 'speakers', 'mentors', 'programs', 'sponsors'];
    
    const socialLinks = [
        { name: 'Facebook', url: 'https://www.facebook.com/uxmyanmar', icon: 'fab fa-facebook-f' },
        { name: 'Messenger', url: 'https://m.me/uxmyanmar', icon: 'fab fa-facebook-messenger' },
        { name: 'Instagram', url: 'http://instagram.com/uxmm_official/', icon: 'fab fa-instagram' },
        { name: 'YouTube', url: 'https://www.youtube.com/channel/UClLaxKGmw5yR1w8aBtCNV_w', icon: 'fab fa-youtube' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/uxmm/', icon: 'fab fa-linkedin-in' },
        { name: 'Medium', url: 'https://medium.com/uxmm', icon: 'fab fa-medium-m' }
    ];

    return (
        <footer className="relative text-white pt-16 pb-8 overflow-hidden">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-6">
                        <motion.img
                            src={uxmmlogo}
                            alt="UX MM Logo"
                            className="h-12 w-auto"
                            whileHover={{ scale: 1.05 }}
                        />
                        <p className="text-gray-300 font-malinton">
                            Design Your Future with Real World Experience
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-malinton bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Contact Us</h3>
                        <ul className="space-y-2 text-gray-300">
                            <motion.li whileHover={{ x: 5 }} className="font-malinton hover:text-white transition-colors duration-300">
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@uxmm.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => {
                                        if (navigator.userAgent.toLowerCase().includes("android")) {
                                            e.preventDefault();
                                            window.location.href = "intent://compose?to=info@uxmm.org#Intent;scheme=mailto;package=com.google.android.gm;end;";
                                        }
                                    }}
                                >
                                    info@uxmm.org
                                </a>
                            </motion.li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-malinton bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Follow Us</h3>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    className="bg-white/5 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/10 text-white hover:text-white"
                                    aria-label={social.name}
                                >
                                    <i className={`${social.icon} text-lg`}></i>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm font-malinton">
                            © 2024 UX MM. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <motion.a
                                href="#"
                                whileHover={{ x: 5 }}
                                className="text-gray-400 hover:text-white text-sm font-malinton transition-colors duration-300"
                            >
                                Privacy Policy
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ x: 5 }}
                                className="text-gray-400 hover:text-white text-sm font-malinton transition-colors duration-300"
                            >
                                Terms of Service
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 