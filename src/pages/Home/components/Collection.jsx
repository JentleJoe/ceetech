
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Collection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const products = [
    {
      id: 1,
      name: 'Sideboard Tables & Coffee Tables',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Tables'
    },
    {
      id: 2,
      name: 'Beds & Mattresses',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Bedroom'
    },
    {
      id: 3,
      name: 'Dining Table & Chairs',
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Dining'
    },
    {
      id: 4,
      name: 'Armchairs',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Seating'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section id="collection" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair text-dark-brown mb-2">Explore</h2>
            <h3 className="text-2xl md:text-3xl font-playfair text-warm-brown">The Collection</h3>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5 text-dark-brown" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 text-dark-brown" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-1 font-medium tracking-wide">
                    {product.category}
                  </p>
                  <h4 className="text-lg font-medium text-dark-brown group-hover:text-warm-brown transition-colors duration-300">
                    {product.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Products Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-dark-brown hover:text-warm-brown font-medium tracking-wide transition-colors duration-300"
          >
            View Products
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Collection
