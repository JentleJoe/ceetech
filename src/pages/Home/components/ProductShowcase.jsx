
const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 bg-soft-beige">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Mirrors */}
          <div className="relative overflow-hidden rounded-3xl bg-light-tan h-96 group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-playfair mb-2">Mirrors made for every space</h3>
              <p className="text-white/90 mb-4 max-w-sm">Add depth and light to your interior with our handcrafted mirror collection.</p>
              <button className="text-white hover:text-light-tan transition-colors duration-300 border-b border-white hover:border-light-tan pb-1 font-medium">
                Shop Mirrors
              </button>
            </div>
          </div>

          {/* Right Card - Home Office */}
          <div className="relative overflow-hidden rounded-3xl bg-warm-brown h-96 group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-playfair mb-2">New In: Home Office</h3>
              <p className="text-white/90 mb-4 max-w-sm">Create a productive workspace with our elegant office furniture collection.</p>
              <button className="text-white hover:text-light-tan transition-colors duration-300 border-b border-white hover:border-light-tan pb-1 font-medium">
                Shop Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
