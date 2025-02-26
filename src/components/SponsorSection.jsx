import { motion } from "framer-motion";

const SponsorSection = () => {
    const companies = [
        { name: "Company 1", color: "bg-[#EBFF00]", position: "-top-8 left-32" },
        { name: "Company 2", color: "bg-pink-300", position: "-top-8 right-32" },
        { name: "Company 3", color: "bg-orange-300", position: "top-12 left-1/2 -translate-x-1/2" },
        { name: "Company 4", color: "bg-green-800 text-white", position: "top-12 right-24" },
    ];

    return (
        <section className="w-full md:w-[80%] mx-auto py-16">
            {/* Sponsors Section */}
            <div className="relative mb-32 group">
                {/* Floating Company Buttons */}
                {companies.map((company, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.05 }}
                        className={`absolute ${company.position} ${company.color} px-4 py-1 rounded-full 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none`}
                    >
                        {company.name}
                    </motion.div>
                ))}

                {/* Main Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold text-center text-white cursor-pointer hover:text-gray-200"
                >
                    Our Partner & Sponsors
                </motion.h2>
            </div>

            {/* Main Sponsor Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white text-center md:text-left">
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl mb-4"
                    >
                        Our Main Sponsor is
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        FUTURE
                    </motion.p>
                </div>

                {/* Social Media Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl w-full md:w-[400px]"
                >
                    <div className="p-4 border-b">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                            <div>
                                <p className="font-bold">Interaktell</p>
                                <p className="text-sm">Bilbao, Spain</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-8">
                        <h4 className="text-2xl font-bold mb-4">Hola,<br />this is a text-based post.</h4>
                        <p className="text-xl">Enjoy!</p>
                    </div>
                    <div className="p-4 border-t flex justify-between items-center">
                        <div className="flex gap-4">
                            <span>♡</span>
                            <span>💭</span>
                            <span>↗</span>
                        </div>
                        <span>🔖</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SponsorSection;