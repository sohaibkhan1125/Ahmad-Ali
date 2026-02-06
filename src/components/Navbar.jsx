import React, { useState } from 'react';

const Navbar = ({ onNavigate, currentView }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (sectionId) => {
        if (currentView !== 'home') {
            onNavigate('home');
            if (sectionId) {
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => handleNavClick('home')}>
                        <img
                            src="/favicon.png"
                            alt="Social Vexa Logo"
                            className="w-10 h-10 rounded-lg shadow-sm"
                        />
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Social Vexa
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <button
                            onClick={() => handleNavClick('home')}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleNavClick('download')}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                        >
                            Download
                        </button>
                        <button
                            onClick={() => handleNavClick('faqs')}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                        >
                            FAQs
                        </button>
                        <button
                            onClick={() => onNavigate('contact')}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <button
                            onClick={() => handleNavClick('home')}
                            className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-300"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleNavClick('download')}
                            className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-300"
                        >
                            Download
                        </button>
                        <button
                            onClick={() => handleNavClick('faqs')}
                            className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-300"
                        >
                            FAQs
                        </button>
                        <button
                            onClick={() => {
                                onNavigate('contact');
                                setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-300"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
