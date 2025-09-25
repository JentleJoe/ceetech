import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { Home, Briefcase, Store, Users, Palette, Lightbulb } from 'lucide-react'

const Interiors = () => {
  const interiorServices = [
    {
      icon: Home,
      title: "Residential Interiors",
      description: "Transform your home with our comprehensive residential interior design services",
      services: [
        "Living Room Design",
        "Bedroom Makeovers",
        "Kitchen Interiors",
        "Bathroom Design",
        "Dining Room Setup",
        "Home Office Design"
      ],
      features: ["Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"]
    },
    {
      icon: Briefcase,
      title: "Commercial Interiors",
      description: "Create professional and productive work environments with our commercial design expertise",
      services: [
        "Office Design",
        "Reception Areas",
        "Conference Rooms",
        "Co-working Spaces",
        "Executive Offices",
        "Break Room Design"
      ],
      features: ["Ergonomic Solutions", "Brand Integration", "Workflow Optimization", "Modern Aesthetics"]
    },
    {
      icon: Store,
      title: "Retail Interiors",
      description: "Design retail spaces that enhance customer experience and drive sales",
      services: [
        "Store Layout Design",
        "Display Solutions",
        "Checkout Areas",
        "Storage Spaces",
        "Window Displays",
        "Branding Integration"
      ],
      features: ["Customer Flow", "Visual Merchandising", "Brand Consistency", "Sales Optimization"]
    }
  ]

  const designProcess = [
    {
      step: "1",
      title: "Consultation",
      description: "We start with an in-depth consultation to understand your vision, needs, and budget",
      icon: Users
    },
    {
      step: "2", 
      title: "Space Analysis",
      description: "Our team conducts a thorough analysis of your space, taking measurements and photos",
      icon: Home
    },
    {
      step: "3",
      title: "Design Development",
      description: "We create detailed design concepts with 3D renderings and material specifications",
      icon: Palette
    },
    {
      step: "4",
      title: "Implementation",
      description: "Our expert team brings your design to life with professional installation and styling",
      icon: Lightbulb
    }
  ]

  const portfolioProjects = [
    {
      title: "Modern Executive Office",
      category: "Commercial",
      description: "A sleek and professional workspace designed for productivity and client meetings",
      image: "/placeholder.svg"
    },
    {
      title: "Luxury Family Home",
      category: "Residential",
      description: "Elegant family living spaces that balance comfort with sophisticated design",
      image: "/placeholder.svg"
    },
    {
      title: "Boutique Retail Store",
      category: "Retail",
      description: "An inviting retail environment designed to enhance the shopping experience",
      image: "/placeholder.svg"
    },
    {
      title: "Contemporary Living Room",
      category: "Residential",
      description: "A stylish living space combining modern aesthetics with cozy comfort",
      image: "/placeholder.svg"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair text-dark-brown mb-6">
              Interior <span className="text-warm-brown">Design</span>
            </h1>
            <p className="text-xl text-dark-brown/80 leading-relaxed mb-8">
              Transform your spaces with our expert interior design services that blend functionality with aesthetic excellence
            </p>
            <button className="bg-warm-brown text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-dark-brown transition-colors duration-200 mr-4">
              Start Your Project
            </button>
            <button className="border-2 border-warm-brown text-warm-brown px-8 py-3 rounded-lg text-lg font-semibold hover:bg-warm-brown hover:text-cream transition-colors duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Interior Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown text-center mb-12">
              Our Interior Design Services
            </h2>
            <div className="space-y-12">
              {interiorServices.map((service, index) => (
                <div key={index} className="bg-soft-beige rounded-lg p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="text-center lg:text-left">
                      <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                        <service.icon className="w-8 h-8 text-warm-brown" />
                      </div>
                      <h3 className="text-2xl font-playfair text-dark-brown mb-4">{service.title}</h3>
                      <p className="text-dark-brown/80 mb-6">{service.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-dark-brown mb-2">Key Features:</h4>
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-dark-brown/70">
                            <span className="w-2 h-2 bg-warm-brown rounded-full mr-2"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-dark-brown mb-4">Services Include:</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.services.map((item, itemIndex) => (
                          <div key={itemIndex} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center">
                              <span className="w-3 h-3 bg-warm-brown rounded-full mr-3"></span>
                              <span className="font-medium text-dark-brown">{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown text-center mb-12">
              Our Design Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-warm-brown text-cream w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="w-8 h-8 text-warm-brown" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-brown mb-3">{process.title}</h3>
                  <p className="text-dark-brown/80">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown text-center mb-12">
              Recent Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-warm-brown text-cream px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-dark-brown mb-2">{project.title}</h3>
                    <p className="text-dark-brown/80 text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="bg-warm-brown text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-dark-brown transition-colors duration-200">
                View Full Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-warm-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-cream mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-cream/90 mb-8">
              Let our expert interior designers bring your vision to life with our comprehensive design services
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-cream bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">Free Consultation</h3>
                <p className="text-cream/80 text-sm">Book your complimentary design consultation</p>
              </div>
              <div className="text-center">
                <div className="bg-cream bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">3D Visualization</h3>
                <p className="text-cream/80 text-sm">See your space before we begin work</p>
              </div>
              <div className="text-center">
                <div className="bg-cream bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">Full Service</h3>
                <p className="text-cream/80 text-sm">From concept to completion, we handle everything</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cream text-warm-brown px-8 py-3 rounded-lg text-lg font-semibold hover:bg-soft-beige transition-colors duration-200">
                Schedule Consultation
              </button>
              <button className="border-2 border-cream text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cream hover:text-warm-brown transition-colors duration-200">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Interiors