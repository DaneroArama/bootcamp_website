import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import EiThawZin from '../img/Mentors/EiThaw Zin.webp';
import Barry from "../img/Mentors/Barry.webp";
import NweOoLwin from "../img/Mentors/Nwe Oo Lwin.webp";
import Zawkaunghtet from "../img/Mentors/Zwekaunghtet.webp";
import MinNandaZaw from "../img/Mentors/Min Nanda Zan.webp";
import SeintSinsarLwin from "../img/Mentors/Seint Sinsar Lwin.webp";
import AChanPyae from "../img/Mentors/Aye Chan Pyae.webp";
import KoMyoMaungMaung from "../img/Mentors/Ko Myo Maung Maung.webp";
import ShuMawaSoe from "../img/Mentors/Shu Mawa Soe.webp";
import MinYeHtutMyat from "../img/Mentors/Min Ye Htut Myat.webp";
import LynnHtetThant from "../img/Mentors/Lynnhtet Thant.webp";
import HninHayMarAung from "../img/Mentors/Hnin Hay Mar Aung.webp";
import White from "../img/Second Icon/white1.svg";

const TrainerSection = () => {
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);
    const titleRef = useRef(null);
    const bioContentRef = useRef(null);

    // Effect to prevent body scrolling when modal is open
    useEffect(() => {
        if (selectedTrainer) {
            // Disable scrolling on body
            document.body.style.overflow = 'hidden';
            
            // Check if content is scrollable after render
            setTimeout(() => {
                checkIfScrollable();
            }, 100);
        } else {
            // Re-enable scrolling on body
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to ensure scrolling is re-enabled when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedTrainer]);

    // Check if bio content is scrollable
    const checkIfScrollable = () => {
        if (bioContentRef.current) {
            const element = bioContentRef.current;
            setShowScrollIndicator(element.scrollHeight > element.clientHeight);
        }
    };

    // Handle scroll event to hide indicator when at bottom
    const handleScroll = (e) => {
        const element = e.target;
        const isAtBottom = Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 10;
        setShowScrollIndicator(!isAtBottom);
    };

    const trainers = [
        {
            name: "Ko Myo Maung Maung",
            role: "LEAD TRAINER",
            bio: "ကိုမျိုးမောင်မောင်ဟာဆိုရင်ဖြင့် အခုလက်ရှိ Proximity Designs မှာ တာဝန်ထမ်းဆောင်လျက်ရှိပြီး၊ UX/UI Designer အဖြစ် telecom, banking နဲ့ fintech industries တွေမှာ ဆယ်စုနှစ်ကျော် တာ၀န်ထမ်းဆောင်ခဲ့သူ ဖြစ်ပါတယ်။ Leadership, project management, design strategy, research နဲ့ creative အပိုင်း တွေမှာ ကျွမ်းကျင်သူဖြစ်ပြီး UI/UX အပိုင်းအပြင် Graphic Design ပိုင်းကိုလည်း လူငယ်များအတွက် စိတ်ဝင်စားနိုင်မယ့်နည်းစနစ်တွေနဲ့ mentorship လုပ်ပေးနေသူတစ်ဦးလည်းဖြစ်ပါသေးတယ်။",
            confirmed: true,
            image: KoMyoMaungMaung
        },
        {
            name: "Ko Khant (Barry)",
            role: "TRAINER",
            bio: "I'm Ko Khant who you might know as Barry. For a glance of my career, I was a former Product Designer at Singapore Design Agency called Hub Solutions. And I'm working with Hysan Education as a UXUI Designer for SAAS products right now. You might also notice me as a design instructor at Code Mal Academy with UXUI classes too. If we bring back some good old memories, we all might be familiar with creative contents from Compass which was missing for so long. I was also taking care of the content creation back there. \n" +
                "\n" +
                "ကိုခန့်ဖြစ်ပါတယ်၊ Barry လို့လည်းအများစုသိကြမယ်ထင်ပါသဗျ၊ Career Life ကိုပြောပါဆိုရင်တော့ Hub Solutions လို့ခေါ်တဲ့ Singapore Agency မှာ Product Designer အနေနဲ့လုပ်ခဲ့ပါတယ်၊ လက်ရှိမှာတော့ အားတဲ့အချိန်တွေမှာ Hysan Education နဲ့အတူ SAAS Products တွေအတွက်လက်တွဲပြီးတော့ UXUI ပိုင်းတာဝန်ယူလုပ်ပေးနေတာလည်းရှိပါတယ်၊ ဒါတွေအပြင် Code Mal Academy မှာလည်း အတန်းကြော်ညာတွေခဏခဏတက်လာလို့သတိထားမိမှာကတော့ Design Instructor အနေနဲ့လည်းလုပ်နေတယ်ဆိုပါတော့၊ အတိတ်ဟောင်းကို စားမြုံ့ပြန်ရရင်တော့ အရင်က UXUI Content တွေ စိတ်ဝင်စားဖို့ကောင်းခဲ့တဲ့တစ်ခေတ်တုန်းကလည်း Compass မှာ Content Creation ပိုင်းလုပ်ခဲ့တာလေးကလည်း လူဟောင်းတွေဆိုရင် သတိရနေဦးမှာပါ။",
            confirmed: true,
            image: Barry
        },
        {
            name: "Ko Lynn Htet Thant",
            role: "TRAINER",
            bio: "A passionate UX designer with 4 years of experience creating user-centered interfaces and applications. Skilled in the entire design process, from user research and prototyping to usability testing and implementation. Equally enthusiastic about sharing knowledge and fostering the next generation of UX professionals.",
            confirmed: true,
            image: LynnHtetThant
        },
        {
            name: "Ko Min Nanda Zan",
            role: "TRAINER",
            bio: "A creative and detail-oriented Product Designer and UX Specialist with over 6 years of experience in design and user-centered solutions. I began my career as a freelance graphic designer in 2017 and transitioned to a full-time role at Venus Lab in 2018, where I evolved from a Graphic Designer to a UX/UI Designer, contributing to branding, e-commerce, and AR projects. After 4 impactful years at Venus Lab, I joined Brycen Myanmar in 2023 as a Senior UX/UI Specialist, customizing HR products for international clients.\n" +
                "\n" +
                "Currently, I am part of Wave Money (Digital Money Myanmar) as a UX Specialist and Product Designer, leading the Agent App Tribe. My designs are used by over 50,000 agents, and I actively conduct user research, create personas, and perform testing to deliver seamless digital experiences. Passionate about solving user problems and crafting intuitive designs, I continue to grow and innovate in the ever-evolving design landscape.",
            confirmed: true,
            image: MinNandaZaw
        },
        {
            name: "Ko Min Ye Htut Myat",
            role: "TRAINER",
            bio: "Min Ye is a Burmese UX/UI Designer who is passionate to solve problems at the intersection of design, technology and business. Experienced working well known start-up company which provides services to different products in Myanmar.",
            confirmed: true,
            image: MinYeHtutMyat
        },
        {
            name: "Zwe Kaung Htet",
            role: "TRAINER",
            bio: "I am currently a Senior UI/UX Designer at Ooredoo Myanmar and formerly held the same role at A Bank. With over six years of industry experience, I have worked across multiple domains, including eCommerce, POS systems, ERP Systems, Banking, Fintech, and Telecommunications. My expertise lies in crafting seamless user experiences and intuitive interfaces that drive engagement and efficiency. I am passionate about sharing my knowledge and contributing to the growth of the design community.",
            confirmed: true,
            image: Zawkaunghtet
        },
        {
            name: "Ma A Chan Pyae",
            role: "TRAINER",
            bio: "A Chan Pyae is a passionate UX/UI Designer with a strong background in creating user-centered digital experiences. Currently working at Dinger, he specializes in designing intuitive and engaging interfaces for fintech products.\n" +
                "\n" +
                "With a keen eye for detail and a deep understanding of user behavior, A Chan Pyae excels at transforming complex requirements into simple, elegant solutions. His approach combines aesthetic sensibility with practical functionality, ensuring that his designs not only look good but also work effectively for users.\n" +
                "\n" +
                "Beyond his professional work, A Chan Pyae is actively involved in the local design community, sharing his knowledge and mentoring aspiring designers. He is passionate about raising the standard of design in Myanmar and contributing to the growth of the tech ecosystem.",
            confirmed: true,
            image: AChanPyae
        },
        {
            name: "Ma Shu Mawa Soe",
            role: "TRAINER",
            bio: "Hello! I'm Shu Mawa. I'm a UX Designer currently in the fintech space. For the past 4 years, I've helped a range of clients, from established organizations to early startups, drive their missions through better, more inclusive user experiences. Over the years, I've used Design Thinking and UX methodologies to provide solutions that empower overlooked communities and bring to life the product vision.",
            confirmed: true,
            image: ShuMawaSoe
        },
        {
            name: "Ma Thazin Win",
            role: "TRAINER",
            bio: "A passionate UI/UX Designer with a strong IT background, with 8 years of experience. My design philosophy blends creativity and problem-solving, allowing me to craft intuitive digital experiences that not only look good but also function seamlessly.\n" +
                 +
                "With experience in logistics, e-commerce, and banking, I specialize in UI design, design systems, prototyping and UX research.\n" +
                "\n" +
                "Beyond my design work, I actively contribute to the UI/UX community in Myanmar. My goal is to share knowledge, inspire other designers, and promote the value of UX in product development. I believe in continuous learning, and I'm always exploring new ways to enhance user experience through research, usability testing, and innovative design techniques.\n" +
                "\n" +
                "Let's connect and create meaningful digital experiences together!\n" +
                "\n" +
                "--------------\n" +
                "\n" +
                "IT background ရှိပြီး စိတ်အားထက်သန်သော UI/UX Designer တစ်ဦးဖြစ်သည်။ အတွေ့အကြုံ ၈နှစ်ရှိပြီး Creativity နှင့် Problem solving ကိုပေါင်းစပ်ပြီး သုံးစွဲသူများအတွက် လိုက်လျောညီထွေရှိသည့် digital experience များကို ဖန်တီးလျှက်ရှိပါသည်။ \n" +
                "\n" +
                "logistics, e-commerce, နှင့် banking ပိုင်းတွင်အတွေ့အကြုံရှိပြီး UI Design, Design Systems, Prototyping နှင့် UX research တို့တွင် ကျွမ်းကျင်ပါသည်။ \n" +
                "\n" +
                "ဒီဇိုင်းအလုပ်များအပြင် မြန်မာနိုင်ငံရှိ UI/UX Design community တွင် နောက်လာမည့် ဒီဇိုင်နာများအား အသိပညာမျှဝေခြင်းများ ပြုလုပ်လျှက်ရှိပါသည်။ အဆက်မပြတ်လေ့လာခြင်းအားဖြင့် User experience ပိုကောင်းလာရန် နည်းလမ်းကောင်းများကို ရှာဖွေလျှက်ရှိပါသည်။\n" +
                "\n" +
                "ပိုကောင်းပြီး meaningful ဖြစ်တဲ့ digital experience များကို အတူ တည်ဆောက်ကြရအောင်ပါ!",
            confirmed: true,
            image: "" // Add mentor image path here
        },
        {
            name: "SomeOne",
            role: "TRAINER",
            bio: "Bio will be revealed soon.",
            confirmed: false,
            image: ""
        },
        {
            name: "SomeOne",
            role: "TRAINER",
            bio: "Bio will be revealed soon.",
            confirmed: false,
            image: ""
        },
        {
            name: "SomeOne",
            role: "TRAINER",
            bio: "Bio will be revealed soon.",
            confirmed: false,
            image: ""
        },
        {
            name: "Ma Ei Thaw Zin",
            role: "TRAINER ASSISTANT",
            bio: "Ei Thaw Zin is a creative and passionate UX/UI Designer with a knack for turning complex ideas into simple, innovative, and user-friendly digital products. Currently working at KBZ Bank, she specializes in transforming complex financial processes into intuitive designs that enhance usability and innovation.\n" +
                "\n" +
                "Prior to this, Ei Thaw Zin made her mark at Dinger, playing a key role in crafting innovative e-wallet solutions from initial sketches to final launch. As a freelancer, she has worked on diverse projects, including fintech platforms, LMS systems, and community-driven digital products, consistently bringing fresh ideas and unique perspectives.\n" +
                "\n" +
                "Beyond her professional work, Ei Thaw Zin explores multimedia design, art-inspired projects, and community initiatives, constantly striving for originality and innovation. She is also deeply committed to giving back to the community through IT-related volunteering, sharing her expertise, and learning from others.",
            confirmed: true,
            image: EiThawZin
        },
        {
            name: "Ma Hnin Hay Mar Aung",
            role: "TRAINER ASSISTANT",
            bio: "မနှင်းဟေမာအောင်ဟာ Product Designer အနေဖြင့် Business Education Background မှလာသူဖြစ်ပြီး uab bank ရဲ့ Former Fintech Product Designer တစ်ဦးဖြစ်ပါတယ်\n" +
                "E-wallets, B2B, B2C, ATS system, Travel & Community စတဲ့ projectတွေမှာ Product Designer အနေဖြင့်တာဝန်ယူလုပ်ကိုင်ခဲ့ပြီး လက်ရှိမှာတော့ Celestial Dragon Tech ရဲ့ founder တစ်ဦးအနေဖြင့် User တွေအတွက် လွယ်ကူရိုးရှင်းပြီး Value ပေးနိုင်မယ့် Digital Products တွေကို Business Concept နဲ့ အညီ ပူးပေါင်းဖန်တီးပေးနေပါတယ်",
            confirmed: true,
            image: HninHayMarAung
        },
        {
            name: "Ma Nwe Oo Lwin",
            role: "TRAINER ASSISTANT",
            bio: "I am a UI/UX Designer at an Information and Technology company, focusing on creating intuitive and user-friendly experiences. With a strong interest in UX principles, I enjoy sharing knowledge and supporting others in their design journey. As a Trainer Assistant, I aim to guide participants in developing their design thinking and practical skills.\n" +
                "\n" +
                "Quote - We were born to be real, not perfect.",
            confirmed: true,
            image: NweOoLwin
        },
        {
            name: "Ma Seint Sinsar Lwin",
            role: "TRAINER ASSISTANT",
            bio: "Seint Sinsar Lwin is a Sr. UI/UX Designer with over 4 years of experience in the UI/UX design field. She currently works at one of Myanmar's leading local banks, where she plays a pivotal role in leading the design team to enhance the organization's UX Maturity level. \n" +
                "\n" +
                "In addition to her professional role, Seint actively contributes to the broader tech community by volunteering with WAI Myanmar and Google Developer Group Yangon, helping foster growth and development within the Myanmar IT Community.\n" +
                "\n" +
                "Seint Sinsar Lwin သည် Sr. UI/UX Designer တစ်ဦးဖြစ်ပြီး၊ UI/UX ဒီဇိုင်းနယ်ပယ်တွင် အတွေ့အကြုံ ၄ နှစ်ကျော် ရှိသူဖြစ်သည်။ သူမ၏ ပရော်ဖက်ရှင်နယ်အလုပ်တာဝန်များအပြင်၊ WAI Myanmar နှင့် Google Developer Group Yangon တို့တွင် စေတနာ့ဝန်ထမ်းအဖြစ် ပါဝင်လှုပ်ရှားလျက်ရှိပြီး၊ မြန်မာနိုင်ငံရှိ IT Community ၏ ကြီးထွားဖွံ့ဖြိုးရေးအတွက် ကူညီအားဖြည့်ပေးနေသူတစ်ဦးလည်း ဖြစ်သည်။",
            confirmed: true,
            image: SeintSinsarLwin
        },
        {
            name: "SomeOne",
            role: "TRAINER ASSISTANT",
            bio: "Bio will be revealed soon.",
            confirmed: false,
            image: ""
        },
        {
            name: "SomeOne",
            role: "TRAINER ASSISTANT",
            bio: "Bio will be revealed soon.",
            confirmed: false,
            image: ""
        },
        {
            name: "SomeOne",
            role: "TRAINER ASSISTANT",
            bio: "Bio will be revealed soon.",
            confirmed: false,
            image: ""
        },
    ];

    // Filter trainers by role
    const trainerLead = trainers.filter(trainer => trainer.role === "TRAINER LEAD");
    const trainersList = trainers.filter(trainer => trainer.role === "TRAINER");
    const trainerAssistants = trainers.filter(trainer => trainer.role === "TRAINER ASSISTANT");

    // Open trainer bio modal
    const openBioModal = (trainer) => {
        setSelectedTrainer(trainer);
        document.body.style.overflow = 'hidden';
    };

    // Close trainer bio modal
    const closeBioModal = () => {
        setSelectedTrainer(null);
        document.body.style.overflow = 'auto';
    };

    // Get role color based on trainer role
    const getRoleColor = (role) => {
        switch (role) {
            case "LEAD TRAINER":
                return "text-purple-400";
            case "TRAINER":
                return "text-pink-400";
            case "TRAINER ASSISTANT":
                return "text-yellow-400";
            default:
                return "text-pink-400";
        }
    };

    // Get role badge background based on trainer role
    const getRoleBadgeColor = (role) => {
        switch (role) {
            case "LEAD TRAINER":
                return "bg-purple-400/20 border-purple-400/50";
            case "TRAINER":
                return "bg-pink-400/20 border-pink-400/50";
            case "TRAINER ASSISTANT":
                return "bg-yellow-400/20 border-yellow-400/50";
            default:
                return "bg-pink-400/20 border-pink-400/50";
        }
    };

    return (
        <section className="w-full md:w-[80%] mx-auto overflow-hidden">
            {/* Black Header Section */}
            <div ref={titleRef} className="bg-black p-4 md:p-6 flex items-center border-white border-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold font-malinton">Trainer List</h2><img src={White} alt="Yellow Star" className="w-12 h-12 pl-3 inline-block text-white" />
            </div>

            {/* Trainer Cards Grid */}
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => trainer.confirmed && openBioModal(trainer)}
                            className={`bg-[#1A1A1A] relative overflow-hidden cursor-pointer ${!trainer.confirmed ? 'pointer-events-none' : ''}`}
                        >
                            {/* Locked Overlay for Unconfirmed Trainers */}
                            {!trainer.confirmed && (
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-10">
                                    <div className="text-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <p className="text-sm">Coming Soon</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center">
                                {/* Trainer Image Section */}
                            <div className="w-24 h-24 bg-[#E7A8E2] flex items-center justify-center flex-shrink-0">
                                    {trainer.image ? (
                                        <img
                                            loading="lazy"
                                            src={trainer.image} 
                                            alt={trainer.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-[#E7A8E2]">
                                            <svg 
                                                className="w-10 h-10 text-white" 
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

                                {/* Trainer Info Section */}
                                <div className="px-4 py-2 flex-grow">
                                    <h3 className="text-white text-lg font-medium">
                                        {trainer.confirmed ? trainer.name : "Mystery Trainer"}
                                    </h3>
                                    
                                    {/* Role Badge */}
                                    <div className={`inline-block px-2 py-1 rounded-full text-xs border ${getRoleBadgeColor(trainer.role)} mt-1`}>
                                        <span className={getRoleColor(trainer.role)}>
                                            {trainer.confirmed ? trainer.role : "Role to be announced"}
                                        </span>
                                    </div>
                                </div>
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
                        <span>Explore all trainers on event</span>
                        <span>→</span>
                    </motion.button>
                </div>
            </div>

            {/* Bio Modal */}
            <AnimatePresence>
                {selectedTrainer && (
                    <motion.div 
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeBioModal}
                    >
                        <motion.div 
                            className="bg-[#1A1A1A] max-w-4xl w-full rounded-lg overflow-hidden max-h-[90vh]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Image Section (Top on mobile, Right on desktop) */}
                                <div className="w-full md:w-[300px] h-[200px] md:h-auto flex-shrink-0 bg-[#E7A8E2]">
                                    {selectedTrainer.image ? (
                                        <img 
                                            src={selectedTrainer.image} 
                                            alt={selectedTrainer.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-[#E7A8E2]">
                                            <svg 
                                                className="w-24 h-24 text-white" 
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

                                {/* Content Section (Bottom on mobile, Left on desktop) */}
                                <div className="flex-1 flex flex-col p-4">
                                    {/* Header with close button */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h2 className="text-white text-2xl font-bold">{selectedTrainer.name}</h2>
                                            <div className={`inline-block px-3 py-1 rounded-full text-sm border ${getRoleBadgeColor(selectedTrainer.role)} mt-2`}>
                                                <span className={getRoleColor(selectedTrainer.role)}>
                                                    {selectedTrainer.role}
                                                </span>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={closeBioModal}
                                            className="text-gray-400 hover:text-white"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Bio Content - Scrollable with fixed height */}
                                    <div 
                                        ref={bioContentRef}
                                        onScroll={handleScroll}
                                        className="overflow-y-auto scrollbar-hide relative touch-auto" 
                                        style={{ 
                                            scrollbarWidth: 'none', 
                                            msOverflowStyle: 'none',
                                            WebkitOverflowScrolling: 'touch',
                                            height: '30vh',
                                            minHeight: '150px',
                                            maxHeight: '50vh'
                                        }}
                                    >
                                        <div className="text-gray-300 space-y-4 pr-4 pb-10">
                                            {selectedTrainer.bio.split('\n\n').map((paragraph, index) => (
                                                <p key={index} className="text-sm md:text-base">
                                                    {paragraph.split('\n').map((line, lineIndex) => (
                                                        <React.Fragment key={lineIndex}>
                                                            {line}
                                                            {lineIndex < paragraph.split('\n').length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            ))}
                                        </div>
                                        
                                        {/* Scroll indicator arrow - Positioned at bottom */}
                                        {showScrollIndicator && (
                                            <div className="sticky bottom-0 left-0 w-full bg-gradient-to-t from-[#1A1A1A] to-transparent h-14 flex justify-center items-end pb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TrainerSection; 

/*
<img 
    src={trainer.image} 
    alt={trainer.name}
    className="w-full aspect-square object-cover"
/>
*/