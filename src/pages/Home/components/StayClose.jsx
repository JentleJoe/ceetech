
const StayClose = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/background.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-white font-playfair text-5xl md:text-6xl font-light leading-tight mb-8 animate-fade-in-up">
            Stay Close to the Craft
          </h2>
          
          <p className="text-white/90 text-lg leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Behind every piece of our furniture lies hours of meticulous craftsmanship. 
            From the selection of premium materials to the final finishing touches, 
            we pour our passion into creating furniture that stands the test of time.
          </p>

          <button className="bg-white text-dark-brown px-8 py-4 rounded-lg font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            View Our Work
          </button>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-8 right-8 grid grid-cols-3 gap-2 opacity-50">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
        ))}
      </div>
    </section>
  )
}

export default StayClose
