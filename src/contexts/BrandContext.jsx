
import { createContext, useContext } from 'react';

const BrandContext = createContext();

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};

export const BrandProvider = ({ children, brandConfig }) => {
  const defaultConfig = {
    brandName: 'Ceetech Crafts',
    brandNameShort: 'Ceetech',
    tagline: 'Where Craft Meets Class',
    description: 'Experience the perfect harmony of traditional craftsmanship and contemporary elegance in every piece.',
    
    navigation: [
      'Lighting',
      'Seating', 
      'Tables',
      'Storage',
      'Decor',
      'New',
      'Sale'
    ],
    
    socialMedia: {
      facebook: 'https://www.facebook.com/share/15y5a4wA4b/',
      instagram: 'https://www.instagram.com/ceetech_official?igsh=d3pkdHdxbHNma3pu',
      twitter: 'https://twitter.com/ceetech',
      youtube: 'https://youtube.com/ceetech',
      tiktok: 'https://tiktok.com/@ctechfurniture.interior',
      whatsapp: 'https://wa.me/2349069616141'
    },
    
    contact: {
      email: 'ceetechfurnitureandinteriors9@gmail.com',
      phone: '09069616141',
      address: '2nd Entrance Evbuabogun sawmill opposite ekae market, Sapele Rd, Benin City',
      hours: '7:00am - 6:00pm'
    },
    
    newsletter: {
      title: 'Stay Inspired. Stay Connected.',
      description: 'Be the first to discover our latest collections, design insights, and exclusive offers. Join our community of design enthusiasts and craftmanship lovers.'
    },
    
    footer: {
      quickLinks: ['About Us', 'Collections', 'Showroom', 'Contact', 'Careers'],
      customerCare: ['Shipping & Returns', 'Size Guides', 'Care Instructions', 'Warranty', 'FAQ'],
      legal: ['Privacy Policy', 'Terms of Service']
    }
  };

  const config = { ...defaultConfig, ...brandConfig };

  return (
    <BrandContext.Provider value={config}>
      {children}
    </BrandContext.Provider>
  );
};
