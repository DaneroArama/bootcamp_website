import { motion } from "framer-motion";
import {useRef, useState} from "react";
import Coffee from "../img/Second Icon/CoffeeBreak.svg";
import Speaker from '../img/Event Logo & Icon/Speaker.svg';
import Participant from '../img/Event Logo & Icon/Participant.svg';
import Trainer from '../img/Event Logo & Icon/Trainer.svg'
import Opening from '../img/Event Logo & Icon/Opening.svg'
import Closed from '../img/Event Logo & Icon/Closing.svg'
import Sponsor from '../img/Event Logo & Icon/Sponsor.svg'

import CTZ from '../img/Sponsors/CTZPay.png'

import DuWunAung from "../img/Speaker/Du Wun Aung.webp";
import KyawMyoThet from "../img/Speaker/KyawMyoThet.webp";
import PyitSoneOo from "../img/Speaker/Pyit Sone Oo.webp";
import WaiYiMonSoe from "../img/Speaker/Wai Yi Mon Soe.webp";

import Barry from "../img/Mentors/Barry.webp";
import Zawkaunghtet from "../img/Mentors/Zwekaunghtet.webp";
import MinNandaZaw from "../img/Mentors/Min Nanda Zan.webp";
import AChanPyae from "../img/Mentors/Aye Chan Pyae.webp";
import KoMyoMaungMaung from "../img/Mentors/Ko Myo Maung Maung.webp";
import ShuMawaSoe from "../img/Mentors/Shu Mawa Soe.webp";
import MinYeHtutMyat from "../img/Mentors/Min Ye Htut Myat.webp";
import LynnHtetThant from "../img/Mentors/Lynnhtet Thant.webp";
import ThazinWin from "../img/Mentors/Thazin Win.webp";
import Thiri from "../img/Organizers/Thiri.png";


