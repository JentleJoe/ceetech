
import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import logoHorizontal from '../assets/logoHorizontal.png'

const Footer = () => {
  return (
    <footer className="bg-jet-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img 
                src={logoHorizontal} 
                alt="Ceetech Crafts Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Professional furniture manufacturing and interior design services in Benin City. Creating quality furniture and beautiful spaces since 2019.
            </p>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-ivory-gold mt-1">📍</span>
                <span>Factory: 2nd Entrance Evbuabogun sawmill opposite ekae market, Sapele Rd, Benin City</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-ivory-gold">📞</span>
                <a href="tel:+2349069616141" className="hover:text-ivory-gold transition-colors">+234 906 961 6141</a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-ivory-gold">✉️</span>
                <a href="mailto:ceetechfurnitureandinteriors9@gmail.com" className="hover:text-ivory-gold transition-colors break-all">ceetechfurnitureandinteriors9@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-ivory-gold">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/furniture" className="text-gray-300 hover:text-ivory-gold transition-colors duration-300 text-sm">
                  Custom Furniture
                </a>
              </li>
              <li>
                <a href="/furniture" className="text-gray-300 hover:text-ivory-gold transition-colors duration-300 text-sm">
                  Kitchen Cabinets
                </a>
              </li>
              <li>
                <a href="/furniture" className="text-gray-300 hover:text-ivory-gold transition-colors duration-300 text-sm">
                  Office Workstations
                </a>
              </li>
              <li>
                <a href="/interiors" className="text-gray-300 hover:text-ivory-gold transition-colors duration-300 text-sm">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="/interiors" className="text-gray-300 hover:text-ivory-gold transition-colors duration-300 text-sm">
                  POP Ceiling
                </a>
              </li>
              <li>
                <a href="/interiors" className="text-gray-300 hover:text-ivory-gold transition-colors duration-300 text-sm">
                  Tiling & Flooring
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-ivory-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-300 hover:text-ivory-gold transition-colors duration-300 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/furniture" className="text-gray-300 hover:text-ivory-gold transition-colors duration-300 text-sm">
                  Our Furniture
                </a>
              </li>
              <li>
                <a href="/interiors" className="text-gray-300 hover:text-ivory-gold transition-colors duration-300 text-sm">
                  Interior Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-ivory-gold transition-colors duration-300 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/academy" className="text-gray-300 hover:text-ivory-gold transition-colors duration-300 text-sm">
                  Academy
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-ivory-gold">Connect With Us</h4>
            
            {/* Business Hours */}
            <div className="mb-6">
              <h5 className="text-sm font-medium mb-3 text-ivory-gold/80">Business Hours</h5>
              <div className="space-y-1 text-xs text-gray-300">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-medium mb-3 text-ivory-gold/80">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/share/15y5a4wA4b/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/ceetech_official?igsh=d3pkdHdxbHNma3pu" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://tiktok.com/@ctechfurniture.interior" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a href="https://wa.me/2349069616141" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
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
                className="group flex items-center space-x-2 bg-ivory-gold/10 hover:bg-ivory-gold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-ivory-gold group-hover:text-charcoal font-medium text-sm">
                  Built by
                </span>
                <span className="text-white group-hover:text-charcoal font-bold text-sm tracking-wide">
                  peakbrand.agency
                </span>
                <svg className="w-3 h-3 text-ivory-gold group-hover:text-charcoal transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
