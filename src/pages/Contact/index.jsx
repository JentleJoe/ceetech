import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

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
      label: 'Hours',
      value: 'Mon - Sat: 8:00 AM - 6:00 PM',
      action: null
    }
  ]

  const socialMediaLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/ceetechfurniture', color: 'hover:text-blue-600' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/ceetechfurniture', color: 'hover:text-pink-600' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/ceetechfurniture', color: 'hover:text-blue-400' },
    { icon: Youtube, name: 'YouTube', url: 'https://youtube.com/ceetechfurniture', color: 'hover:text-red-600' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream text-dark-brown relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair mb-6 leading-tight text-dark-brown">
            Get in <span className="italic text-warm-brown">Touch</span>
          </h1>
          <p className="text-xl text-dark-brown/80 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? We'd love to hear from you. Reach out and let's create something beautiful together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-light-tan p-4 rounded-lg mb-4 inline-block">
                    <item.icon className="w-8 h-8 text-warm-brown mx-auto" />
                  </div>
                  <h3 className="font-semibold text-dark-brown mb-2">{item.label}</h3>
                  {item.action ? (
                    <a 
                      href={item.action}
                      className="text-dark-brown/80 hover:text-warm-brown transition-colors duration-300 block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-dark-brown/80">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-playfair text-dark-brown mb-6">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                {socialMediaLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-light-tan p-4 rounded-lg text-warm-brown transition-colors duration-300 ${social.color} hover:scale-110 transform`}
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16">
            <h3 className="text-2xl font-playfair text-dark-brown mb-6 text-center">Find Us</h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-warm-brown rounded-2xl p-12 text-cream">
            <h3 className="text-3xl font-playfair mb-4 text-cream">Ready to Start Your Project?</h3>
            <p className="text-lg text-cream/90 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your space. Contact us today for a free consultation and let's bring your furniture dreams to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2348165410110"
                className="bg-cream text-warm-brown px-8 py-3 rounded-lg font-medium hover:bg-soft-beige transition-all duration-300 transform hover:scale-105"
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
                className="border-2 border-cream text-cream px-8 py-3 rounded-lg font-medium hover:bg-cream hover:text-warm-brown transition-all duration-300"
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