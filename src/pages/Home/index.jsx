
import Header from '../../layout/Header'
import Hero from './components/Hero'
import Collection from './components/Collection'
import About from './components/About'
import BrandStory from './components/BrandStory'
import ProductShowcase from './components/ProductShowcase'
import InteriorsByCeetech from './components/InteriorsByCeetech'
import InteriorServices from './components/InteriorServices'
import CustomerReviews from './components/CustomerReviews'
import StayClose from './components/StayClose'
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
      <InteriorsByCeetech />
      <InteriorServices />
      <CustomerReviews />
      <StayClose />
      <Footer />
    </div>
  );
};

export default Index;
