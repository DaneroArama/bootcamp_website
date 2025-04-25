import { motion } from "framer-motion";
import BlueRingGhost from '../img/Cartoon mascot/BlueRingGhost.svg';
import BlueSquishyGhost from '../img/Cartoon mascot/BlueSquishyGhost.svg';
import GreenGhost from '../img/Cartoon mascot/GreenGhost.svg';
import GreyOvalGhost from '../img/Cartoon mascot/GreyOvalGhost.svg';
import PurpleRectangleGhost from '../img/Cartoon mascot/PurpleRectangleGhost.svg';
import RedDiamondGhost from '../img/Cartoon mascot/RedDiamondGhost.svg';
import RedRectangleGhost from '../img/Cartoon mascot/RedRectangleGhost.svg';
import YellowOvalGhost from '../img/Cartoon mascot/YellowOvalGhost.svg';
import ThinkSVG from '../img/Event Logo & Icon/THINK.svg';
import SprintSVG from '../img/Event Logo & Icon/SPRINT.svg';
import DesignSVG from '../img/Event Logo & Icon/DESIGN.svg';

const HeroSection = () => {
    const ghostsConfig = [
        {
            src: GreenGhost,
            alt: "Green Ghost",
            className: "absolute left-0 bottom-1 md:bottom-6 w-[100px] h-[100px] md:w-[250px] md:h-[250px]",
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
            className: "absolute left-[15%] bottom-6 md:bottom-16 w-[120px] h-[120px] md:w-[320px] md:h-[320px]",
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
            className: "absolute left-[9%] -bottom-8 md:-bottom-14 w-[130px] h-[130px] md:w-[320px] md:h-[320px]",
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
            className: "absolute left-[28%] -bottom-2 w-[110px] h-[110px] md:w-[300px] md:h-[300px]",
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
            className: "absolute left-[40%] -bottom-2 w-[100px] h-[100px] md:w-[300px] md:h-[300px]",
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
            className: "absolute left-[55%] -bottom-10 w-[115px] h-[115px] md:w-[300px] md:h-[300px]",
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
            className: "absolute left-[71%] bottom-2 md:bottom-6 w-[90px] h-[90px] md:w-[250px] md:h-[250px]",
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
            className: "absolute right-0 bottom-0 w-[90px] h-[90px] md:w-[250px] md:h-[250px]",
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
        <section className="w-full px-4 md:px-12 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            {/* Main Text Content */}
            <div className="text-center z-10 mb-20 md:mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.img 
                            src={ThinkSVG} 
                            alt="Think" 
                            className="w-[200px] md:w-[350px]"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.7, 
                                delay: 0.2,
                                type: "spring",
                                stiffness: 100
                            }}
                        />
                        <motion.img 
                            src={SprintSVG} 
                            alt="Sprint" 
                            className="w-[250px] md:w-[400px]"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.7, 
                                delay: 0.5,
                                type: "spring",
                                stiffness: 100
                            }}
                        />
                        <motion.img 
                            src={DesignSVG} 
                            alt="Design" 
                            className="w-[325px] md:w-[475px]"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.7, 
                                delay: 0.8,
                                type: "spring",
                                stiffness: 100
                            }}
                        />
                    </div>

                    <p className="text-white text-xl md:text-2xl font-malinton">
                        First Myanmar In-person Bootcamp 2025
                    </p>

                    {/* Register Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-4 bg-transparent text-white px-8 py-3 rounded-full border border-white flex items-center space-x-2 hover:bg-white hover:text-black hover:border-black"
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeCDWlyR4HPWXe3PRhybZkwRq49Er1CBdcf-Gty-HGqSDuJ5w/viewform?usp=dialog', '_blank')}
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