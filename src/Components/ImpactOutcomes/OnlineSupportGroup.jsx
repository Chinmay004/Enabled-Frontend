import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { motion } from 'framer-motion';

const OnlineSupportGroup = () => {
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
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">Online Support Group</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            TemanBercerita: Grief Support Sessions provide personalized and compassionate support
                            through a structured three-part program designed to help participants navigate grief
                            in a safe and empowering environment.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">1. Guided Learning Materials</h2>
                            <p className="text-gray-600 text-center">
                                Each session begins with structured learning content carefully prepared and delivered
                                by certified psychological counselors. These materials help participants understand
                                the grieving process—what grief is, how it manifests emotionally and physically,
                                and healthy ways to process and express it.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">2. Intimate Story-sharing Circle</h2>
                            <p className="text-gray-600 text-center">
                                Limited to maximum 3 participants per session, this safe space encourages
                                individuals to share their stories, memories, and struggles. The small group
                                size ensures everyone feels seen, heard, and respected while building solidarity.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">3. Grief Journal</h2>
                            <p className="text-gray-600 text-center">
                                Each participant receives a thoughtfully designed grief journal with prompts
                                tailored to different stages of grief, spaces for free writing, and exercises
                                for grounding and mindfulness.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Participant Reviews</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Feedback</h3> */}
                                <div className="flex justify-center">
                                    <iframe
                                        src="https://www.instagram.com/p/C7yHrW4SSl2/embed"
                                        width="320"
                                        height="440"
                                        frameBorder="0"
                                        scrolling="no"
                                        allowTransparency={true}
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">Previous Session</h3> */}
                                <div className="flex justify-center">
                                    <iframe
                                        src="https://www.instagram.com/p/CZ1elY2v8YA/embed"
                                        width="320"
                                        height="440"
                                        frameBorder="0"
                                        scrolling="no"
                                        allowTransparency={true}
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Join Our Support Group</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">What to Expect</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Professional guidance from certified counselors
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        A safe, intimate group setting with a maximum of 3 participants to ensure personalized attention
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Personalized grief journal for ongoing support
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Evidence-based psychological approaches
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
                                <p className="text-gray-600 mb-4">
                                    Ready to begin your healing journey? Contact us to learn more about
                                    upcoming sessions and how to register.
                                </p>
                                <a
                                    href="https://wa.me/628778462966"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                                >
                                    Get Started Today
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OnlineSupportGroup; 