import { motion } from "framer-motion";
import BlueRingGhost from '../img/Cartoon mascot/BlueRingGhost.svg';
import BlueSquishyGhost from '../img/Cartoon mascot/BlueSquishyGhost.svg';
import GreenGhost from '../img/Cartoon mascot/GreenGhost.svg';
import GreyOvalGhost from '../img/Cartoon mascot/GreyOvalGhost.svg';
import PurpleRectangleGhost from '../img/Cartoon mascot/PurpleRectangleGhost.svg';
import RedDiamondGhost from '../img/Cartoon mascot/RedDiamondGhost.svg';
import RedRectangleGhost from '../img/Cartoon mascot/RedRectangleGhost.svg';
import YellowOvalGhost from '../img/Cartoon mascot/YellowOvalGhost.svg';

const HeroSection = () => {
    const ghostsConfig = [
        {
            src: GreenGhost,
            alt: "Green Ghost",
            className: "absolute left-0 bottom-1 md:bottom-6 w-[100px] h-[100px] md:w-[200px] md:h-[200px]",
            style: { zIndex: 4 },
            animate: {
                y: [0, -10, 0],
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0
                }
            }
        },
        {
            src: BlueRingGhost,
            alt: "Blue Ring Ghost",
            className: "absolute left-[15%] bottom-6 md:bottom-16 w-[120px] h-[120px] md:w-[280px] md:h-[280px]",
            style: { zIndex: 3 },
            animate: {
                y: [0, -15, 0],
                transition: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                }
            }
        },
        {
            src: GreyOvalGhost,
            alt: "Grey Oval Ghost",
            className: "absolute left-[9%] -bottom-8 md:-bottom-14 w-[130px] h-[130px] md:w-[300px] md:h-[300px]",
            style: { zIndex: 6 },
            animate: {
                y: [0, -12, 0],
                transition: {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4
                }
            }
        },
        {
            src: PurpleRectangleGhost,
            alt: "Purple Rectangle Ghost",
            className: "absolute left-[32%] -bottom-2 w-[110px] h-[110px] md:w-[260px] md:h-[260px]",
            style: { zIndex: 5 },
            animate: {
                y: [0, -8, 0],
                transition: {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                }
            }
        },
        {
            src: RedRectangleGhost,
            alt: "Red Rectangle Ghost",
            className: "absolute left-[47%] -bottom-2 w-[100px] h-[100px] md:w-[240px] md:h-[240px]",
            style: { zIndex: 6 },
            animate: {
                y: [0, -10, 0],
                transition: {
                    duration: 2.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                }
            }
        },
        {
            src: YellowOvalGhost,
            alt: "Yellow Oval Ghost",
            className: "absolute left-[60%] -bottom-10 w-[115px] h-[115px] md:w-[270px] md:h-[270px]",
            style: { zIndex: 3 },
            animate: {
                y: [0, -13, 0],
                transition: {
                    duration: 2.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }
            }
        },
        {
            src: BlueSquishyGhost,
            alt: "Blue Squishy Ghost",
            className: "absolute left-[75%] bottom-7 w-[95px] h-[95px] md:w-[220px] md:h-[220px]",
            style: { zIndex: 2 },
            animate: {
                y: [0, -11, 0],
                transition: {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2
                }
            }
        },
        {
            src: RedDiamondGhost,
            alt: "Red Diamond Ghost",
            className: "absolute left-[85%] bottom-0 w-[90px] h-[90px] md:w-[210px] md:h-[210px]",
            style: { zIndex: 1 },
            animate: {
                y: [0, -9, 0],
                transition: {
                    duration: 1.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.4
                }
            }
        }
    ];

    return (
        <section className="w-full md:w-[80%] mx-auto min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            {/* Main Text Content */}
            <div className="text-center z-10 mb-20 md:mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-2"
                >
                    <h1 className="text-5xl md:text-7xl font-bold">
                        <span className="text-[#4A90E2]">Think,</span>
                        <br />
                        <span className="text-[#F5B041]">Sprint,</span>
                        <br />
                        <span className="text-[#E77FE7]">Design!</span>
                    </h1>

                    <p className="text-white text-xl md:text-2xl font-malinton">
                        Think, Sprint, Design 2025
                    </p>

                    {/* Register Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-8 bg-transparent text-white px-8 py-3 rounded-full border border-white flex items-center space-x-2 hover:bg-white/10"
                    >
                        <span className="text-purple-400">✦</span>
                        <span className="mx-2">Register Now</span>
                        <span>→</span>
                    </motion.button>
                </motion.div>
            </div>

            {/* Character Illustrations */}
            <div className="absolute -bottom-8 sm:-bottom-20 w-full">
                <div className="relative h-52 sm:h-64 md:h-80">
                    {ghostsConfig.map((ghost, index) => (
                        <motion.img
                            key={ghost.alt}
                            src={ghost.src}
                            alt={ghost.alt}
                            className={`${ghost.className} transform-gpu`}
                            style={ghost.style}
                            initial={{ opacity: 1, y: 0 }}
                            animate={ghost.animate}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 