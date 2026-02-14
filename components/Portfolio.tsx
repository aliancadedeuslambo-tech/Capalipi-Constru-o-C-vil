
import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    { id: 1, title: 'Villa Infinity', location: 'Kilamba Premium', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop' },
    { id: 2, title: 'Edifício Horizonte', location: 'Luanda Sul', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop' },
    { id: 3, title: 'Residência Aura', location: 'Talatona', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop' },
    { id: 4, title: 'Sky Loft', location: 'Centro da Cidade', img: 'https://images.unsplash.com/photo-1512918766671-ad6507962077?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 container mx-auto px-6">
       {projects.map((p, i) => (
         <div key={p.id} className="group relative rounded-[50px] overflow-hidden aspect-[16/10] cursor-pointer shadow-xl">
            <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-12 left-12 transform group-hover:-translate-y-4 transition-transform duration-500">
               <span className="text-[#f5a623] font-black uppercase text-[10px] tracking-widest block mb-2">{p.location}</span>
               <h3 className="text-white text-4xl font-black tracking-tight">{p.title}</h3>
            </div>
            <div className="absolute top-12 right-12 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100 duration-500">
               <div className="w-3 h-3 bg-[#f5a623] rounded-full"></div>
            </div>
         </div>
       ))}
    </div>
  );
};

export default Portfolio;
