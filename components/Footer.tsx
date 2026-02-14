
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a2540] text-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div>
            <div className="bg-white p-2 rounded shadow-sm w-fit mb-8">
              <Logo className="w-10 h-10" variant="dark" />
            </div>
            <h3 className="text-3xl font-black mb-4">CAPALIPI</h3>
            <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-8">Construção Civil</p>
            <p className="text-white/60 text-lg leading-relaxed mb-8 font-medium">
              Nós pensamos em um lar. Alto padrão não é sobre preço, é sobre valor. Construímos sonhos com qualidade, transparência e dedicação.
            </p>
            <div className="italic text-[#f5a623] text-2xl font-bold">"Sofisticação que se revela em cada detalhe."</div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10">Navegação</h4>
            <ul className="space-y-6 text-white/60 font-bold text-lg">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contactos" className="hover:text-white transition-colors">Contactos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10">Ferramentas</h4>
            <ul className="space-y-6 text-white/60 font-bold text-lg">
              <li><a href="#calculadoras" className="hover:text-white transition-colors">Calculadoras</a></li>
              <li><a href="#quiz" className="hover:text-white transition-colors">Quiz Educativo</a></li>
              <li><a href="#dicas" className="hover:text-white transition-colors">Dicas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10">Empresa</h4>
            <ul className="space-y-6 text-white/60 font-bold text-lg">
              <li><a href="#vagas" className="hover:text-white transition-colors">Trabalhe Connosco</a></li>
              <li><a href="#contactos" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-sm font-bold uppercase tracking-widest">
          <div>© 2026 CAPALIPI Construção Civil. Todos os direitos reservados.</div>
          <div className="flex gap-4">
            <a href="#" className="bg-white/5 px-6 py-2 rounded-full hover:bg-white/10 hover:text-white hover:shadow-lg transition-all">Facebook</a>
            <a href="#" className="bg-white/5 px-6 py-2 rounded-full hover:bg-white/10 hover:text-white hover:shadow-lg transition-all">Instagram</a>
            <a href="#" className="bg-white/5 px-6 py-2 rounded-full hover:bg-white/10 hover:text-white hover:shadow-lg transition-all">TikTok</a>
            <a href="#" className="bg-white/5 px-6 py-2 rounded-full hover:bg-[#25d366] hover:text-white hover:shadow-lg transition-all">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
