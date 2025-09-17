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
            title: "Urban vs Rural: Parental Stress and Social Support of Parents of Children with Disabilities",
            authors: "Ziadatul Hikmiah, Ari Pratiwi, Unita Werdi Rahajeng, Ade Meutia, Siti Sara Deviana, Miga Demira, Hanifah Ulya ",
            journal: "Journal of Pediatric Medicine",
            year: "2024",
            description: "Parents who care for children with disabilities are known to have higher levels of stress and greater obstacles compared to parents who care for children without special needs. However, this issue has received less attention and has not been studied much. This research is a correlational quantitative study that aims to see the relationship between parental stress and social support obtained by parents of children with disabilities, which also considers the factor of residence (urban vs. rural) as a moderator. The Parental Stress Scale (PSS) and the Medical Outcomes Study Social Support Survey - MOS-SS were administered to 107 parents with children with disabilities to determine the association between stress levels and social support received. Based on the results of the correlation test, a negative and significant correlation was obtained between parental stress and social support (p<.001). This indicates that the higher the social support score, the lower the parental stress score. In addition, it was found that although it did not directly affect parental stress scores and social support partially, the location where participants lived moderated the influence of social support on parental stress.",
            pdfFile: journal1,
            filename: "Pediatric_Tracheostomy_Care_Review_2024.pdf"
        },
        {
            id: 2,
            title: "Exploring Coping Strategies of Parents of Children with Rare Diseases: A Qualitative Study ",
            authors: "Ziadatul Hikmiah, Ade Meutia, Siti Sara Deviana ",
            journal: "Family Medicine & Healthcare",
            year: "2024",
            description: " Parents of children with special needs, such as those with rare diseases, are to experience higher levels of stress and encounter greater challenges compared to those caring for children without special needs. However, despite its importance, this issue is often unrecognizable and remain insufficiently explored. This current study is a confirmatory study with a qualitative approach that aims to investigate how parents cope with the stress associated with caring for children with rare diseases. This study aims to explore parents’ strategies to manage challenges on daily basis. Data collection involved five parents who raise children with rare diseases to explore coping strategies in dealing with parental stress when dealing with everyday caring for children with special needs. Understanding coping strategies to face challenges and stress.",
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
                            Our research focuses on understanding the challenges faced by
                            parents of children with disabilities and rare diseases, examining stress levels, social
                            support, and coping strategies. Through these insights, we aim to inform interventions
                            and resources that strengthen family well-being and resilience.
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
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Parental Stress and Well-Being </h3>
                                <p className="text-gray-600">Examining the emotional and psychological challenges faced by parents of children with
                                    disabilities and rare diseases.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2"> Social Support and Community Resources</h3>
                                <p className="text-gray-600">Investigating the role of family, community, and healthcare networks in supporting
                                    caregiving parents. </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2"> Coping Strategies and Adaptive Practices</h3>
                                <p className="text-gray-600">Identifying practical and emotional strategies parents use to navigate the demands of
                                    caregiving. </p>
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
                                <div className="text-3xl font-bold text-blue-600 mb-2">107+</div>
                                <p className="text-gray-600"> parents raising children with disabilities or rare diseases were sampled</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">18+ <span className="text-sm">Item Scale</span></div>
                                <p className="text-gray-600"> measures both positive and negative aspects of parenting</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-2">20+  <span className="text-sm">Item Scale</span></div>
                                <p className="text-gray-600">assesses perceived social support on a Likert scale</p>
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