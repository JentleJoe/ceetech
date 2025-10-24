import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { 
  ArrowRight, CheckCircle, Users, Eye, Wrench, Truck, 
  Paintbrush, Brush, Palette, Layers, Grid, Square, 
  Blinds, Sun, Lightbulb, Wind, Sparkles, Home,
  MessageCircle, Phone
} from 'lucide-react'
import logoIconGold from '../../assets/logoIconGold.png'
import logoIconWhite from '../../assets/logoIconWhite.png'

// Import images
import paintingImg from '../../assets/painting2.jpg'
import stampedeImg from '../../assets/stampede.jpg'
import windowBlindImg from '../../assets/window-blind.jpg'
import interiorBgImg from '../../assets/interiror.jpg'



const Interiors = () => {
  const interiorCategories = [
    {
      title: "POP & Painting",
      description: "Professional plaster of paris work and premium painting services to transform your walls and ceilings",
      icon: "🎨",
      mainIcon: Paintbrush,
      image: paintingImg,
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
      image: stampedeImg,
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
      image: windowBlindImg,
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



  return (
    <div className="min-h-screen bg-white interiors-page">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes bounce-gentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 2s infinite;
        }
      `}</style>
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative min-h-[65vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${interiorBgImg})`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              <img 
                src={logoIconGold} 
                alt="Ceetech Crafts Logo" 
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6 leading-tight drop-shadow-lg">
              Professional <span className="text-ivory-gold italic">Interior Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-md">
              Complete interior solutions from painting and tiling to lighting and window treatments.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/2349069616141?text=Hello%20Ceetech%20Crafts%2C%20I%27d%20like%20a%20free%20consultation%20for%20interior%20design%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ivory-gold text-charcoal px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg inline-flex items-center space-x-2"
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
              Our Interior Services
            </h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
              We specialize in three core areas of interior finishing, each designed to enhance the beauty, functionality, and comfort of your spaces.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {interiorCategories.map((category, index) => (
              <div 
                key={index} 
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer p-6 rounded-xl hover:bg-ivory-gold/20"
              >
                <div className="bg-ivory-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-charcoal group-hover:scale-110 transition-all duration-300">
                  <category.mainIcon className="w-10 h-10 text-charcoal group-hover:text-ivory-gold transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-playfair text-charcoal mb-4 group-hover:text-charcoal transition-colors duration-300">{category.title}</h3>
                <p className="text-charcoal/70 mb-6 group-hover:text-charcoal transition-colors duration-300">{category.description}</p>
                <button 
                  onClick={() => {
                    const sectionId = category.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-charcoal hover:scale-105 transition-transform duration-200 font-medium flex items-center mx-auto cursor-pointer"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {interiorCategories.map((category, categoryIndex) => {
        // Creative background progression
        const getBackgroundClass = (index) => {
          const backgrounds = [
            'bg-charcoal', // 0: Dramatic dark start
            'bg-gradient-to-br from-soft-gold to-ivory-gold', // 1: Warm gradient
            'bg-white', // 2: Clean minimal
            'bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal', // 3: Subtle dark gradient
            'bg-soft-gold', // 4: Luxurious gold
            'bg-gradient-to-bl from-white to-soft-gold/30', // 5: Light to gold gradient
          ];
          return backgrounds[index % backgrounds.length];
        };

        const bgClass = getBackgroundClass(categoryIndex);
        
        return (
        <section 
          key={categoryIndex} 
          id={category.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '')}
          className={`py-16 ${bgClass} relative overflow-hidden`}
        >
          {/* Creative Background Patterns */}
          {bgClass.includes('bg-charcoal') && (
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-ivory-gold/5 via-transparent to-transparent"></div>
              <div className="absolute top-20 right-20 w-32 h-32 border border-ivory-gold/20 rounded-full"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 border border-ivory-gold/10 rounded-full"></div>
            </div>
          )}
          {bgClass.includes('bg-soft-gold') && (
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-charcoal/5 via-transparent to-transparent"></div>
              <div className="absolute top-10 left-10 w-16 h-16 bg-charcoal/10 rounded-full blur-sm"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-charcoal/5 rounded-full blur-sm"></div>
            </div>
          )}
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Hero Image Section */}
              <div className="mb-12">
                <div className="relative h-64 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden mb-8 group cursor-pointer">
                  <img 
                    src={category.image} 
                    alt={`${category.title} services`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      console.error(`Failed to load image for ${category.title}:`, category.image);
                      e.target.style.backgroundColor = '#f3f4f6';
                    }}
                    onLoad={() => console.log(`Successfully loaded image for ${category.title}`)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 group-hover:via-black/20 transition-all duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-white transform transition-all duration-500 group-hover:translate-y-[-8px]">
                    <div className="text-4xl mb-2 animate-bounce-gentle">{category.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-2 group-hover:text-ivory-gold transition-colors duration-300">
                      {category.title}
                    </h2>
                  </div>
                </div>
                <div className="text-center">
                  <p className={`text-lg max-w-3xl mx-auto ${
                    bgClass.includes('bg-charcoal') || bgClass.includes('from-charcoal') 
                      ? 'text-gray-300' 
                      : bgClass.includes('bg-gradient-to-br') || bgClass.includes('bg-soft-gold')
                      ? 'text-charcoal/80'
                      : 'text-charcoal/70'
                  }`}>
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Services */}
                <div className="lg:col-span-2">
                  <div className="space-y-8">
                    {category.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex} 
                        className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-charcoal/20 group"
                        style={{
                          animationDelay: `${serviceIndex * 0.2}s`,
                          animation: 'slideInLeft 0.6s ease-out forwards'
                        }}
                      >
                        <h3 className="text-xl font-playfair text-charcoal mb-4 group-hover:text-charcoal transition-colors duration-300">{service.name}</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.items.map((item, itemIndex) => (
                            <div 
                              key={itemIndex} 
                              className="flex items-start hover:bg-ivory-gold/30 rounded p-2 transition-all duration-200 hover:transform hover:translate-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-charcoal mr-2 mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-200" />
                              <span className="text-charcoal/80 text-base hover:text-charcoal transition-colors duration-200">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Benefits */}
                <div>
                  <div className="bg-ivory-gold rounded-lg p-6 border border-ivory-gold/20">
                    <h3 className="text-xl font-playfair text-charcoal mb-6">Why Choose Our Services?</h3>
                    <div className="space-y-4">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <Sparkles className="w-4 h-4 text-charcoal mr-2 mt-1 flex-shrink-0" />
                          <span className="text-charcoal/80 text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
      })}

      {/* Work Process Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <img 
                src={logoIconWhite} 
                alt="Ceetech Crafts Logo" 
                className="h-10 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair text-white mb-6">
              Our Work Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From initial consultation to final inspection, we ensure a seamless experience with our proven 4-step process.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workProcess.map((process, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="relative mb-6">
                    <div className="bg-ivory-gold text-charcoal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-white group-hover:scale-110 transition-all duration-300 animate-pulse-gentle">
                      {process.step}
                    </div>
                    <div className="bg-ivory-gold p-4 rounded-lg shadow-md mb-4 group-hover:shadow-xl group-hover:bg-white transition-all duration-300 border border-ivory-gold/20">
                      <process.icon className="w-8 h-8 text-charcoal mx-auto group-hover:text-charcoal group-hover:scale-110 transition-all duration-300" />
                    </div>
                    {index < workProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-ivory-gold/30 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-playfair text-white mb-3 group-hover:text-ivory-gold transition-colors duration-300">{process.title}</h3>
                  <p className="text-base text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">{process.description}</p>
                  <div className="space-y-1">
                    {process.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-sm text-gray-400">
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
              Why Choose Ceetech Interiors?
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              We combine expertise, quality materials, and professional service to deliver exceptional interior solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-playfair text-charcoal mb-3">{feature.title}</h3>
                <p className="text-base text-charcoal/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <img 
                src={logoIconGold} 
                alt="Ceetech Crafts Logo" 
                className="h-10 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair text-ivory-gold mb-6">
              Ready to Transform Your Interior?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get professional interior solutions that combine quality craftsmanship with modern aesthetics. Contact us today for a free consultation and detailed quote.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-cream bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">Free Site Visit</h3>
                <p className="text-cream/80 text-base">Complimentary consultation and assessment</p>
              </div>
              <div className="text-center">
                <div className="bg-cream bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">Detailed Quote</h3>
                <p className="text-cream/80 text-base">Transparent pricing with no hidden costs</p>
              </div>
              <div className="text-center">
                <div className="bg-cream bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">Quality Guarantee</h3>
                <p className="text-cream/80 text-base">Premium materials with warranty coverage</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/2349069616141?text=Hello%20Ceetech%20Crafts%2C%20I%27d%20like%20to%20schedule%20a%20free%20consultation%20for%20interior%20design%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                <span>Schedule Free Consultation</span>
              </a>
              <a 
                href="tel:+2309069616141"
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

export default Interiors