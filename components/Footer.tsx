import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface ContactInfo {
  _id: string;
  type: 'phone' | 'email' | 'address' | 'website' | 'social';
  label: string;
  value: string;
  icon: string;
  is_primary: boolean;
  is_active: boolean;
  order_index: number;
}

interface Logo {
  _id: string;
  name: string;
  image_url: string;
  website_url?: string;
  description?: string;
  is_active: boolean;
  order_index: number;
}

const Footer: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [logos, setLogos] = useState<Logo[]>([]);

  useEffect(() => {
    fetchContactInfo();
    fetchLogos();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('/api/contact-info');
      if (response.ok) {
        const data = await response.json();
        setContactInfo(data);
      }
    } catch (error) {
      console.error('Error fetching contact info:', error);
    }
  };

  const fetchLogos = async () => {
    try {
      const response = await fetch('/api/footer-logos');
      if (response.ok) {
        const data = await response.json();
        setLogos(data);
      }
    } catch (error) {
      console.error('Error fetching logos:', error);
    }
  };

  const getContactIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      phone: <Phone className="h-4 w-4" />,
      mail: <Mail className="h-4 w-4" />,
      'map-pin': <MapPin className="h-4 w-4" />,
      globe: <GraduationCap className="h-4 w-4" />,
      facebook: <Facebook className="h-4 w-4" />,
      twitter: <Twitter className="h-4 w-4" />,
      instagram: <Instagram className="h-4 w-4" />,
      linkedin: <Linkedin className="h-4 w-4" />
    };
    return iconMap[iconName] || <Phone className="h-4 w-4" />;
  };

  const primaryContacts = contactInfo.filter(contact => contact.is_primary);
  const phoneContacts = contactInfo.filter(contact => contact.type === 'phone');
  const emailContacts = contactInfo.filter(contact => contact.type === 'email');
  const addressContacts = contactInfo.filter(contact => contact.type === 'address');

  return (
    <footer className="bg-gray-900 text-white">
      {/* Partner Logos Section */}
      {logos.length > 0 && (
        <div className="bg-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-lg font-semibold text-gray-300 mb-6">Our Partners & Initiatives</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6 items-center">
              {logos.map((logo) => (
                <div key={logo._id} className="flex justify-center">
                  {logo.website_url ? (
                    <a
                      href={logo.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                      title={logo.description || logo.name}
                    >
                      <img
                        src={logo.image_url}
                        alt={logo.name}
                        className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ) : (
                    <img
                      src={logo.image_url}
                      alt={logo.name}
                      className="h-12 w-auto object-contain filter brightness-0 invert opacity-70"
                      title={logo.description || logo.name}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Kittur Rani Chennamma</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kittur Rani Chennamma Residential School, Balepura, Devanahalli - Providing quality residential education for rural students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {addressContacts.slice(0, 1).map((contact) => (
                <li key={contact._id} className="flex items-start space-x-2">
                  {getContactIcon(contact.icon)}
                  <span>{contact.value}</span>
                </li>
              ))}
              {phoneContacts.slice(0, 2).map((contact) => (
                <li key={contact._id} className="flex items-center space-x-2">
                  {getContactIcon(contact.icon)}
                  <div>
                    <span className="block">{contact.value}</span>
                    {!contact.is_primary && (
                      <span className="text-xs text-gray-500">({contact.label})</span>
                    )}
                  </div>
                </li>
              ))}
              {emailContacts.slice(0, 2).map((contact) => (
                <li key={contact._id} className="flex items-center space-x-2">
                  {getContactIcon(contact.icon)}
                  <div>
                    <span className="block">{contact.value}</span>
                    {!contact.is_primary && (
                      <span className="text-xs text-gray-500">({contact.label})</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kittur Rani Chennamma Residential School, Balepura, Devanahalli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;