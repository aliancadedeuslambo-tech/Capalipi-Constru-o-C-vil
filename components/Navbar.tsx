
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Calculadoras', href: '#calculadoras' },
    { name: 'Quiz', href: '#quiz' },
    { name: 'Dicas', href: '#dicas' },
    { name: 'Trabalhe Connosco', href: '#vagas' },
    { name: 'Contactos', href: '#contactos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <Logo 
            className="w-12 h-12" 
            showText={true} 
            variant={scrolled ? 'dark' : 'light'} 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[13px] font-bold transition-colors hover:text-[#f5a623] tracking-tight ${
                scrolled ? 'text-[#0a2540]' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#f5a623] hover:bg-[#d98c1d] text-white px-8 py-3.5 rounded-2xl text-[13px] font-black shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95">
            Solicitar Orçamento
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
          {isOpen ? <X className={scrolled ? 'text-[#0a2540]' : 'text-white'} /> : <Menu className={scrolled ? 'text-[#0a2540]' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-900 text-lg font-black hover:text-[#f5a623]"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#f5a623] text-white py-5 rounded-2xl text-lg font-black">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
