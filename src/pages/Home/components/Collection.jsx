
import { useState, useRef, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import CarouselModule from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import OptimizedPicture from '../../../components/OptimizedPicture'

const Carousel = CarouselModule?.default ?? CarouselModule

// Import images
import officeFurnitureAvif from '../../../assets/office-furniture.jpg?w=240;320;420;560;736;900;1200&format=avif&as=srcset&withoutEnlargement'
import officeFurnitureWebp from '../../../assets/office-furniture.jpg?w=240;320;420;560;736;900;1200&format=webp&as=srcset&withoutEnlargement'
import officeFurnitureJpgSrcSet from '../../../assets/office-furniture.jpg?w=240;320;420;560;736;900;1200&format=jpg&as=srcset&withoutEnlargement'
import officeFurnitureJpg from '../../../assets/office-furniture.jpg?w=560&format=jpg&withoutEnlargement'
import interiorAvif from '../../../assets/interiror.jpg?w=240;320;420;560;736;900;1200&format=avif&as=srcset&withoutEnlargement'
import interiorWebp from '../../../assets/interiror.jpg?w=240;320;420;560;736;900;1200&format=webp&as=srcset&withoutEnlargement'
import interiorJpgSrcSet from '../../../assets/interiror.jpg?w=240;320;420;560;736;900;1200&format=jpg&as=srcset&withoutEnlargement'
import interiorJpg from '../../../assets/interiror.jpg?w=560&format=jpg&withoutEnlargement'
import furnitureApprenticeAvif from '../../../assets/furniture-apprentice.jpg?w=240;320;420;560;736;900;1200&format=avif&as=srcset&withoutEnlargement'
import furnitureApprenticeWebp from '../../../assets/furniture-apprentice.jpg?w=240;320;420;560;736;900;1200&format=webp&as=srcset&withoutEnlargement'
import furnitureApprenticeJpgSrcSet from '../../../assets/furniture-apprentice.jpg?w=240;320;420;560;736;900;1200&format=jpg&as=srcset&withoutEnlargement'
import furnitureApprenticeJpg from '../../../assets/furniture-apprentice.jpg?w=560&format=jpg&withoutEnlargement'
import popCeilingAvif from '../../../assets/pop-ceiling.jpg?w=240;320;420;560;736;900;1200&format=avif&as=srcset&withoutEnlargement'
import popCeilingWebp from '../../../assets/pop-ceiling.jpg?w=240;320;420;560;736;900;1200&format=webp&as=srcset&withoutEnlargement'
import popCeilingJpgSrcSet from '../../../assets/pop-ceiling.jpg?w=240;320;420;560;736;900;1200&format=jpg&as=srcset&withoutEnlargement'
import popCeilingJpg from '../../../assets/pop-ceiling.jpg?w=560&format=jpg&withoutEnlargement'
import stampedeAvif from '../../../assets/stampede.jpg?w=240;320;420;560;736;900;1200&format=avif&as=srcset&withoutEnlargement'
import stampedeWebp from '../../../assets/stampede.jpg?w=240;320;420;560;736;900;1200&format=webp&as=srcset&withoutEnlargement'
import stampedeJpgSrcSet from '../../../assets/stampede.jpg?w=240;320;420;560;736;900;1200&format=jpg&as=srcset&withoutEnlargement'
import stampedeJpg from '../../../assets/stampede.jpg?w=560&format=jpg&withoutEnlargement'
import kitchenCabinetAvif from '../../../assets/kitchen-cabinet.jpg?w=240;320;420;560;736;900;1200&format=avif&as=srcset&withoutEnlargement'
import kitchenCabinetWebp from '../../../assets/kitchen-cabinet.jpg?w=240;320;420;560;736;900;1200&format=webp&as=srcset&withoutEnlargement'
import kitchenCabinetJpgSrcSet from '../../../assets/kitchen-cabinet.jpg?w=240;320;420;560;736;900;1200&format=jpg&as=srcset&withoutEnlargement'
import kitchenCabinetJpg from '../../../assets/kitchen-cabinet.jpg?w=560&format=jpg&withoutEnlargement'

const CAROUSEL_IMAGE_SIZES = '(max-width: 464px) 92vw, (max-width: 1024px) 46vw, (max-width: 1200px) 30vw, 23vw'

const officeFurnitureImage = {
  avifSrcSet: officeFurnitureAvif,
  webpSrcSet: officeFurnitureWebp,
  fallbackSrcSet: officeFurnitureJpgSrcSet,
  fallbackSrc: officeFurnitureJpg,
}

const kitchenCabinetImage = {
  avifSrcSet: kitchenCabinetAvif,
  webpSrcSet: kitchenCabinetWebp,
  fallbackSrcSet: kitchenCabinetJpgSrcSet,
  fallbackSrc: kitchenCabinetJpg,
}

const interiorImage = {
  avifSrcSet: interiorAvif,
  webpSrcSet: interiorWebp,
  fallbackSrcSet: interiorJpgSrcSet,
  fallbackSrc: interiorJpg,
}

const furnitureApprenticeImage = {
  avifSrcSet: furnitureApprenticeAvif,
  webpSrcSet: furnitureApprenticeWebp,
  fallbackSrcSet: furnitureApprenticeJpgSrcSet,
  fallbackSrc: furnitureApprenticeJpg,
}

const popCeilingImage = {
  avifSrcSet: popCeilingAvif,
  webpSrcSet: popCeilingWebp,
  fallbackSrcSet: popCeilingJpgSrcSet,
  fallbackSrc: popCeilingJpg,
}

const stampedeImage = {
  avifSrcSet: stampedeAvif,
  webpSrcSet: stampedeWebp,
  fallbackSrcSet: stampedeJpgSrcSet,
  fallbackSrc: stampedeJpg,
}

const Collection = () => {
  const [hoveredService, setHoveredService] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Only observe once
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      id: 1,
      name: 'Commercial Furniture Solutions',
      description: 'Professional office, school & healthcare furniture designed for durability and productivity',
      image: officeFurnitureImage,
      category: 'Furniture',
      link: '/furniture'
    },
    {
      id: 2,
      name: 'Residential Furniture & Kitchens',
      description: 'Custom home furniture and kitchen solutions tailored to your lifestyle',
      image: kitchenCabinetImage,
      category: 'Furniture',
      link: '/furniture'
    },
    {
      id: 3,
      name: 'Interior Design & Renovation',
      description: 'Complete interior transformation with modern design and expert craftsmanship',
      image: interiorImage,
      category: 'Interiors',
      link: '/interiors'
    },
    {
      id: 4,
      name: 'Professional Training Academy',
      description: 'Learn furniture design and interior skills from industry experts',
      image: furnitureApprenticeImage,
      category: 'Academy',
      link: '/academy'
    },
    {
      id: 5,
      name: 'POP Ceiling Installation',
      description: 'Modern ceiling designs with professional installation and finishing',
      image: popCeilingImage,
      category: 'Interiors',
      link: '/interiors'
    },
    {
      id: 6,
      name: 'Tiling & Flooring Services',
      description: 'Expert tiling and modern flooring solutions for all spaces',
      image: stampedeImage,
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
    <section ref={sectionRef} id="collection" className="py-20 bg-charcoal">
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
            autoPlay={isVisible}
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
                    <OptimizedPicture
                      alt={service.name}
                      avifSrcSet={service.image.avifSrcSet}
                      webpSrcSet={service.image.webpSrcSet}
                      fallbackSrcSet={service.image.fallbackSrcSet}
                      fallbackSrc={service.image.fallbackSrc}
                      sizes={CAROUSEL_IMAGE_SIZES}
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
                      <span className="text-xs text-charcoal/80 font-semibold tracking-wide uppercase bg-ivory-gold/20 px-2 py-1 rounded">
                        {service.category}
                      </span>
                      {hoveredService === service.id && (
                        <div className="w-2 h-2 bg-charcoal rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <h4 className="text-base font-semibold text-charcoal group-hover:text-charcoal/90 transition-colors duration-300 line-clamp-2">
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
