
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react'
import logoVertical from '../assets/logoVertical.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  // Determine if we're on a page that needs a solid header background
  const needsSolidBackground = location.pathname !== '/'

  const navigation = [
    { name: 'Collection', href: '#collection', type: 'scroll' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Products', href: '#products', type: 'scroll' },
    { name: 'Reviews', href: '#reviews', type: 'scroll' },
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
          <Link to="/" className="transition-opacity duration-300 hover:opacity-80">
            <img 
              src={logoVertical} 
              alt="Ceetech Crafts Logo" 
              className="h-16 w-auto"
            />
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

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${needsSolidBackground ? 'text-dark-brown hover:text-warm-brown' : 'text-white hover:text-light-tan'}`} />
            <User className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${needsSolidBackground ? 'text-dark-brown hover:text-warm-brown' : 'text-white hover:text-light-tan'}`} />
            <ShoppingBag className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${needsSolidBackground ? 'text-dark-brown hover:text-warm-brown' : 'text-white hover:text-light-tan'}`} />
            
            {/* Mobile menu button */}
            <button
              className={`lg:hidden ${needsSolidBackground ? 'text-dark-brown' : 'text-white'}`}
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
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`transition-colors duration-300 text-sm font-medium tracking-wide text-left ${needsSolidBackground ? 'text-dark-brown hover:text-warm-brown' : 'text-white hover:text-light-tan'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
