
import workshopImg from '../../../assets/workshop.jpg'

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
                From <span className="text-warm-brown font-medium">custom furniture solutions</span> to <span className="text-warm-brown font-medium">complete interior transformations</span>, we craft spaces that reflect your unique style and needs.
              </p>
              <p>
                Our comprehensive services include residential and commercial furniture, interior design, POP ceilings, tiling, and professional training through <span className="text-warm-brown font-medium">Ceetech Academy</span>.
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
                src={workshopImg}
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
