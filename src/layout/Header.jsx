
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Facebook, Instagram } from 'lucide-react'
import logoVertical from '../assets/logoVertical.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  // Determine if we're on a page that needs a solid header background
  const needsSolidBackground = location.pathname !== '/'
  
  // Function to check if a navigation item is active
  const isActiveRoute = (href) => {
    return location.pathname === href
  }

  const navigation = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About Us', href: '/about', type: 'route' },
    { name: 'Furniture', href: '/furniture', type: 'route' },
    { name: 'Interiors', href: '/interiors', type: 'route' },
    { name: 'Academy', href: '/academy', type: 'route' }
  ]

  const mobileNavigation = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About Us', href: '/about', type: 'route' },
    { name: 'Furniture', href: '/furniture', type: 'route' },
    { name: 'Interiors', href: '/interiors', type: 'route' },
    { name: 'Academy', href: '/academy', type: 'route' },
    { name: 'Contact', href: '/contact', type: 'route' }
  ]

  const handleNavigation = (item) => {
    if (item.type === 'route') {
      navigate(item.href)
    } else if (item.type === 'scroll') {
      // If we're not on the home page, navigate to home first then scroll
      if (location.pathname !== '/') {
        navigate('/')
        // Wait for navigation to complete then scroll
        setTimeout(() => {
          const element = document.querySelector(item.href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-[100] bg-transparent transition-all duration-300">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="transition-opacity duration-300 hover:opacity-80">
            <img 
              src={logoVertical} 
              alt="Ceetech Crafts Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = isActiveRoute(item.href)
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`transition-all duration-300 text-sm font-medium tracking-wide cursor-pointer relative ${
                    isActive 
                      ? 'text-ivory-gold font-semibold' 
                      : 'text-white hover:text-ivory-gold'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-ivory-gold rounded-full"></div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Right side - Contact Us button for desktop, hamburger for mobile */}
          <div className="flex items-center">
            {/* Contact Us button - Desktop only */}
            <Link
              to="/contact"
              className="hidden lg:block px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-ivory-gold text-charcoal hover:bg-opacity-90 hover:shadow-lg"
            >
              Contact Us
            </Link>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden ml-4 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden mt-6 py-4 backdrop-blur-sm rounded-lg relative z-[110] bg-black/90 shadow-2xl">
            <div className="flex flex-col space-y-4 px-6">
              {mobileNavigation.map((item) => {
                // Render Contact as a button, others as regular nav items
                if (item.name === 'Contact') {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item)}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center bg-ivory-gold text-charcoal hover:bg-opacity-90 hover:shadow-lg"
                    >
                      {item.name} Us
                    </button>
                  )
                }
                
                const isActive = isActiveRoute(item.href)
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`transition-all duration-300 text-sm font-medium tracking-wide text-left px-3 py-2 rounded-lg ${
                      isActive 
                        ? 'text-ivory-gold bg-ivory-gold/10 border-l-4 border-ivory-gold font-semibold' 
                        : 'text-white hover:text-ivory-gold hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
              
              {/* Social Media Icons */}
              <div className="pt-4 mt-2 border-t border-white/10">
                <h5 className="text-xs font-medium mb-3 text-ivory-gold/80 px-3">Follow Us</h5>
                <div className="flex justify-center space-x-4 text-white">
                  <a 
                    href="https://www.facebook.com/share/15y5a4wA4b/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/20 border border-white/10 p-3 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300 active:scale-95 text-white"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://www.instagram.com/ceetech_official?igsh=d3pkdHdxbHNma3pu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/20 border border-white/10 p-3 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300 active:scale-95 text-white"
                    aria-label="Visit our Instagram page"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://tiktok.com/@ctechfurniture.interior" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/20 border border-white/10 p-3 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300 active:scale-95 text-white"
                    aria-label="Visit our TikTok page"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/2348138461999" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/20 border border-white/10 p-3 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300 active:scale-95 text-white"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
