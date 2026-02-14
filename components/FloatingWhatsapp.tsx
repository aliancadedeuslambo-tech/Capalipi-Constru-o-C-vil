
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsapp: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[200] group">
       <button className="bg-[#25d366] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="font-bold text-sm">Fale Connosco</span>
       </button>
       
       {/* Tooltip on hover */}
       <div className="absolute right-0 bottom-full mb-4 w-56 bg-white text-gray-900 p-4 rounded-3xl shadow-2xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 pointer-events-none">
          Olá! Como podemos ajudar na sua obra hoje?
          <div className="absolute top-full right-10 w-4 h-4 bg-white rotate-45 -mt-2"></div>
       </div>
    </div>
  );
};

export default FloatingWhatsapp;
