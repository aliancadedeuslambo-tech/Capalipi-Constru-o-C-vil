
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl z-10 relative">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern White House" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-8 border-l-4 border-[#f5a623] pl-6 py-2">
            <p className="text-2xl italic font-medium text-[#0a2540]">
              "Sofisticação que se revela em cada detalhe."
            </p>
          </div>
        </div>

        <div>
          <span className="bg-orange-50 text-[#f5a623] px-4 py-1 rounded-full text-xs font-bold mb-6 inline-block">
            Sobre Nós
          </span>
          <h2 className="text-5xl font-black text-[#0a2540] mb-8 leading-tight">
            Construímos <span className="text-[#f5a623]">lares</span>, não apenas edifícios
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              A CAPALIPI Construção Civil nasceu com uma missão clara: transformar o sonho da casa própria em realidade, com qualidade, transparência e respeito aos nossos clientes.
            </p>
            <p>
              Acreditamos que alto padrão não é sobre preço, é sobre valor. Cada projeto que realizamos carrega a nossa dedicação em criar espaços que transcendem a simples construção — criamos lares onde memórias são feitas e famílias crescem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
