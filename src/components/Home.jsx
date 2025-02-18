import React from 'react';
import Squares from './SquareBackground';

export const Home = () => {
    return (
        <div className="relative min-h-screen bg-white">
            <div className="absolute inset-0">
                <Squares
                    direction="diagonal"
                    speed={0.2}
                    borderColor="#ddd"
                    squareSize={80}
                    hoverFillColor="rgba(245, 176, 65, 0.1)"
                />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full px-4 md:px-8 lg:px-10 py-16 space-y-12">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto text-center space-y-4">
                    <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold">
                        Design Your <span className="bg-[#F5B041] px-4 py-2 text-xl md:text-xl lg:text-5xl rounded-full">Future</span> with
                    </h1>
                    <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold">
                        Real-W<span className="text-green-500">🍀</span>rld <span className="inline-flex items-center space-x-2 border-2 border-purple-500 rounded-full px-6 py-2 text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out cursor-pointer">
                            <svg className="w-56 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h40M24 5l7 7-7 7"></path>
                            </svg>
                        </span> Experience
                    </h1>
                </div>

                {/* Info Cards Grid */}
                <div className="max-w-12xl max-h-9xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Bootcamp Card */}
                    <div className="bg-emerald-500 p-16 border-black border-4 text-white">
                        <h3 className="text-2xl font-bold mb-5">Bootcamp</h3>
                        <p className="text-xl font-semibold">Think, Sprint, Design</p>
                        <p>2025</p>
                    </div>

                    {/* Location Card */}
                    <div className="bg-red-400 p-16 border-black border-4 text-white">
                        <h3 className="text-2xl font-bold mb-2">Location</h3>
                        <p className="text-xl font-semibold mb-4">SITE Yangon Campus</p>
                        <p>123, Nat mauk street</p>
                    </div>

                    {/* Attendees Card */}
                    <div className="bg-blue-500 p-6 border-black border-4 text-white">
                        <h3 className="text-2xl font-bold mb-2">100 +</h3>
                        <p>Total Person</p>
                    </div>

                    {/* Date & Time Card */}
                    <div className="bg-[#F5B041] p-6 border-black border-4">
                        <h3 className="text-2xl font-bold mb-2">Date & Time</h3>
                        <p className="text-xl font-semibold mb-4">March 2nd/3rd</p>
                        <p>12 PM to 3 PM</p>
                    </div>
                </div>

                {/* Mentors, Speakers & Opportunities Section */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Mentors Card */}
                    <div className="bg-purple-200 p-6 border-black border-4">
                        <h3 className="text-2xl font-bold mb-4">Mentors</h3>
                        <p className="text-lg">Over 20+ Mentors</p>
                    </div>

                    {/* Speakers Card */}
                    <div className="bg-purple-500 p-6 border-black border-4 text-white">
                        <h3 className="text-2xl font-bold mb-4">Speakers</h3>
                        <p className="text-lg">Ko Lamin & Ko Harry</p>
                    </div>

                    {/* Opportunities Section */}
                    <div className="bg-white p-6 border-black border-4 relative">
                        <div className="flex flex-wrap gap-4 justify-center items-center">
                            <div className="bg-purple-600 rounded-full p-2">
                                <div className="w-6 h-6 text-white">&#8594;</div>
                            </div>
                            <button className="px-6 py-2 bg-white border-2 border-gray-200 rounded-full text-black font-medium">Community Events</button>
                            <button className="px-6 py-2 bg-blue-600 rounded-full text-white font-medium">Mentorship</button>
                            <button className="px-6 py-2 bg-pink-300 rounded-full text-black font-medium">Volunteer Opportunities</button>
                            <button className="px-6 py-2 bg-white border-2 border-gray-200 rounded-full text-black font-medium">Research</button>
                            <button className="px-6 py-2 bg-white border-2 border-gray-200 rounded-full text-blue-600 font-medium">Jobs</button>
                            <button className="px-6 py-2 bg-[#F5B041] rounded-full text-black font-medium">Internship</button>
                            <button className="px-6 py-2 bg-black rounded-full text-white font-medium">Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};