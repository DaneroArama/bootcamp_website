import { motion } from "framer-motion";

const MentorSection = () => {
    const mentors = [
        {
            name: "Ei Thaw Zin",
            program: "THINK, SPRINT, DESIGN 2025"
        },
        {
            name: "MayVe",
            program: "THINK, SPRINT, DESIGN 2025"
        },
        {
            name: "Thiri",
            program: "THINK, SPRINT, DESIGN 2025"
        },
        {
            name: "Ko Khant (Barry)",
            program: "THINK, SPRINT, DESIGN 2025"
        },
        {
            name: "Zawe Kaung Htet",
            program: "THINK, SPRINT, DESIGN 2025"
        },
        {
            name: "Wai Yi Mon Soe",
            program: "THINK, SPRINT, DESIGN 2025"
        }
    ];

    return (
        <section className="w-full md:w-[80%] mx-auto">
            {/* Black Header Section */}
            <div className="bg-black p-4 md:p-6 flex items-center border-white border-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold">Mentor List ⟨⟩</h2>
            </div>

            {/* Mentor Cards Grid */}
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mentors.map((mentor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex flex-col"
                        >
                            {/* Mentor Image Section */}
                            <div className="w-full aspect-square bg-pink-300 flex items-center justify-center">
                                <span className="text-4xl">⟨⟩</span>
                            </div>

                            {/* Mentor Info Section */}
                            <div className="bg-gray-800 p-4">
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
                        className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2"
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