const TimetableSection = () => {
    const [showTimetable, setShowTimetable] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [isTimetableReady] = useState(true);
    const [isBootcampPaused] = useState(true); // New state to indicate bootcamp is paused
    const [showCondolencePopup, setShowCondolencePopup] = useState(false); // Add this state for the popup
    const timetableSectionRef = useRef(null); // Add this ref for scrolling

    // Function to handle tab change and scroll to top of timetable
    const handleTabChange = (index) => {
        setActiveTab(index);
        // Scroll to the top of the timetable section
        if (timetableSectionRef.current) {
            timetableSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const timetableData = [
        {
            day: "Day 1",
            date: "April 5th",
            events: [
                // Example of how to update event types in timetableData
                {
                    time: { start: "8:30 AM"},
                    title: "Arrival Time for Attendees",
                    isOpening: true,  // New type for opening ceremonies
                    speaker: {
                        name: "Registration",
                        role: "Attendees Check-in"
                    }
                },
                {
                    time: { start: "9:00 AM", end: "9:10 AM" },
                    title: "Greeting & Bootcamp Introduction, Agenda and Greeting about Mentor by Host",
                    isWorkshop: true,  // New type for opening ceremonies
                    speaker: {
                        name: "Host Ma Thiri Phyo Naing & Ma Wai Yi Mon Soe",
                        role: "UXMM",
                        image: [Thiri, WaiYiMonSoe]
                    }
                },
                {
                    time: { start: "9:10 AM", end: "9:20 AM" },
                    title: "Sponsor Speech",
                    isSponsor: true,  // New type for sponsor sessions
                    speaker: {
                        name: "Sponsor",
                        role: "Sponsor Speech",
                        image: CTZ
                    }
                },
                {
                    time: { start: "9:20 AM", end: "9:25 AM" },
                    title: "Speaker Intro by Host",
                    isWorkshop: true,
                    speaker: {
                        name: "Host Ma Thiri Phyo Naing",
                        role: "UXMM",
                        image: [Thiri]
                    }
                },
                {
                    time: { start: "9:25 AM", end: "10:25 AM" },
                    title: "Panel Discussion",
                    isPanel: true,  // New type for panel discussions
                    speaker: {
                        name: "Panel Speakers",
                        role: "Industry Experts",
                        image: [PyitSoneOo, KyawMyoThet, WaiYiMonSoe, DuWunAung]
                    }
                },
                {
                    time: { start: "10:45 AM", end: "11:00 AM" },
                    title: "Team Dividing, Ice Breaking & Idea Pick",
                    isWorkshop: true,
                    speaker: {
                        name: "Workshop Session",
                        role: "Team Formation",
                    }
                },
                {
                    time: { start: "11:00 AM", end: "12:00 PM" },
                    title: "Session 1: Design Thinking + Q&A",
                    isTrainer: true,
                    speaker: {
                        name: "Ko Myo Maung Maung & Ko Min Nanda Zan",
                        role: "Session Trainers",
                        image: [KoMyoMaungMaung, MinNandaZaw]
                    }
                },
                {
                    time: { start: "12:00 PM", end: "12:30 PM" },
                    title: "Lunch Break",
                    isBreak: true
                },
                {
                    time: { start: "12:30 PM", end: "1:30 PM" },
                    title: "Session 2: Understanding the Users + Q&A",
                    isTrainer: true,
                    speaker: {
                        name: "Ko Lynn Htet Thant",
                        role: "Session Trainer",
                        image: [LynnHtetThant]
                    }
                },
                {
                    time: { start: "1:30 PM", end: "2:30 PM" },
                    title: "Session 3: User Journey Mapping + Q&A",
                    isTrainer: true,
                    speaker: {
                        name: "Ma Thazin Win & Ko Min Ye Htut Myat",
                        role: "Session Trainers",
                        image: [ThazinWin, MinYeHtutMyat]
                    }
                },
                {
                    time: { start: "2:30 PM", end: "3:30 PM" },
                    title: "Brainstorming the Idea Concept",
                    isTrainer: true,
                    speaker: {
                        name: "Ko Myo Maung Maung",
                        role: "Session Trainer",
                        image: [KoMyoMaungMaung]
                    }
                },
                {
                    time: { start: "3:30 PM", end: "3:45 PM" },
                    title: "Tea Break",
                    isBreak: true
                },
                {
                    time: { start: "3:45 PM", end: "4:00 PM" },
                    title: "Day 1 Recap & Day 2 Agenda",
                    isClosing: true,  // Add this type for closing sessions
                    speaker: {
                        name: "Closing Remarks",
                        role: "Day 1 Wrap-up",
                    }
                }
            ]
        },
        {
            day: "Day 2",
            date: "April 6th",
            events: [
                {
                    time: { start: "8:00 AM" },
                    title: "Arrival Time for Attendees",
                    isOpening: true,
                    speaker: {
                        name: "Registration",
                        role: "Attendees Check-in"
                    }
                },
                {
                    time: { start: "8:30 AM", end: "9:30 AM" },
                    title: "Session 4: Core UX Principles + Q&A",
                    isTrainer: true,
                    speaker: {
                        name: "Ma Shu Ma Wa Soe",
                        role: "Session Trainer",
                        image: [ShuMawaSoe]
                    }
                },
                {
                    time: { start: "9:30 AM", end: "10:15 AM" },
                    title: "Session 5: Visual Design & UI Basics + Q&A",
                    isTrainer: true,
                    speaker: {
                        name: "Ko Khant & Ko Zawe Kaung Htet",
                        role: "Session Trainers",
                        image: [Barry, Zawkaunghtet]
                    }
                },
                {
                    time: { start: "10:15 AM", end: "11:30 AM" },
                    title: "Session 6: Sketching and Wireframing + Q&A",
                    isTrainer: true,
                    speaker: {
                        name: "Ko Min Nanda Zan",
                        role: "Session Trainer",
                        image: [MinNandaZaw]
                    }
                },
                {
                    time: { start: "11:30 AM", end: "12:00 PM" },
                    title: "Lunch Break",
                    isBreak: true
                },
                {
                    time: { start: "12:00 PM", end: "12:45 PM" },
                    title: "Session 7: Usability Testing & Iteration + Q&A",
                    isTrainer: true,
                    speaker: {
                        name: "Ma Aye Chan Pyae",
                        role: "Session Trainer",
                        image: [AChanPyae]
                    }
                },
                {
                    time: { start: "12:45 PM", end: "1:45 PM" },
                    title: "Preparation Time",
                    isWorkshop: true,
                    speaker: {
                        name: "Team Work",
                        role: "Project Preparation"
                    }
                },
                {
                    time: { start: "1:45 PM", end: "2:00 PM" },
                    title: "Tea Break (Networking Time)",
                    isBreak: true
                },
                {
                    time: { start: "2:00 PM", end: "3:00 PM" },
                    title: "Team Presentation",
                    isWorkshop: true,
                    speaker: {
                        name: "All Teams",
                        role: "5 minutes per group"
                    }
                },
                {
                    time: { start: "3:00 PM", end: "3:30 PM" },
                    title: "Voting & Results",
                    isWorkshop: true,
                    speaker: {
                        name: "Competition Results",
                        role: "Winner Announcement"
                    }
                },
                {
                    time: { start: "3:30 PM", end: "4:00 PM" },
                    title: "Day 2 Recaps, Thank You & Closing",
                    isClosing: true,
                    speaker: {
                        name: "Closing Ceremony",
                        role: "Photography Session"
                    }
                }
            ]
        },
    ];

    return (
        <section className="w-full bg-white py-16 flex flex-col items-center overflow-hidden" ref={timetableSectionRef}>
            {/* Title */}
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-2xl font-bold mb-4 font-malinton"
            >
                Think, Sprint, Design 2025
            </motion.p>

            {/* Main Text */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-center mb-8 font-malinton flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5"
            >
                {isBootcampPaused ? (
                    <>
                        Tentative
                        <span className="px-8 py-2 bg-purple-200 rounded-full font-malinton">event</span>
                        <span className="px-8 py-2 bg-[#EBFF00] rounded-full font-malinton">timetable</span>
                    </>
                ) : (
                    <>
                        Check
                        <span className="px-8 py-2 bg-purple-200 rounded-full font-malinton">our</span>
                        event
                        <span className="px-8 py-2 bg-[#EBFF00] rounded-full font-malinton">timetable</span>
                    </>
                )}
            </motion.h2>

            {/* Go Now Button */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowTimetable(!showTimetable)}
                className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2"
            >
                <span className="text-purple-400">✧</span>
                <span>{isBootcampPaused ? "View Tentative Schedule" : "Check Now"}</span>
                <motion.span
                    initial={false}
                    animate={{ rotate: showTimetable ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-2"
                >
                    →
                </motion.span>
            </motion.button>

            {/* Timetable Section */}
            {showTimetable && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full mt-12"
                >
                    {/* Postponement Notice */}
                    {isBootcampPaused && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-6xl mx-auto px-4 mb-8"
                        >
                            <div className="bg-gray-900 border-l-4 border-yellow-500 text-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-yellow-300">Bootcamp Postponed</h3>
                                        <div className="mt-2 text-sm text-gray-300">
                                            <p>Due to the recent earthquake in Myanmar, our bootcamp has been postponed. The dates shown below are tentative and will be confirmed once the situation stabilizes.</p>
                                        </div>
                                        <div className="mt-4">
                                            <div className="-mx-2 -my-1.5 flex">
                                                <button 
                                                    type="button" 
                                                    className="px-4 py-1.5 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500 rounded-md"
                                                    onClick={() => setShowCondolencePopup(true)}
                                                >
                                                    Read our statement
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {isTimetableReady ? (
                        <>
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-6xl mx-auto px-4 space-y-4"
                            >
                                {timetableData[activeTab].events.map((event, eventIndex) => (
                                    <motion.div
                                        key={eventIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: eventIndex * 0.1 }}
                                        className={`border border-gray-500 rounded-lg overflow-hidden ${
                                            event.isBreak ? 'flex flex-col items-center' : ''
                                        }`}
                                    >
                                        {event.isBreak ? (
                                            <div className="w-full flex items-center justify-center py-4 px-6">
                                                <div className="flex items-center flex-wrap justify-center gap-2">
                                                    <img
                                                        src={String(Coffee)}
                                                        alt="Coffee Break Icon"
                                                        className="w-8 h-8"
                                                    />
                                                    <span className="font-medium">{event.title}</span>
                                                    <span className="bg-[#EBFF00] px-4 py-1 rounded-full text-sm">
                                                        {event.time.start} TO {event.time.end}
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col md:flex-row">
                                                {/* Time Column */}
                                                <div className="w-full md:w-56 p-4 flex-shrink-0 flex items-center">
                                                    <div className="text-xl font-medium whitespace-nowrap">
                                                        {event.time.start}
                                                        {event.time.end && (
                                                            <>
                                                                <span className="mx-2 text-gray-400 text-sm">TO</span>
                                                                {event.time.end}
                                                            </>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Content Column */}
                                                <div className={`flex-grow p-4 ${
                                                    event.isWorkshop ? 'border-l-4 border-blue-400' : 
                                                    event.isPanel ? 'border-l-4 border-purple-400' :
                                                    event.isTrainer ? 'border-l-4 border-pink-400' :
                                                    event.isOpening ? 'border-l-4 border-yellow-400' :
                                                    event.isSponsor ? 'border-l-4 border-orange-400' : 
                                                    event.isClosing ? 'border-l-4 border-yellow-400' :
                                                    'border-l-4 border-purple-400'
                                                }`}>
                                                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>

                                                    {event.speaker && (
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                {event.isWorkshop ? (
                                                                    <img src={String(Participant)} alt="Participant Icon" className="w-6 h-6" />
                                                                ) : event.isPanel ? (
                                                                    <img src={String(Speaker)} alt="Panel Icon" className="w-6 h-6" />
                                                                ) : event.isOpening ? (
                                                                    <img src={String(Opening)} alt="Opening Icon" className="w-6 h-6" />
                                                                ) : event.isSponsor ? (
                                                                    <img src={String(Sponsor)} alt="Sponsor Icon" className="w-6 h-6" />
                                                                ) : event.isClosing ? (
                                                                    <img src={String(Closed)} alt="Closing Icon" className="w-6 h-6" />
                                                                ) : (
                                                                    <img src={String(Trainer)} alt="Trainer Icon" className="w-6 h-6" />
                                                                )}
                                                                <div>
                                                                    <p className="text-sm font-medium">{event.speaker.name}</p>
                                                                    <p className="text-gray-500 text-xs">{event.speaker.role}</p>
                                                                </div>
                                                            </div>

                                                            {event.speaker.image && (
                                                                <div className="flex -space-x-2">
                                                                    {Array.isArray(event.speaker.image) ? (
                                                                        // Multiple speakers
                                                                        event.speaker.image.map((img, idx) => (
                                                                            <img
                                                                                key={idx}
                                                                                src={img}
                                                                                alt={`Speaker ${idx + 1}`}
                                                                                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                                                            />
                                                                        ))
                                                                    ) : (
                                                                        <img
                                                                            src={event.speaker.image}
                                                                            alt={event.speaker.name}
                                                                            className="w-10 h-10 rounded-full border-2 border-white"
                                                                        />
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Update the tab buttons to use the new handler */}
                            <div className="flex flex-wrap justify-center gap-4 mt-6">
                                {timetableData.map((day, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleTabChange(index)}
                                        className={`px-6 py-3 rounded-full font-malinton text-lg transition-all duration-300 ${
                                            activeTab === index
                                                ? 'bg-purple-200 text-black shadow-lg scale-105'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="md:hidden">{day.day}</span>
                                        <span className="hidden md:inline">{`${day.day} - ${day.date}`}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center py-6 px-4"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, -5, 5, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                className="text-6xl mb-6"
                            >
                                🚀
                            </motion.div>
                            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text font-malinton">
                                Coming Soon!
                            </h3>
                            <p className="text-gray-600 text-xl max-w-2xl mx-auto font-malinton">
                                Our exciting timetable is being crafted with amazing sessions and workshops.
                                Stay tuned for the big reveal!
                            </p>
                            <motion.div
                                className="mt-8 flex justify-center gap-2"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                                <span className="w-3 h-3 bg-indigo-400 rounded-full"></span>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            )}
            
            {/* Condolence Popup */}
            {showCondolencePopup && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowCondolencePopup(false)}
                >
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 20 }}
                        className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 relative">
                            <button 
                                onClick={() => setShowCondolencePopup(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            <div className="border-l-4 border-gray-500 pl-4 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold font-malinton text-white">
                                    Our Heartfelt <span className="text-gray-400">Condolences</span>
                                </h2>
                            </div>
                            
                            <div className="text-gray-300 space-y-4">
                                <p className="leading-relaxed">
                                    We extend our deepest condolences to everyone affected by the recent earthquake in Myanmar. Our hearts go out to those who have lost loved ones, homes, and livelihoods in this devastating tragedy.
                                </p>
                                
                                <p className="leading-relaxed">
                                    In light of these difficult circumstances, we have made the decision to postpone our THINK, SPRINT, DESIGN bootcamp until the situation stabilizes and our community has had time to heal and rebuild.
                                </p>
                                
                                <p className="leading-relaxed">
                                    During this challenging time, we believe our focus should be on supporting recovery efforts and standing in solidarity with those who are suffering. We will announce new dates for our bootcamp when it is appropriate to do so.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
        );
    };
export default TimetableSection;