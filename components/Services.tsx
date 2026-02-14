
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES, ICONS } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="text-center mb-16">
        <span className="bg-orange-50 text-[#f5a623] px-4 py-1 rounded-full text-xs font-bold mb-4 inline-block">
          Nossos Serviços
        </span>
        <h2 className="text-5xl font-black text-[#0a2540]">
          Soluções completas para sua <br /> construção
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s) => (
          <div key={s.title} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-50 flex flex-col h-full group transition-all hover:shadow-xl">
            <div className="w-14 h-14 bg-[#f5a623] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
              {ICONS[s.icon as keyof typeof ICONS]}
            </div>
            <h3 className="text-2xl font-bold text-[#0a2540] mb-4">{s.title}</h3>
            <p className="text-gray-500 mb-8 leading-relaxed font-medium">{s.description}</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {s.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <span className="w-2 h-2 bg-[#f5a623] rounded-full"></span>
                  {f}
                </li>
              ))}
            </ul>

            <button className="text-[#f5a623] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Saber mais <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
