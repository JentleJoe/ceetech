
const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 bg-soft-beige">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Custom Furniture Solutions */}
          <div className="relative overflow-hidden rounded-3xl bg-light-tan h-96 group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-playfair mb-2">Custom Furniture Solutions</h3>
              <p className="text-white/90 mb-4 max-w-sm">Tailored furniture designed to perfectly fit your space and lifestyle needs.</p>
              <button className="text-white hover:text-light-tan transition-colors duration-300 border-b border-white hover:border-light-tan pb-1 font-medium">
                View Furniture
              </button>
            </div>
          </div>

          {/* Right Card - Professional Interior Services */}
          <div className="relative overflow-hidden rounded-3xl bg-warm-brown h-96 group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-playfair mb-2">Professional Interior Services</h3>
              <p className="text-white/90 mb-4 max-w-sm">Complete interior design, POP ceilings, tiling, and renovation services.</p>
              <button className="text-white hover:text-light-tan transition-colors duration-300 border-b border-white hover:border-light-tan pb-1 font-medium">
                View Interiors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
