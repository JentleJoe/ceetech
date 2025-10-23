import { MessageCircle } from 'lucide-react'
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
              About <span className="text-ivory-gold">Ceetech Crafts</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
              Crafted to Inspire - Your trusted partner for custom furniture, interior design, and professional training in Benin City
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
                <h2 className="text-3xl md:text-4xl font-playfair text-charcoal mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  At Ceetech Crafts, every detail tells a story. Located in the heart of Benin City, 
                  we've grown from a passion project into Benin's premier destination for custom furniture 
                  and interior design solutions. Our factory on Sapele Road serves as both our manufacturing 
                  hub and main showroom, where visitors can witness the entire creation process firsthand.
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                  What sets us apart is our comprehensive approach - we're not just furniture makers, 
                  we're space transformers. From residential kitchens to commercial offices, 
                  from POP ceiling installations to complete interior renovations, 
                  we handle every aspect of your space transformation journey.
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
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
                  <p className="text-sm font-semibold text-charcoal">Our Factory Workshop</p>
                  <p className="text-xs text-gray-600">Sapele Road, Benin City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-soft-gold">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-charcoal mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
              We don't just design interiors — we craft experiences. Our mission is to be Benin's leading 
              furniture manufacturer and interior design company, transforming ordinary spaces into 
              extraordinary environments. We combine traditional craftsmanship with modern innovation to 
              deliver solutions that reflect our clients' unique personalities and inspire their daily lives.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-charcoal mb-2">5+ Years</h4>
                <p className="text-sm text-gray-600">Of Excellence in Benin City</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-charcoal mb-2">3 Locations</h4>
                <p className="text-sm text-gray-600">Factory + 2 Showrooms</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-charcoal mb-2">200+</h4>
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
            <h2 className="text-3xl md:text-4xl font-playfair text-charcoal text-center mb-12">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center group">
                <div className="bg-ivory-gold p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-soft-gold transition-colors duration-300">
                  <span className="text-3xl text-charcoal">🪑</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Custom Furniture</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Residential and commercial furniture tailored to your specific needs and space requirements.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-ivory-gold p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-soft-gold transition-colors duration-300">
                  <span className="text-3xl text-charcoal">🏠</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Interior Design</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Complete interior transformations including space planning, design consultation, and execution.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-ivory-gold p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-soft-gold transition-colors duration-300">
                  <span className="text-3xl text-charcoal">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Installation Services</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  POP ceiling installation, tiling, flooring, and complete renovation services.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-ivory-gold p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-soft-gold transition-colors duration-300">
                  <span className="text-3xl text-charcoal">🎓</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Training Academy</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Professional training in furniture design, interior decoration, and business skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-soft-gold">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-charcoal text-center mb-12">
              Why Choose Ceetech Crafts?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="bg-soft-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Local Manufacturing</h3>
                <p className="text-charcoal/70">
                  We manufacture right here in Benin City, ensuring quality control and supporting the local economy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="bg-soft-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✂️</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Custom Solutions</h3>
                <p className="text-charcoal/70">
                  Every project is tailored to your specific requirements, space, and budget constraints.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="bg-soft-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">End-to-End Service</h3>
                <p className="text-charcoal/70">
                  From initial consultation to final installation, we handle every aspect of your project.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="bg-soft-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Proven Quality</h3>
                <p className="text-charcoal/70">
                  Over 5 years of excellence with 200+ satisfied customers across Edo State.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="bg-soft-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Fair Pricing</h3>
                <p className="text-charcoal/70">
                  Competitive prices without compromising on quality or service delivery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="bg-soft-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Convenient Locations</h3>
                <p className="text-charcoal/70">
                  Three locations in Benin City for your convenience - factory and two showrooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-ivory-gold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Visit our factory showroom to see our craftsmanship firsthand, or contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2349069616141?text=Hello%20Ceetech%20Crafts%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+2349069616141"
                className="border-2 border-ivory-gold text-ivory-gold px-8 py-4 rounded-xl font-semibold hover:bg-ivory-gold hover:text-charcoal transition-colors duration-300 shadow-lg"
              >
                Call: +234 906 961 6141
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