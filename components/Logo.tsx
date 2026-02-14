
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", showText = false, variant = 'dark' }) => {
  const primaryColor = variant === 'dark' ? '#0a2540' : '#ffffff';
  const secondaryColor = '#f5a623';

  return (
    <div className={`flex items-center gap-3 ${variant === 'light' ? 'text-white' : 'text-[#0a2540]'}`}>
      <svg 
        viewBox="0 0 100 100" 
        className={className} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Roof */}
        <path d="M10 48 L50 18 L90 48 H78 L50 27 L22 48 Z" fill={primaryColor} />
        {/* Chimney */}
        <path d="M68 30 V20 H76 V36 L68 30 Z" fill={primaryColor} />
        
        {/* Windows */}
        <g fill={secondaryColor}>
          <rect x="44" y="42" width="5.5" height="5.5" />
          <rect x="51" y="42" width="5.5" height="5.5" />
          <rect x="44" y="49" width="5.5" height="5.5" />
          <rect x="51" y="49" width="5.5" height="5.5" />
        </g>
        
        {/* Smile Arc */}
        <path d="M22 60 C30 85, 70 85, 78 60" stroke={secondaryColor} strokeWidth="10" strokeLinecap="round" fill="none" />
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span className="font-black text-xl leading-none tracking-tighter uppercase">CAPALIPI</span>
          <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${variant === 'dark' ? 'text-gray-500' : 'text-white/60'}`}>
            Construção Civil
          </span>
          <span className={`text-[7px] font-medium leading-tight mt-0.5 ${variant === 'dark' ? 'text-gray-400' : 'text-white/40'}`}>
            Nós pensamos em um lar
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
