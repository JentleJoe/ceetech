
import OptimizedPicture from '../../../components/OptimizedPicture'
import residentialFurnitureAvif from '../../../assets/residential-furniture.jpg?w=400;640;800;1000;1280;1500&format=avif&as=srcset&withoutEnlargement'
import residentialFurnitureWebp from '../../../assets/residential-furniture.jpg?w=400;640;800;1000;1280;1500&format=webp&as=srcset&withoutEnlargement'
import residentialFurnitureJpgSrcSet from '../../../assets/residential-furniture.jpg?w=400;640;800;1000;1280;1500&format=jpg&as=srcset&withoutEnlargement'
import residentialFurnitureJpg from '../../../assets/residential-furniture.jpg?w=1000&format=jpg&withoutEnlargement'
import interiorAvif from '../../../assets/interiror.jpg?w=400;640;800;1000;1280;1600;2000&format=avif&as=srcset&withoutEnlargement'
import interiorWebp from '../../../assets/interiror.jpg?w=400;640;800;1000;1280;1600;2000&format=webp&as=srcset&withoutEnlargement'
import interiorJpgSrcSet from '../../../assets/interiror.jpg?w=400;640;800;1000;1280;1600;2000&format=jpg&as=srcset&withoutEnlargement'
import interiorJpg from '../../../assets/interiror.jpg?w=1000&format=jpg&withoutEnlargement'

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 bg-soft-beige">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Custom Furniture Solutions */}
          <div className="relative overflow-hidden rounded-3xl bg-soft-gold h-96 group cursor-pointer">
            <OptimizedPicture
              alt="Custom furniture solution showcase"
              avifSrcSet={residentialFurnitureAvif}
              webpSrcSet={residentialFurnitureWebp}
              fallbackSrcSet={residentialFurnitureJpgSrcSet}
              fallbackSrc={residentialFurnitureJpg}
              sizes="(max-width: 1024px) 100vw, 50vw"
              pictureClassName="absolute inset-0 block"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-playfair mb-2">Custom Furniture Solutions</h3>
              <p className="text-white/90 mb-4 max-w-sm">Tailored furniture designed to perfectly fit your space and lifestyle needs.</p>
              <a href="/furniture" className="text-white hover:text-light-tan transition-colors duration-300 border-b border-white hover:border-light-tan pb-1 font-medium">
                View Furniture
              </a>
            </div>
          </div>

          {/* Right Card - Professional Interior Services */}
          <div className="relative overflow-hidden rounded-3xl bg-charcoal h-96 group cursor-pointer">
            <OptimizedPicture
              alt="Professional interior services showcase"
              avifSrcSet={interiorAvif}
              webpSrcSet={interiorWebp}
              fallbackSrcSet={interiorJpgSrcSet}
              fallbackSrc={interiorJpg}
              sizes="(max-width: 1024px) 100vw, 50vw"
              pictureClassName="absolute inset-0 block"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-playfair mb-2">Professional Interior Services</h3>
              <p className="text-white/90 mb-4 max-w-sm">Complete interior design, POP ceilings, tiling, and renovation services.</p>
              <a href="/interiors" className="text-white hover:text-light-tan transition-colors duration-300 border-b border-white hover:border-light-tan pb-1 font-medium">
                View Interiors
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
