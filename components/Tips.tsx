
import React from 'react';
import { ICONS, TIPS } from '../constants';

const Tips: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="text-center mb-16">
        <span className="bg-orange-100 text-[#f5a623] px-4 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
          Conhecimento
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-6">
          Dicas e Conhecimentos
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto px-4">
          Informações práticas e técnicas simplificadas para ajudar você a entender melhor o mundo da construção civil.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {TIPS.map((tip, idx) => (
          <div key={tip.title} className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all h-full">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
              tip.type === 'warning' ? 'bg-orange-50 text-orange-500' : 
              tip.type === 'success' ? 'bg-green-50 text-green-500' : 
              'bg-blue-50 text-blue-500'
            }`}>
              {ICONS[tip.icon as keyof typeof ICONS]}
            </div>
            <h3 className="text-xl font-bold text-[#0a2540] mb-4">{tip.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {tip.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#0a2540] rounded-[40px] p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
        
        <h3 className="text-3xl font-bold mb-4 relative z-10">Precisa de orientação especializada?</h3>
        <p className="text-white/70 max-w-2xl mx-auto mb-10 relative z-10">
          A nossa equipa está pronta para esclarecer todas as suas dúvidas sobre construção e ajudá-lo a tomar as melhores decisões para o seu projeto.
        </p>
        <button className="bg-[#f5a623] hover:bg-[#d98c1d] text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 relative z-10">
          Falar com Especialista
        </button>
      </div>
    </div>
  );
};

export default Tips;
