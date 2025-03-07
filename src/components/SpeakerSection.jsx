import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import teamPhoto from '../img/pic1.png';

const SpeakerSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const speakersPerPage = 3;
    const titleRef = useRef(null);

    const speakers = [
        {
            name: "Ye Lin Aung",
            position: "??????",
            description: "Nay Toe is an Arakanese film actor and comedian with the Burmese traditional anyeint troupe Htawara Hninzi. He won Myanmar Motion Picture Academy Awards for Best Actor three times: in 2009 with Moe Nya Einmet Myu, in 2015 with Nat Khat Mhar Tae Tite Pwal and in 2017 with Tar Tay Gyi.",
            confirmed: true,
            image: teamPhoto // Add speaker image path here
        },
        {
            name: "Mya Myint Zu",
            position: "Deputy Chief Executive Officer",
            description: "Nay Toe is an Arakanese film actor and comedian with the Burmese traditional anyeint troupe Htawara Hninzi. He won Myanmar Motion Picture Academy Awards for Best Actor three times: in 2009 with Moe Nya Einmet Myu, in 2015 with Nat Khat Mhar Tae Tite Pwal and in 2017 with Tar Tay Gyi.",
            confirmed: true
        },
        {
            name: "Zaw Moe Thant",
            position: "??????",
            description: "Nay Toe is an Arakanese film actor and comedian with the Burmese traditional anyeint troupe Htawara Hninzi. He won Myanmar Motion Picture Academy Awards for Best Actor three times: in 2009 with Moe Nya Einmet Myu, in 2015 with Nat Khat Mhar Tae Tite Pwal and in 2017 with Tar Tay Gyi.",
            confirmed: false
        },
        {
            name: "Ko Tun Tun Linn",
            position: "Managing Director",
            description: "An experienced leader with a proven track record of success in growing fintech businesses, building high performing teams, and delivering value added solutions for customers and partners. Led cross functional teams in executing strategy, people management, business development, strategic partnerships, agent/merchant network management, product development, regulatory and financial operations. Worked with strategic partner organizations from various industry verticals, and participated regularly as a speaker in major conferences.",
            confirmed: false
        },
        {
            name: "Pyay Thar Kyaw",
            position: "MBA | Product Management",
            description: "",
            confirmed: false
        },
        {
            name: "Aung Nyein Chan",
            position: "??????",
            description: "?????",
            confirmed: false
        },
        {
            name: "Khine Zar Thwe",
            position: "Engineer @ Mercari | Founder @ Women in AI Myanmar🇲🇲",
            description: "",
            confirmed: false
        },
        {
            name: "May Khine Nyein",
            position: "Software Engineer | Rakuten Mobile Inc.",
            description: "I have excellent knowledge and experience in developing web applications with Ruby on Rails. During Oway Travel & Tour Company, I was responsible for building the server-side application for Taxi hiring Mobile Apps. In addition, I developed websites and web applications for the e-Government System of the Yangon Regional Government, Yangon, Myanmar. I have experience in planning, designing, developing, and delivering scalable web applications which are deployed on Digital Ocean's droplets and Amazon Web Services' EC2 servers.",
            confirmed: true
        },
        {
            name: "Thet Zarni Win",
            position: "UX Designer",
            description: "UX Designer with a successful track record in SaaS, B2B Retail&Wholesale, and Hospitality industries, targeting South East Asia and North America markets. Proficient in dashboard, Web and app Design, User Research, Iterative Development, and Design Systems. \n" +
                "Passionate about delivering human-centric solutions for diverse global users. With 4+ years in Hospitality SaaS Startup, I bring diverse insights to my design work.\n" +
                "\n" +
                "During these years as a UX Designer, \n" +
                "-Designed over 100 pages on mobile and web apps, and web designs including AR/VR and AI for medium-sized SaaS companies in the North American market.\n" +
                "- Revamped B2B retail and wholesale app, incorporating business needs & and goals and enhancing functionality for the Southeast Asia market.\n" +
                "\n" +
                "I am enthusiastic about opportunities that allow me to apply my diverse experience and knowledge to contribute to the growth of businesses and products.\n",
            confirmed: true
        },
        {
            name: "Phyu Mon Theint",
            position: "Digital Transformation & Design in APAC 🌎",
            description: "As someone with a decade of experience in the digital scene across Southeast Asia, my interest lies in meaningful interactions, inclusion, innovation, and digital transformation. Always leaning towards research & strategy but never getting out of touch with craft, I've both helped startups bring creative ideas to life and spearheaded customer-centric transformations at international corporates. Beyond my work, I'm a proud mom of two who thrives on outdoor adventures.",
            confirmed: true
        },
        {
            name: "Harry",
            position: "Senior Product Designer",
            description: "I am a self-taught digital product designer with 5 years of experience in digital product development. And my goal since my teenage is to make digital products to help people's life easier and more efficient.",
            confirmed: true
        },
        {
            name: "AP",
            position: "?????",
            description: "",
            confirmed: false
        },
        {
            name: "Kayson Jett",
            position: "??????",
            description: "",
            confirmed: false
        },
        {
            name: "Su Myat Hnin",
            position: "UI/UX & Product Designer",
            description: "I'm a UI/UX & Product designer with 5+ years experience and focus on giving an easy interface for users by utilizing my unique skills and expertise. Besides that, I aim at creating something user-centric and intuitive designs for everyone with less technical knowledge.",
            confirmed: true
        },
        {
            name: "Aung Pyae Sone Oo",
            position: "Senior UI/UX & Visual Designer | AIIMS Group | Dubai based",
            description: "Senior UI/UX and Visual Designer at AIIMS Group in Dubai, I bring over four years of industry experience, specializing in crafting experiences and building identities. Managed high-impact projects in digital banking, classifieds, healthcare insurance, and loyalty reward applications, among other web and mobile experiences.",
            confirmed: true
        },
        {
            name: "Aye Pa Pa Myo",
            position: "Senior UX Designer@BlokID",
            description: "I'm an UI UX designer focusing on creating meaningful experiences through design. ",
            confirmed: true
        },
        {
            name: "Zawe Kaung Htet",
            position: "UX & UI Designer | Fintech | E-commerce | Telecommunications | Professional Freelancer",
            description: "With a proficient background encompassing over four years of hands-on experience in the realm of UX & UI design, I have consistently honed my expertise in this field. My dedication to professional growth extends beyond my current competencies, as I am actively acquiring product management skills and aspire to take on the role of a product owner.\n" +
                "\n" +
                "In addition to my core expertise in UX & UI design, I possess a diverse skill set that includes graphic designing, video editing, web development, and broadcasting. These supplementary proficiencies further bolster my ability to contribute effectively to multifaceted projects and initiatives.\n" +
                "\n" +
                "I am committed to delivering excellence in every endeavor and am enthusiastic about leveraging my skillset to elevate user experiences and drive successful product outcomes.",
            confirmed: true
        },
    ];

    // Calculate total pages
    const totalPages = Math.ceil(speakers.length / speakersPerPage);

    // Get current speakers
    const indexOfLastSpeaker = currentPage * speakersPerPage;
    const indexOfFirstSpeaker = indexOfLastSpeaker - speakersPerPage;
    const currentSpeakers = speakers.slice(indexOfFirstSpeaker, indexOfLastSpeaker);

    // Change page with smooth scroll
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        titleRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        },
        exit: { opacity: 0 }
    };

    return (
        <section className="w-full md:w-[80%] mx-auto">
            {/* Black Header Section */}
            <div ref={titleRef} className="bg-black p-4 md:p-6 flex items-center border-white border-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold font-malinton">Speaker List ❋</h2>
            </div>

            {/* Speaker Cards Container */}
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        {currentSpeakers.map((speaker, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className={`bg-[#E7A8E2] p-4 md:p-6 mb-4 md:mb-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start relative ${!speaker.confirmed ? 'select-none' : ''}`}
                            >
                                {/* Locked Overlay for Unconfirmed Speakers */}
                                {!speaker.confirmed && (
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-10">
                                        <div className="text-center text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            <p className="text-lg font-bold">Coming Soon</p>
                                            <p className="text-sm">Speaker to be announced</p>
                                        </div>
                                    </div>
                                )}

                                {/* Image Placeholder */}
                                <div className="w-full md:w-64 h-48 md:h-64 bg-gray-300 flex-shrink-0 overflow-hidden">
                                    {speaker.image ? (
                                        <img 
                                            src={speaker.image} 
                                            alt={speaker.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-300">
                                            <svg 
                                                className="w-16 h-16 text-gray-400" 
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

                                {/* Content */}
                                <div className="flex-grow w-full">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-3 md:gap-0">
                                        <div className="w-full">
                                            <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                                                {speaker.confirmed ? speaker.name : "Mystery Speaker"}
                                            </h3>
                                            <p className="text-lg md:text-xl mb-2">
                                                {speaker.confirmed ? speaker.position : "Role to be announced"}
                                            </p>
                                        </div>
                                        <button 
                                            className={`bg-white px-4 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base ${!speaker.confirmed ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={!speaker.confirmed}
                                        >
                                            <span>Speaker Details </span>
                                            <span>↓</span>
                                        </button>
                                    </div>
                                    {/* Full-width horizontal line */}
                                    <div className="w-full h-[2px] bg-black mb-4"></div>
                                    <p className="text-base md:text-lg">
                                        {speaker.confirmed ? speaker.description : "Speaker details will be revealed soon..."}
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
            </div>
        </section>
    );
};

export default SpeakerSection; 