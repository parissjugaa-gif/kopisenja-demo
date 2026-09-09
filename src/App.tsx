import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturedMenu />
        <WhyChooseUs />
        <About />
        <Gallery />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
