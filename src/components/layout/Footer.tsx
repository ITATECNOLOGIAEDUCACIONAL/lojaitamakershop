
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { FooterConfig } from '../admin/AdminFooterConfiguration';

const Footer = () => {
  // Default footer configuration (same as in AdminFooterConfiguration)
  const defaultFooterConfig: FooterConfig = {
    storeName: 'ITASHOP',
    storeDescription: 'Experience quality products with our premium selection. We believe in simplicity, functionality, and exceptional customer service.',
    address: '123 Design Street, Creative City, 10001',
    phone: '+1 (555) 123-4567',
    email: 'support@itashop.com',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      youtube: '#'
    }
  };

  const [footerConfig, setFooterConfig] = useState<FooterConfig>(defaultFooterConfig);

  useEffect(() => {
    // Load saved configuration from localStorage if it exists
    const savedConfig = localStorage.getItem('footerConfig');
    if (savedConfig) {
      setFooterConfig(JSON.parse(savedConfig));
    }
  }, []);

  return (
    <footer className="bg-shop-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">{footerConfig.storeName}</h3>
            <p className="text-sm text-shop-600 mb-4">
              {footerConfig.storeDescription}
            </p>
            <div className="flex space-x-4">
              <a href={footerConfig.socialLinks.facebook} className="text-shop-500 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={footerConfig.socialLinks.twitter} className="text-shop-500 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={footerConfig.socialLinks.instagram} className="text-shop-500 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={footerConfig.socialLinks.youtube} className="text-shop-500 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-shop-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-shop-600 hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-shop-600 hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-shop-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-shop-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-shop-600 hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-shop-600 hover:text-primary transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-shop-600 hover:text-primary transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-shop-600 hover:text-primary transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-shop-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-shop-600">
                  {footerConfig.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-shop-600">{footerConfig.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-shop-600">{footerConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-shop-500">
            <p>&copy; {new Date().getFullYear()} {footerConfig.storeName}. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
