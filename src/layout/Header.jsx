
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  // Determine if we're on a page that needs a solid header background
  const needsSolidBackground = location.pathname !== '/'

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
    <header className={`absolute top-0 left-0 right-0 z-50 ${needsSolidBackground ? 'bg-white shadow-lg' : 'bg-transparent'} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`font-playfair text-2xl font-semibold tracking-wide transition-colors duration-300 ${needsSolidBackground ? 'text-dark-brown hover:text-warm-brown' : 'text-white hover:text-light-tan'}`}>
            Ceetech
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`transition-colors duration-300 text-sm font-medium tracking-wide cursor-pointer ${needsSolidBackground ? 'text-dark-brown hover:text-warm-brown' : 'text-white hover:text-light-tan'}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right side - Contact Us button for desktop, hamburger for mobile */}
          <div className="flex items-center">
            {/* Contact Us button - Desktop only */}
            <Link
              to="/contact"
              className={`hidden lg:block px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                needsSolidBackground 
                  ? 'bg-warm-brown text-cream hover:bg-dark-brown' 
                  : 'bg-warm-brown text-cream hover:bg-light-tan hover:text-dark-brown'
              }`}
            >
              Contact Us
            </Link>
            
            {/* Mobile menu button */}
            <button
              className={`lg:hidden ml-4 ${
                needsSolidBackground ? 'text-dark-brown' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden mt-6 py-4 backdrop-blur-sm rounded-lg animate-fade-in ${needsSolidBackground ? 'bg-white shadow-lg border' : 'bg-black/80'}`}>
            <div className="flex flex-col space-y-4 px-6">
              {mobileNavigation.map((item) => {
                // Render Contact as a button, others as regular nav items
                if (item.name === 'Contact') {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center ${
                        needsSolidBackground 
                          ? 'bg-warm-brown text-cream hover:bg-dark-brown' 
                          : 'bg-warm-brown text-cream hover:bg-light-tan hover:text-dark-brown'
                      }`}
                    >
                      {item.name} Us
                    </button>
                  )
                }
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`transition-colors duration-300 text-sm font-medium tracking-wide text-left ${needsSolidBackground ? 'text-dark-brown hover:text-warm-brown' : 'text-white hover:text-light-tan'}`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
