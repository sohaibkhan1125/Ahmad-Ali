import React from 'react';

const Hero = ({
    selectedPlatform,
    onPlatformSelect,
    url,
    setUrl,
    onDownload,
    onPaste,
    loading,
    error,
    setVideoData,
    setError
}) => {
    const platforms = [
        {
            id: 'facebook',
            name: 'Facebook',
            icon: (
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            color: 'from-blue-600 to-blue-700',
            hoverColor: 'hover:from-blue-700 hover:to-blue-800',
            placeholder: 'Paste Facebook Video URL here',
        },
        {
            id: 'instagram',
            name: 'Instagram',
            icon: (
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
            color: 'from-pink-600 via-purple-600 to-orange-500',
            hoverColor: 'hover:from-pink-700 hover:via-purple-700 hover:to-orange-600',
            placeholder: 'Paste Instagram Video URL here',
        },
        {
            id: 'youtube',
            name: 'YouTube',
            icon: (
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
            color: 'from-red-600 to-red-700',
            hoverColor: 'hover:from-red-700 hover:to-red-800',
            placeholder: 'Paste YouTube Video URL here',
        },
    ];

    const currentPlatform = selectedPlatform
        ? platforms.find(p => p.id === selectedPlatform)
        : null;

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
        if (error) setError(null);
        setVideoData(null);
    };

    return (
        <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Download Videos from{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Facebook, Instagram & YouTube
                        </span>{' '}
                        Instantly
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                        Fast, free, and easy-to-use video downloader. Save your favorite videos from social media platforms in just a few clicks.
                    </p>

                    {/* Platform Icons */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                        {platforms.map((platform) => (
                            <button
                                key={platform.id}
                                onClick={() => onPlatformSelect(platform.id)}
                                className={`group relative transition-all duration-300 transform hover:scale-105 ${selectedPlatform === platform.id ? 'scale-105' : ''
                                    }`}
                            >
                                <div
                                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br ${platform.color} ${platform.hoverColor} 
20:                   flex items-center justify-center text-white shadow-lg transition-all duration-300
21:                   ${selectedPlatform === platform.id ? 'ring-4 ring-offset-2 ring-blue-400 shadow-2xl' : 'hover:shadow-2xl'}`}
                                >
                                    {platform.icon}
                                </div>
                                <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-700">{platform.name}</p>
                                {selectedPlatform === platform.id && (
                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* URL Input Area */}
                    <div className="max-w-2xl mx-auto mb-6">
                        <div className="relative group">
                            <input
                                type="text"
                                value={url}
                                onChange={handleUrlChange}
                                placeholder={currentPlatform ? currentPlatform.placeholder : "Select a platform to start..."}
                                className={`w-full pl-6 pr-14 py-4 sm:py-5 border-2 rounded-2xl text-gray-900 placeholder-gray-400 
                  shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${selectedPlatform
                                        ? 'border-blue-200 focus:border-blue-500 bg-white'
                                        : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                                    }`}
                                disabled={!selectedPlatform}
                            />
                            {/* Paste Icon */}
                            <button
                                onClick={onPaste}
                                disabled={!selectedPlatform}
                                title="Paste from clipboard"
                                className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg 
                  transition-all duration-200 ${selectedPlatform
                                        ? 'text-blue-600 hover:bg-blue-50'
                                        : 'text-gray-400 pointer-events-none'
                                    }`}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Download Button */}
                    <div className="max-w-2xl mx-auto">
                        <button
                            onClick={onDownload}
                            disabled={!selectedPlatform || !url.trim() || loading}
                            className={`w-full font-bold py-4 sm:py-5 px-8 rounded-2xl shadow-xl transition-all duration-300 
                flex items-center justify-center gap-3 text-lg ${!selectedPlatform || !url.trim() || loading
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:scale-[1.02]'
                                }`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>Processing...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span>Download Video</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="max-w-2xl mx-auto mt-4 animate-fadeIn">
                            <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3 text-red-700">
                                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">{error}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
