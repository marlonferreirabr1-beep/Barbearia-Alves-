import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, Sparkles } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  // Check open/closed status in Maceió time (UTC-3)
  const status = useMemo(() => {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Maceio',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        weekday: 'short',
      });
      const parts = formatter.formatToParts(now);
      const hourPart = parts.find((p) => p.type === 'hour')?.value;
      const weekdayPart = parts.find((p) => p.type === 'weekday')?.value;

      const hour = parseInt(hourPart || '12', 10);
      const isSunday = weekdayPart === 'Sun';

      const isOpen = !isSunday && hour >= 9 && hour < 20;
      return {
        isOpen,
        text: isOpen ? 'Aberto Agora' : 'Fechado no Momento',
        subtext: isOpen ? 'Atendimento até 20:00' : 'Reabre Seg às 09:00',
      };
    } catch {
      return {
        isOpen: true,
        text: 'Aberto Hoje',
        subtext: '09:00 às 20:00',
      };
    }
  }, []);

  return (
    <section id="horario" className="py-14 px-4 sm:px-6 relative scroll-mt-14">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="luxury-card luxury-card-interactive specular-glint rounded-3xl p-7 sm:p-10 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
        >
          {/* Subtle background radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

          {/* 3D Floating Minimalist Clock Icon with high relief */}
          <div className="relative mx-auto w-20 h-20 rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-950 border border-white/20 flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.9),0_0_20px_rgba(255,255,255,0.1),inset_0_2px_2px_rgba(255,255,255,0.3)] mb-6 transform transition-transform duration-500 hover:scale-110 hover:rotate-6">
            <span className="absolute inset-0 rounded-3xl bg-white/10 blur-sm -z-10 animate-pulse" />
            <Clock className="w-10 h-10 text-white stroke-[1.8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight uppercase">
            HORÁRIO DE ATENDIMENTO
          </h2>

          <div className="my-6 py-5 px-6 rounded-2xl bg-zinc-900/80 border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] inline-block w-full max-w-sm">
            <div className="flex items-center justify-center gap-2 text-zinc-300 font-semibold text-sm sm:text-base">
              <Calendar className="w-4 h-4 text-zinc-300" />
              <span>Segunda a Sábado</span>
            </div>

            <div className="mt-2 text-2xl sm:text-3xl font-display font-extrabold text-white tracking-wider tabular-nums drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
              09:00 às 20:00
            </div>

            {/* Live Indicator */}
            <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0a0f] border border-white/10 text-xs shadow-inner">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  status.isOpen
                    ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-ping'
                    : 'bg-zinc-500'
                }`}
              />
              <span className={status.isOpen ? 'text-emerald-300 font-bold' : 'text-zinc-400'}>
                {status.text}
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-300 font-medium">{status.subtext}</span>
            </div>
          </div>

          {/* Sunday note */}
          <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>Domingo: Fechado para descanso e manutenção da equipe</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
