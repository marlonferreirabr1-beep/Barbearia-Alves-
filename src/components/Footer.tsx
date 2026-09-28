import React from 'react';
import { InstagramIcon3D, WhatsAppIcon3D, GoogleMapsIcon3D } from './icons/PlatformLogos';

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-12 pt-12 pb-24 px-5 border-t border-white/[0.08] text-center overflow-hidden">
      {/* Subtle bottom vignette */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Barbearia Alves Logo in Footer */}
        <div className="mb-4">
          <img
            src="https://i.postimg.cc/vZQvqQkf/logo-barbearia-alves-transparente-1.png"
            alt="Barbearia Alves"
            referrerPolicy="no-referrer"
            className="w-32 h-auto object-contain mx-auto filter drop-shadow-[0_4px_16px_rgba(255,255,255,0.08)] select-none opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>

        {/* Brand Name */}
        <h3 className="font-display text-base font-bold text-zinc-100 tracking-wider uppercase">
          BARBEARIA ALVES
        </h3>

        {/* Locations Line */}
        <p className="text-xs text-zinc-400 mt-1 font-medium">
          Santa Lúcia • Cambuci • Maceió - AL
        </p>

        {/* Small Functional Buttons: Instagram, WhatsApp, Santa Lúcia, Cambuci */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 my-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/barbealves?stkn=MW50enFqYnppcmVieg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-zinc-200 transition-colors"
          >
            <InstagramIcon3D size={16} />
            <span>Instagram</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.link/03dc89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-zinc-200 transition-colors"
          >
            <WhatsAppIcon3D size={16} />
            <span>WhatsApp</span>
          </a>

          {/* Santa Lúcia */}
          <a
            href="https://maps.app.goo.gl/7CZYtVLZPucFb2ZA6?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-zinc-200 transition-colors"
          >
            <GoogleMapsIcon3D size={16} />
            <span>Santa Lúcia</span>
          </a>

          {/* Cambuci */}
          <a
            href="https://maps.app.goo.gl/quZRQT4ZM2Rwf6yY6?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-zinc-200 transition-colors"
          >
            <GoogleMapsIcon3D size={16} />
            <span>Cambuci</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-zinc-400 font-normal">
          © 2026 Barbearia Alves. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
