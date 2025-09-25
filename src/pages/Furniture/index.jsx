import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const Furniture = () => {
  const furnitureCategories = [
    {
      title: "Living Room Furniture",
      description: "Create a welcoming and stylish living space with our premium sofas, coffee tables, and entertainment units",
      image: "/placeholder.svg",
      products: [
        { name: "3-Seater Sofas", description: "Comfortable and elegant sofas for family gatherings" },
        { name: "L-Shaped Sectionals", description: "Maximize seating with our spacious sectional sofas" },
        { name: "Coffee Tables", description: "Stylish centerpieces in wood, glass, and metal finishes" },
        { name: "TV Units", description: "Modern entertainment centers with ample storage" },
        { name: "Accent Chairs", description: "Statement pieces to complement your living room" },
        { name: "Side Tables", description: "Functional and decorative occasional tables" }
      ]
    },
    {
      title: "Bedroom Furniture",
      description: "Transform your bedroom into a peaceful sanctuary with our carefully crafted beds, wardrobes, and storage solutions",
      image: "/placeholder.svg",
      products: [
        { name: "King Size Beds", description: "Luxurious beds with premium headboard designs" },
        { name: "Queen Size Beds", description: "Perfect balance of comfort and space efficiency" },
        { name: "Wardrobes", description: "Spacious storage with sliding and hinged door options" },
        { name: "Nightstands", description: "Bedside tables with drawers and open shelving" },
        { name: "Dressing Tables", description: "Elegant vanities with mirrors and storage" },
        { name: "Bedroom Sets", description: "Complete coordinated bedroom furniture collections" }
      ]
    },
    {
      title: "Dining Room Furniture",
      description: "Gather your family and friends around our beautiful dining tables and comfortable seating solutions",
      image: "/placeholder.svg",
      products: [
        { name: "6-Seater Dining Tables", description: "Perfect for family meals and entertaining" },
        { name: "4-Seater Dining Sets", description: "Compact solutions for smaller dining spaces" },
        { name: "Dining Chairs", description: "Comfortable chairs in various styles and materials" },
        { name: "Bar Stools", description: "Counter height seating for kitchen islands" },
        { name: "Buffets & Sideboards", description: "Storage and serving solutions for dining rooms" },
        { name: "Display Cabinets", description: "Showcase your finest dinnerware and collectibles" }
      ]
    },
    {
      title: "Office Furniture",
      description: "Boost your productivity with our ergonomic and stylish office furniture designed for modern workspaces",
      image: "/placeholder.svg",
      products: [
        { name: "Executive Desks", description: "Spacious desks with built-in storage and cable management" },
        { name: "Ergonomic Chairs", description: "Comfortable seating with lumbar support and adjustability" },
        { name: "Bookcases", description: "Open and closed storage for books and office supplies" },
        { name: "Filing Cabinets", description: "Organize documents with secure locking storage" },
        { name: "Conference Tables", description: "Meeting tables for collaborative workspaces" },
        { name: "Reception Furniture", description: "Welcome guests with stylish reception area furniture" }
      ]
    }
  ]

  const craftmanshipFeatures = [
    {
      title: "Premium Materials",
      description: "We source only the finest hardwoods, metals, and fabrics for our furniture",
      icon: "🌳"
    },
    {
      title: "Expert Craftsmanship",
      description: "Our skilled artisans bring decades of experience to every piece",
      icon: "🔨"
    },
    {
      title: "Custom Solutions",
      description: "Bespoke furniture designed to fit your specific needs and space",
      icon: "✏️"
    },
    {
      title: "Quality Guarantee",
      description: "Every piece comes with our comprehensive quality assurance",
      icon: "✅"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair text-dark-brown mb-6">
              Ceetech <span className="text-warm-brown">Furnitures</span>
            </h1>
            <p className="text-xl text-dark-brown/80 leading-relaxed mb-8">
              Discover our extensive collection of handcrafted furniture that combines style, comfort, and durability
            </p>
            <button className="bg-warm-brown text-cream px-8 py-3 rounded-lg text-lg font-semibold hover:bg-dark-brown transition-colors duration-200">
              View Our Collection
            </button>
          </div>
        </div>
      </div>

      {/* Craftsmanship Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown text-center mb-12">
              Why Choose Ceetech Furniture?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {craftmanshipFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-light-tan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-brown mb-3">{feature.title}</h3>
                  <p className="text-dark-brown/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Furniture Categories */}
      <section className="py-16 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown text-center mb-12">
              Our Furniture Categories
            </h2>
            <div className="space-y-16">
              {furnitureCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className={`p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h3 className="text-2xl md:text-3xl font-playfair text-dark-brown mb-4">{category.title}</h3>
                      <p className="text-dark-brown/80 mb-6 leading-relaxed">{category.description}</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {category.products.map((product, productIndex) => (
                          <div key={productIndex} className="border-l-4 border-warm-brown pl-4">
                            <h4 className="font-semibold text-dark-brown mb-1">{product.name}</h4>
                            <p className="text-sm text-dark-brown/70">{product.description}</p>
                          </div>
                        ))}
                      </div>
                      <button className="mt-6 bg-warm-brown text-cream px-6 py-2 rounded-lg hover:bg-dark-brown transition-colors duration-200">
                        Explore {category.title}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Furniture Section */}
      <section className="py-16 bg-warm-brown">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair text-cream mb-6">
              Need Custom Furniture?
            </h2>
            <p className="text-xl text-cream/90 mb-8">
              We specialize in creating bespoke furniture pieces tailored to your exact specifications and space requirements
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-cream bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">Custom Design</h3>
                <p className="text-cream/80 text-sm">Unique designs created just for you</p>
              </div>
              <div className="text-center">
                <div className="bg-cream bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📏</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">Perfect Fit</h3>
                <p className="text-cream/80 text-sm">Furniture that fits your space exactly</p>
              </div>
              <div className="text-center">
                <div className="bg-cream bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">Your Style</h3>
                <p className="text-cream/80 text-sm">Choose materials, colors, and finishes</p>
              </div>
            </div>
            <button className="bg-cream text-warm-brown px-8 py-3 rounded-lg text-lg font-semibold hover:bg-soft-beige transition-colors duration-200">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Furniture