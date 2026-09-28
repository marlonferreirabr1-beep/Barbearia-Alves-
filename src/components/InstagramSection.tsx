import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { InstagramIcon3D } from './icons/PlatformLogos';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-14 px-4 sm:px-6 relative scroll-mt-14">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="luxury-card luxury-card-interactive specular-glint rounded-3xl p-7 sm:p-10 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(225,48,108,0.15)]"
        >
          {/* Subtle gradient sheen */}
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-gradient-to-br from-fuchsia-500/[0.08] via-rose-500/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge with 3D finish */}
          <div className="mx-auto w-20 h-20 rounded-3xl bg-zinc-900 border border-white/20 flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.9),inset_0_2px_2px_rgba(255,255,255,0.3)] mb-6 transform transition-transform duration-500 hover:scale-110 hover:rotate-6">
            <InstagramIcon3D size={44} />
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            ACOMPANHE A BARBEARIA ALVES
          </h2>

          {/* Text */}
          <p className="text-sm sm:text-base text-zinc-300 max-w-md mx-auto mt-3 leading-relaxed font-medium">
            Veja nossos trabalhos, novidades e conteúdos no Instagram.
          </p>

          {/* Instagram Handle Mock Preview */}
          <div className="my-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-zinc-900/90 border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            <span className="text-sm font-bold text-white tracking-wide">@barbealves</span>
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span className="text-zinc-600">·</span>
            <span className="text-xs text-zinc-300 font-medium">Barbearia Alves</span>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="https://www.instagram.com/barbealves?stkn=MW50enFqYnppcmVieg=="
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3.5 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#1b121c] via-[#2a1727] to-[#1b121c] border border-rose-500/40 hover:border-rose-400 text-white font-extrabold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.9),0_0_25px_rgba(225,48,108,0.25),inset_0_2px_2px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <InstagramIcon3D size={26} />
              <span>SEGUIR NO INSTAGRAM</span>
              <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:translate-x-1 group-hover:text-rose-300 transition-all duration-300" />
            </a>
          </div>

          {/* Note */}
          <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-zinc-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Transformações reais, cortes e dia a dia dos nossos profissionais</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
