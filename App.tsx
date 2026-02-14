
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LocationBanner from './components/LocationBanner';
import About from './components/About';
import Values from './components/Values';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Calculators from './components/Calculators';
import Quiz from './components/Quiz';
import Tips from './components/Tips';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden selection:bg-[#f5a623] selection:text-white">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>
        
        <LocationBanner />
        
        <section id="sobre" className="pt-20">
          <About />
          <Values />
        </section>
        
        <section id="servicos">
          <Services />
        </section>
        
        <section id="portfolio" className="py-24 bg-white">
          <Portfolio />
          <div className="container mx-auto px-4 text-center mt-24 mb-16">
             <span className="bg-orange-50 text-[#f5a623] px-4 py-1 rounded-full text-xs font-bold mb-6 inline-block uppercase tracking-widest">
               Ferramentas Interativas
             </span>
             <h2 className="text-6xl font-black text-[#0a2540] mb-8 tracking-tighter">Calculadoras de Construção</h2>
             <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
               Ferramentas práticas para ajudar no planeamento da sua obra. Calcule materiais e estime custos de forma simples e rápida.
             </p>
          </div>
        </section>

        <section id="calculadoras" className="bg-slate-50">
          <Calculators />
        </section>
        
        <section id="quiz">
          <Quiz />
        </section>
        
        <section id="dicas" className="pt-24">
           <div className="container mx-auto px-4 text-center mb-16">
              <span className="bg-orange-50 text-[#f5a623] px-4 py-1 rounded-full text-xs font-bold mb-6 inline-block uppercase tracking-widest">
                Conhecimento
              </span>
              <h2 className="text-6xl font-black text-[#0a2540] mb-8 tracking-tighter">Dicas e Conhecimentos</h2>
              <p className="text-gray-400 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                Informações práticas e técnicas simplificadas para ajudar você a entender melhor o mundo da construção civil.
              </p>
           </div>
          <Tips />
        </section>
        
        <section id="vagas">
          <Careers />
        </section>
        
        <section id="contactos">
          <Contact />
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
};

export default App;
