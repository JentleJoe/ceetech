import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Import images
import residentialFurnitureImg from '../../../assets/residential-furniture.jpg'
import healthcareCabinetsImg from '../../../assets/healthcare-cabinets.png'
import officeFurnitureImg from '../../../assets/office-furniture.jpg'
import workmanImg from '../../../assets/workman.jpg'
import tvConsoleImg from '../../../assets/tv_console.jpg'
import kitchenCabinetImg from '../../../assets/kitchen-cabinet.jpg'
import wardrobeImg from '../../../assets/wardrobe.jpeg'

const FurnituresByCeetech = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const furnitureProducts = [
    {
      id: 1,
      name: 'Custom Living Room Sets',
      description: 'Elegant and comfortable living room furniture tailored to your space',
      image: residentialFurnitureImg
    },
    {
      id: 2,
      name: 'Kitchen Cabinet Solutions',
      description: 'Modern kitchen cabinets with superior storage and functionality',
      image: kitchenCabinetImg
    },
    {
      id: 3,
      name: 'Office Workstations',
      description: 'Professional office furniture designed for productivity',
      image: officeFurnitureImg
    },
    {
      id: 4,
      name: 'Bedroom Wardrobes',
      description: 'Spacious wardrobes with custom organization solutions',
      image: wardrobeImg
    },
    {
      id: 5,
      name: 'TV Console Units',
      description: 'Stylish TV stands with integrated storage and modern cable management',
      image: tvConsoleImg
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-dark-brown mb-4">
            Ceetech Crafts Furnitures
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted furniture collection designed to enhance your living spaces
          </p>
        </div>

        {/* Interactive Furniture Carousel */}
        <div className="furniture-carousel relative overflow-hidden">
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
            {furnitureProducts.map((product, index) => (
              <div
                key={product.id}
                className="mx-2 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 h-full">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm mb-2">{product.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-warm-brown font-semibold tracking-wide uppercase">
                        Furniture
                      </span>
                      {hoveredProduct === product.id && (
                        <div className="w-2 h-2 bg-ivory-gold rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <h4 className="text-base font-semibold text-dark-brown group-hover:text-warm-brown transition-colors duration-300 line-clamp-2">
                      {product.name}
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
            <h3 className="text-xl font-playfair text-ivory-gold mb-3">Need Custom Furniture?</h3>
            <p className="text-white/80 mb-6 text-sm">Let us create something unique for your space</p>
            <a
              href="/furniture"
              className="inline-flex items-center bg-ivory-gold text-charcoal px-6 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Furniture
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FurnituresByCeetech