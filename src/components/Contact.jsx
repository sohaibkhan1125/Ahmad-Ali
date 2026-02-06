import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Contact Us
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Have questions or need assistance? We're here to help. Reach out to us via the form below or through our direct contact details.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-12">
                        {/* Contact Information */}
                        <div className="max-w-xl text-center">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Ways to Reach Us</h3>
                            <p className="text-gray-600 mb-8 text-lg">
                                We're dedicated to providing the best downloader experience. Whether you have a technical question or just want to say hello, feel free to use the contact information below.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <div className="flex items-center gap-4 bg-blue-50 p-6 rounded-2xl w-full sm:w-auto">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-gray-500">Email us at</p>
                                        <a href="mailto:assamtricko@gmail.com" className="text-gray-800 font-bold text-lg hover:text-blue-600 transition-colors break-all">
                                            assamtricko@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-purple-50 p-6 rounded-2xl w-full sm:w-auto">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-gray-500">Response Time</p>
                                        <p className="text-gray-800 font-bold text-lg">Within 24 Hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
