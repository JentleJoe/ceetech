import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, MessageCircle, Copy, CheckCircle2, ExternalLink, Send, PhoneCall } from 'lucide-react'
import { useState } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const Contact = () => {
  const [copiedText, setCopiedText] = useState('')

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(label)
      setTimeout(() => setCopiedText(''), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '08165410110',
      displayValue: '+234 816 541 0110',
      copyValue: '+2348165410110',
      actions: [
        { icon: PhoneCall, label: 'Call', href: 'tel:+2348165410110', color: 'bg-green-500 hover:bg-green-600' },
        { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/2348165410110?text=Hello%20Ceetech%20Crafts%2C%20I%27m%20interested%20in%20your%20services', color: 'bg-green-600 hover:bg-green-700' }
      ]
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ceetechfurnitureandinteriors9@gmail.com',
      displayValue: 'ceetechfurnitureandinteriors9@gmail.com',
      copyValue: 'ceetechfurnitureandinteriors9@gmail.com',
      actions: [
        { icon: Send, label: 'Send Email', href: 'mailto:ceetechfurnitureandinteriors9@gmail.com?subject=Inquiry%20about%20Ceetech%20Crafts%20Services', color: 'bg-blue-500 hover:bg-blue-600' }
      ]
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '2nd Entrance Ebvuabugun Sawmill Off Sapele Road Benin City, Edo State',
      displayValue: '2nd Entrance Ebvuabugun Sawmill Off Sapele Road Benin City, Edo State',
      copyValue: '2nd Entrance Ebvuabugun Sawmill Off Sapele Road Benin City, Edo State',
      actions: [
        { icon: ExternalLink, label: 'Get Directions', href: 'https://maps.google.com/?q=2nd+Entrance+Ebvuabugun+Sawmill+Off+Sapele+Road+Benin+City', color: 'bg-red-500 hover:bg-red-600' }
      ]
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Sat: 7:00 AM - 6:00 PM\nSun: Closed',
      displayValue: 'Mon - Sat: 7:00 AM - 6:00 PM\nSun: Closed',
      copyValue: null,
      actions: []
    }
  ]

  const socialMediaLinks = [
    { 
      icon: Facebook, 
      name: 'Facebook', 
      url: 'https://www.facebook.com/share/15y5a4wA4b/', 
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-500'
    },
    { 
      icon: Instagram, 
      name: 'Instagram', 
      url: 'https://instagram.com/ceetechfurniture', 
      color: 'hover:bg-pink-600',
      bgColor: 'bg-pink-500'
    },
    { 
      icon: Twitter, 
      name: 'Twitter', 
      url: 'https://twitter.com/ceetechfurniture', 
      color: 'hover:bg-blue-400',
      bgColor: 'bg-blue-400'
    },
    { 
      icon: Youtube, 
      name: 'YouTube', 
      url: 'https://youtube.com/ceetechfurniture', 
      color: 'hover:bg-red-600',
      bgColor: 'bg-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative min-h-[55vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-playfair mb-6 leading-tight text-white drop-shadow-lg">
            Get in <span className="italic text-light-tan">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Ready to transform your space? We'd love to hear from you. Reach out and let's create something beautiful together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mb-4">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Multiple ways to reach us for all your furniture and interior needs
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-warm-brown p-3 rounded-lg flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-dark-brown mb-2 text-lg">{item.label}</h3>
                      <p className="text-gray-600 mb-4 whitespace-pre-line break-words">
                        {item.displayValue}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-3">
                        {/* Copy Button - Only show if copyValue exists */}
                        {item.copyValue && (
                          <button
                            onClick={() => copyToClipboard(item.copyValue, item.label)}
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 text-sm"
                          >
                            {copiedText === item.label ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span className="text-green-600">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        )}

                        {/* Action Buttons */}
                        {item.actions.map((action, actionIndex) => (
                          <a
                            key={actionIndex}
                            href={action.href}
                            target={action.href.startsWith('http') ? '_blank' : '_self'}
                            rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`flex items-center space-x-2 px-4 py-2 text-white rounded-lg transition-colors duration-200 text-sm ${action.color}`}
                          >
                            <action.icon className="w-4 h-4" />
                            <span>{action.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
              <h3 className="text-2xl font-playfair text-dark-brown mb-6 text-center">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="tel:+2348165410110"
                  className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-colors duration-200 font-medium"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/2348165410110?text=Hello%20Ceetech%20Crafts%2C%20I%27m%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl transition-colors duration-200 font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:ceetechfurnitureandinteriors9@gmail.com?subject=Inquiry%20about%20Ceetech%20Crafts%20Services"
                  className="flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl transition-colors duration-200 font-medium"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-playfair text-dark-brown mb-6">Follow Our Journey</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Stay updated with our latest projects, design inspirations, and furniture collections
              </p>
              <div className="flex justify-center space-x-4">
                {socialMediaLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bgColor} ${social.color} text-white p-4 rounded-xl transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-xl`}
                    title={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Location & Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 pb-0">
              <h3 className="text-2xl font-playfair text-dark-brown mb-4 text-center">Visit Our Showroom</h3>
              <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
                Experience our furniture collections in person. Visit our showroom in Benin City to see the quality and craftsmanship up close.
              </p>
            </div>
            
            {/* Interactive Map Placeholder */}
            <div className="relative">
              <div 
                className="h-80 bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-3" />
                    <h4 className="text-xl font-semibold mb-2">Ceetech Crafts Showroom</h4>
                    <p className="text-sm opacity-90 mb-4">2nd Entrance Ebvuabugun Sawmill<br />Off Sapele Road, Benin City</p>
                    <a
                      href="https://maps.google.com/?q=2nd+Entrance+Ebvuabugun+Sawmill+Off+Sapele+Road+Benin+City"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-white text-dark-brown px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-cream">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-cream/90 mb-8 leading-relaxed">
              Don't wait to bring your vision to life. Get in touch today for a free consultation and let's create something extraordinary together.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-cream/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <PhoneCall className="w-8 h-8 text-cream" />
                </div>
                <h3 className="text-lg font-semibold text-cream mb-1">Free Consultation</h3>
                <p className="text-cream/80 text-sm">Talk to our experts</p>
              </div>
              <div className="text-center">
                <div className="bg-cream/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-8 h-8 text-cream" />
                </div>
                <h3 className="text-lg font-semibold text-cream mb-1">Quick Response</h3>
                <p className="text-cream/80 text-sm">We reply within hours</p>
              </div>
              <div className="text-center">
                <div className="bg-cream/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Send className="w-8 h-8 text-cream" />
                </div>
                <h3 className="text-lg font-semibold text-cream mb-1">Custom Solutions</h3>
                <p className="text-cream/80 text-sm">Tailored to your needs</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2348165410110"
                className="flex items-center justify-center space-x-3 bg-cream text-warm-brown px-8 py-4 rounded-xl font-semibold hover:bg-soft-beige transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call: +234 816 541 0110</span>
              </a>
              <a
                href="https://wa.me/2348165410110?text=Hello%20Ceetech%20Crafts%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
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