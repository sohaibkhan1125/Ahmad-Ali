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
    if (path.includes('facebook')) return 'facebook';
    if (path.includes('instagram')) return 'instagram';
    if (path.includes('youtube')) return 'youtube';
    return 'facebook'; // Default for home or first visit
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

  const DownloaderPage = ({ title, description }) => (
    <>
      <SEO title={title} description={description} />
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
        <Route path="/" element={<DownloaderPage title="Home" description="Download videos from Facebook, Instagram, and YouTube instantly." />} />
        <Route path="/facebook-video-downloader" element={<DownloaderPage title="Facebook Video Downloader" description="Download Facebook videos in HD quality instantly – fast, free, and secure." />} />
        <Route path="/instagram-video-downloader" element={<DownloaderPage title="Instagram Video Downloader" description="Download Instagram reels, videos, and posts in one click." />} />
        <Route path="/youtube-video-downloader" element={<DownloaderPage title="YouTube Video Downloader" description="Download YouTube videos in multiple resolutions easily." />} />
        <Route path="/privacy-policy" element={<><SEO title="Privacy Policy" /><PrivacyPolicy /></>} />
        <Route path="/terms-and-conditions" element={<><SEO title="Terms & Conditions" /><TermsAndConditions /></>} />
        <Route path="/contact" element={<><SEO title="Contact Us" /><Contact /></>} />
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

