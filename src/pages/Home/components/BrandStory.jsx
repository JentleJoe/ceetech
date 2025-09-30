
const BrandStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-playfair text-dark-brown mb-8 leading-tight">
              At Ceetech Crafts, <span className="italic">we believe</span> furniture after all, do more than just <span className="italic">fill a space</span>. It could tell a story.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our pieces are thoughtfully designed to blend <span className="text-warm-brown font-medium">warmth</span>, <span className="text-warm-brown font-medium">function</span>, and enduring <span className="text-warm-brown font-medium">beauty</span>.
              </p>
            </div>

            <button className="mt-8 text-dark-brown hover:text-warm-brown font-medium tracking-wide transition-colors duration-300 border-b border-dark-brown hover:border-warm-brown pb-1">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Crafted wooden furniture detail"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
