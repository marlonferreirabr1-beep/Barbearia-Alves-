import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';
import { GoogleMapsIcon3D, GoogleIcon3D } from './icons/PlatformLogos';

interface QuickAction {
  category: string;
  label: string;
  badge?: string;
  url: string;
  iconType: 'maps' | 'google';
}

const ACTIONS: QuickAction[] = [
  {
    category: 'SANTA LÚCIA',
    label: 'Ver localização',
    badge: 'Maceió - AL',
    url: 'https://maps.app.goo.gl/7CZYtVLZPucFb2ZA6?g_st=ac',
    iconType: 'maps',
  },
  {
    category: 'CAMBUCI',
    label: 'Ver localização',
    badge: 'Maceió - AL',
    url: 'https://maps.app.goo.gl/quZRQT4ZM2Rwf6yY6?g_st=ac',
    iconType: 'maps',
  },
  {
    category: 'GOOGLE',
    label: 'Avaliar Barbearia da Santa Lúcia',
    badge: '5.0 Estrelas',
    url: 'https://search.google.com/local/writereview?placeid=ChIJL0W_UQBJAQcRL8ZiTeQOytw',
    iconType: 'google',
  },
  {
    category: 'GOOGLE',
    label: 'Avaliar Barbearia do Cambuci',
    badge: '5.0 Estrelas',
    url: 'https://search.google.com/local/writereview?placeid=ChIJ7SIdZABJAQcRFjqa8wGhByk',
    iconType: 'google',
  },
];

export const QuickActionsSection: React.FC = () => {
  return (
    <section id="acesso-rapido" className="py-14 px-4 sm:px-6 relative scroll-mt-14">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase"
          >
            Praticidade
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-display font-bold text-zinc-100 tracking-tight mt-1 uppercase"
          >
            ACESSO RÁPIDO
          </motion.h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-medium">
            Rotas e avaliações diretas em um toque
          </p>
        </div>

        {/* 4 Cards Grid with 3D Depth & Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ACTIONS.map((action, index) => (
            <motion.a
              key={index}
              href={action.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="luxury-card luxury-card-interactive specular-glint rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 group active:scale-[0.98] shadow-[0_12px_28px_rgba(0,0,0,0.85)]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Official Platform Glowing 3D Logo */}
                <div className="shrink-0">
                  {action.iconType === 'maps' ? (
                    <GoogleMapsIcon3D size={36} />
                  ) : (
                    <GoogleIcon3D size={36} />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-zinc-400 uppercase">
                      {action.category}
                    </span>
                    {action.iconType === 'google' && (
                      <span className="flex items-center gap-0.5 text-[10px] text-amber-400 font-bold px-1.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                        <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                        <span>5.0</span>
                      </span>
                    )}
                  </div>
                  <p className="font-display text-sm font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                    {action.label}
                  </p>
                </div>
              </div>

              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/[0.15] group-hover:border-white/30 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
