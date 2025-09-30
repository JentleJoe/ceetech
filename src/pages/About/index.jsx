import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="pt-24 pb-16 relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6 drop-shadow-lg">
              About <span className="text-light-tan">Ceetech Crafts</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Transforming spaces with exceptional furniture and interior design solutions
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
                  At Ceetech Crafts, we believe that every space tells a story. 
                  Founded with a passion for exceptional design and quality craftsmanship, we've been 
                  transforming homes and offices with our carefully curated furniture collections and 
                  bespoke interior design services.
                </p>
                <p className="text-lg text-dark-brown/80 mb-6">
                  Our journey began with a simple vision: to make beautiful, functional furniture 
                  accessible to everyone. Today, we continue to uphold this mission by offering 
                  premium quality furniture at affordable prices, backed by exceptional customer service.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Our Story" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
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
              To provide exceptional furniture and interior design solutions that enhance the way people 
              live and work, while maintaining our commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-3">Quality Design</h3>
                <p className="text-dark-brown/80">
                  Every piece is carefully designed with attention to detail and aesthetic appeal.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔨</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-3">Expert Craftsmanship</h3>
                <p className="text-dark-brown/80">
                  Our skilled artisans ensure every product meets the highest standards of quality.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-3">Customer Focus</h3>
                <p className="text-dark-brown/80">
                  Your satisfaction is our priority, from consultation to final delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About