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
                { time: "09:00 AM", title: "Registration & Welcome", description: "Check-in and welcome ceremony" },
                { time: "10:00 AM", title: "Opening Keynote", description: "Introduction to Design Sprint methodology" },
                { time: "12:00 PM", title: "Lunch Break", description: "Networking lunch" },
                { time: "01:00 PM", title: "Workshop Session", description: "Problem definition and ideation" },
                { time: "04:00 PM", title: "Day 1 Wrap-up", description: "Summary and preparation for Day 2" }
            ]
        },
        {
            day: "Day 2",
            date: "April 6th",
            events: [
                { time: "09:00 AM", title: "Day 2 Kickoff", description: "Review and team formation" },
                { time: "10:00 AM", title: "Sprint Workshop", description: "Prototyping and testing" },
                { time: "12:00 PM", title: "Lunch Break", description: "Networking lunch" },
                { time: "01:00 PM", title: "Final Sprint", description: "Solution refinement" },
                { time: "03:00 PM", title: "Presentations", description: "Team presentations" },
                { time: "04:00 PM", title: "Closing Ceremony", description: "Awards and closing remarks" }
            ]
        },
        {
            day: "Day 3",
            date: "April 7th",
            events: [
                { time: "09:00 AM", title: "Registration & Welcome", description: "Check-in and welcome ceremony" },
                { time: "10:00 AM", title: "Opening Keynote", description: "Introduction to Design Sprint methodology" },
                { time: "12:00 PM", title: "Lunch Break", description: "Networking lunch" },
                { time: "01:00 PM", title: "Workshop Session", description: "Problem definition and ideation" },
                { time: "04:00 PM", title: "Day 1 Wrap-up", description: "Summary and preparation for Day 2" }
            ]
        }
    ];

    return (
        <section className="w-full bg-white md:w-[80%] mx-auto py-16 flex flex-col items-center overflow-hidden">
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
                        className="space-y-4"
                    >
                        {/* Date Display for Mobile */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="md:hidden mb-6 text-center"
                        >
                            <h3 className="text-2xl font-bold text-purple-600 font-malinton">
                                {timetableData[activeTab].date}
                            </h3>
                        </motion.div>

                        {timetableData[activeTab].events.map((event, eventIndex) => (
                            <motion.div
                                key={eventIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: eventIndex * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="flex items-center space-x-4">
                                        <span className="text-purple-600 font-semibold text-lg">{event.time}</span>
                                        <h4 className="font-bold text-lg">{event.title}</h4>
                                    </div>
                                    <p className="text-gray-600 mt-2 md:mt-0">{event.description}</p>
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