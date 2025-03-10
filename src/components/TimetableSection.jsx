import { motion } from "framer-motion";
import { useState } from "react";

const TimetableSection = () => {
    const [showTimetable, setShowTimetable] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const timetableData = [
        {
            day: "Day 1",
            date: "April 5th",
            events: [
                {
                    time: { start: "12:00", end: "14:00" },
                    title: "What we mean when we say \"strategy\", and the role UX plays",
                    speaker: {
                        name: "Ko Khant (Barry)",
                        role: "COMPANY NAME OR JOB TITLE",
                        image: "path_to_image"
                    }
                },
                {
                    time: { start: "14:00", end: "15:00" },
                    title: "What we mean when we say \"strategy\", and the role UX plays blah blah",
                    isWorkshop: true,
                    speaker: {
                        name: "Workshop with Participant",
                        role: "COMPANY NAME OR JOB TITLE"
                    }
                },
                {
                    time: { start: "2:00", end: "3:00" },
                    title: "Breaktime",
                    isBreak: true
                },
                {
                    time: { start: "14:00", end: "15:00" },
                    title: "What we mean when we say \"strategy\", and the role UX plays blah blah",
                    isWorkshop: true,
                    speaker: {
                        name: "Workshop with Participant",
                        role: "COMPANY NAME OR JOB TITLE"
                    }
                }
            ]
        },
        {
            day: "Day 2",
            date: "April 6th",
            events: [
                {
                    time: { start: "12:00", end: "14:00" },
                    title: "What we mean when we say \"strategy\", and the role UX plays",
                    speaker: {
                        name: "Ko Khant (Barry)",
                        role: "COMPANY NAME OR JOB TITLE",
                        image: "path_to_image"
                    }
                },
                {
                    time: { start: "14:00", end: "15:00" },
                    title: "What we mean when we say \"strategy\", and the role UX plays blah blah",
                    isWorkshop: true,
                    speaker: {
                        name: "Workshop with Participant",
                        role: "COMPANY NAME OR JOB TITLE"
                    }
                },
                {
                    time: { start: "2:00", end: "3:00" },
                    title: "Breaktime",
                    isBreak: true
                },
                {
                    time: { start: "14:00", end: "15:00" },
                    title: "What we mean when we say \"strategy\", and the role UX plays blah blah",
                    isWorkshop: true,
                    speaker: {
                        name: "Workshop with Participant",
                        role: "COMPANY NAME OR JOB TITLE"
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
                <span>Go Now</span>
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
                    {/* Tabs */}
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

                    {/* Active Tab Content */}
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
                                className={`flex items-start gap-8 p-6 ${
                                    event.isWorkshop 
                                    ? 'border-2 border-blue-400 bg-white' 
                                    : event.isBreak
                                    ? 'bg-transparent'
                                    : 'bg-gray-50'
                                } rounded-lg`}
                            >
                                {/* Time Section */}
                                <div className="w-48 flex-shrink-0">
                                    <div className="text-2xl font-malinton">
                                        {event.time.start}
                                        <span className="mx-2 text-gray-400">TO</span>
                                        {event.time.end}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-grow">
                                    {event.isBreak ? (
                                        <div className="flex items-center gap-4">
                                            <span className="text-red-500">☕</span>
                                            <span className="text-xl font-bold">{event.title}</span>
                                            <span className="bg-[#EBFF00] px-4 py-1 rounded-full text-sm">
                                                {event.time.start} TO {event.time.end}
                                            </span>
                                        </div>
                                    ) : (
                                        <>
                                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                            {event.speaker && (
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        {event.isWorkshop ? (
                                                            <div className="w-8 h-8 grid grid-cols-2 gap-0.5">
                                                                {[...Array(4)].map((_, i) => (
                                                                    <div key={i} className="bg-blue-400 rounded-sm" />
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <div className="w-8 h-8 bg-purple-400 rounded-full" />
                                                        )}
                                                        <div>
                                                            <p className="font-medium">{event.speaker.name}</p>
                                                            <p className="text-gray-500 text-sm">{event.speaker.role}</p>
                                                        </div>
                                                    </div>
                                                    {event.speaker.image && (
                                                        <div className="flex -space-x-2">
                                                            <div className="w-8 h-8 rounded-full bg-gray-200" />
                                                            <div className="w-8 h-8 rounded-full bg-gray-300" />
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default TimetableSection; 