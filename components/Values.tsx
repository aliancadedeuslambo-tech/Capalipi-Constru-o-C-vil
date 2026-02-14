
import React from 'react';
import { ICONS } from '../constants';

const Values: React.FC = () => {
  const values = [
    { title: 'Segurança', desc: 'Construção segura, moderna e sem complicações.', icon: 'ShieldCheck' },
    { title: 'Qualidade', desc: 'Materiais premium e acabamentos impecáveis.', icon: 'Star' },
    { title: 'Paixão', desc: 'Construímos lares, não apenas edifícios.', icon: 'Heart' },
    { title: 'Confiança', desc: 'Relacionamento transparente com cada cliente.', icon: 'Handshake' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-20">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6">
          <div className="text-8xl font-black text-[#f5a623] leading-none">3</div>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Anos de experiência, construindo sonhos e transformando vidas através de projetos excepcionais.
          </p>
          <div className="aspect-[16/7] rounded-2xl overflow-hidden mt-4">
             <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" alt="Work" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex-shrink-0 flex items-center justify-center text-[#f5a623]">
                {ICONS[v.icon as keyof typeof ICONS]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
