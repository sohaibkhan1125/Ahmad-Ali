import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description }) => {
    const location = useLocation();

    useEffect(() => {
        document.title = `${title} | Social Vexa`;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Download videos from Facebook, Instagram, and YouTube instantly.');
        }
    }, [title, description, location]);

    return null;
};

export default SEO;
