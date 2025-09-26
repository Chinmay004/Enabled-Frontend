import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { motion } from 'framer-motion';

const PediatricTracheostomyCareBooklet = () => {
    const handleDownload = (url, filename) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">Pediatric Tracheostomy Care Booklet</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive care booklet provides essential information and guidance for families
                            and caregivers of pediatric tracheostomy patients, ensuring the best possible care and outcomes.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
                            <div className="flex-1">
                                {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">Patient Journey Documentary</h2> */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Download Booklet</h3>
                                    <p className="text-gray-600 mb-4">
                                        Download our comprehensive Pediatric Tracheostomy Care Booklet in your preferred language. This booklet is a collection of contributions from parents of pediatric tracheostomy patients in Indonesia.
                                    </p>
                                    {/* <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Documentary Features:</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• Real stories from families and caregivers</li>
                                            <li>• Expert insights from medical professionals</li>
                                            <li>• Community support and resilience stories</li>
                                            <li>• Available in Bahasa and English</li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="mt-auto">
                                <div className="grid grid-cols-1 gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleDownload(
                                            'https://drive.google.com/file/d/1fki4VPle0TFH1Ay5qD5_Kz6XueGG4jk3/view?usp=drive_link'
                                        )}
                                        className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span>Download Bahasa Version</span>
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleDownload(
                                            'https://drive.google.com/file/d/15FAWKsMeEqupiKld2yBswsfv02xJeRh1/view?usp=drive_link',
                                            'Patient_Journey_Documentary_English.pdf'
                                        )}
                                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span>Download English Version</span>
                                    </motion.button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Care Booklet Contents</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">List of necessary medical supplies and equipment </h3>
                                            <p className="text-gray-600 text-sm">A complete inventory of essential items required for pediatric
                                                tracheostomy care. </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Instructions for pediatric tracheostomy care training </h3>
                                            <p className="text-gray-600 text-sm">Step-by-step guidance for safely performing and managing
                                                tracheostomy care.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">List of must-watch videos for Indonesian pediatric tracheostomy
                                                patient parents </h3>
                                            <p className="text-gray-600 text-sm">Curated educational videos to support parents in caring for their
                                                children. </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">List of necessary contacts  </h3>
                                            <p className="text-gray-600 text-sm">Important support resources to reach when needed.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Why Our Booklet Matters</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Guide</h3>
                                <p className="text-gray-600">All-in-one resource for tracheostomy care</p>
                            </div>
                            {/* <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert-Reviewed</h3>
                                <p className="text-gray-600">Content verified by medical professionals and experienced caregivers</p>
                            </div> */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Family-Friendly</h3>
                                <p className="text-gray-600">Accessible language and format for all family members</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-white rounded-lg shadow-lg p-8"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Additional Resources</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Request Physical Copy</h3>
                                <p className="text-gray-600 mb-4">
                                    Need a physical copy of our care booklet? Contact us to request one
                                    for your family or healthcare facility.
                                </p>
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                                    Request Copy
                                </button>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Share with Others</h3>
                                <p className="text-gray-600 mb-4">
                                    Help us reach more families by sharing our resources with other
                                    caregivers and healthcare professionals.
                                </p>
                                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                                    Share Resources
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

export default PediatricTracheostomyCareBooklet; 