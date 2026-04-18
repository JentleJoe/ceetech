import { MessageCircle, Facebook, Instagram } from 'lucide-react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import OptimizedPicture from '../../components/OptimizedPicture'
import SEO from '../../components/SEO'
import logoIconGold from '../../assets/logoIconGold.png'
import logoIconWhite from '../../assets/logoIconWhite.png'

// Import images
import workshopAvif from '../../assets/workshop.jpg?w=640;960;1280;1600;1920;2400&format=avif&as=srcset&withoutEnlargement'
import workshopWebp from '../../assets/workshop.jpg?w=640;960;1280;1600;1920;2400&format=webp&as=srcset&withoutEnlargement'
import workshopJpgSrcSet from '../../assets/workshop.jpg?w=640;960;1280;1600;1920;2400&format=jpg&as=srcset&withoutEnlargement'
import workshopJpg from '../../assets/workshop.jpg?w=1600&format=jpg&withoutEnlargement'
import workmanAvif from '../../assets/workman.jpg?w=400;640;768;960;1200;1600;2000&format=avif&as=srcset&withoutEnlargement'
import workmanWebp from '../../assets/workman.jpg?w=400;640;768;960;1200;1600;2000&format=webp&as=srcset&withoutEnlargement'
import workmanJpgSrcSet from '../../assets/workman.jpg?w=400;640;768;960;1200;1600;2000&format=jpg&as=srcset&withoutEnlargement'
import workmanJpg from '../../assets/workman.jpg?w=1200&format=jpg&withoutEnlargement'

