import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { motion } from 'framer-motion';

const OnlineWebinarSessions = () => {
    const webinars = [
        {
            id: 1,
            title: "Pediatric Tracheostomy Care Basics",
            videoId: "JeNBQ-7cCE0",
            description: "Essential care techniques and best practices for pediatric tracheostomy patients."
        },
        {
            id: 2,
            title: "Swallowing Disorders & Pediatric  Emergencies",
            videoId: "L3B3N0Ig_Kg",
            description: "A discussion on the phases of swallowing disorders and emergency cases in pediatric tracheostomy patients "
        },
        {
            id: 3,
            title: "Aspiration & Decannulation in Pediatric Tracheostomy Patients",
            videoId: "AyaWMLDIs4s",
            description: " Addressing the critical questions of aspiration and the signs that indicate when children are ready for decannulation "
        },
        {
            id: 4,
            title: "The Importance of Mental Health for Parents of Children with Special Needs",
            videoId: "Nc677AcyslA",
            description: "Discussion on how parents can navigate their mental health while raising children with special needs "
        },
        {
            id: 5,
            title: "Medical Rehabilitation for Pediatric Tracheostomy Patients",
            videoId: "ZD_BYqDRCfY",
            description: " Exploring the Role of Medical Rehabilitation in Supporting Pediatric Tracheostomy Patients "
        },
        {
            id: 6,
            title: "“Medical Interventions for Patients with Pierre Robin Sequence (PRS) and Pediatric Tracheostomy",
            videoId: "3uQKwuw7xwo",
            description: "Discussion on treatment approaches for Pierre Robin Sequence and their impact on the pediatric tracheostomy journey "
        },
        {
            id: 7,
            title: "Q&A Session: Drooling Procedure",
            videoId: "e3C-2s-w0ng",
            description: " The description: Discussion on how drooling management procedures can address challenges in pediatric tracheostomy patients"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">Online Webinar Sessions</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive webinar series provides expert knowledge and practical guidance
                            for families, caregivers, and healthcare professionals working with pediatric
                            tracheostomy patients.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                    >
                        {webinars.map((webinar, index) => (
                            <motion.div
                                key={webinar.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="aspect-video">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${webinar.videoId}`}
                                        title={webinar.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{webinar.title}</h3>
                                    <p className="text-gray-600 text-sm">{webinar.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8 mb-12"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Webinar Series Benefits</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Knowledge</h3>
                                <p className="text-gray-600">Learn from healthcare professionals and experienced caregivers</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Practical Guidance</h3>
                                <p className="text-gray-600">Step-by-step instructions and real-world applications</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Support</h3>
                                <p className="text-gray-600">Connect with other families and share experiences</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-white rounded-lg shadow-lg p-8"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Upcoming Sessions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Stay Updated</h3>
                                <p className="text-gray-600 mb-4">
                                    Subscribe to our newsletter to receive notifications about upcoming
                                    webinar sessions and new content releases.
                                </p>
                                <div className="flex gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Request Topics</h3>
                                <p className="text-gray-600 mb-4">
                                    Have a specific topic you'd like us to cover? Let us know what
                                    would be most helpful for your situation.
                                </p>
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                                    Suggest a Topic
                                </button>
                            </div>
                        </div>
                    </motion.div> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OnlineWebinarSessions; 