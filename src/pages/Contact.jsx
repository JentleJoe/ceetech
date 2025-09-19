import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '08165410110',
      action: 'tel:+2348165410110'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '08165410110',
      action: 'https://wa.me/2348165410110?text=Hello%20Ceetech%2C%20I%27m%20interested%20in%20your%20furniture%20collection'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ceetechfurnitureandinteriors9@gmail.com',
      action: 'mailto:ceetechfurnitureandinteriors9@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '2nd Entrance Ebvuabugun Sawmill Off Sapele Road Benin City',
      action: null
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Sat: 7AM - 6PM',
      action: null
    }
  ]

  const socialMediaLinks = [
    { icon: Facebook, name: 'Facebook', url: socialMedia.facebook, color: 'hover:text-blue-600' },
    { icon: Instagram, name: 'Instagram', url: socialMedia.instagram, color: 'hover:text-pink-600' },
    { icon: Twitter, name: 'Twitter', url: socialMedia.twitter, color: 'hover:text-blue-400' },
    { icon: Youtube, name: 'YouTube', url: socialMedia.youtube, color: 'hover:text-red-600' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-amber-800 to-amber-900 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair mb-6 leading-tight text-white">
            Get in <span className="italic text-white">Touch</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? We'd love to hear from you. Reach out and let's create something beautiful together.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Contact Information */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair text-gray-900 mb-6">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Whether you're looking for a custom piece, have questions about our collection, or need design consultation, we're here to help bring your vision to life.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-amber-100 p-4 rounded-lg mb-4 inline-block">
                    <item.icon className="w-8 h-8 text-amber-700 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.label}</h3>
                  {item.action ? (
                    <a 
                      href={item.action}
                      className="text-gray-700 hover:text-amber-700 transition-colors duration-300 block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-700">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-playfair text-gray-900 mb-6">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                {socialMediaLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-amber-100 p-4 rounded-lg text-amber-700 transition-colors duration-300 ${social.color} hover:scale-110 transform`}
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16">
            <h3 className="text-2xl font-playfair text-gray-900 mb-6 text-center">Find Us</h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126466.82290754766!2d5.535678074279785!3d6.338254199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3a7a3d0b2e9%3A0x4d4a75a8cffc6b5c!2sBenin%20City%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1735398427890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ceetech Location - Benin City, Nigeria"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-amber-800 to-amber-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-playfair mb-4 text-white">Ready to Start Your Project?</h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your space. Contact us today for a free consultation and let's bring your furniture dreams to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2348165410110"
                className="bg-white text-amber-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Call Now: 08165410110
              </a>
              <a
                href="https://wa.me/2348165410110?text=Hello%20Ceetech%2C%20I%27m%20interested%20in%20your%20furniture%20collection"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:ceetechfurnitureandinteriors9@gmail.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-amber-800 transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
