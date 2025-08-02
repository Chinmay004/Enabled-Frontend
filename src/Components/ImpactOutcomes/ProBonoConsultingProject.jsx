import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { motion } from 'framer-motion';

const ProBonoConsultingProject = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">PRO BONO CONSULTING</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our client was Yayasan Sayap Ibu (Banten branch). We assigned 2 (two) interns who delivered tangible outcomes to solve the foundation's problems.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
                    >
                        {/* Proposal for Addressing Caregiver Turnover Issue */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white rounded-lg shadow-lg p-6"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">PROPOSAL FOR ADDRESSING CAREGIVER TURNOVER ISSUE</h2>
                            {/* <div className="bg-gray-100 rounded-lg p-4 mb-4">
                                <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
                                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center">Group meeting photo - Team collaboration session</p>
                            </div> */}
                            <p className="text-gray-600">
                                Comprehensive proposal addressing the critical issue of caregiver turnover in special needs facilities,
                                providing sustainable solutions for staff retention and quality care maintenance.
                            </p>
                        </motion.div>

                        {/* Special Needs Children's Sex Education Webinar */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white rounded-lg shadow-lg p-6"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">SPECIAL NEEDS CHILDREN'S SEX EDUCATION WEBINAR FOR CAREGIVERS</h2>
                            {/* <div className="bg-gray-100 rounded-lg p-4 mb-4">
                                <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
                                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center">Webinar screenshot - "Garis Besar Sex Ed for Special Needs"</p>
                            </div> */}
                            <p className="text-gray-600">
                                Educational webinar providing caregivers with essential knowledge and tools for addressing
                                sex education needs of children with special needs in an appropriate and supportive manner.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Assessment Tools Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                            ACTIVITY OF DAILY LIVING ASSESSMENT (ADL) AND STRENGTH AND DIFFICULTIES QUESTIONNAIRE (SDQ) TO OPTIMIZE THE ASSESSMENT OF SPECIAL NEEDS CHILDREN'S DEVELOPMENTAL MILESTONES
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* ADL Assessment */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-4 bg-red-600 text-white px-4 py-2 rounded">
                                    ASESMEN KEMANDIRIAN ANAK (Child Independence Assessment)
                                </h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>
                                        <strong>Guidelines for measuring independence in children with Autism Spectrum Disorder.</strong>
                                        The program aims to help children achieve daily independence.
                                    </p>
                                    <p>
                                        <strong>Reference:</strong> Activity of Daily Living (ADL) assessment from 2012
                                    </p>
                                    <div>
                                        <strong>Five indicators of independence:</strong>
                                        <ul className="list-disc list-inside mt-2 space-y-1">
                                            <li>Eating and drinking</li>
                                            <li>Dressing</li>
                                            <li>Toiletries</li>
                                            <li>Cleanliness</li>
                                            <li>Home and community activities</li>
                                        </ul>
                                    </div>
                                    <p className="text-sm italic">
                                        <strong>Instructions for caregivers/observers:</strong> Complete assessment based on daily observations
                                        of the child's independent living skills and capabilities.
                                    </p>
                                </div>
                            </motion.div>

                            {/* SDQ Assessment */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-4 bg-red-600 text-white px-4 py-2 rounded">
                                    STRENGTH AND DIFFICULTIES QUESTIONNAIRE (SDQ)
                                </h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>
                                        <strong>25-item questionnaire</strong> measuring:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Emotional symptoms</li>
                                        <li>Conduct problems</li>
                                        <li>Hyperactivity</li>
                                        <li>Peer problems</li>
                                    </ul>
                                    <p>
                                        <strong>Completion time:</strong> About 5 minutes<br />
                                        <strong>Applicable to:</strong> Children with Autism Spectrum Disorder and independent children
                                    </p>
                                    <div>
                                        <strong>Rating scale:</strong>
                                        <ul className="list-disc list-inside mt-2 space-y-1">
                                            <li>TIDAK BENAR (Not True) - Score: 0</li>
                                            <li>AGAK BENAR (Somewhat True) - Score: 1</li>
                                            <li>BENAR (True) - Score: 2</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong>Score interpretation:</strong>
                                        <ul className="list-disc list-inside mt-2 space-y-1">
                                            <li>Normal: 0-13</li>
                                            <li>Border: 14-16</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Impact Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">2 Interns</h3>
                                <p className="text-gray-600">Dedicated professionals delivering tangible outcomes</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Yayasan Sayap Ibu</h3>
                                <p className="text-gray-600">Banten branch client with specific challenges addressed</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Solutions</h3>
                                <p className="text-gray-600">Multiple assessment tools and educational resources provided</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProBonoConsultingProject; 