import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { WhatsAppIcon3D } from './icons/PlatformLogos';

interface HeroSectionProps {
  onScrollNext: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollNext }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92dvh] sm:min-h-[94dvh] flex flex-col items-center justify-between px-5 pt-8 pb-10 text-center overflow-hidden"
    >
      {/* 3D Atmospheric Lighting & Light Cone */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] bg-gradient-to-b from-white/[0.1] to-transparent rounded-full blur-3xl opacity-80" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[280px] h-[140px] bg-white/[0.06] rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,7,10,0.92)_85%)]" />
      </div>

      {/* Top Badge Tag (Sem a palavra 3D) */}
      <motion.div
        initial={{ opacity: 0, y: -15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] text-[11px] font-semibold tracking-widest text-zinc-300 uppercase pt-1"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>Experiência Premium</span>
      </motion.div>

      {/* Center Cinematic Brand Lockup with 3D Float */}
      <div className="my-auto w-full max-w-md flex flex-col items-center justify-center">
        {/* Official Logo with 3D Depth & Breathing Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center w-full px-2"
        >
          {/* Subtle Ambient Radial Glow Behind Logo */}
          <div 
            className="absolute inset-0 max-w-[360px] mx-auto h-[320px] bg-radial from-white/15 via-white/[0.04] to-transparent rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <motion.img
            animate={{
              y: [0, -6, 0],
              filter: [
                'drop-shadow(0 0 35px rgba(255,255,255,0.2)) drop-shadow(0 20px 40px rgba(0,0,0,0.95))',
                'drop-shadow(0 0 50px rgba(255,255,255,0.3)) drop-shadow(0 25px 45px rgba(0,0,0,0.98))',
                'drop-shadow(0 0 35px rgba(255,255,255,0.2)) drop-shadow(0 20px 40px rgba(0,0,0,0.95))',
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            src="https://i.postimg.cc/vZQvqQkf/logo-barbearia-alves-transparente-1.png"
            alt="BARBEARIA ALVES"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            className="relative z-10 w-72 max-w-[88vw] sm:w-80 md:w-96 h-auto max-h-[42vh] object-contain select-none cursor-pointer"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        {/* Subtitle & Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 space-y-2 text-center"
        >
          <p className="text-xl sm:text-2xl font-display font-medium tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] text-balance">
            Eleve o seu visual do clássico ao moderno.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-zinc-300 font-medium">
            <MapPin className="w-3.5 h-3.5 text-zinc-300" />
            <span>Maceió • AL</span>
          </div>
        </motion.div>

        {/* Hero Quick CTA com a Logo Oficial do WhatsApp ao lado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 w-full max-w-xs"
        >
          <a
            href="https://wa.link/03dc89"
            target="_blank"
            rel="noopener noreferrer"
            className="group specular-glint relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-b from-white via-zinc-100 to-zinc-300 text-zinc-950 font-extrabold text-sm sm:text-base tracking-wide shadow-[0_15px_35px_-5px_rgba(255,255,255,0.35),0_8px_15px_rgba(0,0,0,0.8),inset_0_2px_2px_rgba(255,255,255,0.8)] hover:shadow-[0_20px_45px_-5px_rgba(255,255,255,0.5),inset_0_2px_2px_rgba(255,255,255,0.9)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            {/* Logo Oficial do WhatsApp ao lado */}
            <WhatsAppIcon3D size={26} />

            <span className="tracking-wide">Agendar Atendimento</span>

            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping ml-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator: "ROLE PARA CONHECER" */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        onClick={onScrollNext}
        className="group flex flex-col items-center gap-2 cursor-pointer pb-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
        aria-label="Rolar para conhecer a barbearia"
      >
        <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-zinc-400 group-hover:text-white transition-colors">
          Role para conhecer
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/[0.05] shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-white/40 transition-colors"
        >
          <ChevronDown className="w-4 h-4 text-zinc-200" />
        </motion.div>
      </motion.button>
    </section>
  );
};
