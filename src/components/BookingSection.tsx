import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import { WhatsAppIcon3D } from './icons/PlatformLogos';

export const BookingSection: React.FC = () => {
  return (
    <section id="agendamento" className="py-14 px-4 sm:px-6 relative scroll-mt-14">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative luxury-card luxury-card-interactive specular-glint rounded-3xl p-7 sm:p-10 text-center overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(37,211,102,0.15)]"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/[0.08] rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Micro Tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-[11px] font-bold tracking-wider text-zinc-200 uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Atendimento VIP Personalizado</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            AGENDE SEU HORÁRIO
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-300 max-w-md mx-auto mt-3 leading-relaxed font-medium">
            Entre em contato pelo WhatsApp e garanta seu horário com um toque.
          </p>

          {/* Big Prominent 3D Premium Button */}
          <div className="mt-8">
            <a
              href="https://wa.link/03dc89"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3.5 w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#171720] via-[#242430] to-[#171720] border border-emerald-500/40 hover:border-emerald-400 text-white font-extrabold text-base sm:text-lg tracking-wide shadow-[0_16px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(37,211,102,0.3),inset_0_2px_2px_rgba(255,255,255,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_45px_rgba(37,211,102,0.5),inset_0_2px_2px_rgba(255,255,255,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Shimmer gradient line on top border */}
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

              {/* Authentic 3D Glowing WhatsApp Logo */}
              <WhatsAppIcon3D size={36} />

              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-wide">
                AGENDAR PELO WHATSAPP
              </span>

              <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:translate-x-1.5 group-hover:text-emerald-400 transition-all duration-300 ml-1" />
            </a>
          </div>

          {/* Fast Response Guarantee */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 mt-6 pt-5 border-t border-white/[0.08] font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-300" />
              <span>Resposta Rápida</span>
            </span>
            <span className="text-zinc-600">·</span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Confirmação Imediata</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
