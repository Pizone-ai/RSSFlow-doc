'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Starfield } from '@/components/Starfield';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { InsightsShowcase } from '@/components/InsightsShowcase';
import { PrivacyLab } from '@/components/PrivacyLab';
import { Footer } from '@/components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen selection:bg-emerald-500/30 scroll-smooth">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-200 z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <Starfield />
      <Hero />
      <Features />
      <InsightsShowcase />
      <PrivacyLab />
      <Footer />
    </main>
  );
}
