import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react";
import White from "../img/Second Icon/White.svg";
import Black from "../img/Second Icon/BlackStar.svg";
import DuWunAung from "../img/Speaker/Du Wun Aung.webp";
import KyawMyoThet from "../img/Speaker/KyawMyoThet.webp";
import PyitSoneOo from "../img/Speaker/Pyit Sone Oo.webp";
import WaiYiMonSoe from "../img/Speaker/Wai Yi Mon Soe.webp";
const SpeakerSection = () => {
    const [expandedSpeaker, setExpandedSpeaker] = useState(null);
    const titleRef = useRef(null);

    const speakers = [
        {
            name:           "Ko Du Wun Aung",
            position:       "Product Owner",
            description:    "ကိုဓူဝံအောင်ဟာဆိုရင်တော့  software engineering, product management နဲ့ technical operations အပိုင်းတွေမှာထူးချွန်တဲ့ Product Owner တစ်ဦးဖြစ်ပါတယ်။  Business Information Technology နဲ့ System Analysis Background က လာတဲ့သူဖြစ်တဲ့အလျောက် developer, technical director, product owner အစရှိတဲ့အလုပ်အကိုင်တွေကို လုပ်ကိုင်ဖူးသူတစ်ဦးလည်းဖြစ်ပါတယ်။\n" +
                            "\n" +
                            "Ko Du Wun Aung is an Product Owner with expertise in software engineering, product management, and technical operations. With a background in Business Information Technology and System Analysis, he has held various roles such as developer, technical director, and product owner, bringing a wealth of experience to his work.\n",
            confirmed:      true,
            image:          DuWunAung // Add speaker image path here
        },
        {
            name: "Ko Kyaw Myo Thet",
            position: "Chief Technical Officer (CTO)",
            company: "CTZPay",
            description: "CTZPay မှာ Chief Technology Officer (CTO) အနေနဲ့ လက်ရှိလုပ်ကိုင်နေတဲ့ ကိုကျော်မျိုးသက်ဟာဆိုရင်တော့ Management Point of View for UX in Product Design ခေါင်းစဉ်ဖြင့် Bootcamp မှာဝင်ရောက်ဆွေးနွေးသွားမှာဖြစ်ပါတယ်။ Strategic Leader နှင့် Enterprise Architect တစ်ဦးအဖြစ် IT နယ်ပယ်တွင် အတွေ့အကြုံ (၁၈) နှစ်ကျော်ရှိသူတစ်ဦးဖြစ်ပြီး အဖွဲ့အစည်းများရဲ့Digital Transformation လုပ်ငန်းစဉ်များတွင် ကဏ္ဍအသီးသီးမှ ပါဝင်ကူညီဆောင်ရွက်ခဲ့သူတစ်ဦးလဲဖြစ်ပါတယ်။ လက်ရှိတွင်လည်း CTZPay ၏ စီးပွားရေးရည်မှန်းချက်များနှင့် နည်းပညာဆိုင်ရာ တီထွင်ဆန်းသစ်မှုများကို သဟဇာတဖြစ်စေရန် Agile Principle များကို အခြေခံ၍ product and technical team များကို ဦးစီးဆောင်ရွက်လျက်ရှိပါတယ်။\n" +
                "\n" +
                "Ko Kyaw Myo Thet, currently serving as the Chief Technology Officer (CTO) of CTZPay, will be participating in a Bootcamp to discuss the topic \"Management Point of View for UX in Product Design.\" With over 18 years of experience as a Strategic Leader and Enterprise Architect in the IT field, he has contributed to various aspects of Digital Transformation initiatives within organizations. Currently, he is leading product and technical teams at CTZPay, utilizing Agile Principles to align the company's business goals with technological innovations.\n",
            confirmed: true,
            image: KyawMyoThet // Add speaker image path here
        },
        {
            name: "Ko Pyit Sone Oo",
            position: "Chief Creative Officer (CCO)",
            company: "B360",
            description:    "Think, Sprint, Design Bootcamp မှာ Advertising Design in UX ဆိုတဲ့အကြာင်းအရာလေးကို Speaker အနေနဲ့ပါဝင်အားဖြည့်ပေးသွားမယ့် ကိုပြည့်စုံဦးကတော့ Chief Creative Officer (CCO) အနေနဲ့ B360 မှာ တာဝန်ထမ်းဆောင်နေသူတစ်ဦးဖြစ်ပါတယ်။ Advertising, Branding, Design, Communications, Strategy planning အပိုင်းတွေမှာ ဆယ်စုနှစ်တစ်ခုစာလောက်အတွေ့အကြုံရှိပြီး Creative ဖြစ်တဲ့ idea တွေကိုပုံဖော်နေသူတစ်ဦးဖြစ်ပါတယ်။ Coca-Cola, Milo, Huawei, foodpanda အပြင် အခြားသောနာမည်ကြီး brand များစွာကိုလည်းကိုင်တွယ်နေသူဖြစ်ပါတယ်။\n" +
                            "\n" +
                            "At the Think, Sprint, Design Bootcamp, Ko Pyit Sone Oo, who will be contributing as a speaker on the topic of \"Advertising Design in UX\", is currently working as the Chief Creative Officer (CCO) at B360. With over a decade of experience in advertising, branding, design, communications, and strategy planning, he is a creative visionary who brings ideas to life. He has worked with famous brands such as Coca-Cola, Milo, Huawei, foodpanda, and many other well-known names, showcasing his expertise in handling high-profile projects.\n",
            confirmed: true,
            image: PyitSoneOo // Add speaker image path here
        },
        {
            name: "Ma Wai Yi Mon Soe",
            position: "Founder",
            company: "UXMM & Ultra Generation",
            description: "မဝေရည်မွန်စိုး ဟာဆိုရင်တော့ဖြင့် လက်ရှိမှာ Product Design Consultant အဖြစ်လုပ်ကိုင်လျက်ရှိပြီး UI, UX နှင့် Product Design ပိုင်းတွင်အထူးကျွမ်းကျင်သူတစ်ဦးလဲဖြစ်ပါတယ်။ သူမဟာဆိုရင်  UXMM နှင့် Ultra Generation (Ultra-G) ၏ Founder တစ်ဦးလည်း ဖြစ်ပြီး User-Centered Design Principles များကိုအသုံးပြုကာ Myanmar Design Community ကို အဘက်ဘက်က ပံ့ပိုးကူညီလျက်ရှိပါတယ်။ Design Thinking, HCI နှင့် နောက်ဆုံးပေါ်နည်းပညာများကိုအသုံးပြု၍ အောင်မြင်သော စီးပွားရေးများဖြစ်စေရန် Solution များကို ဖန်တီးကာ deliver လုပ်လျက်ရှိပါတယ်။\n" +
                "\n" +
                "Ma Wai Yi Mon Soe is currently working ‌as a Product Design Consultant and is a highly skilled professional in UI, UX, and Product Design. She is the founder of UXMM and Ultra-G, and actively supports the Myanmar Design Community by leveraging user-centered design principles. Utilizing design thinking, human-computer interaction (HCI), and the latest technologies, she creates and delivers effective solutions to drive successful businesses. Her work focuses on empowering the design community and fostering innovation in Myanmar.\n",
            confirmed: true,
            image: WaiYiMonSoe // Add speaker image path here
        },
    ];

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

    const toggleSpeakerDetails = (index) => {
        if (expandedSpeaker === index) {
            setExpandedSpeaker(null);
        } else {
            setExpandedSpeaker(index);
        }
    };

    // Remove pagination-related code and use speakers directly
    return (
        <section className="w-full md:w-[80%] mx-auto">
            {/* Black Header Section */}
            <div ref={titleRef} className="bg-black p-4 md:p-6 flex items-center border-white border-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold font-malinton">Speaker List </h2>
                <img src={White} alt="Yellow Star" className="w-12 h-12 pl-3 inline-block text-white" />
            </div>

            {/* Speaker Cards Container */}
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        {speakers.map((speaker, index) => (
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
                                <div className="w-full md:w-64 h-64 bg-gray-300 flex-shrink-0 overflow-hidden">
                                    {speaker.image ? (
                                        <img 
                                            src={speaker.image} 
                                            alt={speaker.name}
                                            className="w-full h-full object-cover object-top"
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
                                    <p className="text-lg md:text-xl mb-1">
                                        {speaker.confirmed ? speaker.position : "Role to be announced"}
                                    </p>
                                    {speaker.confirmed && speaker.company && (
                                        <p className="text-md md:text-lg mb-2 italic">
                                            {speaker.company}
                                        </p>
                                    )}
                                </div>
                                <div className="pb-3">
                                    <button
                                        onClick={() => speaker.confirmed && toggleSpeakerDetails(index)}
                                        className={`border-2 border-black px-7 py-2 md:py-4 rounded-full flex flex-row items-center gap-1 text-sm md:text-base whitespace-nowrap w-fit overflow-hidden ${!speaker.confirmed ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={!speaker.confirmed}
                                    >
                                        <img src={Black} alt="Black Star" className="w-4 h-4 flex-shrink-0" />
                                        <span className="font-malinton">Speaker Details</span>
                                        <span className={`px-2 font-malinton flex-shrink-0 transition-transform duration-300 ${expandedSpeaker === index ? 'rotate-180' : ''}`}>↓</span>
                                    </button>
                                </div>
                            </div>
                            {/* Full-width horizontal line */}
                            <div className="w-full h-[2px] bg-black mb-4"></div>
                                    <div className="relative">
                                        <div className={`transition-all duration-300 overflow-hidden ${expandedSpeaker === index ? 'max-h-[1000px]' : 'max-h-[150px]'}`}>
                                            {speaker.confirmed ? (
                                                <div className="text-base md:text-lg whitespace-pre-line">
                                                    {speaker.description}
                                                </div>
                                            ) : (
                                                <p className="text-base md:text-lg">
                                                    Speaker details will be revealed soon...
                                                </p>
                                            )}
                                        </div>
                                        {expandedSpeaker !== index && speaker.confirmed && (
                                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#E7A8E2] to-transparent"></div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SpeakerSection;