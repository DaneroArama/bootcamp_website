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
import ThazinWin from "../img/Mentors/Thazin Win.webp";
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
            bio: "Ko Myo Maung Maung, who is also a consultant at UXMM, is currently working at Proximity Designs. With over a decade of experience as a UX/UI Designer in the telecom, banking, and fintech industries, he is an expert in leadership, project management, design strategy, research, and creative fields. In addition, he also mentors young people in Graphic Design, using engaging methods to explore their interest. He is a dedicated professional who continues to contribute significantly to the design community.\n"+
                "\n"+
                "UXMM ရဲ့ consultant တစ်ဦးလည်းဖြစ်တဲ့ ကိုမျိုးမောင်မောင်ဟာဆိုရင်ဖြင့် အခုလက်ရှိ Proximity Designs မှာ တာဝန်ထမ်းဆောင်လျက်ရှိပြီး၊ UX/UI Designer အဖြစ် telecom, banking နဲ့ fintech industries တွေမှာ ဆယ်စုနှစ်ကျော် တာ၀န်ထမ်းဆောင်ခဲ့သူ ဖြစ်ပါတယ်။ Leadership, project management, design strategy, research နဲ့ creative အပိုင်း တွေမှာ ကျွမ်းကျင်သူဖြစ်ပြီး UI/UX အပိုင်းအပြင် Graphic Design ပိုင်းကိုလည်း လူငယ်များအတွက် စိတ်ဝင်စားနိုင်မယ့်နည်းစနစ်တွေနဲ့ mentorship လုပ်ပေးနေသူတစ်ဦးလည်းဖြစ်ပါသေးတယ်။",
                confirmed: true,
            image: KoMyoMaungMaung
        },
        {
            name: "Ko Khant (Barry)",
            role: "TRAINER",
            bio:"Ko Barry previously worked as a Product Designer at Hub Solutions, a Singapore-based agency. Currently, he is collaborating with Hysan Education creating UX/UI designs for their SAAS products. Additionally, he has experience in content creation at Compass and currently serving as a Design Instructor at Code Mal Academy, where he continues to contribute to the field of design education\n"+
                "\n"+
                "ကို Barry ကတော့ Hub Solutions လို့ခေါ်တဲ့ Singapore Agency မှာ Product Designer အနေနဲ့လုပ်ခဲ့ပြီး လက်ရှိမှာတော့ Hysan Education နဲ့အတူ SAAS Products တွေအတွက်လက်တွဲပြီးတော့ UXUI ပိုင်းတာဝန်ယူလုပ်ပေးနေပါတယ်။ ဒါ့အပြင် Compass မှာ Content Creation တွေဖန်တီးခဲ့သူတစ်ဦးဖြစ်ပြီး လက်ရှိCode Mal Academy မှာ Design Instructor အနေနဲ့လည်းတာဝနယူဆောင်ရွက်လျက်ရှိပါတယ်။",
            confirmed: true,
            image: Barry
        },
        {
            name: "Ko Lynn Htet Thant",
            role: "TRAINER",
            bio:"Ko Linn Htet Thant is an experienced UX Designer with over four years of expertise. He is skilled in managing the entire design process, from user research to prototyping, usability testing, and final product delivery, with meticulous attention to detail. Additionally, he is actively involved in knowledge sharing, consistently contributing to the growth and development of the next generation of UX professionals.\n"+
                    "\n"+
                    "ကိုလင်းထက်သန့်ဟာဆိုရင်တော့ UX Designer အဖြစ် (၄)နှစ်ကျော် အတွေ့ကြုံရှိသည့် Designer တစ်ဦးဖြစ်ပြီး user research မှသည် prototyping, usability testing နဲ့ နောက်ဆုံး product ထွက်ရှိလာတဲ့အထိ process အစအဆုံးကို detail ကျစွာဖန်တီးနိုင်သူတစ်ဦးဖြစ်ပါတယ်။ UX မျိုးဆက်သစ်တွေအတွက်လည်း knowledge sharing များကို အမြဲတစ်စေပြုလုပ်ပေးနေသူတစ်ဦးလည်းဖြစ်ပါတယ်။",
            confirmed: true,
            image: LynnHtetThant
        },
        {
            name: "Ko Min Nanda Zan",
            role: "TRAINER",
            bio:"Ko Min Nanda Zan (Kanzo) is a Product Designer and UX Specialist with over six years of experience. He started as a Freelance Graphic Designer in 2017 and joined Venus Lab in 2018 as a UI/UX Designer, where he handled numerous branding, e-commerce, and AR projects. Additionally, he worked as a Senior UX/UI Specialist at Brycen Myanmar and currently serving as a UX Specialist & Product Designer at Wave Money. Through his work, he focuses on research and solving user problems to create seamless digital experiences.\n"+
                    "\n"+
                    "ကိုမင်းနန္ဒစျာန် (Kanzo) ဟာဆိုရင်တော့ဖြင့် Product Designer နဲ့ UX Specialist အနေနဲ့ (၆) နှစ်ကျော် Experience ရှိသူတစ်ဦးဖြစ်ပါတယ်။ 2017 ကတည်းက Freelance Graphic Designer အနေနဲ့လုပ်ကိုင်ခဲ့ပြီး 2018 မှာ Venus Lab ရဲ့ UI/UX Designer အနေနဲ့ Branding, e-commerce, and AR project ပေါင်းများစွာကို ကိုင်တွယ်ခဲ့ပါတယ်။ ဒါ့အပြင် Senior UX/UI Specialist အနေနဲ့ Brycen Myanmar မှာလုပ်ကိုင်ခဲ့ပြီး UX Specialist & Product Designer အနေနဲ့ Wave Money မှာလုပ်ကိုင်လျက်ရှိပါတယ်။ထိုမှတစ်ဆင့် research နဲ့ user problem တွေကို အဖြေရှာကာ seamless digital experience တွေရရှိအောင်ဖန်တီးလျက်ရှိပါတယ်။",
                confirmed: true,
            image: MinNandaZaw
        },
        {
            name: "Ko Min Ye Htut Myat",
            role: "TRAINER",
            bio:"Min Ye Htet Myat is a passionate designer who specializes in solving problems at the intersection of design, technology, and business. He has experience working at a well-known start-up company, where he created products and solutions, showcasing his expertise and innovative approach.\n"+
                    "\n"+
                    "မင်းရဲထွဋ်မြတ်ဟာဆိုရင်တော့ဖြင့်  design, technology နဲ့ business တို့ရဲ့ပြဿနာတွေကိုဖြေရှင်းပေးနေတဲ့ passionate designer တစ်ဦးဖြစ်ပါတယ်။ နာမည်ကြီး Start-up company မှာ product တွေနဲ့ solution တွေဖန်တီးပေးနေသူတစ်ဦးအဖြစ် အတွေ့အကြုံရှိခဲ့ဖူးသူတစ်ဦးလည်းဖြစ်ပါတယ်။",
            confirmed: true,
            image: MinYeHtutMyat
        },
        {
            name: "Ko Zwe Kaung Htet",
            role: "TRAINER",
            bio: "Zwe Kaung Htet is currently working as a Senior UI/UX Designer at Ooredoo Myanmar. He previously worked as a Senior Designer at A Bank and has over six years of experience in e-Commerce, POS systems, ERP systems, banking, fintech, and telecommunications. He is highly skilled in creating seamless user experiences and effective interfaces. Additionally, he actively contributes to the community by sharing valuable advice and knowledge to designers.\n"+
                    "\n"+
                    "ဇွဲကောင်းထက်ဟာဆိုရင်တော့ဖြင့် အခုလက်ရှိ စီနီယာ UI/UX Designer အနေနဲ့ Ooredoo Myanmar မှာလုပ်ကိုင်လျက်ရှိပါတယ်။ A Bank ရဲ့ Senior Designer တစ်ဦးအနေနဲ့လည်း တာဝန်ထမ်းဆောင်ခဲ့ဖူးပြီး eCommerce, POS systems, ERP Systems, Banking, Fintech နဲ့ Telecommunications ပိုင်းတွေမှာ ၆ နှစ်ကျော်အတွ့အကြုံရှိသူတစ်ဦးဖြစ်ပါတယ်။ seamless user experience တွေနဲ့ ထိရောက်တဲ့ interface တွေဖန်တီးတဲ့နေရာမှာ အထူးကျွမ်းကျင်သူတစ်ဦးဖြစ်ပါတယ်။ Community ထဲမှာလဲ လူတိုင်းအတွက်အကျိုးရှိစေမယ့် အကြံဉာဏ်တွေသာမက knowledge sharing တွေကိုပါဝေမျှလျက်ရှိပါတယ်။",
            confirmed: true,
            image: Zawkaunghtet
        },
        {
            name: "Ma A Chan Pyae",
            role: "TRAINER",
            bio: "Ma Aye Chan Pyae is an expert in MVP design and user research and has experience in the startup sector. As a data-driven decision-maker, she skillfully creates products that align with business objectives and user needs. With extensive experience in both local and international projects, she is known for delivering accurate and effective solutions.\n"+
                "\n"+
            "မအေးချမ်းပြည့်ဟာဆိုရင်တော့ဖြင့် startup နယ်ပယ်တွေရဲ့ MVP design ဖန်တီးမှုအပိုင်းတွေနဲ့ User Research အပိုင်းတွေမှာ ကျွမ်းကျင်စွာလုပ်ကိုင်နိုင်သူတစ်ဦးဖြစ်ပါတယ်။ data-driven decision-maker တစ်ဦးအနေနဲ့ Product တွေကို နည်းစနစ်ကျစွာ business objectives နဲ့ user needs ကို ကိုက်ညီအောင်ဖန်တီးပေးလျက်ရှိပါတယ်။ ပြည်တွင်းပြည်ပ project experience တွေလည်းများစွာရှိပြီး မှန်ကန်တဲ့ soultion တွေထုတ်ပေးနိုင်သူတစ်ဦးဖြစ်ပါတယ်။",
            confirmed: true,
            image: AChanPyae
        },
        {
            name: "Ma Shu Mawa Soe",
            role: "TRAINER",
            bio: "Ma Shwe Wah Soe is currently working as a UX Designer in the fintech industry. With over four years of experience, she has assisted numerous organizations and startups in creating products with excellent user experiences. Additionally, she uses Design Thinking and UX methodologies to develop better solutions for everyone."+
                "\n"+
                "မရှုမဝစိုးဟာဆိုရင်တော့ဖြင့် fintech industry မှာ UX Designer အနေနဲ့လုပ်ကိုင်လျက်ရှိပါတယ်။  experience (၄)နှစ်ကျော်လုပ်နေစဉ်အတွင်း များစွာသော organization နဲ့ startup တွေမှာ UX ကောင်းတဲ့ Product တွေဖန်တီးဖို့ ကူညီပံ့ပိုးပေးသူတစ်ဦးလည်းဖြစ်ပါတယ်။ ဒါ့အပြင် Design Thinking နဲ့ UX methodologiesကို အသုံးပြုပြီး အားလုံးအတွက် ပိုမိုကောင်းမွန်တဲ့ Solution တွေကို ဖန်တီးပေးလျက်ရှိပါတယ်။" ,
                confirmed: true,
            image: ShuMawaSoe
        },
        {
            name: "Ma Thazin Win",
            role: "TRAINER",
            bio:"Ma Thazin Win is currently working at a Myanmar-based company, The UI Studio, where she consistently bridges the gap between business objectives and user satisfaction. She approaches design by combining technical possibilities, innovation, and user-centric solutions to create effective and impactful designs.\n"+
                    "\n"+
                    "မသဇင်ဝင်းဟာဆိုရင်တော့ဖြင့် မြန်မာ base, The UI Studio မှာလုပ်ကိုင်လျက်ရှိပြီး business objectives နဲ့ user satisfaction ရဲ့ gap ကို အမြဲဖြည့်စည်းပေးလျက်ရှိပါတယ်။ technical possibilities, innovation နဲ့ user-centric solutions တွေကိုဖြေရှင်းပေးမယ့် apporach နဲ့ ဒီဇိုင်းများဖန်တီးရေးဆွဲလျက်ရှိပါတယ်။",
            confirmed: true,
            image: ThazinWin // Add mentor image path here
        },
        {
            name: "Ma Hnin Hay Mar Aung",
            role: "TRAINER ASSISTANT",
            bio: "Product Designer အနေနဲ့ (၅) နှစ်ကျော် အတွေ့အကြုံရှိသူဖြစ်တဲ့ နှင်းဟေမာအောင် ဟာဆိုရင်တော့ Travel & Business ဘက်မှလာသူဖြစ်ပြီး e-wallets, B2B, B2C, ATS system, Travel & Community, Inventory Management System စတဲ့ Projects တွေကိုလည်းတာဝန်ယူလုပ်ကိုင်ခဲ့ဖူးပါတယ် uab Bank - Fintech ရဲ့ former Product Designer အနေနဲ့လည်းတာဝန်ယူလုပ်ကိုင်ခဲ့ဖူးပါတယ် အခုလက်ရှိမှာတော့ Celestial Dragon Tech ရဲ့ founder တစ်ဦးဖြစ်ပြီး start-up Product ဖြစ်တဲ့ EzyPet App ကို launch လုပ်နိုင်ခဲ့တဲ့အပြင် User တွေအတွက် လွယ်ကူရိုးရှင်းပြီး Value ပေးနိုင်မယ့် Digital Products တွေကို Business Concept နဲ့ အညီ ပူးပေါင်းဖန်တီးပေးနိုင်ဖို့ကို အဓိကထားလုပ်ဆောင်နေသူဖြစ်ပါတယ်\n" +
                "\n" +
                "Hnin Hay Mar Aung comes from a Travel & Business background and has over 5 years of experience as a Product Designer. She has also taken on responsibilities for various projects, including e-wallets, B2B, B2C, ATS systems, Travel & Community platforms, and Inventory Management Systems. She previously worked as the Former Product Designer at uab Bank - Fintech. Currently, she is the Founder of Celestial Dragon Tech and has successfully launched the startup product EzyPet App. She is primarily focused on creating user-friendly and value-driven digital products that align with business concepts, aiming to deliver solutions that are simple, accessible, and valuable for users.",
            confirmed: true,
            image: HninHayMarAung
        },
        {
            name: "Ma Nwe Oo Lwin",
            role: "TRAINER ASSISTANT",
            bio: "Ma Nwe Oo Lwin is a UX/UI Designer working at an IT company. She likes to create products with excellent UX and actively contributes to ensuring a smooth development process. With experience in product design, she focuses on crafting simple and user-friendly digital experiences for users.\n"+
                    "\n"+
                    "မနွယ်ဦးလွင်ဟာဆိုရင်တော့ IT Company တစ်ခုမှာ UX/UI Designer အဖြစ်လုပ်ကိုင်နေသူဖြစ်ပြီး, UX ကောင်းမွန်သော product များဖန်တီးရန် ကြိုးပမ်းတဲ့အပြင်, development process အဆင့်ထိ အဆင်ပြေစေရန် ပါဝင်ကူညီပေးနေသူဖြစ်ပါတယ်။Product design ပိုင်းတွင်လည်း အတွေ့အကြုံရှိပြီး, အသုံးပြုသူအတွက် သုံးလွယ်ရိုးရှင်းသည့် digital experience များဖန်တီးရန် အာရုံစိုက်လျှက်ရှိသူလည်းဖြစ်ပါတယ်။",
            confirmed: true,
            image: NweOoLwin
        },
        {
            name: "Ma Seint Sinsar Lwin",
            role: "TRAINER ASSISTANT",
            bio: "Ma Seint Sinsar Lwin is a Senior UX/UI Designer with over 4 years of experience. Currently, she is working at one of Myanmar's top-tier banks, leading efforts to enhance UX maturity within design teams. She is also a volunteer for WAI Myanmar and Google Developer Group Yangon, actively contributing to the advancement of the IT community.\n"+
                    "\n"+
                    "မစိမ့်စဥ္စာလွင်ဟာဆိုရင်တော့ သက်တမ်း(၄)နှစ်ကျော်ရှိတဲ့ Senior UX/UI Designer တစ်ဦးဖြစ်ပါတယ်။ လက်ရှိမှာတော့ မြန့်မာထိပ်တန်းဘဏ်တစ်ခုတွင်လုပ်ကိုင်နေပြီး ဒီဇိုင်းအဖွဲ့များကို UX Maturity မြှင့်တင်ရန်ဦးဆောင်လုပ်ဆောင်လျက်ရှိပါတယ်။ WAI Myanmar နှင့် Google Developer Group Yangon ရဲ့ Volunteer တစ်ဦးဖြစ်ပြီး IT Community တိုးတက်စေရန် ကူညီအားဖြည့်ပါဝင်ပေးနေသူတစ်ဦးလည်းဖြစ်ပါတယ်။",
            confirmed: true,
            image: SeintSinsarLwin
        },
    ];

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
                            <div className="flex items-center">
                                {/* Trainer Image Section */}
                                <motion.div layoutId={`trainer-image-${trainer.name}`} className="w-24 h-24 bg-[#E7A8E2] flex-shrink-0">
                                    {trainer.image && (
                                        <img
                                            loading="lazy"
                                            src={trainer.image} 
                                            alt={trainer.name}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </motion.div>

                                {/* Trainer Info Section */}
                                <motion.div layoutId={`trainer-content-${trainer.name}`} className="px-4 py-2 flex-grow">
                                    <h3 className="text-white text-lg font-medium">
                                        {trainer.confirmed ? trainer.name : "Mystery Trainer"}
                                    </h3>
                                    <div className={`inline-block px-2 py-1 rounded-full text-xs border ${getRoleBadgeColor(trainer.role)} mt-1`}>
                                        <span className={getRoleColor(trainer.role)}>
                                            {trainer.confirmed ? trainer.role : "Role to be announced"}
                                        </span>
                                    </div>
                                </motion.div>
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
                        <span>Meet all trainers on event</span>
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
                            className="bg-[#1A1A1A] max-w-4xl w-full rounded-lg overflow-hidden max-h-[100vh] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                                onClick={closeBioModal}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                {/* Rest of the modal content */}
                                <motion.div 
                                    layoutId={`trainer-image-${selectedTrainer.name}`} 
                                    className="w-full md:w-[300px] h-[300px] md:h-auto flex-shrink-0 bg-[#E7A8E2]"
                                >
                                    <img 
                                        src={selectedTrainer.image} 
                                        alt={selectedTrainer.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </motion.div>

                                {/* Content Section */}
                                <div className="flex-1 flex flex-col p-4">
                                    <motion.div layoutId={`trainer-content-${selectedTrainer.name}`}>
                                        <h2 className="text-white text-2xl font-bold">{selectedTrainer.name}</h2>
                                        <div className={`inline-block px-3 py-1 rounded-full text-sm border ${getRoleBadgeColor(selectedTrainer.role)} mt-2`}>
                                            <span className={getRoleColor(selectedTrainer.role)}>
                                                {selectedTrainer.role}
                                            </span>
                                        </div>
                                    </motion.div>

                                    {/* Bio Content with animation */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.3 }}
                                        ref={bioContentRef}
                                        onScroll={handleScroll}
                                        className="mt-6 overflow-y-auto scrollbar-hide relative touch-auto" 
                                        style={{ 
                                            scrollbarWidth: 'none', 
                                            msOverflowStyle: 'none',
                                            WebkitOverflowScrolling: 'touch',
                                            height: '40vh',
                                            minHeight: '150px',
                                            maxHeight: '50vh'
                                        }}
                                    >
                                        <div className="text-gray-300 space-y-4 pr-4 pb-10">
                                            {selectedTrainer.bio.split('\n\n').map((paragraph, index) => (
                                                <p key={index} className="text-sm md:text-base">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                        
                                        {/* Scroll indicator arrow */}
                                        {showScrollIndicator && (
                                            <div className="sticky bottom-0 left-0 w-full bg-gradient-to-t from-[#1A1A1A] to-transparent h-14 flex justify-center items-end pb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                </svg>
                                            </div>
                                        )}
                                    </motion.div>
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