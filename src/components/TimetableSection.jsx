import { motion } from "framer-motion";

const TimetableSection = () => {
    return (
        <section className="w-full bg-white md:w-[80%] mx-auto py-16 flex flex-col items-center overflow-hidden">
            {/* Title */}
            <motion.p 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-2xl font-bold mb-4 font-malinton"
            >
                Think, Sprint, Design 2025
            </motion.p>

            {/* Main Text */}
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-center mb-8 font-malinton"
            >
                Check 
                <span className="mx-5 px-8 bg-purple-200 rounded-full font-malinton">our</span>
                event 
                <span className="mx-5 px-8 bg-[#EBFF00] rounded-full font-malinton">timetable</span>
            </motion.h2>

            {/* Go Now Button */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2"
            >
                <span className="text-purple-400">✧</span>
                <span>Go Now</span>
                <span className="ml-2">→</span>
            </motion.button>
        </section>
    );
};

export default TimetableSection; 