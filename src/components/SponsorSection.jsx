import { motion } from "framer-motion";
import CTZPay from "../img/Sponsors/CTZPay.svg";
import Untitled from "../img/Sponsors/untitled.png";
import MyJobs from "../img/Sponsors/myjobscommm.png";
import Sponsors from "../img/Second Icon/Sponsor.svg";
const SponsorSection = () => {

    const sponsors = [
        {
            type: "Venue Sponsor",
            color: "#EC1092",
            textColor: "text-white",
            hoverColor: "hover:bg-white hover:text-white",
            items: [
                { id: 1, logo: CTZPay, name: "CTZPay", confirmed: true, link: "https://ctzpay.com/" },
            ]
        },
        {
            type: "Sponsor",
            color: "#4B4F2C",
            textColor: "text-white",
            hoverColor: "hover:bg-white hover:text-white",
            items: [
                { id: 1, logo: Untitled, name: "Untitled", confirmed: true, link: "https://www.facebook.com/Untitled.DessertStudio/" },
            ]
        },
        {
            type: "Sponsor",
            color: "#FFA500",
            textColor: "text-white",
            hoverColor: "hover:bg-white hover:text-white",
            items: [
                { id: 1, logo: MyJobs, name: "MyJobs.com.mm", confirmed: true, link: "https://myjobs.com.mm/" },
            ]
        },
    ];

    return (
        <section className="w-full">
            {/* Our Partners & Sponsors */}
            <div className="px-4 md:px-12 py-12 md:py-16">
                {/* Title with floating bubbles */}
                <div className="relative mb-16">
                    {/* Main title with bubbles positioned around it */}
                    <div className="relative mx-auto max-w-3xl">
                        {/* Main title */}
                        <h2 className="text-5xl md:text-7xl font-bold text-center text-white relative z-10 font-malinton">
                            Our Sponsors
                        </h2>

                        {/* Floating company bubbles - positioned to overlap with title */}
                        <motion.div
                            className="absolute -top-8 left-32 z-0 hidden md:block"
                            initial={{ rotate: -20 }}
                            animate={{
                                y: [0, -5, 0],
                                transition: { repeat: Infinity, duration: 3 }
                            }}
                        >
                            <div className="bg-[#EC1092] px-6 py-2 rounded-full text-black font-medium transform">
                                CTZPay
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute -top-8 right-[20%] z-0 hidden md:block"
                            initial={{ rotate: 20 }}
                            animate={{
                                y: [0, -8, 0],
                                transition: { repeat: Infinity, duration: 4 }
                            }}
                        >
                            <div className="bg-[#4B4F2C] px-6 py-2 rounded-full text-white font-medium transform">
                                Untitled
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute top-14 left-[40%] z-0 hidden md:block rotate-6"
                            initial={{ rotate: 15 }}
                            animate={{
                                y: [0, -6, 0],
                                transition: { repeat: Infinity, duration: 3.5 }
                            }}
                        >
                            <div className="bg-orange-400 px-6 py-2 rounded-full text-white font-medium transform">
                                MyJobs.com.mm
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Sponsor Logos Grid */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2 justify-items-center">
                        {sponsors.flatMap(sponsorType => 
                            sponsorType.items.map(sponsor => (
                                <div key={`${sponsorType.type}-${sponsor.id}`} className="relative w-full max-w-xs">
                                    {/* Sponsor Card - Wrap with link if confirmed */}
                                    {sponsor.confirmed ? (
                                        <motion.a
                                            href={sponsor.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            className={`aspect-square bg-white rounded-md overflow-hidden md:h-[300px] md:w-[300px] flex items-center justify-center ${sponsorType.type === "Venue Sponsor" 
                                                ? "border-[3px] border-pink-500 shadow-xl shadow-pink-500/40 scale-110 z-10" 
                                                : "border border-zinc-900"} relative block`}
                                        >
                                            {/* Logo */}
                                            <div className={`w-auto h-auto md:w-auto md:h-auto flex items-center justify-center ${sponsorType.type === "Venue Sponsor" ? "scale-150 pb-5" : "scale-75"}`}>
                                                <img
                                                    src={sponsor.logo}
                                                    alt={sponsor.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Sponsor Type Label */}
                                            <div className="absolute bottom-3 left-3">
                                                <div 
                                                    style={{ backgroundColor: sponsorType.color }}
                                                    className={`border-2 ${sponsorType.type === "Venue Sponsor" 
                                                        ? "border-white font-bold animate-pulse" 
                                                        : "border-black"} flex items-center gap-1 ${sponsorType.textColor} ${sponsorType.hoverColor} transition duration-75 px-4 py-2 rounded-full text-lg md:text-base font-medium font-malinton`}
                                                >
                                                    <span className="text-purple-400">✦</span>
                                                    <span className="font-malinton">{sponsorType.type}</span>
                                                </div>
                                            </div>
                                        </motion.a>
                                    ) : (
                                        // Unconfirmed sponsor - locked state with blur effect
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="aspect-square bg-[#111111] rounded-md overflow-hidden flex flex-col items-center justify-center border border-zinc-900 relative backdrop-blur-sm"
                                        >
                                            {/* Blurred overlay */}
                                            <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px] z-10"></div>

                                            {/* Locked icon - above the blur */}
                                            <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center relative z-20">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>

                                            {/* To Be Announced text - above the blur */}
                                            <p className="text-gray-300 font-medium mt-2 text-center px-2 relative z-20">To Be Announced</p>

                                            {/* Placeholder logo - behind the blur */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                                <div className="w-50 h-50 md:w-30 md:h-30 items-center justify-center">
                                                    <img className="w-full h-full" src={String(Sponsors)} alt="sponsor" />

                                                </div>
                                            </div>

                                            {/* Sponsor Type Label - positioned at bottom left, above the blur */}
                                            <div className="absolute bottom-2 left-3 z-20">
                                                <div className="flex items-center gap-1 bg-black/60 border border-white/20 text-white/70 px-4 py-2 rounded-full text-lg md:text-base font-medium font-malinton backdrop-blur-sm">
                                                    <span className="text-purple-400/70 font-malinton">✦</span>
                                                    <span className="font-malinton">Coming Soon</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

            {/* Become a Sponsor Section */}
            <div className="px-4 md:px-12 py-12 md:py-16">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start max-w-5xl mx-auto gap-8 md:gap-0">
                    {/* Left side - Become a Sponsor */}
                    <div className="flex items-center gap-2">
                        <div className="text-3xl md:text-4xl text-white font-medium font-malinton">Become</div>
                        <div className="relative">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#EBFF00] px-6 py-2 rounded-full text-2xl md:text-3xl font-medium font-malinton relative z-10"
                            >
                                a Sponsor
                            </motion.button>
                            <div className="absolute inset-0 bg-[#EBFF00] rounded-full blur-sm opacity-30"></div>
                        </div>
                    </div>

                    {/* Right side - Text and Apply button */}
                    <div className="flex flex-col md:items-end gap-4">
                        <p className="text-white/80 md:text-right text-base md:text-lg">
                            We value the support of our sponsors and<br />
                            offer various partnership levels
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 text-white border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors w-fit font-malinton"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@uxmm.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                if (navigator.userAgent.toLowerCase().includes("android")) {
                                    e.preventDefault();
                                    window.location.href = "intent://compose?to=info@uxmm.org#Intent;scheme=mailto;package=com.google.android.gm;end;";
                                }
                            }}
                        >
                            <span className="text-purple-400">✦</span>
                            Apply for Sponsorship
                            <span className="ml-1">→</span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorSection;