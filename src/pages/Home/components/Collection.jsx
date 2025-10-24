
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Import images
import officeFurnitureImg from '../../../assets/office-furniture.jpg'
import residentialFurnitureImg from '../../../assets/residential-furniture.jpg'
import interiorImg from '../../../assets/interiror.jpg'
import furnitureApprenticeImg from '../../../assets/furniture-apprentice.jpg'
import popCeilingImg from '../../../assets/pop-ceiling.jpg'
import stampedeImg from '../../../assets/stampede.jpg'
import kitchenCabinetImg from '../../../assets/kitchen-cabinet.jpg'

const Collection = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 1,
      name: 'Commercial Furniture Solutions',
      description: 'Professional office, school & healthcare furniture designed for durability and productivity',
      image: officeFurnitureImg,
      category: 'Furniture',
      link: '/furniture'
    },
    {
      id: 2,
      name: 'Residential Furniture & Kitchens',
      description: 'Custom home furniture and kitchen solutions tailored to your lifestyle',
      image: kitchenCabinetImg,
      category: 'Furniture',
      link: '/furniture'
    },
    {
      id: 3,
      name: 'Interior Design & Renovation',
      description: 'Complete interior transformation with modern design and expert craftsmanship',
      image: interiorImg,
      category: 'Interiors',
      link: '/interiors'
    },
    {
      id: 4,
      name: 'Professional Training Academy',
      description: 'Learn furniture design and interior skills from industry experts',
      image: furnitureApprenticeImg,
      category: 'Academy',
      link: '/academy'
    },
    {
      id: 5,
      name: 'POP Ceiling Installation',
      description: 'Modern ceiling designs with professional installation and finishing',
      image: popCeilingImg,
      category: 'Interiors',
      link: '/interiors'
    },
    {
      id: 6,
      name: 'Tiling & Flooring Services',
      description: 'Expert tiling and modern flooring solutions for all spaces',
      image: stampedeImg,
      category: 'Interiors',
      link: '/interiors'
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
    <section id="collection" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair text-white mb-4">Our</h2>
          <h3 className="text-2xl md:text-4xl font-playfair text-ivory-gold mb-6">Services</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of furniture and interior services designed to transform your spaces
          </p>
        </div>

        {/* Interactive Carousel */}
        <div className="services-carousel relative overflow-hidden">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
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
            {services.map((service, index) => (
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
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm mb-2">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-ivory-gold font-semibold tracking-wide uppercase">
                        {service.category}
                      </span>
                      {hoveredService === service.id && (
                        <div className="w-2 h-2 bg-ivory-gold rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <h4 className="text-base font-semibold text-charcoal group-hover:text-ivory-gold transition-colors duration-300 line-clamp-2">
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
          <div className="bg-charcoal/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md mx-auto border border-ivory-gold/20">
            <h3 className="text-xl font-playfair text-ivory-gold mb-3">Ready to Get Started?</h3>
            <p className="text-white/80 mb-6 text-sm">Explore our complete service portfolio</p>
            <a
              href="/about"
              className="inline-flex items-center bg-ivory-gold text-charcoal px-6 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection
