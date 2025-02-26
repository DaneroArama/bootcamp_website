import { motion } from "framer-motion";

const MentorSection = () => {
    const mentors = [
        {
            name: "Wai Yi Mon Soe",
            program: "THINK, SPRINT, DESIGN 2025"
        },
        {
            name: "Thiri",
            program: "THINK, SPRINT, DESIGN 2025"
        },
        {
            name: "Ei Thaw Zin",
            program: "THINK, SPRINT, DESIGN 2025"
        },
        {
            name: "MayVe",
            program: "THINK, SPRINT, DESIGN 2025"
        },
        {
            name: "Ko Khant (Barry)",
            program: "THINK, SPRINT, DESIGN 2025"
        },
        {
            name: "Zawe Kaung Htet",
            program: "THINK, SPRINT, DESIGN 2025"
        }
    ];

    return (
        <section className="w-full md:w-[80%] mx-auto overflow-hidden">
            {/* Black Header Section */}
            <div className="bg-black p-4 md:p-6 flex items-center border-white border-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold font-malinton">Mentor List</h2>
            </div>

            {/* Mentor Cards Grid */}
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mentors.map((mentor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-row bg-[#363636]"
                        >
                            {/* Mentor Image Section */}
                            <div className="w-24 h-24 bg-[#E7A8E2] flex items-center justify-center flex-shrink-0">
                                <span className="text-4xl"></span>
                            </div>

                            {/* Mentor Info Section */}
                            <div className="p-4 flex flex-col justify-center">
                                <h3 className="text-white text-lg font-medium">{mentor.name}</h3>
                                <p className="text-gray-400 text-sm">{mentor.program}</p>
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