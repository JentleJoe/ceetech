import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { ArrowRight, CheckCircle, Users, Building, Home, Eye, Wrench, Truck } from 'lucide-react'

const Furniture = () => {
  const commercialFurniture = [
    {
      title: "Office Furniture",
      description: "Complete office solutions designed for productivity and comfort",
      icon: "🏢",
      services: [
        "Executive Desks & Workstations",
        "Ergonomic Office Chairs",
        "Conference & Meeting Tables",
        "Reception Furniture",
        "Filing Cabinets & Storage",
        "Office Partitions & Screens"
      ]
    },
    {
      title: "School Furniture",
      description: "Durable and safe furniture designed for educational environments",
      icon: "🎓",
      services: [
        "Student Desks & Chairs",
        "Teacher's Furniture",
        "Library Furniture",
        "Laboratory Tables & Stools",
        "Classroom Storage Solutions",
        "Auditorium & Hall Seating"
      ]
    },
    {
      title: "Hospitality Furniture",
      description: "Elegant furniture for hotels, restaurants, and hospitality venues",
      icon: "🏨",
      services: [
        "Restaurant Tables & Chairs",
        "Bar Furniture & Counter Stools",
        "Hotel Room Furniture",
        "Lobby & Lounge Seating",
        "Reception & Concierge Desks",
        "Outdoor Patio Furniture"
      ]
    },
    {
      title: "Healthcare Furniture",
      description: "Specialized furniture for hospitals, clinics, and medical facilities",
      icon: "🏥",
      services: [
        "Patient Room Furniture",
        "Waiting Area Seating",
        "Medical Storage Cabinets",
        "Examination Tables",
        "Nurse Station Furniture",
        "Laboratory Workbenches"
      ]
    }
  ]

  const householdFurniture = [
    {
      title: "Kitchen Cabinets",
      description: "Custom kitchen solutions with modern designs and premium finishes",
      icon: "🍽️",
      services: [
        "Upper & Base Cabinets",
        "Kitchen Islands",
        "Pantry Solutions",
        "Wine Storage",
        "Pull-out Drawers",
        "Soft-close Hardware"
      ]
    },
    {
      title: "Wardrobes",
      description: "Spacious and organized storage solutions for your bedroom",
      icon: "👔",
      services: [
        "Built-in Wardrobes",
        "Walk-in Closets",
        "Sliding Door Systems",
        "Shoe Racks & Storage",
        "Interior Organizers",
        "Mirror Integration"
      ]
    },
    {
      title: "TV Consoles",
      description: "Modern entertainment centers with smart cable management",
      icon: "📺",
      services: [
        "Wall-mounted Units",
        "Floor-standing Consoles",
        "Media Storage",
        "Cable Management Systems",
        "Sound Equipment Housing",
        "LED Accent Lighting"
      ]
    },
    {
      title: "Sofas & Seating",
      description: "Comfortable and stylish seating for every living space",
      icon: "🛋️",
      services: [
        "L-shaped Sectionals",
        "3-Seater & 2-Seater Sofas",
        "Recliners & Armchairs",
        "Ottoman & Footrests",
        "Custom Upholstery",
        "Modular Seating Systems"
      ]
    },
    {
      title: "Dining Furniture",
      description: "Beautiful dining sets for family gatherings and entertaining",
      icon: "🍴",
      services: [
        "Dining Tables (4-12 Seaters)",
        "Dining Chairs & Benches",
        "Bar Tables & Stools",
        "Buffets & Sideboards",
        "Display Cabinets",
        "Kitchen Breakfast Bars"
      ]
    },
    {
      title: "Custom Furniture",
      description: "Bespoke furniture pieces designed specifically for your needs",
      icon: "⚒️",
      services: [
        "Made-to-measure Solutions",
        "Unique Design Concepts",
        "Space Optimization",
        "Material Selection",
        "Personalized Finishes",
        "One-of-a-kind Pieces"
      ]
    }
  ]

  const deliveryProcess = [
    {
      step: 1,
      title: "Consultation",
      description: "Free initial consultation to understand your needs, preferences, and budget",
      icon: Users,
      details: ["Needs assessment", "Budget discussion", "Style preferences", "Timeline planning"]
    },
    {
      step: 2,
      title: "Site Survey",
      description: "Professional measurement and assessment of your space",
      icon: Building,
      details: ["Accurate measurements", "Space analysis", "Access assessment", "Technical considerations"]
    },
    {
      step: 3,
      title: "3D Design",
      description: "Detailed 3D visualization showing exactly how your furniture will look",
      icon: Eye,
      details: ["3D renderings", "Multiple design options", "Material visualization", "Client approval"]
    },
    {
      step: 4,
      title: "Construction",
      description: "Expert craftsmanship using premium materials in our workshop",
      icon: Wrench,
      details: ["Quality materials", "Skilled craftsmanship", "Quality control", "Progress updates"]
    },
    {
      step: 5,
      title: "Installation & Delivery",
      description: "Professional installation and setup in your space",
      icon: Truck,
      details: ["Careful transportation", "Professional installation", "Final inspection", "Client walkthrough"]
    }
  ]

  const whyChooseUs = [
    {
      title: "15+ Years Experience",
      description: "Over a decade of creating beautiful furniture for homes and businesses",
      icon: "⭐"
    },
    {
      title: "3D Visualization",
      description: "See your furniture before it's built with our advanced 3D design technology",
      icon: "👁️"
    },
    {
      title: "Quality Materials",
      description: "We use only premium hardwoods, metals, and hardware for lasting durability",
      icon: "🌳"
    },
    {
      title: "Custom Solutions",
      description: "Every piece can be customized to perfectly fit your space and style",
      icon: "🎨"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair text-dark-brown mb-6 leading-tight">
              Ceetech Crafts <span className="text-warm-brown italic">Furniture</span> Solutions
            </h1>
            <p className="text-xl text-dark-brown/80 leading-relaxed mb-8 max-w-3xl mx-auto">
              From custom kitchen cabinets to complete office fit-outs, we create exceptional furniture that combines functionality, style, and durability to transform your spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-warm-brown text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-dark-brown transition-colors duration-200">
                View Portfolio
              </button>
              <button className="border-2 border-warm-brown text-warm-brown px-8 py-3 rounded-lg text-lg font-semibold hover:bg-warm-brown hover:text-cream transition-colors duration-200">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mb-6">
              Our Furniture Services
            </h2>
            <p className="text-lg text-dark-brown/70 max-w-2xl mx-auto">
              We specialize in both commercial and residential furniture solutions, delivering exceptional quality and craftsmanship in every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-light-tan w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-warm-brown" />
              </div>
              <h3 className="text-2xl font-playfair text-dark-brown mb-4">Commercial Furniture</h3>
              <p className="text-dark-brown/70 mb-6">
                Complete furniture solutions for offices, schools, hotels, and healthcare facilities. Built for durability and designed for productivity.
              </p>
              <button className="text-warm-brown hover:text-dark-brown font-medium flex items-center mx-auto">
                Explore Commercial <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="bg-light-tan w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-warm-brown" />
              </div>
              <h3 className="text-2xl font-playfair text-dark-brown mb-4">Residential Furniture</h3>
              <p className="text-dark-brown/70 mb-6">
                Custom furniture for your home including kitchen cabinets, wardrobes, TV consoles, sofas, and unique pieces tailored to your lifestyle.
              </p>
              <button className="text-warm-brown hover:text-dark-brown font-medium flex items-center mx-auto">
                Explore Residential <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Furniture Section */}
      <section className="py-16 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mb-6">
              Commercial Furniture Solutions
            </h2>
            <p className="text-lg text-dark-brown/70 max-w-3xl mx-auto">
              Professional furniture solutions designed to enhance productivity, comfort, and aesthetics in commercial environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commercialFurniture.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-playfair text-dark-brown mb-3">{category.title}</h3>
                  <p className="text-sm text-dark-brown/70 mb-4">{category.description}</p>
                </div>
                <div className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start text-sm text-dark-brown/80">
                      <CheckCircle className="w-4 h-4 text-warm-brown mr-2 mt-0.5 flex-shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Furniture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mb-6">
              Residential Furniture Collection
            </h2>
            <p className="text-lg text-dark-brown/70 max-w-3xl mx-auto">
              Transform your home with our custom furniture solutions, designed to perfectly fit your space and reflect your personal style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {householdFurniture.map((category, index) => (
              <div key={index} className="bg-light-tan rounded-lg p-6 hover:bg-cream transition-colors duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-playfair text-dark-brown mb-3">{category.title}</h3>
                  <p className="text-sm text-dark-brown/70 mb-4">{category.description}</p>
                </div>
                <div className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start text-sm text-dark-brown/80">
                      <CheckCircle className="w-4 h-4 text-warm-brown mr-2 mt-0.5 flex-shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process Section */}
      <section className="py-16 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mb-6">
              Our Delivery Process
            </h2>
            <p className="text-lg text-dark-brown/70 max-w-3xl mx-auto">
              From initial consultation to final installation, we ensure a seamless experience with our proven 5-step process.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {deliveryProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-warm-brown text-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {process.step}
                    </div>
                    <div className="bg-light-tan p-4 rounded-lg mb-4">
                      <process.icon className="w-8 h-8 text-warm-brown mx-auto" />
                    </div>
                    {index < deliveryProcess.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-warm-brown/30 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-playfair text-dark-brown mb-3">{process.title}</h3>
                  <p className="text-sm text-dark-brown/70 mb-4">{process.description}</p>
                  <div className="space-y-1">
                    {process.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-xs text-dark-brown/60">
                        • {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mb-6">
              Why Choose Ceetech Crafts?
            </h2>
            <p className="text-lg text-dark-brown/70 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver exceptional furniture solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-playfair text-dark-brown mb-3">{feature.title}</h3>
                <p className="text-sm text-dark-brown/70">{feature.description}</p>
              </div>
            ))}
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
              Let our experts help you create beautiful, functional furniture that perfectly fits your needs and space. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cream text-warm-brown px-8 py-3 rounded-lg text-lg font-semibold hover:bg-soft-beige transition-colors duration-200">
                Get Free Consultation
              </button>
              <button className="border-2 border-cream text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cream hover:text-warm-brown transition-colors duration-200">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Furniture