import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { motion } from 'framer-motion';

const PatientConsultationSupport = () => {
    const consultations = [
        {
            id: 1,
            title: "Family Consultation Session",
            instagramUrl: "https://www.instagram.com/p/C-r5pNfS4jx/",
            embedUrl: "https://www.instagram.com/p/C-r5pNfS4jx/embed",
            description: "Personalized consultation sessions for families navigating tracheostomy care."
        },
        {
            id: 2,
            title: "Caregiver Support Meeting",
            instagramUrl: "https://www.instagram.com/p/C-4yAX5SVnV/",
            embedUrl: "https://www.instagram.com/p/C-4yAX5SVnV/embed",
            description: "Support meetings for caregivers to share experiences and receive guidance."
        },
        {
            id: 3,
            title: "Medical Team Consultation",
            instagramUrl: "https://www.instagram.com/p/DANfG0ry_7K/",
            embedUrl: "https://www.instagram.com/p/DANfG0ry_7K/embed",
            description: "Collaborative consultations with medical professionals and families."
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
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">Patient Consultation Support</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our consultation support services provide personalized guidance and expert advice
                            for families and caregivers of pediatric tracheostomy patients, ensuring the best
                            possible care and outcomes.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Consultation Services</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Family Guidance</h3>
                                        <p className="text-gray-600 text-sm">Personalized support for families adjusting to tracheostomy care</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Caregiver Training</h3>
                                        <p className="text-gray-600 text-sm">Comprehensive training for caregivers on daily care routines</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Medical Coordination</h3>
                                        <p className="text-gray-600 text-sm">Facilitating communication between families and medical teams</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Emergency Preparedness</h3>
                                        <p className="text-gray-600 text-sm">Training for emergency situations and crisis management</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consultation Process</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 font-semibold text-gray-700">1</div>
                                    <p className="text-gray-600">Initial assessment and needs identification</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 font-semibold text-gray-700">2</div>
                                    <p className="text-gray-600">Personalized consultation planning</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 font-semibold text-gray-700">3</div>
                                    <p className="text-gray-600">Expert consultation and guidance</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 font-semibold text-gray-700">4</div>
                                    <p className="text-gray-600">Follow-up support and monitoring</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recent Consultation Sessions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {consultations.map((consultation, index) => (
                                <motion.div
                                    key={consultation.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                    className="bg-white rounded-lg shadow-lg p-6"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">{consultation.title}</h3>
                                    <p className="text-gray-600 mb-4">{consultation.description}</p>
                                    <div className="flex justify-center">
                                        <div className="relative w-full max-w-sm">
                                            <iframe
                                                src={consultation.embedUrl}
                                                width="320"
                                                height="440"
                                                frameBorder="0"
                                                scrolling="no"
                                                allowTransparency={true}
                                                className="rounded-lg w-full"
                                                title={`Instagram post - ${consultation.title}`}
                                                onError={(e) => {
                                                    console.log('Instagram embed failed to load:', e);
                                                }}
                                            ></iframe>
                                            <div className="mt-2 text-center">
                                                <a
                                                    href={consultation.instagramUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                                >
                                                    View on Instagram →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Instagram Stories Highlights Section */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Consultation Stories & Highlights</h2>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Behind the Scenes: Consultation Sessions</h3>
                                <p className="text-gray-600 mb-6">
                                    Explore our Instagram stories to see real consultation sessions,
                                    caregiver training moments, and the impact of our support services.
                                </p>

                                <div className="flex justify-center">
                                    <div className="relative w-full max-w-md">
                                        <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg p-1">
                                            <div className="bg-white rounded-lg p-4">
                                                <div className="flex items-center justify-center mb-4">
                                                    <svg className="w-8 h-8 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                    </svg>
                                                    <span className="text-lg font-semibold text-gray-800">Instagram Stories</span>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="bg-gray-50 rounded-lg p-4">
                                                        <h4 className="font-semibold text-gray-800 mb-2">Consultation Highlights</h4>
                                                        <p className="text-sm text-gray-600 mb-3">
                                                            Real-time glimpses into our consultation sessions,
                                                            caregiver training, and family support moments.
                                                        </p>
                                                        <a
                                                            href="https://www.instagram.com/stories/highlights/18189203053080175/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium"
                                                        >
                                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                            </svg>
                                                            View Stories
                                                        </a>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-2">
                                                        <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-3 text-center text-white">
                                                            <div className="text-xs font-medium">Family</div>
                                                            <div className="text-xs opacity-90">Support</div>
                                                        </div>
                                                        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg p-3 text-center text-white">
                                                            <div className="text-xs font-medium">Caregiver</div>
                                                            <div className="text-xs opacity-90">Training</div>
                                                        </div>
                                                        <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded-lg p-3 text-center text-white">
                                                            <div className="text-xs font-medium">Expert</div>
                                                            <div className="text-xs opacity-90">Guidance</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-sm text-gray-500 mb-4">
                                    💡 <strong>Tip:</strong> Click "View Stories" to see our latest consultation highlights on Instagram
                                </p>
                                <div className="flex justify-center space-x-4 text-sm text-gray-600">
                                    <span className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                                        Live Sessions
                                    </span>
                                    <span className="flex items-center">
                                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                                        Behind Scenes
                                    </span>
                                    <span className="flex items-center">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                        Success Stories
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div> */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Book Your Consultation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose Our Consultations?</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Expert guidance from experienced professionals
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Personalized care plans tailored to your needs
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Ongoing support and follow-up care
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Access to comprehensive resources and tools
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Get Started Today</h3>
                                <p className="text-gray-600 mb-4">
                                    Ready to receive personalized consultation support? Contact us to schedule
                                    your first session and begin your journey toward better care.
                                </p>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfLsRQ1yzv6vdnDiXdTK-_zhYWJ0LBloTSjuD96AB3g9Bammw/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold inline-block"
                                >
                                    Schedule Consultation
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

export default PatientConsultationSupport; 