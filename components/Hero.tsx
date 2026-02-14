
import React from 'react';
import { Calculator, MessageSquare, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop" 
          alt="Construction Blueprint" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a2540]/85 bg-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 pt-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-10 px-4 py-2 bg-white/10 w-fit rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#f5a623]"></span>
            <span className="text-white/90 text-[11px] font-semibold uppercase tracking-widest">Construção Civil de Excelência</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-10 leading-[1.05] tracking-tight">
            Nós pensamos em <br />
            <span className="text-[#f5a623]">um lar</span>
          </h1>
          
          {/* Subtexts */}
          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl text-white font-bold opacity-90">
              Alto padrão não é sobre preço, é sobre valor.
            </p>
            <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
              Realizar o sonho de morar no lugar perfeito pode estar mais perto do que você imagina. Sofisticação que se revela em cada detalhe.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-28">
            <button className="bg-[#f5a623] hover:bg-[#d98c1d] text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-2xl shadow-orange-500/20 text-lg">
              <MessageSquare className="w-5 h-5 fill-white" /> Solicitar Orçamento
            </button>
            <button className="bg-transparent border-2 border-white/40 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all text-lg">
              <Calculator className="w-5 h-5" /> Explorar Calculadoras
            </button>
          </div>

          {/* Bottom Stats & Scroll */}
          <div className="grid grid-cols-3 md:flex md:items-center md:gap-32 border-t border-white/10 pt-12 relative">
            <div className="flex flex-col">
              <div className="text-5xl font-black text-white mb-2">10+</div>
            </div>

            {/* Scroll Indicator - Absolute centered on mobile, inline on desktop */}
            <div className="flex flex-col items-center justify-center gap-1 text-white/40 md:absolute md:left-1/2 md:-translate-x-1/2">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">SCROLL</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row md:gap-32">
              <div className="text-5xl font-black text-[#f5a623] mb-2">150+</div>
              <div className="text-5xl font-black text-[#f5a623] mb-2 ml-auto md:ml-0">100%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
