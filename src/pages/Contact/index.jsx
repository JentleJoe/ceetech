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
      label: 'Primary Location (Factory)',
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
      <section className="py-20 bg-soft-gold">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair text-charcoal mb-4">
                Let's Connect
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Multiple ways to reach us for all your furniture and interior needs
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-charcoal p-3 rounded-lg flex-shrink-0">
                      <item.icon className="w-6 h-6 text-ivory-gold" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-charcoal mb-2 text-lg">{item.label}</h3>
                      <p className="text-charcoal/70 mb-4 whitespace-pre-line break-words">
                        {item.displayValue}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-3">
                        {/* Copy Button - Only show if copyValue exists */}
                        {item.copyValue && (
                          <button
                            onClick={() => copyToClipboard(item.copyValue, item.label)}
                            className="flex items-center space-x-2 px-4 py-2 bg-soft-gold hover:bg-ivory-gold text-charcoal rounded-lg transition-colors duration-200 text-sm"
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
              <h3 className="text-2xl font-playfair text-charcoal mb-6 text-center">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="tel:+2348165410110"
                  className="flex items-center justify-center space-x-3 bg-green-500 hover:scale-105 text-white p-4 rounded-xl transition-transform duration-200 font-medium"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/2348165410110?text=Hello%20Ceetech%20Crafts%2C%20I%27m%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-600 hover:scale-105 text-white p-4 rounded-xl transition-transform duration-200 font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:ceetechfurnitureandinteriors9@gmail.com?subject=Inquiry%20about%20Ceetech%20Crafts%20Services"
                  className="flex items-center justify-center space-x-3 bg-blue-500 hover:scale-105 text-white p-4 rounded-xl transition-transform duration-200 font-medium"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-playfair text-charcoal mb-6">Follow Our Journey</h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
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

          {/* All Locations Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-playfair text-charcoal mb-4 text-center">Our Locations in Benin City</h3>
            <p className="text-charcoal/70 text-center mb-8 max-w-2xl mx-auto">
              Visit us at any of our locations. Our factory showroom is our primary location with the full collection and manufacturing facility.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Primary Factory Location */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-charcoal relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-charcoal text-ivory-gold px-4 py-1 rounded-full text-sm font-semibold">PRIMARY LOCATION</span>
                </div>
                <div className="text-center pt-4">
                  <div className="bg-charcoal p-3 rounded-lg w-fit mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-ivory-gold" />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">Factory & Main Showroom</h4>
                  <p className="text-sm text-charcoal/70 mb-6 leading-relaxed">2nd Entrance Ebvuabugun Sawmill Off Sapele Road, Benin City</p>
                  <a
                    href="https://maps.google.com/?q=2nd+Entrance+Ebvuabugun+Sawmill+Off+Sapele+Road+Benin+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 bg-charcoal text-ivory-gold px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Showroom 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className="bg-ivory-gold p-3 rounded-lg w-fit mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-charcoal" />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">Showroom 1 - Oka</h4>
                  <p className="text-sm text-charcoal/70 mb-6 leading-relaxed">40 Country Home Rd, Oka, Benin City 300102, Edo</p>
                  <a
                    href="https://maps.google.com/?q=40+Country+Home+Rd+Oka+Benin+City+300102+Edo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Showroom 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className="bg-ivory-gold p-3 rounded-lg w-fit mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-charcoal" />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-2">Showroom 2</h4>
                  <p className="text-sm text-charcoal/70 mb-6 leading-relaxed">456 Mission Road, Benin City, Edo State</p>
                  <a
                    href="https://maps.google.com/?q=456+Mission+Road+Benin+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Recommendation Banner */}
            <div className="bg-soft-gold/50 border border-charcoal/20 rounded-xl p-6 text-center">
              <h4 className="font-semibold text-charcoal mb-2">📍 Recommended Visit</h4>
              <p className="text-charcoal/80 mb-4">For the best experience and full collection access, we recommend visiting our <strong>Factory & Main Showroom</strong> location.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+2348165410110"
                  className="flex items-center justify-center space-x-2 bg-charcoal text-ivory-gold px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Before Visit</span>
                </a>
                <a
                  href="https://wa.me/2348165410110?text=Hello%20Ceetech%20Crafts%2C%20I%27d%20like%20to%20visit%20your%20main%20showroom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Factory Location Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 pb-0">
              <h3 className="text-2xl font-playfair text-charcoal mb-4 text-center">Factory & Main Showroom Location</h3>
              <p className="text-charcoal/70 text-center mb-6 max-w-2xl mx-auto">
                Experience our furniture collections in person at our main factory location. See the quality, craftsmanship, and manufacturing process up close.
              </p>
              
              {/* Location Details */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-soft-gold p-4 rounded-lg">
                  <Clock className="w-6 h-6 text-charcoal mx-auto mb-2" />
                  <h4 className="font-semibold text-charcoal text-sm mb-1">Opening Hours</h4>
                  <p className="text-xs text-charcoal/70">Mon - Sat: 7AM - 6PM</p>
                </div>
                <div className="text-center bg-soft-gold p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-charcoal mx-auto mb-2" />
                  <h4 className="font-semibold text-charcoal text-sm mb-1">Factory Location</h4>
                  <p className="text-xs text-charcoal/70">Off Sapele Road, Benin City</p>
                </div>
                <div className="text-center bg-soft-gold p-4 rounded-lg">
                  <Phone className="w-6 h-6 text-charcoal mx-auto mb-2" />
                  <h4 className="font-semibold text-charcoal text-sm mb-1">Call Ahead</h4>
                  <p className="text-xs text-charcoal/70">+234 816 541 0110</p>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0123456789!2d5.6037168!3d6.3350000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnMDYuMCJOIDXCsDM2JzEzLjQiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng&q=Ebvuabugun+Sawmill+Sapele+Road+Benin+City"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-b-2xl"
                title="Ceetech Crafts Location Map"
              ></iframe>
              
              {/* Map Overlay Info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="bg-charcoal p-2 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-ivory-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm mb-1">Ceetech Crafts Factory</h4>
                    <p className="text-xs text-charcoal font-medium mb-1">PRIMARY LOCATION</p>
                    <p className="text-xs text-charcoal/70 leading-relaxed mb-2">2nd Entrance Ebvuabugun Sawmill, Off Sapele Road, Benin City</p>
                    <div className="flex items-center space-x-3 mt-3">
                      <a
                        href="https://maps.google.com/?q=2nd+Entrance+Ebvuabugun+Sawmill+Off+Sapele+Road+Benin+City"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 bg-charcoal text-ivory-gold px-3 py-1.5 rounded-md text-xs font-medium hover:scale-105 transition-transform duration-200"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Directions</span>
                      </a>
                      <a
                        href="tel:+2348165410110"
                        className="inline-flex items-center space-x-1 bg-green-600 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:scale-105 transition-transform duration-200"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Controls Helper */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-md">
                <p className="text-xs text-gray-600">📍 Click and drag to explore the map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-ivory-gold">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Don't wait to bring your vision to life. Get in touch today for a free consultation and let's create something extraordinary together.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-ivory-gold/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <PhoneCall className="w-8 h-8 text-ivory-gold" />
                </div>
                <h3 className="text-lg font-semibold text-ivory-gold mb-1">Free Consultation</h3>
                <p className="text-white/80 text-sm">Talk to our experts</p>
              </div>
              <div className="text-center">
                <div className="bg-ivory-gold/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-8 h-8 text-ivory-gold" />
                </div>
                <h3 className="text-lg font-semibold text-ivory-gold mb-1">Quick Response</h3>
                <p className="text-white/80 text-sm">We reply within hours</p>
              </div>
              <div className="text-center">
                <div className="bg-ivory-gold/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Send className="w-8 h-8 text-ivory-gold" />
                </div>
                <h3 className="text-lg font-semibold text-ivory-gold mb-1">Custom Solutions</h3>
                <p className="text-white/80 text-sm">Tailored to your needs</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2348165410110"
                className="flex items-center justify-center space-x-3 bg-ivory-gold text-charcoal px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call: +234 816 541 0110</span>
              </a>
              <a
                href="https://wa.me/2348165410110?text=Hello%20Ceetech%20Crafts%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
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