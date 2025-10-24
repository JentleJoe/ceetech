import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { ArrowRight, CheckCircle, Users, Building, Home, Eye, Wrench, Truck, Phone } from 'lucide-react'

// Import images
import officeFurnitureImg from '../../assets/office-furniture.jpg'
import furnitureApprenticeImg from '../../assets/furniture-apprentice.jpg'
import hotelFurnitureImg from '../../assets/hotel-furniture.jpg'
import healthcareCabinetsImg from '../../assets/healthcare-cabinets.png'
import tvConsoleImg from '../../assets/tv_console.jpg'
import residentialFurnitureImg from '../../assets/residential-furniture.jpg'
import workshopImg from '../../assets/workshop.jpg'
import diningImg from '../../assets/dining.jpg'
import kitchenCabinetImg from '../../assets/kitchen-cabinet.jpg'
import backgroundImg from '../../assets/livingroom.jpeg'
import schoolFurnitureImg from '../../assets/school-furniture.jpg'
import wardrobeImg from '../../assets/wardrobe.jpeg'

const Furniture = () => {
  const commercialFurniture = [
    {
      title: "Office Furniture",
      description: "Complete office solutions designed for productivity and comfort",
      icon: "🏢",
      image: officeFurnitureImg,
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
      image: schoolFurnitureImg,
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
      image: hotelFurnitureImg,
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
      image: healthcareCabinetsImg,
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
      image: kitchenCabinetImg,
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
      image: wardrobeImg,
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
      image: tvConsoleImg,
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
      image: residentialFurnitureImg,
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
      image: diningImg,
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
      image: workshopImg,
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
      <section 
        className="pt-32 pb-16 relative min-h-[65vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg})`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6 leading-tight drop-shadow-lg">
              Ceetech Crafts <span className="text-ivory-gold italic">Furniture Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-md">
              Custom furniture solutions that combine functionality, style, and durability to transform your spaces.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/2349069616141?text=Hello%20Ceetech%20Crafts%2C%20I%27d%20like%20a%20free%20consultation%20for%20custom%20furniture"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                <span>Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-charcoal mb-6">
              Our Furniture Services
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              We specialize in both commercial and residential furniture solutions, delivering exceptional quality and craftsmanship in every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-ivory-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-charcoal" />
              </div>
              <h3 className="text-2xl font-playfair text-charcoal mb-4">Commercial Furniture</h3>
              <p className="text-charcoal/70 mb-6">
                Complete furniture solutions for offices, schools, hotels, and healthcare facilities. Built for durability and designed for productivity.
              </p>
              <button className="text-charcoal hover:scale-105 transition-transform duration-200 font-medium flex items-center mx-auto">
                Explore Commercial <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="bg-ivory-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-charcoal" />
              </div>
              <h3 className="text-2xl font-playfair text-charcoal mb-4">Residential Furniture</h3>
              <p className="text-charcoal/70 mb-6">
                Custom furniture for your home including kitchen cabinets, wardrobes, TV consoles, sofas, and unique pieces tailored to your lifestyle.
              </p>
              <button className="text-charcoal hover:scale-105 transition-transform duration-200 font-medium flex items-center mx-auto">
                Explore Residential <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Furniture Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-playfair text-white mb-6">
              Commercial Furniture Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              Professional furniture solutions designed to enhance productivity, comfort, and aesthetics in commercial environments.
            </p>
          </div>
          
          <div className="space-y-16">
            {commercialFurniture.map((category, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-80 md:h-96 rounded-xl overflow-hidden group">
                    <img 
                      src={category.image} 
                      alt={`${category.title} solutions`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="bg-ivory-gold text-charcoal px-4 py-2 rounded-full text-sm font-semibold">
                        {category.icon} {category.title}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-2xl md:text-3xl font-playfair text-charcoal mb-4">{category.title}</h3>
                    <p className="text-lg text-charcoal/70 mb-6">{category.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-charcoal mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-charcoal/80">{service}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="">
                      <button className="bg-charcoal text-ivory-gold px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 w-full sm:w-auto">
                        Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Furniture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-playfair text-charcoal mb-6">
              Residential Furniture Collection
            </h2>
            <p className="text-lg md:text-xl text-charcoal/70 max-w-4xl mx-auto">
              Transform your home with our custom furniture solutions, designed to perfectly fit your space and reflect your personal style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {householdFurniture.map((category, index) => (
              <div key={index} className="group">
                {/* Image */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <img 
                    src={category.image} 
                    alt={`${category.title} collection`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <div className="text-2xl mb-2">{category.icon}</div>
                      <h3 className="text-xl font-playfair font-bold">{category.title}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="bg-ivory-gold rounded-xl p-6 hover:bg-soft-gold transition-colors duration-300 group-hover:shadow-lg border border-ivory-gold/20">
                  <p className="text-charcoal/70 mb-4">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start text-charcoal/80">
                        <CheckCircle className="w-4 h-4 text-charcoal mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="">
                    <button className="w-full bg-charcoal text-ivory-gold px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
                      Free Consultation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-white mb-6">
              Our Delivery Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From initial consultation to final installation, we ensure a seamless experience with our proven 5-step process.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {deliveryProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-charcoal text-ivory-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {process.step}
                    </div>
                    <div className="bg-ivory-gold p-4 rounded-lg mb-4">
                      <process.icon className="w-8 h-8 text-charcoal mx-auto" />
                    </div>
                    {index < deliveryProcess.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-charcoal/30 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-playfair text-white mb-3">{process.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{process.description}</p>
                  <div className="space-y-1">
                    {process.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-xs text-gray-400">
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
            <h2 className="text-3xl md:text-4xl font-playfair text-charcoal mb-6">
              Why Choose Ceetech Crafts?
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver exceptional furniture solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-playfair text-charcoal mb-3">{feature.title}</h3>
                <p className="text-sm text-charcoal/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-ivory-gold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let our experts help you create beautiful, functional furniture that perfectly fits your needs and space. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/2349069616141?text=Hello%20Ceetech%20Crafts%2C%20I%27d%20like%20to%20get%20a%20free%20consultation%20for%20custom%20furniture"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                <span>Get Free Consultation</span>
              </a>
              <a 
                href="tel:+2349069616141"
                className="border-2 border-ivory-gold text-ivory-gold px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Furniture