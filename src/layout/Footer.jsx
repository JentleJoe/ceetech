
import { Facebook, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-playfair mb-4">Stay Inspired. Stay Connected.</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Be the first to discover our latest collections, design insights, and exclusive offers. Join our community of design enthusiasts and craftmanship lovers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-light-tan transition-colors duration-300 placeholder:text-gray-400"
              />
              <button className="px-6 py-3 bg-light-tan text-dark-brown rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Collections', 'Showroom', 'Contact', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-light-tan transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Care</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guides', 'Care Instructions', 'Warranty', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-light-tan transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-8 mb-6 md:mb-0">
            <div className="text-2xl font-playfair font-semibold">Ceetech Crafts</div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/15y5a4wA4b/" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-gray-300 hover:text-light-tan cursor-pointer transition-colors duration-300" />
              </a>
              <a href="https://www.instagram.com/ceetech_official?igsh=d3pkdHdxbHNma3pu" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-300 hover:text-light-tan cursor-pointer transition-colors duration-300" />
              </a>
              <a href="https://tiktok.com/@ctechfurniture.interior" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-gray-300 hover:text-light-tan cursor-pointer transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-400 text-sm">
            <p>&copy; 2024 Ceetech Crafts. All rights reserved.</p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <a key={link} href="#" className="hover:text-light-tan transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
