import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Downloader from './components/Downloader';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import SEO from './components/SEO';
import AICaptionGenerator from './components/AICaptionGenerator';
import axios from 'axios';

// Wrapper component to handle routing logic and state
const AppContent = () => {
  const location = useLocation();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videoData, setVideoData] = useState(null);

  // Determine current platform based on route
  const getPlatformFromPath = (path) => {
    if (path === '/') return 'home';
    if (path.includes('facebook')) return 'facebook';
    if (path.includes('instagram')) return 'instagram';
    if (path.includes('youtube')) return 'youtube';
    return 'home'; // Default fallback
  };

  const selectedPlatform = getPlatformFromPath(location.pathname);

  // Clear data when route changes
  useEffect(() => {
    setUrl('');
    setError(null);
    setVideoData(null);
  }, [location.pathname]);

  const handleGetVideoInfo = async () => {
    if (!url.trim()) {
      setError('Please enter a video URL');
      return;
    }

    setLoading(true);
    setError(null);
    setVideoData(null);

    try {
      let apiPath = '';
      if (selectedPlatform === 'facebook') apiPath = '/api/v1/facebook-media/info';
      else if (selectedPlatform === 'youtube') apiPath = '/api/v1/youtube-media/info';
      else if (selectedPlatform === 'instagram') apiPath = '/api/v1/instagram-media/info';

      const options = {
        method: 'GET',
        url: `https://youtube-video-audio-downloader.p.rapidapi.com${apiPath}`,
        params: { url: url.trim() },
        headers: {
          'x-rapidapi-key': 'cca330428dmsh4b459b029c77e3cp1a7504jsn8f61efbba564',
          'x-rapidapi-host': 'youtube-video-audio-downloader.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);

      if (response.data.status === 'success') {
        setVideoData(response.data.data);
        setTimeout(() => {
          const element = document.getElementById('results');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        setError('Failed to fetch video information');
      }
    } catch (err) {
      console.error('Error:', err);
      setError(
        err.response?.data?.message ||
        'Failed to fetch video information. Please check the URL and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      if (videoData) setVideoData(null);
      if (error) setError(null);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  };

  const DownloaderPage = ({ title, description, keywords }) => (
    <>
      <SEO title={title} description={description} keywords={keywords} />
      <Hero
        selectedPlatform={selectedPlatform}
        url={url}
        setUrl={setUrl}
        onDownload={handleGetVideoInfo}
        onPaste={handlePaste}
        loading={loading}
        error={error}
        setVideoData={setVideoData}
        setError={setError}
      />
      <Downloader
        selectedPlatform={selectedPlatform}
        videoData={videoData}
        loading={loading}
        error={error}
      />
      <FAQ />
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<DownloaderPage
          title="Social Vexa - All-in-One Social Media Tools"
          description="Download videos from Facebook, Instagram, YouTube and generate AI captions for your social media posts instantly. Fast, free, and secure."
          keywords="social media downloader, facebook video downloader, instagram reels downloader, youtube video downloader, ai caption generator, social media tools, video downloader free"
        />} />
        <Route path="/facebook-video-downloader" element={<DownloaderPage
          title="Facebook Video Downloader - Download FB Videos in HD"
          description="Download Facebook videos in HD quality instantly. Fast, free, and secure Facebook video downloader for mobile and desktop."
          keywords="facebook video downloader, download fb videos, facebook downloader hd, save facebook videos"
        />} />
        <Route path="/instagram-video-downloader" element={<DownloaderPage
          title="Instagram Video Downloader - Download Reels & IG Videos"
          description="Download Instagram reels, videos, and posts in one click. High-quality Instagram downloader for fast and easy saving."
          keywords="instagram video downloader, download instagram reels, ig downloader, save instagram videos, instagram photo downloader"
        />} />
        <Route path="/youtube-video-downloader" element={<DownloaderPage
          title="YouTube Video Downloader - Download YT Videos in 4K/HD"
          description="Download YouTube videos in multiple resolutions easily. Fast and reliable YouTube video downloader for all devices."
          keywords="youtube video downloader, download yt videos, youtube downloader hd, save youtube videos, 4k youtube downloader"
        />} />
        <Route path="/ai-caption-generator" element={<AICaptionGenerator />} />
        <Route path="/privacy-policy" element={<><SEO title="Privacy Policy" description="Learn about how Social Vexa handles your privacy and data. We prioritize your security and transparency." /><PrivacyPolicy /></>} />
        <Route path="/terms-and-conditions" element={<><SEO title="Terms & Conditions" description="Read our Terms and Conditions for using Social Vexa's social media downloader and tools." /><TermsAndConditions /></>} />
        <Route path="/contact" element={<><SEO title="Contact Us - Support" description="Have questions or need help? Reach out to the Social Vexa support team. We're here to assist you." /><Contact /></>} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

