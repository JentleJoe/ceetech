import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const ELFSIGHT_SCRIPT_SRC = 'https://elfsightcdn.com/platform.js'

const CustomerReviews = () => {
  const widgetSectionRef = useRef(null)
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false)

  // Defer widget activation until the user scrolls near this section.
  useEffect(() => {
    const section = widgetSectionRef.current
    if (!section) return

    if (!('IntersectionObserver' in window)) {
      setShouldLoadWidget(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadWidget(true)
          observer.disconnect()
        }
      },
      { root: null, rootMargin: '1000px 0px', threshold: 0.01 }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!shouldLoadWidget) return

    const existingScript =
      document.querySelector('script[data-elfsight-platform="true"]') ||
      document.querySelector(`script[src="${ELFSIGHT_SCRIPT_SRC}"]`)

    if (existingScript) return

    const script = document.createElement('script')
    script.src = ELFSIGHT_SCRIPT_SRC
    script.async = true
    script.defer = true
    script.dataset.elfsightPlatform = 'true'
    document.body.appendChild(script)
  }, [shouldLoadWidget])

  const reviews = [
    {
      id: 1,
      name: "Adebayo Okafor",
      location: "Benin City, Edo",
      rating: 5,
      text: "Earlier this year Ceetech furnitures was recommended to me, and to be honest, I got exactly what I want. The services was top notch and I got amazing value for my money. Since after our first transaction I introduced my friends and so far no complaints from anyone. Patronize them and be rest assured you are getting the best."
    },
    {
      id: 2,
      name: "Joshua Oseghale",
      location: "Lagos, Nigeria",
      rating: 5,
      text: "Ceetech Crafts is one of the few furniture brands that puts real intention into their craft. They’ve raised the standard and consistently deliver exceptional results. If you want furniture done so well that you won’t need anyone else, Ceetech Crafts is highly recommended."
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
    { number: "4.7/5", label: "Average Rating" },
    { number: "98%", label: "Would Recommend" },
    { number: "1-Year", label: "Warranty" }
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
                <h3 className="font-semibold text-charcoal">
                  {review.name}
                </h3>
                <p className="text-sm text-charcoal/80">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="mb-16" ref={widgetSectionRef}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-playfair text-charcoal mb-2">
              Verified Google Reviews
            </h3>
            <p className="text-charcoal/70">See what our customers are saying on Google</p>
          </div>
          {shouldLoadWidget ? (
            <div className="elfsight-app-96fad6cf-47ff-4f0b-acb0-f25bee36f551" data-elfsight-app-lazy></div>
          ) : (
            <div
              className="min-h-[220px] rounded-xl border border-charcoal/10 bg-white/50 animate-pulse"
              aria-hidden="true"
            ></div>
          )}
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
            <a 
              href="/contact" 
              className="inline-block bg-ivory-gold text-charcoal px-8 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
