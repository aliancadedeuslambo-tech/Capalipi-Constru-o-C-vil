
import React from 'react';
import { Send, Mail } from 'lucide-react';
import { JOBS, ICONS } from '../constants';

const Careers: React.FC = () => {
  const socialFeed = [
    {
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600",
      label: "Alto Padrão",
      sub: "É sobre valor"
    },
    {
      img: "https://images.unsplash.com/photo-1516534775068-ba3e84529f13?q=80&w=600",
      label: "Seu Imóvel",
      sub: "Já pensou em viver?"
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
      label: "Contratando",
      sub: "Assistente Admin"
    },
    {
      img: "https://images.unsplash.com/photo-1556911223-e1534ff6f317?q=80&w=600",
      label: "Sofisticação",
      sub: "Cada Detalhe"
    },
    {
      img: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?q=80&w=600",
      label: "Contratando",
      sub: "Ajudantes de Obra"
    },
    {
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=600",
      label: "Contratando",
      sub: "Encarregado de Obra"
    }
  ];

  return (
    <div className="bg-gray-50/50 py-24" id="vagas">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="bg-orange-50 text-[#f5a623] px-4 py-1 rounded-full text-xs font-bold mb-6 inline-block uppercase tracking-widest">
            Oportunidades
          </span>
          <h2 className="text-6xl font-black text-[#0a2540] mb-8">Trabalhe <span className="text-[#f5a623]">Connosco</span></h2>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Faça parte de uma equipa que constrói sonhos. Procuramos profissionais dedicados e apaixonados pela construção civil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {JOBS.map((job) => (
            <div key={job.id} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-50 flex flex-col h-full transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-orange-50 text-[#f5a623] rounded-2xl flex items-center justify-center mb-8">
                {ICONS.CheckSquare}
              </div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-black text-[#0a2540] leading-tight">{job.title}</h3>
                <span className="bg-gray-100 text-gray-400 text-[10px] px-2 py-1 rounded-md font-black uppercase tracking-widest">{job.type}</span>
              </div>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium flex-grow">{job.description}</p>
              
              <div className="pt-8 border-t border-gray-100">
                <h4 className="text-sm font-black text-[#0a2540] mb-4 uppercase tracking-widest">Requisitos:</h4>
                <ul className="space-y-4">
                  {job.requirements.map(req => (
                    <li key={req} className="flex items-center gap-3 text-sm text-gray-600 font-bold">
                      <span className="w-2 h-2 bg-[#f5a623] rounded-full"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-12 text-center shadow-xl border border-gray-50 mb-32">
          <h3 className="text-3xl font-black text-[#0a2540] mb-6">Interessado em alguma vaga?</h3>
          <p className="text-gray-400 text-lg mb-12 font-medium">Envie o seu currículo para o nosso email e faremos contacto consigo.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-[#f5a623] hover:bg-[#d98c1d] text-white px-12 py-5 rounded-full font-black text-lg flex items-center gap-3 transition-all shadow-2xl hover:shadow-orange-500/40">
              <Send className="w-6 h-6" /> Enviar Candidatura
            </button>
            <div className="flex items-center gap-4 text-[#0a2540] font-black text-xl">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              capalipiconstru@gmail.com
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
           <span className="text-[#f5a623] font-black uppercase tracking-widest text-xs">@capalipiconstru</span>
           <h2 className="text-6xl font-black text-[#0a2540] mt-6 mb-8 tracking-tighter">Siga as nossas redes sociais</h2>
           <p className="text-gray-400 text-xl font-medium">Acompanhe nosso trabalho, dicas de construção e oportunidades de carreira</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {socialFeed.map((item, i) => (
             <div key={i} className="aspect-square rounded-[30px] overflow-hidden relative group cursor-pointer shadow-lg">
                <img src={item.img} alt={`Social Feed ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#0a2540]/80 transition-all flex flex-col items-center justify-center p-4 text-center">
                   <span className="text-white font-black opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest text-[10px] mb-1">{item.label}</span>
                   <span className="text-[#f5a623] font-black opacity-0 group-hover:opacity-100 transition-all text-[8px] uppercase tracking-[0.2em]">{item.sub}</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
