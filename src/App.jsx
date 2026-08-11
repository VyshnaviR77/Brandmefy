import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import Trusted from './sections/Trusted';
import Services from './sections/Services';
import WhyChoose from './sections/WhyChoose';
import Process from './sections/Process';
import DashboardShowcase from './sections/DashboardShowcase';
import Industries from './sections/Industries';
import SuccessStories from './sections/SuccessStories';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#080e18] text-slate-100 flex flex-col font-sans selection:bg-[#F59E0B] selection:text-black">
        <NavBar />
        <main className="flex-1 space-y-24 pb-16">
          <Hero />
          <Trusted />
          <Services />
          <WhyChoose />
          <Process />
          <DashboardShowcase />
          <Industries />
          <SuccessStories />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
