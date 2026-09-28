import React, { useEffect, useState } from 'react';

interface SectionItem {
  id: string;
  label: string;
}

const SECTIONS: SectionItem[] = [
  { id: 'hero', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'unidades', label: 'Unidades' },
  { id: 'horario', label: 'Horário' },
  { id: 'agendamento', label: 'Agendamento' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'acesso-rapido', label: 'Acesso Rápido' },
];

export const NavigationIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Navegação rápida vertical"
      className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3.5 py-4 px-2"
    >
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            className="group flex items-center gap-2 cursor-pointer focus:outline-none"
            aria-label={`Rolar para ${sec.label}`}
          >
            {/* Hover tooltip label */}
            <span
              className={`text-[10px] uppercase font-semibold tracking-wider transition-all duration-200 pointer-events-none ${
                isActive
                  ? 'text-zinc-200 opacity-100 translate-x-0'
                  : 'text-zinc-400 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {sec.label}
            </span>

            {/* Indicator bar/dot */}
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2 h-6 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]'
                  : 'w-1.5 h-1.5 bg-zinc-600 group-hover:bg-zinc-400 group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};
