import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-14 px-4 sm:px-6 relative scroll-mt-14">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase"
          >
            Sobre Nós
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-display font-bold text-zinc-100 tracking-tight mt-1"
          >
            BARBEARIA ALVES
          </motion.h2>
        </div>

        {/* 3D Depth Card with Tilt and Specular Glass */}
        <motion.div
          initial={{ opacity: 0, y: 35, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="luxury-card luxury-card-interactive specular-glint rounded-3xl p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Subtle interior glow & corner 3D accent */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-white/[0.08] to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-emerald-500/[0.04] rounded-full blur-2xl pointer-events-none" />

          {/* Badge & Profession marker */}
          <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/15 flex items-center justify-center text-zinc-100 shadow-[0_4px_12px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <Scissors className="w-5 h-5 stroke-[1.8] text-zinc-200" />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-100 tracking-wide block uppercase">
                  Barbeiro Especialista
                </span>
                <span className="text-[11px] text-zinc-400">Excelência em Maceió</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verificado</span>
            </div>
          </div>

          {/* Main Statement */}
          <div className="py-6 space-y-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-300 shrink-0 mt-0.5 animate-pulse" />
              <p className="text-lg sm:text-xl font-display font-semibold text-zinc-100 leading-snug">
                Eleve o seu visual do clássico ao moderno.
              </p>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed pl-8">
              Atendimento em duas localizações em Maceió: <span className="font-semibold text-white">Santa Lúcia</span> e <span className="font-semibold text-white">Cambuci</span>.
            </p>
          </div>

          {/* Essential Info Highlights (Instagram Bio Reference) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-white/[0.08]">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-zinc-900/60 border border-white/[0.06] shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-white/20 transition-all">
              <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-zinc-200" />
              </div>
              <div className="text-xs">
                <p className="text-zinc-400 font-medium">Localização</p>
                <p className="font-bold text-zinc-100">Santa Lúcia & Cambuci</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-zinc-900/60 border border-white/[0.06] shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-white/20 transition-all">
              <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-zinc-200" />
              </div>
              <div className="text-xs">
                <p className="text-zinc-400 font-medium">Horário</p>
                <p className="font-bold text-zinc-100">Seg a Sáb: 9h às 20h</p>
              </div>
            </div>
          </div>

          {/* Bottom Trust Guarantee */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-400 pt-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-zinc-300" />
            <span>Técnicas contemporâneas, navalha afiada e pontualidade.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
