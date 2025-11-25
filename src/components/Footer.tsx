import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-blue-400">MM</span>
              <span className="text-3xl font-bold text-gray-300 ml-1">SVCS</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional maintenance services for commercial and residential properties across Texas. 
              Specializing in remodeling, landscaping, electrical, plumbing, and HVAC solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+18329817410" className="text-gray-300 hover:text-white transition-colors">
                  +1 (832) 981-7410
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@mmsvcs.com" className="text-gray-300 hover:text-white transition-colors">
                  info@mmsvcs.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <address className="text-gray-300 not-italic">
                  20333 State Highway 249, Suite 200<br />
                  Houston, TX 77070
                </address>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Commercial Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Residential Services</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Remodeling</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Landscaping</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Electrical</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Plumbing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">HVAC</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="tel:+18329817410" className="hover:text-white transition-colors">Emergency Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MM SVCS. All rights reserved. Professional maintenance services across Texas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;