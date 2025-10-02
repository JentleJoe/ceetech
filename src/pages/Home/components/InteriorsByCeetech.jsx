import { ChevronLeft, ChevronRight, Home, Palette, Hammer, Grid } from 'lucide-react'

const InteriorsByCeetech = () => {
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

  return (
    <section className="py-20 bg-soft-beige">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair text-dark-brown">
            Ceetech Crafts Interiors
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

        {/* Interior Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interiorServices.map((service, index) => (
            <div
              key={service.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Service Icon Overlay */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <service.icon className="w-6 h-6 text-warm-brown" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-medium text-dark-brown mb-1 group-hover:text-warm-brown transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Services Link */}
        <div className="text-center mt-12">
          <a
            href="#interiors"
            className="inline-flex items-center text-dark-brown hover:text-warm-brown font-medium tracking-wide transition-colors duration-300"
          >
            View All Interior Services
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default InteriorsByCeetech