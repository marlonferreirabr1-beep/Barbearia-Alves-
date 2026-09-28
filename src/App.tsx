import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { TopHeader } from './components/TopHeader';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { UnitsSection } from './components/UnitsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { BookingSection } from './components/BookingSection';
import { InstagramSection } from './components/InstagramSection';
import { QuickActionsSection } from './components/QuickActionsSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { NavigationIndicator } from './components/NavigationIndicator';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleScrollNext = () => {
    const el = document.getElementById('sobre');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-[#f4f6f8] relative overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* 3D Cinematic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-400 via-white to-rose-400 z-50 origin-left shadow-[0_0_12px_rgba(255,255,255,0.8)]"
        style={{ scaleX }}
      />

      {/* Cinematic Dynamic Ambient Lighting Rig (3D Background Atmosphere) */}
      <div 
        className="fixed inset-0 pointer-events-none -z-20 overflow-hidden"
        aria-hidden="true"
      >
        {/* Top Volumetric Beam */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent rounded-full blur-[100px] opacity-80" />
        
        {/* Glowing floating colored atmospheric orbs */}
        <motion.div 
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-emerald-500/[0.05] rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{
            y: [0, 35, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 -right-24 w-[450px] h-[450px] bg-rose-500/[0.04] rounded-full blur-[130px]" 
        />
        <motion.div 
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-1/4 left-1/4 w-[380px] h-[380px] bg-blue-500/[0.04] rounded-full blur-[110px]" 
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,7,10,0.85)_100%)]" />
      </div>

      {/* Top Header */}
      <TopHeader onNavigate={handleNavigate} />

      {/* Vertical Navigation Indicator (Desktop / Tablet) */}
      <NavigationIndicator />

      {/* Main Bio Site Content Container with 3D Depth */}
      <main className="w-full relative">
        {/* Primeira Tela / Hero */}
        <HeroSection onScrollNext={handleScrollNext} />

        {/* Vertical Flow Sections with 3D Motion Staggering */}
        <div className="relative space-y-6 sm:space-y-10 pb-8">
          {/* Seção 1 — A Barbearia */}
          <AboutSection />

          {/* Seção 2 — Nossas Unidades */}
          <UnitsSection />

          {/* Seção 3 — Horário de Atendimento */}
          <ScheduleSection />

          {/* Seção 4 — Agendamento WhatsApp */}
          <BookingSection />

          {/* Seção 5 — Instagram Oficial */}
          <InstagramSection />

          {/* Seção 6 — Acesso Rápido */}
          <QuickActionsSection />
        </div>
      </main>

      {/* Rodapé Minimalista & Elegante */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
