
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import UserTypes from '@/components/home/UserTypes';
import Directory from '@/components/home/Directory';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <UserTypes />
        <Directory />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
