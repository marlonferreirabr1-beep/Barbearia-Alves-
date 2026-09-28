import React from 'react';
import { Calendar } from 'lucide-react';

interface TopHeaderProps {
  onNavigate?: (id: string) => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#070709]/80 border-b border-white/[0.06] transition-all duration-300">
      <div className="max-w-xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => scrollTo('hero')}
          className="text-left group cursor-pointer focus:outline-none"
          aria-label="Ir para o topo"
        >
          <span className="font-display text-sm tracking-wider font-bold text-zinc-100 group-hover:text-white transition-colors uppercase">
            Barbearia Alves
          </span>
        </button>

        {/* Zone 2: Navigation Links (hidden on micro-screens, accessible on mobile/desktop) */}
        <nav className="hidden sm:flex items-center gap-4 text-xs font-medium text-zinc-400">
          <button
            onClick={() => scrollTo('sobre')}
            className="hover:text-zinc-100 transition-colors cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollTo('unidades')}
            className="hover:text-zinc-100 transition-colors cursor-pointer"
          >
            Unidades
          </button>
          <button
            onClick={() => scrollTo('horario')}
            className="hover:text-zinc-100 transition-colors cursor-pointer"
          >
            Horário
          </button>
          <button
            onClick={() => scrollTo('acesso-rapido')}
            className="hover:text-zinc-100 transition-colors cursor-pointer"
          >
            Acesso Rápido
          </button>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.link/03dc89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold tracking-wide transition-all shadow-[0_2px_10px_rgba(255,255,255,0.15)] active:scale-[0.98] whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 stroke-[2.2]" />
            <span>Agendar</span>
          </a>
        </div>
      </div>
    </header>
  );
};
