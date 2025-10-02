import { ChevronLeft, ChevronRight } from 'lucide-react'

const FurnituresByCeetech = () => {
  const furnitureProducts = [
    {
      id: 1,
      name: 'Custom Living Room Sets',
      description: 'Elegant and comfortable living room furniture tailored to your space',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Kitchen Cabinet Solutions',
      description: 'Modern kitchen cabinets with superior storage and functionality',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Office Workstations',
      description: 'Professional office furniture designed for productivity',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Bedroom Wardrobes',
      description: 'Spacious wardrobes with custom organization solutions',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair text-dark-brown">
            Ceetech Crafts Furnitures
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

        {/* Furniture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {furnitureProducts.map((product, index) => (
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
                  <p className="text-sm text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Furniture Link */}
        <div className="text-center mt-12">
          <a
            href="#furniture"
            className="inline-flex items-center text-dark-brown hover:text-warm-brown font-medium tracking-wide transition-colors duration-300"
          >
            View All Furniture
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FurnituresByCeetech