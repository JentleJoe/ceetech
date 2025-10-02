import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, Home, Palette, Hammer, Grid } from 'lucide-react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const InteriorsByCeetech = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const interiorServices = [
    {
      id: 1,
      name: 'Complete Interior Design',
      description: 'Full interior transformation from concept to completion',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'POP Ceiling Installation',
      description: 'Modern ceiling designs with expert installation',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Consultation & Design',
      description: 'Professional design consultation and space planning',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Tiling & Flooring',
      description: 'Expert tiling and modern flooring solutions',
      icon: Grid,
      image: 'https://images.unsplash.com/photo-1631545806609-73a2ca64d4e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }

  return (
    <section className="py-20 bg-soft-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-dark-brown mb-4">
            Ceetech Crafts Interiors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional interior design and renovation services to transform your spaces
          </p>
        </div>

        {/* Interactive Interior Services Carousel */}
        <div className="interiors-carousel relative overflow-hidden">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3500}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            arrows={true}
            showDots={true}
            pauseOnHover={true}
            swipeable={true}
            draggable={true}
          >
            {interiorServices.map((service, index) => (
              <div
                key={service.id}
                className="mx-2 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 h-full">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Service Icon Overlay */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <service.icon className="w-6 h-6 text-warm-brown" />
                    </div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm mb-2">{service.description}</p>
                      <div className="flex items-center text-xs">
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-warm-brown font-semibold tracking-wide uppercase">
                        Interior Service
                      </span>
                      {hoveredService === service.id && (
                        <div className="w-2 h-2 bg-warm-brown rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <h4 className="text-base font-semibold text-dark-brown group-hover:text-warm-brown transition-colors duration-300 line-clamp-2">
                      {service.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-xl font-playfair text-dark-brown mb-3">Ready for a Makeover?</h3>
            <p className="text-gray-600 mb-6 text-sm">Transform your space with our professional interior services</p>
            <a
              href="/interiors"
              className="inline-flex items-center bg-warm-brown text-white px-6 py-3 rounded-lg font-medium tracking-wide hover:bg-dark-brown transition-all duration-300 transform hover:scale-105"
            >
              View All Interior Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteriorsByCeetech