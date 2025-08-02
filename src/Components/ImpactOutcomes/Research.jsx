import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { motion } from 'framer-motion';
import journal1 from '../../assets/journal1.pdf';
import journal2 from '../../assets/journal2.pdf';

const Research = () => {
    const handleDownload = (pdfFile, filename) => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const researchPublications = [
        {
            id: 1,
            title: "Pediatric Tracheostomy Care: A Comprehensive Review",
            authors: "Dr. Sarah Johnson, Dr. Michael Chen, Dr. Emily Rodriguez",
            journal: "Journal of Pediatric Medicine",
            year: "2024",
            description: "A comprehensive review of current practices and innovations in pediatric tracheostomy care, including case studies and evidence-based recommendations.",
            pdfFile: journal1,
            filename: "Pediatric_Tracheostomy_Care_Review_2024.pdf"
        },
        {
            id: 2,
            title: "Family-Centered Care in Pediatric Tracheostomy Management",
            authors: "Dr. Lisa Thompson, Dr. David Kim, Dr. Maria Garcia",
            journal: "Family Medicine & Healthcare",
            year: "2024",
            description: "Research focusing on family-centered approaches to tracheostomy care, including psychological support and quality of life improvements.",
            pdfFile: journal2,
            filename: "Family_Centered_Care_Tracheostomy_2024.pdf"
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
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">Research & Publications</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our research team is dedicated to advancing knowledge in pediatric tracheostomy care
                            through evidence-based studies, clinical trials, and collaborative research initiatives.
                            Explore our latest publications and contribute to the growing body of knowledge.
                        </p>
                    </motion.div>

                    {/* Research Publications Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Latest Publications</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {researchPublications.map((publication, index) => (
                                <motion.div
                                    key={publication.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                                >
                                    <div className="mb-4">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2 mb-10">{publication.title}</h3>
                                        <p className="text-gray-600 text-sm mb-2">
                                            <span className="font-medium">Authors:</span> {publication.authors}
                                        </p>
                                        <p className="text-gray-600 text-sm mb-2">
                                            <span className="font-medium">Journal:</span> {publication.journal}
                                        </p>
                                        <p className="text-gray-600 text-sm mb-4">
                                            <span className="font-medium">Year:</span> {publication.year}
                                        </p>
                                        <p className="text-gray-600 text-sm mb-6">{publication.description}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleDownload(publication.pdfFile, publication.filename)}
                                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <span>Download PDF</span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Research Areas Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Research Focus Areas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Clinical Outcomes</h3>
                                <p className="text-gray-600">Studying the effectiveness of different tracheostomy care protocols and their impact on patient outcomes</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Family Support</h3>
                                <p className="text-gray-600">Researching the psychological and social impact on families and developing support systems</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation</h3>
                                <p className="text-gray-600">Developing new technologies and approaches to improve tracheostomy care and patient quality of life</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Research Impact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-white rounded-lg shadow-lg p-8 mb-12"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Research Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                                <p className="text-gray-600">Peer-reviewed publications</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                                <p className="text-gray-600">Families impacted by our research</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                                <p className="text-gray-600">Healthcare institutions using our protocols</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Get Involved Section */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Get Involved in Research</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Participate in Studies</h3>
                                <p className="text-gray-600 mb-4">
                                    We're always looking for families and healthcare professionals to participate
                                    in our research studies. Your experience can help improve care for others.
                                </p>
                                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold">
                                    Join Research Study
                                </button>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Collaborate with Us</h3>
                                <p className="text-gray-600 mb-4">
                                    Are you a researcher or healthcare professional interested in collaborating?
                                    We welcome partnerships to advance pediatric tracheostomy care.
                                </p>
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                                    Contact Research Team
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

export default Research; 