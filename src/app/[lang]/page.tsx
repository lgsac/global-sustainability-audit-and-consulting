import Header from '#/components/Header';
import Footer from '#/components/Footer';
import HeroBanner from '#/components/HeroBanner';
import About from '#/components/About';
import ServicesProvided from '#/components/ServicesProvided';

const Home: React.FunctionComponent = () => {

  return (
    <>
      <Header />     
      <HeroBanner />
      <About />
      <ServicesProvided />
      <Footer />     
    </>
  ) 
}

export default Home;
