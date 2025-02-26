import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="w-full md:w-[80%] mx-auto min-h-screen flex flex-col items-center justify-center relative">
            {/* Main Text Content */}
            <div className="text-center z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-2"
                >
                    <h1 className="text-5xl md:text-7xl font-bold">
                        <span className="text-[#4A90E2]">Think,</span>
                        <br />
                        <span className="text-[#F5B041]">Sprint,</span>
                        <br />
                        <span className="text-[#E77FE7]">Design!</span>
                    </h1>
                    
                    <p className="text-white text-xl md:text-2xl mt-4">
                        Think, Sprint, Design 2025
                    </p>

                    {/* Register Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-8 bg-black text-white px-6 py-3 rounded-full border-2 border-white flex items-center space-x-2"
                    >
                        <span className="text-purple-400">✧</span>
                        <span>Register Now</span>
                        <span>→</span>
                    </motion.button>
                </motion.div>
            </div>

            {/* Character Illustrations */}
            <div className="absolute bottom-0 w-full">
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-between items-end"
                >
                    {/* Add your character illustrations here */}
                    <div className="h-20 w-20 bg-green-500 rounded-full" />
                    <div className="h-24 w-24 bg-blue-500 rounded-full" />
                    <div className="h-20 w-20 bg-gray-500 rounded-full" />
                    <div className="h-22 w-22 bg-pink-400 rounded-full" />
                    <div className="h-24 w-24 bg-red-400 rounded-full" />
                    <div className="h-20 w-20 bg-yellow-400 rounded-full" />
                    <div className="h-24 w-24 bg-blue-500 rounded-full" />
                    <div className="h-20 w-20 bg-red-500 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection; 