const About = () => {
  const aboutSeoSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Ceetech Crafts',
      url: 'https://ceetechcrafts.com/about',
      description: 'Learn about Ceetech Crafts, a furniture manufacturer and interior design company in Benin City, Edo State.',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Ceetech Crafts',
        url: 'https://ceetechcrafts.com'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Ceetech Crafts',
      url: 'https://ceetechcrafts.com',
      telephone: '+234-816-541-0110',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2nd Entrance Ebvuabugun Sawmill Off Sapele Road',
        addressLocality: 'Benin City',
        addressRegion: 'Edo State',
        addressCountry: 'NG'
      },
      areaServed: ['Benin City', 'Edo State', 'Nigeria'],
      sameAs: [
        'https://www.facebook.com/share/15y5a4wA4b/',
        'https://www.instagram.com/ceetech_official?igsh=d3pkdHdxbHNma3pu',
        'https://tiktok.com/@ctechfurniture.interior'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Ceetech Crafts | Furniture & Interior Company in Benin City"
        description="Learn about Ceetech Crafts, a Benin City furniture manufacturer and interior design company delivering custom furniture, installations, and professional training."
        keywords="about ceetech crafts, furniture company benin city, furniture manufacturer edo state, interior design company benin, custom furniture benin"
        canonical="https://ceetechcrafts.com/about"
        ogType="website"
        schema={aboutSeoSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 relative min-h-[60vh] flex items-center overflow-hidden">
        <OptimizedPicture
          alt="Ceetech workshop background"
          avifSrcSet={workshopAvif}
          webpSrcSet={workshopWebp}
          fallbackSrcSet={workshopJpgSrcSet}
          fallbackSrc={workshopJpg}
          sizes="100vw"
          pictureClassName="absolute inset-0 block"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              <img 
                src={logoIconGold} 
                alt="Ceetech Crafts Logo" 
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6 drop-shadow-lg">
              About <span className="text-ivory-gold">Ceetech Crafts</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
              Crafted to Inspire - Your trusted partner for custom furniture, interior design, and professional training
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
                  we've grown from a passion project into a premier destination for custom furniture 
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
                <OptimizedPicture
                  alt="Ceetech Crafts Workshop" 
                  avifSrcSet={workmanAvif}
                  webpSrcSet={workmanWebp}
                  fallbackSrcSet={workmanJpgSrcSet}
                  fallbackSrc={workmanJpg}
                  sizes="(max-width: 768px) 100vw, 50vw"
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
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <img 
                src={logoIconWhite} 
                alt="Ceetech Crafts Logo" 
                className="h-10 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We don't just design interiors — we craft experiences. Our mission is to be Nigeria's leading 
              furniture manufacturer and interior design company, transforming ordinary spaces into 
              extraordinary environments. We combine traditional craftsmanship with modern innovation to 
              deliver solutions that reflect our clients' unique personalities and inspire their daily lives.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center bg-ivory-gold p-6 rounded-xl shadow-lg border border-ivory-gold/20">
                <h4 className="font-semibold text-charcoal mb-2">10+ Years</h4>
                <p className="text-sm text-charcoal/70">Of Excellence in Benin City</p>
              </div>
              <div className="text-center bg-ivory-gold p-6 rounded-xl shadow-lg border border-ivory-gold/20">
                <h4 className="font-semibold text-charcoal mb-2">3 Locations</h4>
                <p className="text-sm text-charcoal/70">Factory + 2 Showrooms</p>
              </div>
              <div className="text-center bg-ivory-gold p-6 rounded-xl shadow-lg border border-ivory-gold/20">
                <h4 className="font-semibold text-charcoal mb-2">200+</h4>
                <p className="text-sm text-charcoal/70">Happy Customers Served</p>
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
                <div className="bg-charcoal p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-jet-black transition-colors duration-300 border border-ivory-gold/20">
                  <span className="text-3xl text-ivory-gold">🪑</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Custom Furniture</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Residential and commercial furniture tailored to your specific needs and space requirements.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-charcoal p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-jet-black transition-colors duration-300 border border-ivory-gold/20">
                  <span className="text-3xl text-ivory-gold">🏠</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Interior Design</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Complete interior transformations including space planning, design consultation, and execution.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-charcoal p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-jet-black transition-colors duration-300 border border-ivory-gold/20">
                  <span className="text-3xl text-ivory-gold">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Installation Services</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  POP ceiling installation, tiling, flooring, and complete renovation services.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-charcoal p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-jet-black transition-colors duration-300 border border-ivory-gold/20">
                  <span className="text-3xl text-ivory-gold">🎓</span>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-charcoal text-center mb-12">
              Why Choose Ceetech Crafts?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-ivory-gold p-6 rounded-xl shadow-lg border border-ivory-gold/20 text-center">
                <div className="bg-charcoal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-ivory-gold">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Local Manufacturing</h3>
                <p className="text-charcoal/70">
                  We manufacture right here in Benin City, ensuring quality control and supporting the local economy.
                </p>
              </div>
              <div className="bg-ivory-gold p-6 rounded-xl shadow-lg border border-ivory-gold/20 text-center">
                <div className="bg-charcoal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-ivory-gold">✂️</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Custom Solutions</h3>
                <p className="text-charcoal/70">
                  Every project is tailored to your specific requirements, space, and budget constraints.
                </p>
              </div>
              <div className="bg-ivory-gold p-6 rounded-xl shadow-lg border border-ivory-gold/20 text-center">
                <div className="bg-charcoal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-ivory-gold">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">End-to-End Service</h3>
                <p className="text-charcoal/70">
                  From initial consultation to final installation, we handle every aspect of your project.
                </p>
              </div>
              <div className="bg-ivory-gold p-6 rounded-xl shadow-lg border border-ivory-gold/20 text-center">
                <div className="bg-charcoal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-ivory-gold">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Proven Quality</h3>
                <p className="text-charcoal/70">
                  Over 5 years of excellence with 200+ satisfied customers across Edo State.
                </p>
              </div>
              <div className="bg-ivory-gold p-6 rounded-xl shadow-lg border border-ivory-gold/20 text-center">
                <div className="bg-charcoal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-ivory-gold">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Fair Pricing</h3>
                <p className="text-charcoal/70">
                  Competitive prices without compromising on quality or service delivery.
                </p>
              </div>
              <div className="bg-ivory-gold p-6 rounded-xl shadow-lg border border-ivory-gold/20 text-center">
                <div className="bg-charcoal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-ivory-gold">📍</span>
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

      {/* Social Media Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-playfair text-charcoal mb-4">See Our Work in Action</h3>
            <p className="text-charcoal/70 mb-6">
              Follow us on social media to see our latest projects, design inspirations, and furniture collections
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.facebook.com/share/15y5a4wA4b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 text-white p-4 rounded-xl transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl hover:bg-blue-700"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/ceetech_official?igsh=d3pkdHdxbHNma3pu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-pink-600 text-white p-4 rounded-xl transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl hover:bg-pink-700"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://tiktok.com/@ctechfurniture.interior" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-900 text-white p-4 rounded-xl transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl hover:bg-black"
                aria-label="Visit our TikTok page"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/2348138461999" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-600 text-white p-4 rounded-xl transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl hover:bg-green-700"
                aria-label="Chat with us on WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Visit our factory showroom to see our craftsmanship firsthand, or contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348138461999?text=Hello%20Ceetech%20Crafts%2C%20I%27m%20interested%20in%20your%20services"
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
                href="tel:+2348138461999"
                className="border-2 border-ivory-gold text-ivory-gold px-8 py-4 rounded-xl font-semibold hover:bg-ivory-gold hover:text-charcoal transition-colors duration-300 shadow-lg"
              >
                Call: +234 813 846 1999
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