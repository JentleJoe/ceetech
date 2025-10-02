
import { Facebook, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-playfair mb-4 text-light-tan">Ceetech Crafts</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Professional furniture manufacturing and interior design services in Benin City. Creating quality furniture and beautiful spaces since 2019.
            </p>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-light-tan mt-1">📍</span>
                <span>Factory: 2nd Entrance Ebvuabugun Sawmill Off Sapele Road, Benin City</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-light-tan">📞</span>
                <a href="tel:+2348165410110" className="hover:text-light-tan transition-colors">+234 816 541 0110</a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-light-tan">✉️</span>
                <a href="mailto:ceetechfurnitureandinteriors9@gmail.com" className="hover:text-light-tan transition-colors break-all">ceetechfurnitureandinteriors9@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-light-tan">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/furniture" className="text-gray-300 hover:text-light-tan transition-colors duration-300 text-sm">
                  Custom Furniture
                </a>
              </li>
              <li>
                <a href="/furniture" className="text-gray-300 hover:text-light-tan transition-colors duration-300 text-sm">
                  Kitchen Cabinets
                </a>
              </li>
              <li>
                <a href="/furniture" className="text-gray-300 hover:text-light-tan transition-colors duration-300 text-sm">
                  Office Workstations
                </a>
              </li>
              <li>
                <a href="/interiors" className="text-gray-300 hover:text-light-tan transition-colors duration-300 text-sm">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="/interiors" className="text-gray-300 hover:text-light-tan transition-colors duration-300 text-sm">
                  POP Ceiling
                </a>
              </li>
              <li>
                <a href="/interiors" className="text-gray-300 hover:text-light-tan transition-colors duration-300 text-sm">
                  Tiling & Flooring
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-light-tan">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-300 hover:text-light-tan transition-colors duration-300 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/furniture" className="text-gray-300 hover:text-light-tan transition-colors duration-300 text-sm">
                  Our Furniture
                </a>
              </li>
              <li>
                <a href="/interiors" className="text-gray-300 hover:text-light-tan transition-colors duration-300 text-sm">
                  Interior Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-light-tan transition-colors duration-300 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/academy" className="text-gray-300 hover:text-light-tan transition-colors duration-300 text-sm">
                  Academy
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-light-tan">Connect With Us</h4>
            
            {/* Business Hours */}
            <div className="mb-6">
              <h5 className="text-sm font-medium mb-3 text-gray-200">Business Hours</h5>
              <div className="space-y-1 text-xs text-gray-300">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-medium mb-3 text-gray-200">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/share/15y5a4wA4b/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-light-tan hover:text-dark-brown transition-all duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/ceetech_official?igsh=d3pkdHdxbHNma3pu" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-light-tan hover:text-dark-brown transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://tiktok.com/@ctechfurniture.interior" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-light-tan hover:text-dark-brown transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a href="https://wa.me/2348165410110" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-light-tan hover:text-dark-brown transition-all duration-300">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">&copy; 2025 Ceetech Crafts. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1">Crafting Quality Furniture & Interiors Since 2019</p>
            </div>
            
            <div className="flex items-center">
              <a 
                href="https://peakbrand.agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-light-tan/10 hover:bg-light-tan px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-light-tan group-hover:text-dark-brown font-medium text-sm">
                  Built by
                </span>
                <span className="text-white group-hover:text-dark-brown font-bold text-sm tracking-wide">
                  peakbrand.agency
                </span>
                <svg className="w-3 h-3 text-light-tan group-hover:text-dark-brown transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
