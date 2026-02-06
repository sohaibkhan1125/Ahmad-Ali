import React, { useState } from 'react';
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
import axios from 'axios';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videoData, setVideoData] = useState(null);

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    // User requested to remove automatic scroll-to-input behavior
  };

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetVideoInfo = async () => {
    if (!url.trim()) {
      setError('Please enter a video URL');
      return;
    }

    if (!['facebook', 'youtube', 'instagram'].includes(selectedPlatform)) {
      setError('Please select a platform first.');
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
        // Scroll to results after fetching
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
      // Fallback or silent error
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={navigateTo} currentView={currentView} />
      {currentView === 'home' ? (
        <>
          <Hero
            selectedPlatform={selectedPlatform}
            onPlatformSelect={handlePlatformSelect}
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
      ) : currentView === 'privacy' ? (
        <PrivacyPolicy />
      ) : currentView === 'terms' ? (
        <TermsAndConditions />
      ) : (
        <Contact />
      )}
      <Footer onNavigate={navigateTo} />
      <BackToTop />
    </div>
  );
}

export default App;

