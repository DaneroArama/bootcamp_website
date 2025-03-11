import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { EasePack } from 'gsap/EasePack';

gsap.registerPlugin(TextPlugin, EasePack);

const MachineGunText = ({ 
    text, 
    wordClassName = "", 
    onComplete,
    wordStyles = [] // Array of style objects for each word
}) => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const hasPlayedRef = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || hasPlayedRef.current) return;

        container.innerHTML = '';
        
        if (animationRef.current) {
            animationRef.current.kill();
        }

        const _sentenceEndExp = /(\.|\?|!)$/g;

        const machineGun = (text) => {
            const words = text.split(/[_ ]/).filter(word => word.trim() !== '');
            const tl = gsap.timeline({ 
                delay: 0.6, 
                repeat: 0,
                onComplete: () => {
                    hasPlayedRef.current = true;
                    onComplete?.();
                }
            });
            
            animationRef.current = tl;
            let currentElement = null;

            const showWord = (word, index) => {
                return new Promise((resolve) => {
                    if (currentElement) {
                        gsap.to(currentElement, {
                            duration: 0.3,
                            scale: 0,
                            autoAlpha: 0,
                            ease: "back.in(1.7)",
                            onComplete: () => {
                                if (currentElement && currentElement.parentNode) {
                                    currentElement.remove();
                                }
                                resolve();
                            }
                        });
                    } else {
                        resolve();
                    }
                }).then(() => {
                    const element = document.createElement('h3');
                    element.textContent = word;
                    
                    // Apply base classes
                    element.className = `${wordClassName} opacity-0 scale-0 absolute left-1/2 -translate-x-1/2`;
                    
                    // Apply custom styles if available
                    if (wordStyles[index]) {
                        const customStyle = wordStyles[index];
                        // Add custom classes if specified
                        if (customStyle.className) {
                            element.className += ` ${customStyle.className}`;
                        }
                        // Apply inline styles if specified
                        if (customStyle.style) {
                            Object.assign(element.style, customStyle.style);
                        }
                    }

                    container.appendChild(element);
                    currentElement = element;

                    return gsap.fromTo(element,
                        {
                            autoAlpha: 0,
                            scale: 0,
                            rotation: -15
                        },
                        {
                            duration: 0.5,
                            autoAlpha: 1,
                            scale: 1.2,
                            rotation: 0,
                            ease: "elastic.out(1, 0.3)"
                        }
                    );
                });
            };

            words.forEach((word, index) => {
                const isSentenceEnd = _sentenceEndExp.test(word);
                
                if (index > 0) {
                    tl.add(() => showWord(word, index), "+=0.5");
                } else {
                    tl.add(() => showWord(word, index));
                }

                if (isSentenceEnd) {
                    tl.to({}, { duration: 0.3 });
                }
            });
        };

        machineGun(text);

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
            gsap.killTweensOf(container.children);
            container.innerHTML = '';
        };
    }, [text, wordClassName, onComplete, wordStyles]);

    return (
        <div ref={containerRef} className="min-h-[50px] w-full flex items-center justify-center px-4 relative"></div>
    );
};

export default MachineGunText;