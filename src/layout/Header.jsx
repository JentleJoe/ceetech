
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
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
              className="h-12 w-auto"
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
              className="lg:hidden ml-4 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 py-4 backdrop-blur-sm rounded-lg relative z-[110] bg-black/90 shadow-2xl">
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
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
