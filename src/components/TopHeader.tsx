import React from 'react';

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
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#07070a]/85 border-b border-white/[0.06] transition-all duration-300">
      <div className="max-w-xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Wordmark oficial */}
        <button
          onClick={() => scrollTo('hero')}
          className="text-left group cursor-pointer focus:outline-none"
          aria-label="Ir para o topo"
        >
          <span className="font-display text-sm tracking-wider font-bold text-zinc-100 group-hover:text-white transition-colors uppercase">
            Barbearia Alves
          </span>
        </button>

        {/* Navigation Links */}
        <nav className="flex items-center gap-4 sm:gap-5 text-xs font-semibold text-zinc-400">
          <button
            onClick={() => scrollTo('sobre')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollTo('unidades')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Unidades
          </button>
          <button
            onClick={() => scrollTo('horario')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Horário
          </button>
          <button
            onClick={() => scrollTo('acesso-rapido')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Acesso Rápido
          </button>
        </nav>
      </div>
    </header>
  );
};
