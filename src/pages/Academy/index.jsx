import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { BookOpen, Users, Award, Clock, Phone } from 'lucide-react'

// Import images
import furnitureApprenticeImg from '../../assets/furniture-apprentice.jpg'

const Academy = () => {
  const courses = [
    {
      title: "Interior Design Fundamentals",
      duration: "6 weeks",
      level: "Beginner",
      description: "Learn the basics of interior design, color theory, and space planning",
      topics: ["Color Theory", "Space Planning", "Furniture Selection", "Lighting Design"]
    },
    {
      title: "Furniture Design & Construction",
      duration: "8 weeks",
      level: "Intermediate",
      description: "Master the art of furniture design and construction techniques",
      topics: ["Design Principles", "Wood Working", "Joinery Techniques", "Finishing Methods"]
    },
    {
      title: "Business of Interior Design",
      duration: "4 weeks",
      level: "Advanced",
      description: "Learn how to start and run a successful interior design business",
      topics: ["Client Management", "Project Pricing", "Marketing", "Legal Aspects"]
    },
    {
      title: "3D Visualization & Rendering",
      duration: "5 weeks",
      level: "Intermediate",
      description: "Create stunning 3D visualizations for interior design projects",
      topics: ["3D Modeling", "Rendering Techniques", "Lighting Simulation", "Post-Processing"]
    }
  ]

  const features = [
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Complete courses covering all aspects of furniture and interior design"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Receive certificates upon successful completion of courses"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Study at your own pace with both online and offline options"
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
              Ceetech Crafts <span className="text-light-tan">Academy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
              Master the art of furniture design and interior decoration with our comprehensive training programs
            </p>
            <a 
              href="https://wa.me/2348165410110?text=Hello%20Ceetech%20Crafts%2C%20I%27d%20like%20to%20enroll%20in%20your%20academy%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-warm-brown text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-dark-brown transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
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
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown text-center mb-12">
              Why Choose Our Academy?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-warm-brown" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-brown mb-3">{feature.title}</h3>
                  <p className="text-dark-brown/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown text-center mb-12">
              Available Courses
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-playfair text-dark-brown">{course.title}</h3>
                    <span className="bg-light-tan text-warm-brown px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center text-dark-brown/70 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <p className="text-dark-brown/80 mb-6">{course.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark-brown mb-3">What You'll Learn:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center text-sm text-dark-brown/70">
                          <span className="w-2 h-2 bg-warm-brown rounded-full mr-2"></span>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-warm-brown text-cream py-3 px-4 rounded-lg hover:bg-dark-brown transition-colors duration-200 font-semibold">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-warm-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-cream mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-cream/90 mb-8">
              Join hundreds of students who have transformed their careers with our academy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/2348215410110?text=Hello%20Ceetech%20Crafts%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20academy%20courses"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                <span>Learn More</span>
              </a>
              <a 
                href="tel:+2348165410110"
                className="border-2 border-cream text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cream hover:text-warm-brown transition-colors duration-200 flex items-center justify-center space-x-2"
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