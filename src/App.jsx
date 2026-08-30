import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  const whatsappMsg = encodeURIComponent("Hello Oracle Photography, I am interested in your photography services.");
  const whatsappUrl = `https://wa.me/919717333513?text=${whatsappMsg}`;

  return (
    <div className="app">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Gallery />
      <ContactCTA />
      <Footer />
      
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <MessageCircle size={24} color="white" />
        <span className="whatsapp-float-text">Need Help? <strong>Chat with us</strong></span>
      </a>
    </div>
  );
}

export default App;
