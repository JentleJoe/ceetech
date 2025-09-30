
import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react'

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
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.144-1.666-1.144-2.338C16.597 1.432 16.597.615 16.597 0h-3.278c0 .615 0 1.432 0 2c0 .672-.295 1.489-1.144 2.338a6.228 6.228 0 0 1-1.137.966c-.146.086-.295.172-.443.258-.738.43-1.48.86-1.48 1.635v1.29c.774 0 1.48-.258 2.095-.688.369-.258.664-.574.885-.966.148-.258.221-.516.221-.774h3.278c0 .258.073.516.221.774.221.392.516.708.885.966.615.43 1.321.688 2.095.688v-1.29c0-.775-.742-1.205-1.48-1.635z"/>
                </svg>
              </a>
              <a href="https://wa.me/2348165410110" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 text-gray-300 hover:text-light-tan cursor-pointer transition-colors duration-300" />
              </a>
              <a href="https://twitter.com/ceetech" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-light-tan cursor-pointer transition-colors duration-300" />
              </a>
              <a href="https://youtube.com/ceetech" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 text-gray-300 hover:text-light-tan cursor-pointer transition-colors duration-300" />
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
