import { motion } from "framer-motion";
import UxseaLogo from "../img/Partners/uxsea.png";
import ProductBazeLogo from "../img/Partners/productbaze.png";
import UxphLogo from "../img/Partners/uxph.png";
import SavvyuxLogo from "../img/Partners/savvyux.png";
import UxtestingLogo from "../img/Partners/uxtesting.png";

const SponsorSection = () => {
    // Sponsors data structure - easy to add more sponsors and types
    const sponsors = [
        {
            type: "Lunch Sponsor",
            items: [
                { id: 1, logo: "", name: "Sponsor 1" },
                { id: 2, logo: "", name: "Sponsor 2" },
                { id: 3, logo: "", name: "Sponsor 3" },
                { id: 4, logo: "", name: "Sponsor 4" }
            ]
        }
    ];

    return (
        <section className="w-full">

            {/* Our Partners & Sponsors */}
            <div className="px-4 md:px-12 py-12 md:py-16">
                {/* Title with floating bubbles */}
                <div className="relative mb-16">
                    {/* Main title with bubbles positioned around it */}
                    <div className="relative mx-auto max-w-3xl">
                        {/* Main title */}
                        <h2 className="text-3xl md:text-5xl font-bold text-center text-white relative z-10 font-malinton">
                            Our Partner & Sponsors
                        </h2>

                        {/* Floating company bubbles - positioned to overlap with title */}
                        <motion.div 
                            className="absolute -top-6 left-20 z-20 hidden md:block"
                            initial={{ rotate: -20 }}
                            animate={{ 
                                y: [0, -5, 0],
                                transition: { repeat: Infinity, duration: 3 } 
                            }}
                        >
                            <div className="bg-[#EBFF00] px-6 py-2 rounded-full text-black font-medium transform">
                                Company 1
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="absolute -top-6 left-[40%] z-20 hidden md:block"
                            initial={{ rotate: 20 }}
                            animate={{ 
                                y: [0, -8, 0],
                                transition: { repeat: Infinity, duration: 4 } 
                            }}
                        >
                            <div className="bg-pink-300 px-6 py-2 rounded-full text-black font-medium transform">
                                Company 1
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="absolute top-14 left-[30%] z-0 hidden md:block rotate-6"
                            initial={{ rotate: 15 }}
                            animate={{ 
                                y: [0, -6, 0],
                                transition: { repeat: Infinity, duration: 3.5 } 
                            }}
                        >
                            <div className="bg-orange-300 px-6 py-2 rounded-full text-black font-medium transform">
                                Company 1
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="absolute top-10 right-[10%] z-0 hidden md:block"
                            initial={{ rotate: -20 }}
                            animate={{ 
                                y: [0, -7, 0],
                                transition: { repeat: Infinity, duration: 3.2 } 
                            }}
                        >
                            <div className="bg-green-800 px-6 py-2 rounded-full text-[#EBFF00] font-medium transform">
                                Company 1
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Sponsor Logos Grid */}
                <div className="max-w-5xl mx-auto">
                    {sponsors.map((sponsorType) => (
                        <div key={sponsorType.type} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {sponsorType.items.map((sponsor) => (
                                <div key={sponsor.id} className="relative">
                                    {/* Sponsor Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="aspect-square bg-[#111111] rounded-md overflow-hidden flex items-center justify-center border border-zinc-900 relative"
                                    >
                                        {/* Logo */}
                                        <div className="w-16 h-16 md:w-20 md:h-20">
                                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                                <path
                                                    d="M30,0 C30,0 70,0 70,0 C70,0 100,30 100,30 C100,30 100,70 100,70 C100,70 70,100 70,100 C70,100 30,100 30,100 C30,100 0,70 0,70 C0,70 0,30 0,30 C0,30 30,0 30,0"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        
                                        {/* Sponsor Type Label - positioned at bottom left */}
                                        <div className="absolute bottom-3 left-3">
                                            <div className="flex items-center gap-1 bg-white text-black px-2 py-0.5 rounded-full text-xs font-medium font-malinton">
                                                <span className="text-purple-400">✦</span>
                                                <span>{sponsorType.type}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Become a Sponsor Section */}
            <div className="px-4 md:px-12 py-12 md:py-16">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start max-w-5xl mx-auto gap-8 md:gap-0">
                    {/* Left side - Become a Sponsor */}
                    <div className="flex items-center gap-2">
                        <div className="text-3xl md:text-4xl text-white font-medium font-malinton">Become</div>
                        <div className="relative">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#EBFF00] px-6 py-2 rounded-full text-2xl md:text-3xl font-medium font-malinton relative z-10"
                            >
                                a Sponsor
                            </motion.button>
                            <div className="absolute inset-0 bg-[#EBFF00] rounded-full blur-sm opacity-30"></div>
                        </div>
                    </div>

                    {/* Right side - Text and Apply button */}
                    <div className="flex flex-col md:items-end gap-4">
                        <p className="text-white/80 md:text-right text-base md:text-lg">
                            We value the support of our sponsors and<br />
                            offer various partnership levels
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 text-white border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors w-fit font-malinton"
                        >
                            <span className="text-purple-400">✦</span>
                            Apply for Sponsorship
                            <span className="ml-1">→</span>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Our Partners Section */}
            <div className="px-4 md:px-12 py-12 md:py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                    Our Partner
                </h2>
                <div className="bg-[#111111] py-8 md:py-12 rounded-md">
                    <h3 className="text-lg md:text-xl text-gray-400 mb-8 text-center uppercase tracking-widest">
                        Our Community Partners
                    </h3>
                    
                    {/* Community Partners Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center max-w-4xl mx-auto px-4">
                        <img src={UxseaLogo} alt="UXSEA Society" className="w-24 md:w-32 opacity-50 hover:opacity-100 transition-opacity" />
                        <img src={ProductBazeLogo} alt="Product Baze" className="w-24 md:w-32 opacity-50 hover:opacity-100 transition-opacity" />
                        <img src={UxphLogo} alt="UXPH" className="w-24 md:w-32 opacity-50 hover:opacity-100 transition-opacity" />
                        <img src={SavvyuxLogo} alt="Savvyux" className="w-24 md:w-32 opacity-50 hover:opacity-100 transition-opacity" />
                        <img src={UxtestingLogo} alt="UX Testing" className="w-24 md:w-32 opacity-50 hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorSection;