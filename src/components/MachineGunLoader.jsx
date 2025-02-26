import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { EasePack } from 'gsap/EasePack';
import MachineGunText from './MachieGunText';

gsap.registerPlugin(TextPlugin, EasePack);

const MachineGunLoader = ({ text, children }) => {
    const [loadingComplete, setLoadingComplete] = useState(false);
    const loaderRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Disable scrolling when loader is active
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        
        if (loadingComplete) {
            const loader = loaderRef.current;
            const content = contentRef.current;

            if (loader && content) {
                gsap.to(loader, {
                    duration: 1,
                    autoAlpha: 0,
                    onComplete: () => {
                        loader.style.display = 'none';
                        // Re-enable scrolling after loader is complete
                        document.body.style.overflow = '';
                        document.documentElement.style.overflow = '';
                        gsap.set(content, { opacity: 1 });
                        gsap.from(content, { duration: 1, opacity: 0 });
                    },
                });
            }
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [loadingComplete]);

    const handleAnimationComplete = () => {
        setLoadingComplete(true);
    };

    const wordStyles = [
        { className: 'text-white font-malinton' },                    // "Design"
        { className: 'text-white font-malinton' },                    // "Your"
        { className: 'bg-[#F5B041] px-8 py-3 rounded-full text-black font-gothic' }, // "Future"
        { className: 'text-white font-malinton' },                    // "with"
        { className: 'text-white font-malinton' },                    // "Real"
        { className: 'text-green-500 font-malinton' },                // "World"
        { className: 'text-white font-malinton' }                     // "Experience"
    ];

    return (
        <>
            <div
                ref={loaderRef}
                className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden touch-none"
            >
                <div className="w-full max-w-4xl mx-auto px-4">
                    <MachineGunText
                        text={text}
                        wordClassName="text-4xl md:text-6xl font-bold"
                        onComplete={handleAnimationComplete}
                        wordStyles={wordStyles}
                    />
                </div>
            </div>
            <div ref={contentRef} className="opacity-0">
                {children}
            </div>
        </>
    );
};

export default MachineGunLoader;