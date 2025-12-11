
import { ArrowRight, Facebook, Instagram } from 'lucide-react'
import backgroundImg from '../../../assets/furniture-bg.jpg'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImg})`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-white font-playfair text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-fade-in-up">
            <span>Crafted</span>
            <br />
            <span>to</span>
            <span> Inspire</span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience the perfect harmony of traditional craftsmanship and contemporary elegance in every piece.
          </p>

          <a href="/contact" className="bg-ivory-gold text-jet-black px-8 py-4 rounded-lg font-medium tracking-wide hover:bg-rich-gold transition-all duration-300 transform hover:scale-105 animate-fade-in-up inline-block" style={{ animationDelay: '0.4s' }}>
            Get Started
          </a>

          {/* Social Media Links */}
          <div className="mt-8 flex items-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <span className="text-white/70 text-sm font-light">Follow our work:</span>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/share/15y5a4wA4b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 backdrop-blur-sm p-2.5 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300 group"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-4 h-4 text-white group-hover:text-charcoal" />
              </a>
              <a 
                href="https://www.instagram.com/ceetech_official?igsh=d3pkdHdxbHNma3pu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 backdrop-blur-sm p-2.5 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300 group"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-4 h-4 text-white group-hover:text-charcoal" />
              </a>
              <a 
                href="https://tiktok.com/@ctechfurniture.interior" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 backdrop-blur-sm p-2.5 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300 group"
                aria-label="Visit our TikTok page"
              >
                <svg className="w-4 h-4 text-white group-hover:text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/2349069616141" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 backdrop-blur-sm p-2.5 rounded-lg hover:bg-ivory-gold hover:text-charcoal transition-all duration-300 group"
                aria-label="Chat with us on WhatsApp"
              >
                <svg className="w-4 h-4 text-white group-hover:text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
