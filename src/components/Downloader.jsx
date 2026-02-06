const Downloader = ({ selectedPlatform, videoData, loading, error }) => {
    const handleDownload = (downloadUrl, quality) => {
        // Open download URL in new tab
        window.open(downloadUrl, '_blank');
    };

    if (!videoData && !loading && !error) {
        return (
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Features Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Lightning Fast</h3>
                            <p className="text-sm text-gray-600">Download videos in seconds with our optimized technology</p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">100% Secure</h3>
                            <p className="text-sm text-gray-600">Your privacy is our priority. No data is stored on our servers</p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
                            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Completely Free</h3>
                            <p className="text-sm text-gray-600">No hidden fees, no subscriptions. Download unlimited videos</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="results" className="py-16 bg-white min-h-[400px]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {videoData && (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">Video Found!</h2>
                            <p className="text-gray-600">Ready to save it to your device</p>
                        </div>

                        {/* Video Details Card */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-xl">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Thumbnail */}
                                {videoData.thumbnail && (
                                    <div className="flex-shrink-0 w-full md:w-64">
                                        <img
                                            src={videoData.thumbnail}
                                            alt={videoData.title}
                                            className="w-full h-auto rounded-xl shadow-lg border-2 border-white"
                                        />
                                    </div>
                                )}

                                {/* Video Info */}
                                <div className="flex-1 space-y-4">
                                    <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                                        {videoData.title}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center gap-3 text-gray-700 bg-white/50 p-3 rounded-lg">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Uploader</p>
                                                <p className="font-semibold truncate max-w-[150px]">{videoData.uploader}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700 bg-white/50 p-3 rounded-lg">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Duration</p>
                                                <p className="font-semibold">{videoData.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Download Options */}
                        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8 shadow-sm">
                            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Select Quality to Download
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {videoData.links?.map((link, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleDownload(link.download_url, link.resolution || link.type)}
                                        className={`p-5 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.03] text-left group
                                            ${link.type === 'audio'
                                                ? 'border-green-100 bg-green-50 hover:bg-green-100 hover:border-green-300'
                                                : link.resolution === '1080p' || link.resolution === '720p' || link.resolution === 'hd'
                                                    ? 'border-purple-100 bg-purple-50 hover:bg-purple-100 hover:border-purple-300'
                                                    : 'border-blue-100 bg-blue-50 hover:bg-blue-100 hover:border-blue-300'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className={`font-bold transition-colors ${link.type === 'audio' ? 'text-green-700' :
                                                        link.resolution === 'hd' || link.resolution === '720p' || link.resolution === '1080p'
                                                            ? 'text-purple-700' : 'text-blue-700'
                                                    }`}>
                                                    {link.type === 'audio'
                                                        ? '🎵 Audio MP3'
                                                        : link.resolution === 'hd' || link.resolution === '720p' || link.resolution === '1080p' || selectedPlatform === 'instagram'
                                                            ? `🎬 HD Video (${link.resolution || 'High'})`
                                                            : `📹 Video (${link.resolution || 'SD'})`
                                                    }
                                                </p>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    {link.type === 'audio' ? 'High Quality Sound' : `${link.resolution || 'Standard Quality'}`}
                                                </p>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-opacity-100 transition-all duration-300">
                                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {loading && (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4">
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="w-8 h-8 rounded-full bg-blue-50 shadow-sm animate-pulse"></span>
                            </div>
                        </div>
                        <p className="text-gray-500 font-medium animate-pulse text-lg">Analyzing your video...</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Downloader;
