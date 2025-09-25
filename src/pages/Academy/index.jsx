import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { BookOpen, Users, Award, Clock } from 'lucide-react'

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
      <div className="pt-24 pb-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair text-dark-brown mb-6">
              Ceetech <span className="text-warm-brown">Academy</span>
            </h1>
            <p className="text-xl text-dark-brown/80 leading-relaxed mb-8">
              Master the art of furniture design and interior decoration with our comprehensive training programs
            </p>
            <button className="bg-warm-brown text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-dark-brown transition-colors duration-200">
              Enroll Today
            </button>
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
              <button className="bg-cream text-warm-brown px-8 py-3 rounded-lg text-lg font-semibold hover:bg-soft-beige transition-colors duration-200">
                View All Courses
              </button>
              <button className="border-2 border-cream text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cream hover:text-warm-brown transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Academy