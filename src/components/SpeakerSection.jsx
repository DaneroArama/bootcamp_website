import { motion } from "framer-motion";

const SpeakerSection = () => {
    const speakers = [
        {
            name: "Ko Lamin Thaw",
            position: "Actor",
            description: "Nay Toe is an Arakanese film actor and comedian with the Burmese traditional anyeint troupe Htawara Hninzi. He won Myanmar Motion Picture Academy Awards for Best Actor three times: in 2009 with Moe Nya Einmet Myu, in 2015 with Nat Khat Mhar Tae Tite Pwal and in 2017 with Tar Tay Gyi."
        },
        {
            name: "Ko Ko Lamin Thaw",
            position: "Singer",
            description: "Nay Toe is an Arakanese film actor and comedian with the Burmese traditional anyeint troupe Htawara Hninzi. He won Myanmar Motion Picture Academy Awards for Best Actor three times: in 2009 with Moe Nya Einmet Myu, in 2015 with Nat Khat Mhar Tae Tite Pwal and in 2017 with Tar Tay Gyi."
        },
        {
            name: "Ko Ko Ko Lamin Thaw",
            position: "Oh Lala",
            description: "Nay Toe is an Arakanese film actor and comedian with the Burmese traditional anyeint troupe Htawara Hninzi. He won Myanmar Motion Picture Academy Awards for Best Actor three times: in 2009 with Moe Nya Einmet Myu, in 2015 with Nat Khat Mhar Tae Tite Pwal and in 2017 with Tar Tay Gyi."
        },
        // Add more speakers as needed
    ];

    return (
        <section className="w-full md:w-[80%] mx-auto">
            {/* Black Header Section */}
            <div className="bg-black p-4 md:p-6 flex items-center border-white border-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold font-malinton">Speaker List ❋</h2>
            </div>

            {/* Speaker Cards Container */}
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
                {speakers.map((speaker, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#E7A8E2] p-4 md:p-6 mb-4 md:mb-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start"
                    >
                        {/* Image Placeholder */}
                        <div className="w-full md:w-64 h-48 md:h-64 bg-gray-300 flex-shrink-0">
                            {/* Add image here */}
                        </div>

                        {/* Content */}
                        <div className="flex-grow w-full">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-3 md:gap-0">
                                <div className="w-full">
                                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{speaker.name}</h3>
                                    <p className="text-lg md:text-xl mb-2">{speaker.position}</p>
                                </div>
                                <button className="bg-white px-4 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base">
                                    <span>Speaker Details </span>
                                    <span>↓</span>
                                </button>
                            </div>
                            {/* Full-width horizontal line */}
                            <div className="w-full h-[2px] bg-black mb-4"></div>
                            <p className="text-base md:text-lg">{speaker.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SpeakerSection; 