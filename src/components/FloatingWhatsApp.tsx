import React from 'react';
import { WhatsAppIcon3D } from './icons/PlatformLogos';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento pelo WhatsApp" className="fixed bottom-5 right-5 z-50">
      <a
        href="https://wa.link/03dc89"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Barbearia Alves no WhatsApp"
        className="group relative flex items-center gap-2.5 p-3 sm:px-4 sm:py-3.5 rounded-full bg-gradient-to-b from-[#181822] via-[#101016] to-[#0b0b10] border border-emerald-500/50 hover:border-emerald-400 shadow-[0_16px_36px_rgba(0,0,0,0.95),0_0_30px_rgba(37,211,102,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.98),0_0_45px_rgba(37,211,102,0.65),inset_0_1px_1px_rgba(255,255,255,0.6)] transition-all duration-300 hover:scale-108 active:scale-95 cursor-pointer backdrop-blur-xl"
      >
        {/* Subtle breathing ring */}
        <span 
          className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping pointer-events-none opacity-50 -z-10" 
          aria-hidden="true"
        />

        {/* 3D Glowing WhatsApp Icon */}
        <WhatsAppIcon3D size={34} />

        {/* Label on medium/desktop, sleek on mobile */}
        <span className="hidden sm:inline font-extrabold text-xs tracking-wider uppercase text-white pr-1 group-hover:text-emerald-300 transition-colors drop-shadow-sm">
          Agendar Horário
        </span>
      </a>
    </aside>
  );
};
