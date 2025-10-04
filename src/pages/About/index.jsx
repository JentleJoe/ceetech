import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

// Import images
import workshopImg from '../../assets/workshop.jpg'
import workmanImg from '../../assets/workman.jpg'

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="pt-24 pb-16 relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${workshopImg})`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6 drop-shadow-lg">
              About <span className="text-light-tan">Ceetech Crafts</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
              Where Craft Meets Class - Your trusted partner for custom furniture, interior design, and professional training in Benin City
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-dark-brown/80 mb-6">
                  Located in the heart of Benin City, Ceetech Crafts has grown from a passion project into 
                  Benin's premier destination for custom furniture and interior design solutions. 
                  Our factory on Sapele Road serves as both our manufacturing hub and main showroom, 
                  where visitors can witness the entire creation process firsthand.
                </p>
                <p className="text-lg text-dark-brown/80 mb-6">
                  What sets us apart is our comprehensive approach - we're not just furniture makers, 
                  we're space transformers. From residential kitchens to commercial offices, 
                  from POP ceiling installations to complete interior renovations, 
                  we handle every aspect of your space transformation journey.
                </p>
                <p className="text-lg text-dark-brown/80 mb-6">
                  Through our Ceetech Academy, we're also committed to training the next generation 
                  of furniture craftsmen and interior designers, ensuring that quality craftsmanship 
                  continues to thrive in our community.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={workmanImg} 
                  alt="Ceetech Crafts Workshop" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-semibold text-dark-brown">Our Factory Workshop</p>
                  <p className="text-xs text-gray-600">Sapele Road, Benin City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-dark-brown/80 leading-relaxed mb-8">
              To be Benin's leading furniture manufacturer and interior design company, 
              providing custom solutions that transform ordinary spaces into extraordinary environments. 
              We combine traditional craftsmanship with modern technology to deliver furniture and interiors 
              that reflect our clients' unique personalities and functional needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-dark-brown mb-2">5+ Years</h4>
                <p className="text-sm text-gray-600">Of Excellence in Benin City</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-dark-brown mb-2">3 Locations</h4>
                <p className="text-sm text-gray-600">Factory + 2 Showrooms</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-dark-brown mb-2">200+</h4>
                <p className="text-sm text-gray-600">Happy Customers Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown text-center mb-12">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center group">
                <div className="bg-warm-brown p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-dark-brown transition-colors duration-300">
                  <span className="text-3xl text-white">🪑</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-brown mb-3">Custom Furniture</h3>
                <p className="text-dark-brown/80 text-sm leading-relaxed">
                  Residential and commercial furniture tailored to your specific needs and space requirements.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-warm-brown p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-dark-brown transition-colors duration-300">
                  <span className="text-3xl text-white">🏠</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-brown mb-3">Interior Design</h3>
                <p className="text-dark-brown/80 text-sm leading-relaxed">
                  Complete interior transformations including space planning, design consultation, and execution.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-warm-brown p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-dark-brown transition-colors duration-300">
                  <span className="text-3xl text-white">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-brown mb-3">Installation Services</h3>
                <p className="text-dark-brown/80 text-sm leading-relaxed">
                  POP ceiling installation, tiling, flooring, and complete renovation services.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-warm-brown p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-dark-brown transition-colors duration-300">
                  <span className="text-3xl text-white">🎓</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-brown mb-3">Training Academy</h3>
                <p className="text-dark-brown/80 text-sm leading-relaxed">
                  Professional training in furniture design, interior decoration, and business skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown text-center mb-12">
              Why Choose Ceetech Crafts?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-3">Local Manufacturing</h3>
                <p className="text-dark-brown/80">
                  We manufacture right here in Benin City, ensuring quality control and supporting the local economy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✂️</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-3">Custom Solutions</h3>
                <p className="text-dark-brown/80">
                  Every project is tailored to your specific requirements, space, and budget constraints.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-3">End-to-End Service</h3>
                <p className="text-dark-brown/80">
                  From initial consultation to final installation, we handle every aspect of your project.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-3">Proven Quality</h3>
                <p className="text-dark-brown/80">
                  Over 5 years of excellence with 200+ satisfied customers across Edo State.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-3">Fair Pricing</h3>
                <p className="text-dark-brown/80">
                  Competitive prices without compromising on quality or service delivery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-3">Convenient Locations</h3>
                <p className="text-dark-brown/80">
                  Three locations in Benin City for your convenience - factory and two showrooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-warm-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-cream mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-cream/90 mb-8 leading-relaxed">
              Visit our factory showroom to see our craftsmanship firsthand, or contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-cream text-warm-brown px-8 py-4 rounded-xl font-semibold hover:bg-soft-beige transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Visit Our Locations
              </a>
              <a
                href="tel:+2348165410110"
                className="border-2 border-cream text-cream px-8 py-4 rounded-xl font-semibold hover:bg-cream hover:text-warm-brown transition-colors duration-300 shadow-lg"
              >
                Call: +234 816 541 0110
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About