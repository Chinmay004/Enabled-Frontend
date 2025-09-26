import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { motion } from 'framer-motion';

const PatientJourneyDocumentary = () => {
    const documentaries = [
        {
            id: 1,
            title: "Love for Faustine: An Angel with Angelman Syndrome",
            videoId: "zpQ_pIgrnOE",
            description: "Follow Ibu Rani’s journey in raising Faustine, an angel with Angelman Syndrome"
        },
        {
            id: 2,
            title: "Mata Hati Koffie Journey: Life Beyond Limits",
            videoId: "ITLPGQhNZt8",
            description: "Follow Ibu Hikmah and Hilmy’s journey in growing Mata Hati Koffie, a business where patrons are served by visually impaired employees "
        },
        {
            id: 3,
            title: "The Dark Side of The Indonesian Healthcare System",
            videoId: "SxJHtrpjN3Y",
            description: " A documentary revealing the unspoken struggles of those impacted by Indonesia’s healthcare system"
        },
        {
            id: 4,
            title: "Little Aufa, Big Heart of Ibu Nurul",
            videoId: "I8zTqOVET1I",
            description: " A story of love from Ibu Nurul and her family, who never gave up on one another "
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
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">Patient Journey Documentary</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our documentary series captures the real stories of families navigating the challenges and triumphs of raising family members with special needs. These authentic narratives provide hope, guidance, and community for those on similar journeys
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                    >
                        {documentaries.map((doc, index) => (
                            <motion.div
                                key={doc.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="aspect-video">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${doc.videoId}`}
                                        title={doc.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{doc.title}</h3>
                                    <p className="text-gray-600 text-sm">{doc.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
                    >
                        {/* <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Real Stories</h2>
                            <p className="text-gray-600 text-center">
                                Authentic narratives from families who have walked this path, sharing their
                                experiences, challenges, and victories to inspire and guide others.
                            </p>
                        </div> */}

                        {/* <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Expert Insights</h2>
                            <p className="text-gray-600 text-center">
                                Medical professionals and specialists share their expertise, providing valuable
                                knowledge and practical guidance for optimal care outcomes.
                            </p>
                        </div> */}

                        {/* <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Community Support</h2>
                            <p className="text-gray-600 text-center">
                                Stories of how community networks, support groups, and collaborative efforts
                                create stronger, more resilient families and caregivers.
                            </p>
                        </div> */}
                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-12"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Share Your Story</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Share Your Journey?</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Inspire and support other families on similar journeys
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Raise awareness about pediatric tracheostomy care
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Contribute to the collective knowledge and resources
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Help build a stronger, more connected community
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Get Involved</h3>
                                <p className="text-gray-600 mb-4">
                                    Your story matters. Whether you're a family member, caregiver, or medical
                                    professional, your experiences can make a difference in someone else's journey.
                                </p>
                                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold">
                                    Share Your Story
                                </button>
                            </div>
                        </div>
                    </motion.div> */}

                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-white rounded-lg shadow-lg p-8"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Documentary Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                                <p className="text-gray-600">Families reached through our documentary series</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                                <p className="text-gray-600">Healthcare professionals featured in our content</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                                <p className="text-gray-600">Views across all documentary episodes</p>
                            </div>
                        </div>
                    </motion.div> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PatientJourneyDocumentary; 