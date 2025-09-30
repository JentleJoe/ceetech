import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { 
  ArrowRight, CheckCircle, Users, Eye, Wrench, Truck, 
  Paintbrush, Brush, Palette, Layers, Grid, Square, 
  Blinds, Sun, Lightbulb, Wind, Sparkles, Home
} from 'lucide-react'

const Interiors = () => {
  const interiorCategories = [
    {
      title: "POP & Painting",
      description: "Professional plaster of paris work and premium painting services to transform your walls and ceilings",
      icon: "🎨",
      mainIcon: Paintbrush,
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: [
        {
          name: "POP (Plaster of Paris) Work",
          items: [
            "False Ceiling Design & Installation",
            "Decorative Wall Panels",
            "Cornices & Moldings",
            "Archways & Columns",
            "3D Wall Textures",
            "Custom POP Designs"
          ]
        },
        {
          name: "Professional Painting Services",
          items: [
            "Interior Wall Painting",
            "Exterior Building Painting",
            "Texture & Designer Paints",
            "Emulsion & Distemper",
            "Wood & Metal Painting",
            "Wall Paper Installation"
          ]
        }
      ],
      benefits: [
        "Dust-free & clean work environment",
        "Premium quality paints & materials",
        "Expert color consultation",
        "Long-lasting finish guarantee",
        "Professional surface preparation",
        "Timely project completion"
      ]
    },
    {
      title: "Tiling & Stampede Floor",
      description: "Expert tiling and modern stampede flooring solutions for durable and beautiful surfaces",
      icon: "🏗️",
      mainIcon: Grid,
      image: "https://images.unsplash.com/photo-1631545806609-73a2ca64d4e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: [
        {
          name: "Professional Tiling Services",
          items: [
            "Floor Tile Installation",
            "Wall Tile Installation",
            "Bathroom & Kitchen Tiling",
            "Mosaic & Designer Tiles",
            "Marble & Granite Tiling",
            "Outdoor & Patio Tiling"
          ]
        },
        {
          name: "Stampede Flooring Solutions",
          items: [
            "Residential Stampede Floors",
            "Commercial Stampede Surfaces",
            "Decorative Concrete Floors",
            "Polished Concrete Finishes",
            "Industrial Floor Coatings",
            "Floor Repairs & Maintenance"
          ]
        }
      ],
      benefits: [
        "Water-resistant & durable materials",
        "Professional installation techniques",
        "Wide range of designs & patterns",
        "Easy maintenance solutions",
        "Cost-effective flooring options",
        "Expert surface preparation"
      ]
    },
    {
      title: "Curtain, Window Blind & Lightning",
      description: "Complete window treatment and lighting solutions to enhance comfort and ambiance in your space",
      icon: "💡",
      mainIcon: Blinds,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: [
        {
          name: "Window Treatments",
          items: [
            "Custom Curtains & Drapes",
            "Vertical & Horizontal Blinds",
            "Roman & Roller Blinds",
            "Motorized Window Blinds",
            "Outdoor Awnings & Shades",
            "Commercial Window Solutions"
          ]
        },
        {
          name: "Lighting Solutions",
          items: [
            "LED Lighting Installation",
            "Decorative Light Fixtures",
            "Recessed & Track Lighting",
            "Chandelier Installation",
            "Smart Lighting Systems",
            "Emergency & Security Lighting"
          ]
        }
      ],
      benefits: [
        "Energy-efficient lighting solutions",
        "Custom window measurements",
        "Professional installation service",
        "Remote control & automation options",
        "UV protection & privacy control",
        "Maintenance & repair services"
      ]
    }
  ]

  const workProcess = [
    {
      step: 1,
      title: "Site Consultation",
      description: "Free consultation to assess your space, understand requirements, and provide expert recommendations",
      icon: Users,
      details: ["Space assessment", "Requirement analysis", "Budget discussion", "Timeline planning"]
    },
    {
      step: 2,
      title: "Design & Planning",
      description: "Detailed planning with material selection, color schemes, and comprehensive project timeline",
      icon: Eye,
      details: ["Material selection", "Color consultation", "Design visualization", "Project scheduling"]
    },
    {
      step: 3,
      title: "Professional Execution",
      description: "Expert installation and execution by our skilled craftsmen using premium materials",
      icon: Wrench,
      details: ["Quality materials", "Skilled workmanship", "Progress monitoring", "Quality control"]
    },
    {
      step: 4,
      title: "Final Inspection",
      description: "Thorough quality check and client walkthrough to ensure complete satisfaction",
      icon: CheckCircle,
      details: ["Quality inspection", "Client walkthrough", "Touch-up services", "Completion certificate"]
    }
  ]

  const whyChooseUs = [
    {
      title: "Expert Craftsmanship",
      description: "Skilled professionals with years of experience in interior finishing",
      icon: "👨‍🔧"
    },
    {
      title: "Quality Materials",
      description: "We use only premium brands and high-quality materials for lasting results",
      icon: "⭐"
    },
    {
      title: "Timely Completion",
      description: "Projects completed on schedule with minimal disruption to your daily routine",
      icon: "⏰"
    },
    {
      title: "Competitive Pricing",
      description: "Fair and transparent pricing with detailed quotations and no hidden costs",
      icon: "💰"
    },
    {
      title: "After-Sales Support",
      description: "Comprehensive warranty and ongoing maintenance support for all our work",
      icon: "🛠️"
    },
    {
      title: "Clean Work Environment",
      description: "Dust-free and organized work practices to maintain cleanliness during projects",
      icon: "✨"
    }
  ]

  const portfolioProjects = [
    {
      title: "Luxury Living Room Makeover",
      category: "POP & Painting",
      description: "Complete ceiling design with decorative POP work and premium paint finish",
      image: "/placeholder.svg"
    },
    {
      title: "Modern Kitchen Tiling",
      category: "Tiling & Flooring",
      description: "Beautiful ceramic tile installation with waterproof grouting",
      image: "/placeholder.svg"
    },
    {
      title: "Office Lighting & Blinds",
      category: "Lighting & Blinds",
      description: "Professional LED lighting with motorized window blinds installation",
      image: "/placeholder.svg"
    },
    {
      title: "Residential Stampede Flooring",
      category: "Tiling & Flooring",
      description: "Durable and decorative stampede flooring for modern home",
      image: "/placeholder.svg"
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
              Professional <span className="text-warm-brown italic">Interior</span> Solutions
            </h1>
            <p className="text-xl text-dark-brown/80 leading-relaxed mb-8 max-w-3xl mx-auto">
              Transform your spaces with our comprehensive interior services including POP & Painting, Tiling & Flooring, and Window Treatments & Lighting solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-warm-brown text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-dark-brown transition-colors duration-200">
                Free Consultation
              </button>
              <button className="border-2 border-warm-brown text-warm-brown px-8 py-3 rounded-lg text-lg font-semibold hover:bg-warm-brown hover:text-cream transition-colors duration-200">
                View Our Work
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
              Our Interior Services
            </h2>
            <p className="text-lg text-dark-brown/70 max-w-3xl mx-auto">
              We specialize in three core areas of interior finishing, each designed to enhance the beauty, functionality, and comfort of your spaces.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {interiorCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="bg-light-tan w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <category.mainIcon className="w-10 h-10 text-warm-brown" />
                </div>
                <h3 className="text-2xl font-playfair text-dark-brown mb-4">{category.title}</h3>
                <p className="text-dark-brown/70 mb-6">{category.description}</p>
                <button 
                  onClick={() => {
                    const sectionId = category.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-warm-brown hover:text-dark-brown font-medium flex items-center mx-auto transition-colors duration-200 cursor-pointer"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {interiorCategories.map((category, categoryIndex) => (
        <section 
          key={categoryIndex} 
          id={category.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '')}
          className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-soft-beige' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Hero Image Section */}
              <div className="mb-12">
                <div className="relative h-64 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden mb-8">
                  <img 
                    src={category.image} 
                    alt={`${category.title} services`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-2">
                      {category.title}
                    </h2>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg text-dark-brown/70 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Services */}
                <div className="lg:col-span-2">
                  <div className="space-y-8">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-white rounded-lg p-6 shadow-lg">
                        <h3 className="text-xl font-playfair text-dark-brown mb-4">{service.name}</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-warm-brown mr-2 mt-1 flex-shrink-0" />
                              <span className="text-dark-brown/80 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Benefits */}
                <div>
                  <div className="bg-light-tan rounded-lg p-6">
                    <h3 className="text-xl font-playfair text-dark-brown mb-6">Why Choose Our Services?</h3>
                    <div className="space-y-4">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <Sparkles className="w-4 h-4 text-warm-brown mr-2 mt-1 flex-shrink-0" />
                          <span className="text-dark-brown/80 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Work Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mb-6">
              Our Work Process
            </h2>
            <p className="text-lg text-dark-brown/70 max-w-3xl mx-auto">
              From initial consultation to final inspection, we ensure a seamless experience with our proven 4-step process.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-warm-brown text-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {process.step}
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                      <process.icon className="w-8 h-8 text-warm-brown mx-auto" />
                    </div>
                    {index < workProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-warm-brown/30 transform -translate-y-1/2"></div>
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
              Why Choose Ceetech Interiors?
            </h2>
            <p className="text-lg text-dark-brown/70 max-w-2xl mx-auto">
              We combine expertise, quality materials, and professional service to deliver exceptional interior solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center bg-soft-beige p-6 rounded-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-playfair text-dark-brown mb-3">{feature.title}</h3>
                <p className="text-sm text-dark-brown/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 bg-light-tan">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mb-6">
              Recent Interior Projects
            </h2>
            <p className="text-lg text-dark-brown/70 max-w-2xl mx-auto">
              Take a look at some of our recent interior projects showcasing our expertise across all service categories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
              View Complete Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-warm-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-cream mb-6">
              Ready to Transform Your Interior?
            </h2>
            <p className="text-xl text-cream/90 mb-8">
              Get professional interior solutions that combine quality craftsmanship with modern aesthetics. Contact us today for a free consultation and detailed quote.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-cream bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">Free Site Visit</h3>
                <p className="text-cream/80 text-sm">Complimentary consultation and assessment</p>
              </div>
              <div className="text-center">
                <div className="bg-cream bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">�</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">Detailed Quote</h3>
                <p className="text-cream/80 text-sm">Transparent pricing with no hidden costs</p>
              </div>
              <div className="text-center">
                <div className="bg-cream bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">Quality Guarantee</h3>
                <p className="text-cream/80 text-sm">Premium materials with warranty coverage</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cream text-warm-brown px-8 py-3 rounded-lg text-lg font-semibold hover:bg-soft-beige transition-colors duration-200">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-cream text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cream hover:text-warm-brown transition-colors duration-200">
                Get Instant Quote
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