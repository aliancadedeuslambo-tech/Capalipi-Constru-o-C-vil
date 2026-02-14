
import React from 'react';
import { Mail, MessageCircle, Facebook, Instagram, Music2, Send } from 'lucide-react';
import Logo from './Logo';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24" id="contactos">
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        <button className="flex items-center gap-3 px-10 py-5 bg-white shadow-xl border border-gray-50 rounded-full font-black text-gray-700 hover:scale-105 hover:shadow-2xl transition-all">
          <Facebook className="w-6 h-6 text-[#0a2540]" /> Facebook
        </button>
        <button className="flex items-center gap-3 px-10 py-5 bg-white shadow-xl border border-gray-50 rounded-full font-black text-gray-700 hover:scale-105 hover:shadow-2xl transition-all">
          <Instagram className="w-6 h-6 text-[#0a2540]" /> Instagram
        </button>
        <button className="flex items-center gap-3 px-10 py-5 bg-white shadow-xl border border-gray-50 rounded-full font-black text-gray-700 hover:scale-105 hover:shadow-2xl transition-all">
          <Music2 className="w-6 h-6 text-[#0a2540]" /> TikTok
        </button>
      </div>

      <div className="bg-[#0a2540] rounded-[60px] overflow-hidden grid lg:grid-cols-2 shadow-2xl">
        <div className="p-12 md:p-20 text-white flex flex-col justify-center">
          <span className="bg-white/10 px-4 py-1 rounded-full text-xs font-bold mb-8 w-fit uppercase tracking-widest">
            Contactos
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none">Vamos construir <span className="text-[#f5a623]">juntos?</span></h2>
          <p className="text-white/60 text-xl font-medium mb-16 leading-relaxed">
            Entre em contacto connosco e transforme o seu sonho em realidade. A nossa equipa está pronta para atendê-lo.
          </p>

          <div className="space-y-6">
            <div className="bg-white/5 p-8 rounded-[2.5rem] flex items-center gap-8 border border-white/10 group cursor-pointer hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-[#f5a623] rounded-2xl flex items-center justify-center text-white">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <div className="text-white/40 text-xs font-black uppercase mb-1 tracking-widest">Email</div>
                <div className="text-2xl font-black">capalipiconstru@gmail.com</div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-[2.5rem] flex items-center gap-8 border border-white/10 group cursor-pointer hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-[#25d366] rounded-2xl flex items-center justify-center text-white">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <div className="text-white/40 text-xs font-black uppercase mb-1 tracking-widest">WhatsApp</div>
                <div className="text-2xl font-black">Fale Connosco</div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <div className="text-white/40 text-xs font-black uppercase mb-6 tracking-widest">Siga-nos</div>
            <div className="flex gap-4">
               <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f5a623] hover:shadow-lg hover:shadow-orange-500/20 transition-all"><Facebook className="w-6 h-6" /></button>
               <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f5a623] hover:shadow-lg hover:shadow-orange-500/20 transition-all"><Instagram className="w-6 h-6" /></button>
               <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f5a623] hover:shadow-lg hover:shadow-orange-500/20 transition-all"><MessageCircle className="w-6 h-6" /></button>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 md:p-20 flex flex-col justify-center">
           <div className="max-w-md mx-auto w-full text-center">
             <div className="w-20 h-20 bg-gray-50 p-4 rounded-2xl mx-auto mb-8 border border-gray-100 flex items-center justify-center">
                <Logo className="w-full h-full" variant="dark" />
             </div>
             <h3 className="text-4xl font-black text-[#0a2540] mb-6">Solicite um Orçamento</h3>
             <p className="text-gray-400 text-lg mb-16 font-medium leading-relaxed">Sem compromisso, faremos uma análise gratuita do seu projeto.</p>
             
             <div className="space-y-4">
                <button className="w-full bg-[#f5a623] hover:bg-[#d98c1d] text-white py-6 rounded-full font-black text-xl flex items-center justify-center gap-3 shadow-2xl hover:shadow-orange-500/40 transition-all">
                   Falar no WhatsApp
                </button>
                <button className="w-full bg-white border-2 border-[#0a2540] text-[#0a2540] py-6 rounded-full font-black text-xl flex items-center justify-center gap-3 hover:bg-gray-50 hover:shadow-lg transition-all">
                   Enviar Email
                </button>
             </div>
             
             <p className="mt-16 italic text-gray-400 text-sm font-medium">"Construção segura, moderna e sem complicações."</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
