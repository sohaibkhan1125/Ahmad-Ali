import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Is this tool free to use?',
            answer:
                'Yes! Our Social Vexa is completely free to use. There are no hidden fees, subscriptions, or premium plans. You can download unlimited videos from Facebook, Instagram, and YouTube without any cost.',
        },
        {
            question: 'Which platforms are supported?',
            answer:
                'Currently, we support three major social media platforms: Facebook, Instagram, and YouTube. You can download videos from any of these platforms by simply pasting the video URL into our downloader.',
        },
        {
            question: 'Is login required to download videos?',
            answer:
                'No login or registration is required! Simply select your platform, paste the video URL, and click download. We believe in keeping things simple and hassle-free for our users.',
        },
        {
            question: 'Are videos stored on your servers?',
            answer:
                'No, we do not store any videos on our servers. All downloads are processed in real-time and sent directly to your device. We prioritize your privacy and do not keep any copies of the downloaded content.',
        },
        {
            question: 'Will more platforms be added in the future?',
            answer:
                'Yes! We are constantly working to expand our platform support. We plan to add support for TikTok, Twitter, Vimeo, and other popular social media platforms in upcoming updates. Stay tuned for new features!',
        },
        {
            question: 'What video quality can I download?',
            answer:
                'Our tool allows you to download videos in the best available quality from the source platform. The quality options depend on what the original platform offers, ranging from SD to HD and even 4K when available.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600">
                        Find answers to common questions about our video downloader
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none group"
                            >
                                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'transform rotate-180' : ''
                                        }`}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                    <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                    <p className="mb-6 opacity-90">
                        We're here to help! Feel free to reach out to our support team.
                    </p>
                    <Link
                        to="/contact"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
