import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords }) => {
    const location = useLocation();

    useEffect(() => {
        // Update Title
        document.title = `${title} | Social Vexa`;

        // Update Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description || 'Download videos from Facebook, Instagram, and YouTube instantly.');

        // Update Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        if (keywords) {
            metaKeywords.setAttribute('content', keywords);
        } else {
            metaKeywords.setAttribute('content', 'social media downloader, facebook video downloader, instagram video downloader, youtube video downloader, ai caption generator');
        }

        // Add Canonical Link
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = 'canonical';
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute('href', `https://socialvexa.in${location.pathname}`);

    }, [title, description, keywords, location]);

    return null;
};

export default SEO;
