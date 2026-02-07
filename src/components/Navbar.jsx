import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Facebook', path: '/facebook-video-downloader' },
        { name: 'Instagram', path: '/instagram-video-downloader' },
        { name: 'YouTube', path: '/youtube-video-downloader' },
        { name: 'AI Captions', path: '/ai-caption-generator' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img
                            src="/favicon.png"
                            alt="Social Vexa Logo"
                            className="w-10 h-10 rounded-lg shadow-sm"
                        />
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Social Vexa
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`transition-colors duration-300 font-medium ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
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
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md transition-colors duration-300 ${location.pathname === link.path ? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
