
import Header from '../../layout/Header'
import Hero from './components/Hero'
import Collection from './components/Collection'
import About from './components/About'
import BrandStory from './components/BrandStory'
import ProductShowcase from './components/ProductShowcase'
import FurnituresByCeetech from './components/FurnituresByCeetech'
import InteriorsByCeetech from './components/InteriorsByCeetech'
import CustomerReviews from './components/CustomerReviews'
import Footer from '../../layout/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative m-0 p-0">
      <Header />
      <Hero />
      <Collection />
      <About />
      <BrandStory />
      <ProductShowcase />
      <FurnituresByCeetech />
      <InteriorsByCeetech />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Index;
