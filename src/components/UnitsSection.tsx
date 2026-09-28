import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { GoogleMapsIcon3D, GoogleIcon3D } from './icons/PlatformLogos';

interface UnitData {
  id: string;
  name: string;
  neighborhood: string;
  cityState: string;
  mapsUrl: string;
  reviewUrl: string;
  rating: string;
  features: string[];
}

const UNITS: UnitData[] = [
  {
    id: 'santa-lucia',
    name: 'UNIDADE SANTA LÚCIA',
    neighborhood: 'Santa Lúcia',
    cityState: 'Maceió - AL',
    mapsUrl: 'https://maps.app.goo.gl/7CZYtVLZPucFb2ZA6?g_st=ac',
    reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJL0W_UQBJAQcRL8ZiTeQOytw',
    rating: '5.0',
    features: ['Atendimento VIP', 'Ambiente Climatizado', 'Fácil Acesso'],
  },
  {
    id: 'cambuci',
    name: 'UNIDADE CAMBUCI',
    neighborhood: 'Cambuci',
    cityState: 'Maceió - AL',
    mapsUrl: 'https://maps.app.goo.gl/quZRQT4ZM2Rwf6yY6?g_st=ac',
    reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJ7SIdZABJAQcRFjqa8wGhByk',
    rating: '5.0',
    features: ['Cortes Clássicos & Modernos', 'Estrutura Completa', 'Pontualidade'],
  },
];

export const UnitsSection: React.FC = () => {
  return (
    <section id="unidades" className="py-14 px-4 sm:px-6 relative scroll-mt-14">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase"
          >
            Localizações
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-display font-bold text-zinc-100 tracking-tight mt-1"
          >
            NOSSAS UNIDADES
          </motion.h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-medium">
            Escolha a unidade mais próxima de você em Maceió
          </p>
        </div>

        {/* 2 Large Premium Interactive Cards with 3D Depth */}
        <div className="space-y-6">
          {UNITS.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 40, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="luxury-card luxury-card-interactive specular-glint rounded-3xl p-6 sm:p-7 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            >
              {/* Subtle top shimmer bar on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-200">
                      <MapPin className="w-4 h-4 text-zinc-200 shrink-0" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                      {unit.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 pl-10 font-semibold">
                    {unit.cityState}
                  </p>
                </div>

                {/* Star rating 3D pill */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-amber-500/30 shadow-[0_4px_12px_rgba(245,158,11,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] shrink-0">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" />
                  <span className="text-xs font-bold text-white tabular-nums">
                    {unit.rating}
                  </span>
                </div>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2.5 my-5 pl-2 text-xs text-zinc-300">
                {unit.features.map((feat, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>

              {/* Action Buttons with 3D Glowing Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 pt-5 border-t border-white/[0.08]">
                {/* Button 1: VER LOCALIZAÇÃO */}
                <a
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-gradient-to-b from-[#181822] to-[#101016] hover:from-[#20202c] hover:to-[#14141c] border border-white/15 hover:border-white/35 text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] group/btn"
                >
                  <GoogleMapsIcon3D size={24} />
                  <span>VER LOCALIZAÇÃO</span>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all" />
                </a>

                {/* Button 2: AVALIAR NO GOOGLE */}
                <a
                  href={unit.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] hover:bg-white/[0.1] border border-white/12 hover:border-white/30 text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98] group/btn"
                >
                  <GoogleIcon3D size={24} />
                  <span>AVALIAR NO GOOGLE</span>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
