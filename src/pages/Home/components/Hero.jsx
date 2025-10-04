
import { ArrowRight } from 'lucide-react'
import backgroundImg from '../../../assets/background.jpg'

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
            <span>Where</span>
            <br />
            <span>Craft Meets</span>
            <span> Class</span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience the perfect harmony of traditional craftsmanship and contemporary elegance in every piece.
          </p>

          <button className="bg-white text-dark-brown px-8 py-4 rounded-lg font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            View Store
          </button>
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
