import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { BookOpen, Users, Award, Clock, Phone } from 'lucide-react'

// Import images
import furnitureApprenticeImg from '../../assets/furniture-apprentice.jpg'

const Academy = () => {
  const programs = [
    {
      title: "Foundation Program",
      subtitle: "For Absolute Beginners",
      duration: "3-6 Months",
      level: "Beginner",
      description: "Perfect for those new to furniture making. Learn from the ground up with hands-on training in our fully equipped workshop.",
      highlights: [
        "Wood identification and selection",
        "Basic hand tools and power tools",
        "Fundamental joinery techniques",
        "Safety protocols and workshop practices",
        "Measuring, marking, and cutting",
        "Assembly and finishing basics"
      ],
      projects: ["Simple stool", "Basic shelf", "Small cabinet"],
      certification: "Foundation Certificate in Furniture Making",
      icon: "🌱"
    },
    {
      title: "Advanced Mastery Program",
      subtitle: "For Experienced Craftspeople",
      duration: "4-8 Months",
      level: "Advanced",
      description: "Designed for those with furniture-making experience who want to refine their skills and learn advanced techniques.",
      highlights: [
        "Complex joinery and mortise techniques",
        "Advanced finishing and restoration",
        "Custom design and client consultation",
        "Business aspects of furniture making",
        "Quality control and precision work",
        "Specialized tools and machinery"
      ],
      projects: ["Dining table set", "Custom wardrobe", "Upholstered chair"],
      certification: "Advanced Certificate in Furniture Craftsmanship",
      icon: "🏆"
    }
  ]

  const features = [
    {
      icon: Users,
      title: "Master Craftsmen Instructors",
      description: "Learn from experienced furniture makers who have perfected their craft over decades"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Furniture Training",
      description: "From wood selection to final finishing - master every aspect of furniture making"
    },
    {
      icon: Award,
      title: "Industry-Recognized Certification",
      description: "Receive certificates that are valued by furniture workshops and employers"
    },
    {
      icon: Clock,
      title: "Flexible Learning Paths",
      description: "Full-time intensive or part-time evening classes to fit your schedule"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="pt-24 pb-16 relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${furnitureApprenticeImg})`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6 drop-shadow-lg">
              Ceetech Crafts <span className="text-ivory-gold">Academy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              We train visionaries, not just designers. Master the craft of furniture making and transform your creative passion into professional expertise.
            </p>
            <a 
              href="https://wa.me/2349069616141?text=Hello%20Ceetech%20Crafts%2C%20I%27d%20like%20to%20enroll%20in%20your%20academy%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ivory-gold text-charcoal px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
              </svg>
              <span>Enroll Today</span>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-charcoal text-center mb-12">
              Why Choose Our Academy?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-ivory-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-charcoal" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{feature.title}</h3>
                  <p className="text-charcoal/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-soft-gold">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair text-charcoal mb-4">
                Our Training Programs
              </h2>
              <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
                Choose the program that matches your current skill level and career goals. Both programs combine theoretical knowledge with extensive hands-on practice.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {/* Program Header */}
                  <div className={`p-6 text-center ${index === 0 ? 'bg-gradient-to-br from-green-50 to-green-100' : 'bg-gradient-to-br from-amber-50 to-amber-100'}`}>
                    <div className="text-4xl mb-3">{program.icon}</div>
                    <h3 className="text-2xl font-playfair text-charcoal mb-2">{program.title}</h3>
                    <p className="text-charcoal font-semibold mb-3">{program.subtitle}</p>
                    <div className="flex items-center justify-center text-charcoal/70 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                      index === 0 ? 'bg-green-200 text-green-800' : 'bg-amber-200 text-amber-800'
                    }`}>
                      {program.level} Level
                    </span>
                  </div>

                  {/* Program Content */}
                  <div className="p-6">
                    <p className="text-charcoal/80 mb-6 leading-relaxed">{program.description}</p>
                    
                    {/* Curriculum Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-charcoal mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-charcoal" />
                        Curriculum Highlights
                      </h4>
                      <div className="space-y-2">
                        {program.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start text-sm text-charcoal/70">
                            <span className="w-2 h-2 bg-charcoal rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Practical Projects */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-charcoal" />
                        Practical Projects
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {program.projects.map((project, projectIndex) => (
                          <span key={projectIndex} className="bg-soft-gold text-charcoal px-3 py-1 rounded-full text-xs font-medium">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certification */}
                    <div className="bg-soft-gold p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-charcoal mb-2 text-sm">Upon Completion:</h4>
                      <p className="text-charcoal text-sm font-medium">{program.certification}</p>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/2349069616141?text=Hello%20Ceetech%20Crafts%2C%20I'm%20interested%20in%20the%20${program.title}%20at%20your%20academy`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-ivory-gold text-charcoal py-3 px-4 rounded-lg hover:scale-105 transition-transform duration-200 font-semibold flex items-center justify-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                      </svg>
                      <span>Inquire About This Program</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-playfair text-charcoal mb-4">What Makes Our Academy Special?</h3>
                <p className="text-charcoal/80 max-w-3xl mx-auto">
                  Our academy is located right within our active furniture factory, giving students unparalleled access to real-world furniture production environments.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-ivory-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">Factory-Based Learning</h4>
                  <p className="text-charcoal/70 text-sm">Learn in our active production facility alongside experienced craftsmen</p>
                </div>
                <div className="text-center">
                  <div className="bg-ivory-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔨</span>
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">Hands-On Training</h4>
                  <p className="text-charcoal/70 text-sm">80% practical work with professional-grade tools and equipment</p>
                </div>
                <div className="text-center">
                  <div className="bg-ivory-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍🏫</span>
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">Master Craftsmen</h4>
                  <p className="text-charcoal/70 text-sm">Learn directly from our experienced furniture makers with years of expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-ivory-gold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of students who have transformed their careers with our academy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/2348215410110?text=Hello%20Ceetech%20Crafts%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20academy%20courses"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                <span>Learn More</span>
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

export default Academy