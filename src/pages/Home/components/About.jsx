import { Award, Users, Leaf, Clock } from "lucide-react"

import workmanImg from '../../../assets/workman.jpg'

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Exceptional Craftsmanship",
      description: "Every piece is meticulously handcrafted by skilled artisans using time-honored techniques passed down through generations."
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "We source only the finest, responsibly harvested woods and eco-friendly materials to create furniture that's both beautiful and sustainable."
    },
    {
      icon: Users,
      title: "Family Heritage",
      description: "Founded as a family business, we bring the warmth and care of family values to every interaction and every piece we create."
    },
    {
      icon: Clock,
      title: "Timeless Design",
      description: "Our designs transcend trends, creating pieces that will remain beautiful and relevant for generations to come."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-playfair text-dark-brown mb-8 leading-tight">
              About <span className="italic text-warm-brown">Ceetech Crafts</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ceetech Crafts has established itself as a leader in <span className="text-warm-brown font-medium">exceptional furniture craftsmanship</span> and interior design. From our modern factory in Benin City, we've built a reputation for delivering premium furniture solutions that exceed expectations.
              </p>
              
              <p>
                We believe that furniture should do more than fill a space—it should tell your story, reflect your values, and create lasting memories. Every piece we create combines <span className="text-warm-brown font-medium">innovative techniques</span> with <span className="text-warm-brown font-medium">contemporary design</span>, resulting in furniture that's both functional and beautifully crafted.
              </p>
              
              <p>
                Our commitment extends beyond beautiful furniture. We're dedicated to <span className="text-warm-brown font-medium">quality materials</span>, skilled craftsmanship, and creating custom solutions that transform spaces and enhance lives for years to come.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/about" className="bg-warm-brown text-white px-8 py-3 rounded-lg font-medium tracking-wide hover:bg-dark-brown transition-all duration-300 transform hover:scale-105 text-center">
                Our Story
              </a>
              <a href="/contact#locations" className="border-2 border-warm-brown text-warm-brown px-8 py-3 rounded-lg font-medium tracking-wide hover:bg-warm-brown hover:text-white transition-all duration-300 text-center">
                Visit Showroom
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src={workmanImg}
                alt="Ceetech craftsman at work"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-playfair text-warm-brown font-semibold">5+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-cream rounded-2xl p-6 mb-6 group-hover:bg-warm-brown transition-colors duration-300">
                <value.icon className="w-8 h-8 text-warm-brown group-hover:text-white mx-auto transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-playfair text-dark-brown mb-4 font-semibold">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
