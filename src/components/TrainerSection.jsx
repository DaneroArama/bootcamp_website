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
            bio: "UXMM ရဲ့ consultant တစ်ဦးလည်းဖြစ်တဲ့ ကိုမျိုးမောင်မောင်ဟာဆိုရင်ဖြင့် အခုလက်ရှိ Proximity Designs မှာ တာဝန်ထမ်းဆောင်လျက်ရှိပြီး၊ UX/UI Designer အဖြစ် telecom, banking နဲ့ fintech industries တွေမှာ ဆယ်စုနှစ်ကျော် တာ၀န်ထမ်းဆောင်ခဲ့သူ ဖြစ်ပါတယ်။ Leadership, project management, design strategy, research နဲ့ creative အပိုင်း တွေမှာ ကျွမ်းကျင်သူဖြစ်ပြီး UI/UX အပိုင်းအပြင် Graphic Design ပိုင်းကိုလည်း လူငယ်များအတွက် စိတ်ဝင်စားနိုင်မယ့်နည်းစနစ်တွေနဲ့ mentorship လုပ်ပေးနေသူတစ်ဦးလည်းဖြစ်ပါသေးတယ်။\n" +
                "\n" +
                "Ko Myo Maung Maung, who is also a consultant at UXMM, is currently working at Proximity Designs. With over a decade of experience as a UX/UI Designer in the telecom, banking, and fintech industries, he is an expert in leadership, project management, design strategy, research, and creative fields. In addition, he also mentors young people in Graphic Design, using engaging methods to explore their interest. He is a dedicated professional who continues to contribute significantly to the design community.",
            confirmed: true,
            image: KoMyoMaungMaung
        },
        {
            name: "Ko Khant (Barry)",
            role: "TRAINER",
            bio: "ကို Barry ကတော့ Hub Solutions လို့ခေါ်တဲ့ Singapore Agency မှာ Product Designer အနေနဲ့လုပ်ခဲ့ပြီး လက်ရှိမှာတော့ Hysan Education နဲ့အတူ SAAS Products တွေအတွက်လက်တွဲပြီးတော့ UXUI ပိုင်းတာဝန်ယူလုပ်ပေးနေပါတယ်။ ဒါ့အပြင် Compass မှာ Content Creation တွေဖန်တီးခဲ့သူတစ်ဦးဖြစ်ပြီး လက်ရှိCode Mal Academy မှာ Design Instructor အနေနဲ့လည်းတာဝနယူဆောင်ရွက်လျက်ရှိပါတယ်။\n" +
                "\n" +
                "Ko Barry previously worked as a Product Designer at Hub Solutions, a Singapore-based agency. Currently, he is collaborating with Hysan Education creating UX/UI designs for their SAAS products. Additionally, he has experience in content creation at Compass and currently serving as a Design Instructor at Code Mal Academy, where he continues to contribute to the field of design education",
            confirmed: true,
            image: Barry
        },
        {
            name: "Ko Lynn Htet Thant",
            role: "TRAINER",
            bio: "ကိုလင်းထက်သန့်ဟာဆိုရင်တော့ UX Designer အဖြစ် (၄)နှစ်ကျော် အတွေ့ကြုံရှိသည့် Designer တစ်ဦးဖြစ်ပြီး user research မှသည် prototyping, usability testing နဲ့ နောက်ဆုံး product ထွက်ရှိလာတဲ့အထိ process အစအဆုံးကို detail ကျစွာဖန်တီးနိုင်သူတစ်ဦးဖြစ်ပါတယ်။ UX မျိုးဆက်သစ်တွေအတွက်လည်း knowledge sharing များကို အမြဲတစ်စေပြုလုပ်ပေးနေသူတစ်ဦးလည်းဖြစ်ပါတယ်။\n" +
                "\n" +
                "Ko Linn Htet Thant is an experienced UX Designer with over four years of expertise. He is skilled in managing the entire design process, from user research to prototyping, usability testing, and final product delivery, with meticulous attention to detail. Additionally, he is actively involved in knowledge sharing, consistently contributing to the growth and development of the next generation of UX professionals.",
            confirmed: true,
            image: LynnHtetThant
        },
        {
            name: "Ko Min Nanda Zan",
            role: "TRAINER",
            bio: "ကိုမင်းနန္ဒစျာန် (Kanzo) ဟာဆိုရင်တော့ဖြင့် Product Designer နဲ့ UX Specialist အနေနဲ့ (၆) နှစ်ကျော် Experience ရှိသူတစ်ဦးဖြစ်ပါတယ်။ 2017 ကတည်းက Freelance Graphic Designer အနေနဲ့လုပ်ကိုင်ခဲ့ပြီး 2018 မှာ Venus Lab ရဲ့ UI/UX Designer အနေနဲ့ Branding, e-commerce, and AR project ပေါင်းများစွာကို ကိုင်တွယ်ခဲ့ပါတယ်။ ဒါ့အပြင် Senior UX/UI Specialist အနေနဲ့ Brycen Myanmar မှာလုပ်ကိုင်ခဲ့ပြီး UX Specialist & Product Designer အနေနဲ့ Wave Money မှာလုပ်ကိုင်လျက်ရှိပါတယ်။ထိုမှတစ်ဆင့် research နဲ့ user problem တွေကို အဖြေရှာကာ seamless digital experience တွေရရှိအောင်ဖန်တီးလျက်ရှိပါတယ်။\n" +
                "\n" +
                "Ko Min Nanda Zan (Kanzo) is a Product Designer and UX Specialist with over six years of experience. He started as a Freelance Graphic Designer in 2017 and joined Venus Lab in 2018 as a UI/UX Designer, where he handled numerous branding, e-commerce, and AR projects. Additionally, he worked as a Senior UX/UI Specialist at Brycen Myanmar and currently serving as a UX Specialist & Product Designer at Wave Money. Through his work, he focuses on research and solving user problems to create seamless digital experiences.",
            confirmed: true,
            image: MinNandaZaw
        },
        {
            name: "Ko Min Ye Htut Myat",
            role: "TRAINER",
            bio: "မင်းရဲထွဋ်မြတ်ဟာဆိုရင်တော့ဖြင့်  design, technology နဲ့ business တို့ရဲ့ပြဿနာတွေကိုဖြေရှင်းပေးနေတဲ့ passionate designer တစ်ဦးဖြစ်ပါတယ်။ နာမည်ကြီး Start-up company မှာ product တွေနဲ့ solution တွေဖန်တီးပေးနေသူတစ်ဦးအဖြစ် အတွေ့အကြုံရှိခဲ့ဖူးသူတစ်ဦးလည်းဖြစ်ပါတယ်။\n" +
                "\n" +
                "Min Ye Htet Myat is a passionate designer who specializes in solving problems at the intersection of design, technology, and business. He has experience working at a well-known start-up company, where he created products and solutions, showcasing his expertise and innovative approach.\n",
            confirmed: true,
            image: MinYeHtutMyat
        },
        {
            name: "Zwe Kaung Htet",
            role: "TRAINER",
            bio: "ဇွဲကောင်းထက်ဟာဆိုရင်တော့ဖြင့် အခုလက်ရှိ စီနီယာ UI/UX Designer အနေနဲ့ Ooredoo Myanmar မှာလုပ်ကိုင်လျက်ရှိပါတယ်။ A Bank ရဲ့ Senior Designer တစ်ဦးအနေနဲ့လည်း တာဝန်ထမ်းဆောင်ခဲ့ဖူးပြီး eCommerce, POS systems, ERP Systems, Banking, Fintech နဲ့ Telecommunications ပိုင်းတွေမှာ ၆ နှစ်ကျော်အတွ့အကြုံရှိသူတစ်ဦးဖြစ်ပါတယ်။ seamless user experience တွေနဲ့ ထိရောက်တဲ့ interface တွေဖန်တီးတဲ့နေရာမှာ အထူးကျွမ်းကျင်သူတစ်ဦးဖြစ်ပါတယ်။ Community ထဲမှာလဲ လူတိုင်းအတွက်အကျိုးရှိစေမယ့် အကြံဉာဏ်တွေသာမက knowledge sharing တွေကိုပါဝေမျှလျက်ရှိပါတယ်။ \n" +
                "\n" +
                "Zwe Kaung Htet is currently working as a Senior UI/UX Designer at Ooredoo Myanmar. He previously worked as a Senior Designer at A Bank and has over six years of experience in e-Commerce, POS systems, ERP systems, banking, fintech, and telecommunications. He is highly skilled in creating seamless user experiences and effective interfaces. Additionally, he actively contributes to the community by sharing valuable advice and knowledge to designers.\n",
            confirmed: true,
            image: Zawkaunghtet
        },
        {
            name: "Ma A Chan Pyae",
            role: "TRAINER",
            bio: "မအေးချမ်းပြည့်ဟာဆိုရင်တော့ဖြင့် startup နယ်ပယ်တွေရဲ့ MVP design ဖန်တီးမှုအပိုင်းတွေနဲ့ User Research အပိုင်းတွေမှာ ကျွမ်းကျင်စွာလုပ်ကိုင်နိုင်သူတစ်ဦးဖြစ်ပါတယ်။ data-driven decision-maker တစ်ဦးအနေနဲ့ Product တွေကို နည်းစနစ်ကျစွာ business objectives နဲ့ user needs ကို ကိုက်ညီအောင်ဖန်တီးပေးလျက်ရှိပါတယ်။ ပြည်တွင်းပြည်ပ project experience တွေလည်းများစွာရှိပြီး မှန်ကန်တဲ့ soultion တွေထုတ်ပေးနိုင်သူတစ်ဦးဖြစ်ပါတယ်။\n" +
                "\n" +
                "Ma Aye Chan Pyae is an expert in MVP design and user research and has experience in the startup sector. As a data-driven decision-maker, she skillfully creates products that align with business objectives and user needs. With extensive experience in both local and international projects, she is known for delivering accurate and effective solutions.",
            confirmed: true,
            image: AChanPyae
        },
        {
            name: "Ma Shu Mawa Soe",
            role: "TRAINER",
            bio: "မရှုမဝစိုးဟာဆိုရင်တော့ဖြင့် fintech industry မှာ UX Designer အနေနဲ့လုပ်ကိုင်လျက်ရှိပါတယ်။  experience (၄)နှစ်ကျော်လုပ်နေစဉ်အတွင်း များစွာသော organization နဲ့ startup တွေမှာ UX ကောင်းတဲ့ Product တွေဖန်တီးဖို့ ကူညီပံ့ပိုးပေးသူတစ်ဦးလည်းဖြစ်ပါတယ်။ ဒါ့အပြင် Design Thinking နဲ့ UX methodologiesကို အသုံးပြုပြီး အားလုံးအတွက် ပိုမိုကောင်းမွန်တဲ့ Solution တွေကို ဖန်တီးပေးလျက်ရှိပါတယ်။\n" +
                "\n" +
                "Ma Shwe Wah Soe is currently working as a UX Designer in the fintech industry. With over four years of experience, she has assisted numerous organizations and startups in creating products with excellent user experiences. Additionally, she uses Design Thinking and UX methodologies to develop better solutions for everyone.",
            confirmed: true,
            image: ShuMawaSoe
        },
        {
            name: "Ma Thazin Win",
            role: "TRAINER",
            bio: "မသဇင်ဝင်းဟာဆိုရင်တော့ဖြင့် မြန်မာ base, The UI Studio မှာလုပ်ကိုင်လျက်ရှိပြီး business objectives နဲ့ user satisfaction ရဲ့ gap ကို အမြဲဖြည့်စည်းပေးလျက်ရှိပါတယ်။ technical possibilities, innovation နဲ့ user-centric solutions တွေကိုဖြေရှင်းပေးမယ့် apporach နဲ့ ဒီဇိုင်းများဖန်တီးရေးဆွဲလျက်ရှိပါတယ်။\n" +
                "\n" +
                "Ma Thazin Win is currently working at a Myanmar-based company, The UI Studio, where she consistently bridges the gap between business objectives and user satisfaction. She approaches design by combining technical possibilities, innovation, and user-centric solutions to create effective and impactful designs.\n",
            confirmed: true,
            image: ThazinWin // Add mentor image path here
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
            bio: "Seint Sinsar Lwin is a Sr. UI/UX Designer with over 4 years of experience in the UI/UX design field. She currently works at one of Myanmar’s leading local banks, where she plays a pivotal role in leading the design team to enhance the organization’s UX Maturity level. \n" +
                "\n" +
                "In addition to her professional role, Seint actively contributes to the broader tech community by volunteering with WAI Myanmar and Google Developer Group Yangon, helping foster growth and development within the Myanmar IT Community.\n" +
                "\n" +
                "Seint Sinsar Lwin သည် Sr. UI/UX Designer တစ်ဦးဖြစ်ပြီး၊ UI/UX ဒီဇိုင်းနယ်ပယ်တွင် အတွေ့အကြုံ ၄ နှစ်ကျော် ရှိသူဖြစ်သည်။ သူမသည် မြန်မာနိုင်ငံ၏ ထိပ်တန်းဘဏ်တစ်ခုတွင် လက်ရှိအလုပ်လုပ်ကိုင်နေပြီး၊ အဖွဲ့အစည်း၏ UX Maturity level မြှင့်တင်ရာတွင် ဒီဇိုင်းအဖွဲ့ကို ဦးဆောင်ကာ အဓိကအခန်းကဏ္ဍမှ ပါဝင်လျက်ရှိသည်။\n" +
                "\n" +
                "သူမ၏ ပရော်ဖက်ရှင်နယ်အလုပ်တာဝန်များအပြင်၊ WAI Myanmar နှင့် Google Developer Group Yangon တို့တွင် စေတနာ့ဝန်ထမ်းအဖြစ် ပါဝင်လှုပ်ရှားလျက်ရှိပြီး၊ မြန်မာနိုင်ငံရှိ IT Community ၏ ကြီးထွားဖွံ့ဖြိုးရေးအတွက် ကူညီအားဖြည့်ပေးနေသူတစ်ဦးလည်း ဖြစ်သည်။",
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