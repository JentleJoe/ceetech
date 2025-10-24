import { Star, Quote } from "lucide-react"

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Adebayo Okafor",
      location: "Benin City, Edo",
      rating: 5,
      text: "Absolutely love my dining set from Ceetech Crafts! The craftsmanship is exceptional and it's become the centerpiece of our home. The wood quality is outstanding."
    },
    {
      id: 2,
      name: "Chioma Nwankwo",
      location: "Lagos, Nigeria",
      rating: 5,
      text: "The attention to detail in every piece is remarkable. Our living room has been completely transformed with Ceetech Crafts' furniture. Highly recommend!"
    },
    {
      id: 3,
      name: "Ahmed Yusuf",
      location: "Abuja, FCT",
      rating: 5,
      text: "From ordering to delivery, everything was seamless. The furniture exceeded my expectations and the customer service was exceptional throughout."
    }
  ]

  const stats = [
    { number: "200+", label: "Happy Customers" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Would Recommend" },
    { number: "5-Year", label: "Warranty" }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <section id="reviews" className="py-20 relative bg-gradient-to-br from-soft-gold via-ivory-gold/30 to-soft-gold/80">
      {/* Subtle pattern overlay for texture */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.15'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10 10-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair text-charcoal mb-6 leading-tight">
            What Our <span className="italic text-charcoal/80">Customers</span> Say
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Discover why thousands of families trust Ceetech Crafts to bring warmth and beauty to their homes
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-playfair text-charcoal font-semibold mb-2">
                {stat.number}
              </div>
              <div className="text-charcoal/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-charcoal opacity-60" />
              </div>

              {/* Review Text */}
              <p className="text-charcoal/70 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Customer Info */}
              <div>
                <h4 className="font-semibold text-charcoal">
                  {review.name}
                </h4>
                <p className="text-sm text-charcoal/60">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-charcoal/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-ivory-gold/20">
            <h3 className="text-2xl font-playfair text-ivory-gold mb-4">
              Join Our Community of Satisfied Customers
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Experience the Ceetech Crafts difference with furniture that tells your story
            </p>
            <button className="bg-ivory-gold text-charcoal px-8 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
