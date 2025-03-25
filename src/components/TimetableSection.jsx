import { motion } from "framer-motion";
import { useState } from "react";
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


const TimetableSection = () => {
    const [showTimetable, setShowTimetable] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [isTimetableReady] = useState(true);

    const timetableData = [
        {
            day: "Day 1",
            date: "April 5th",
            events: [
                // Example of how to update event types in timetableData
                {
                    time: { start: "9:00 AM", end: "9:10 AM" },
                    title: "Greeting by Host & Bootcamp Introduction",
                    isOpening: true,  // New type for opening ceremonies
                    speaker: {
                        name: "Ma Wai Yi",
                        role: "UXMM",
                        image: [WaiYiMonSoe]
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
                        name: "Ma Thazin & Ko Min Ye Htut",
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
                    time: { start: "8:00 AM", end: "8:30 AM" },
                    title: "Arrival Time for participants",
                    isOpening: true,
                    speaker: {
                        name: "Registration",
                        role: "Participant Check-in"
                    }
                },
                {
                    time: { start: "8:30 AM", end: "9:30 AM" },
                    title: "Session 4: Core UX Principles + Q&A",
                    isTrainer: true,
                    speaker: {
                        name: "Ma Shu",
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
        <section className="w-full bg-white py-16 flex flex-col items-center overflow-hidden">
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
                Check
                <span className="px-8 py-2 bg-purple-200 rounded-full font-malinton">our</span>
                event
                <span className="px-8 py-2 bg-[#EBFF00] rounded-full font-malinton">timetable</span>
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
                <span>Check Now</span>
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
                    {isTimetableReady ? (
                        <>
                            <div className="flex flex-wrap justify-center gap-4 mb-6">
                                {timetableData.map((day, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
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
                                        className={`border border-gray-200 rounded-lg overflow-hidden ${
                                            event.isBreak ? 'flex flex-col items-center' : ''
                                        }`}
                                    >
                                        {event.isBreak ? (
                                            <div className="w-full flex items-center justify-center py-4 px-6">
                                                <div className="flex items-center flex-wrap justify-center gap-2">
                                                    <img
                                                        src={Coffee}
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
                                                        <span className="mx-2 text-gray-400 text-sm">TO</span>
                                                        {event.time.end}
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
                                                                    <img src={Participant} alt="Participant Icon" className="w-6 h-6" />
                                                                ) : event.isPanel ? (
                                                                    <img src={Speaker} alt="Panel Icon" className="w-6 h-6" />
                                                                ) : event.isOpening ? (
                                                                    <img src={Opening} alt="Opening Icon" className="w-6 h-6" />
                                                                ) : event.isSponsor ? (
                                                                    <img src={Sponsor} alt="Sponsor Icon" className="w-6 h-6" />
                                                                ) : event.isClosing ? (
                                                                    <img src={Closed} alt="Closing Icon" className="w-6 h-6" />
                                                                ) : (
                                                                    <img src={Trainer} alt="Trainer Icon" className="w-6 h-6" />
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
        </section>
    );
};

export default TimetableSection;