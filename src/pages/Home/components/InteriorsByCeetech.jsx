import { ChevronLeft, ChevronRight } from 'lucide-react'

const InteriorsByCeetech = () => {
  const products = [
    {
      id: 1,
      name: 'Hendrik Stratos',
      price: 'From ₦285,000',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Living Room Lounge',
      price: 'From ₦320,000',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Bedding Table & Chairs',
      price: 'From ₦195,000',
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Homeware',
      price: 'From ₦85,000',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair text-dark-brown">
            Interiors by Ceetech.
          </h2>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300">
              <ChevronLeft className="w-5 h-5 text-dark-brown" />
            </button>
            <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300">
              <ChevronRight className="w-5 h-5 text-dark-brown" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-medium text-dark-brown mb-1 group-hover:text-warm-brown transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-xl font-semibold text-warm-brown">
                    {product.price}
                  </p>
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

export default InteriorsByCeetech