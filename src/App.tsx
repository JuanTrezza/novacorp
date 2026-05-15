/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MemoryStick as Memory, 
  Eye, 
  Zap, 
  ShoppingCart, 
  Twitter, 
  MessageSquare, 
  Briefcase, 
  Shield, 
  ChevronRight,
  Database,
  Crosshair,
  Cpu
} from 'lucide-react';

const FEAT_AUGMENTS = [
  {
    uid: 'NC-882-X',
    code: '[AUG_001_NEURAL]',
    title: 'Neural Overlink',
    description: 'Enhance reaction speeds by 300% with direct fiber-optic cortex integration.',
    icon: <Cpu className="w-8 h-8" />,
    progress: '75%'
  },
  {
    uid: 'NC-412-B',
    code: '[AUG_042_OPTIC]',
    title: 'MK-IV Kiroshi',
    description: 'Multi-spectrum visual processing with integrated threat assessment HUD.',
    icon: <Eye className="w-8 h-8" />,
    progress: '100%'
  },
  {
    uid: 'NC-009-S',
    code: '[AUG_109_REFLEX]',
    title: 'Sandevistan E-7',
    description: 'Dilate time perception for extreme combat precision. Military grade only.',
    icon: <Zap className="w-8 h-8" />,
    progress: '50%'
  }
];

const LOGS = [
  {
    id: '9921_OPERATOR',
    author: 'V. Malone',
    role: 'Professional Mercenary',
    content: "The Neural Overlink didn't just save my life during the Night City heist—it made me a god. Zero latency, 100% precision. NovaCorp is the only clinic I trust with my wetware.",
    color: 'border-cyber-cyan'
  },
  {
    id: '8840_STREET_DOC',
    author: 'Dr. Arasaka',
    role: 'Ripperdoc',
    content: "I've seen a lot of budget chrome fail on the operating table. NovaCorp's hardware is different. It's clean, it's durable, and the rejection rates are virtually zero. Pure tech excellence.",
    color: 'border-cyber-yellow'
  }
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyber-yellow selection:text-cyber-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-cyan/30 shadow-[0_4px_15px_rgba(0,238,252,0.15)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-display text-4xl text-cyber-yellow italic tracking-tighter glow-yellow">
            NOVACORP
          </div>
          
          <div className="hidden md:flex gap-8 items-center font-mono text-sm tracking-widest text-cyber-muted">
            <a href="#" className="text-cyber-text border-b-2 border-cyber-yellow pb-1 transition-colors hover:text-cyber-yellow">SYST_INIT</a>
            <a href="#" className="hover:text-cyber-cyan transition-colors">AUG_CATALOG</a>
            <a href="#" className="hover:text-cyber-cyan transition-colors">BIO_STATS</a>
            <a href="#" className="hover:text-cyber-cyan transition-colors">OPS_FEED</a>
            <a href="#" className="hover:text-cyber-cyan transition-colors">SEC_PORTAL</a>
          </div>

          <button className="clip-button bg-cyber-yellow text-cyber-dark px-6 py-2 font-mono font-bold text-sm tracking-tight hover:brightness-110 active:scale-95 transition-all">
            UPGRADE_NOW
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grid-blueprint">
        <div className="absolute inset-0 scanline pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="font-mono text-xs text-cyber-cyan tracking-[0.4em] uppercase block mb-2">
              System Status: Optimal
            </span>
            <div className="h-[1px] w-full bg-cyber-cyan/50 glow-cyan" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-7xl md:text-9xl text-cyber-yellow mb-8 tracking-[0.1em] glow-yellow leading-tight"
          >
            UPGRADE YOUR FLESH
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-cyber-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans font-light"
          >
            Transcend biological limitations. NovaCorp provides military-grade neural interfaces and bio-synthetic augmentations for the elite operator.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <button className="clip-button bg-cyber-yellow text-cyber-dark px-12 py-4 font-heading text-xl font-bold tracking-[0.2em] hover:brightness-110 transition-all cursor-pointer">
              AUGMENT NOW
            </button>
            <button className="clip-button border border-cyber-cyan text-cyber-cyan px-12 py-4 font-heading text-xl font-bold tracking-[0.2em] hover:bg-cyber-cyan/10 transition-all cursor-pointer">
              VIEW SPECS
            </button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-8 hidden lg:block opacity-30 select-none">
          <div className="font-mono text-xs text-cyber-cyan vertical-text">
            COORD: 34.0522° N // 118.2437° W
          </div>
        </div>
        <div className="absolute bottom-1/4 right-8 hidden lg:block opacity-30 select-none">
          <div className="font-mono text-xs text-cyber-cyan vertical-text">
            Z-AXIS: ELEVATION_001
          </div>
        </div>
      </header>

      {/* Hazard Divider */}
      <div className="h-10 w-full flex items-center overflow-hidden">
        <div className="h-[1px] bg-cyber-gray flex-grow" />
        <div className="w-48 h-full hazard-stripes mx-8 transform skew-x-[-45deg]" />
        <div className="h-[1px] bg-cyber-gray flex-grow" />
      </div>

      {/* Stats Bar */}
      <section className="bg-cyber-dark/50 py-16 border-y border-cyber-gray/30 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { value: '12,402', label: 'Implants Installed' },
            { value: '99.8%', label: 'Success Rate' },
            { value: '100%', label: 'System Uptime' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <span className="font-display text-6xl text-cyber-yellow glow-yellow">{stat.value}</span>
              <span className="font-mono text-xs text-cyber-muted tracking-[0.2em] uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="font-mono text-xs text-cyber-cyan block mb-2 tracking-widest">// CATEGORY: HARDWARE</span>
            <h2 className="font-display text-5xl md:text-6xl text-cyber-text tracking-wider">AUGMENTATION CATALOG</h2>
          </div>
          <div className="text-right font-mono text-[10px] text-cyber-muted leading-relaxed">
            SEC_LEVEL: ALPHA_CLEARANCE<br />
            REF: CATALOG_V2077
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEAT_AUGMENTS.map((aug, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="clip-angled bg-cyber-gray p-8 border border-cyber-cyan/30 hover:border-cyber-cyan transition-all group relative"
            >
              <div className="absolute top-3 right-5 font-mono text-[10px] text-cyber-muted">UID: {aug.uid}</div>
              <div className="w-16 h-16 mb-8 flex items-center justify-center bg-cyber-cyan/5 border border-cyber-cyan/20 rounded-sm">
                <div className="text-cyber-cyan glow-cyan">
                  {aug.icon}
                </div>
              </div>
              <div className="font-mono text-xs text-cyber-cyan mb-2 tracking-tighter">{aug.code}</div>
              <h3 className="font-heading text-2xl text-cyber-text mb-4 tracking-tight">{aug.title}</h3>
              <p className="font-sans text-sm text-cyber-muted mb-8 leading-relaxed">
                {aug.description}
              </p>
              <div className="h-1 bg-cyber-dark w-full relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: aug.progress }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-y-0 left-0 bg-cyber-cyan glow-cyan" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logs Section */}
      <section className="py-32 bg-cyber-gray/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8 mb-20">
            <div className="h-[1px] bg-cyber-yellow/20 flex-grow" />
            <h2 className="font-display text-4xl text-cyber-yellow tracking-widest glow-yellow">CLIENT LOGS</h2>
            <div className="h-[1px] bg-cyber-yellow/20 flex-grow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LOGS.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`bg-cyber-gray/30 p-8 border-l-4 ${log.color} backdrop-blur-sm shadow-xl`}
              >
                <div className="flex items-center justify-between mb-6 border-b border-cyber-muted/10 pb-3">
                  <span className="font-mono text-[10px] text-cyber-muted">LOG_ID: {log.id}</span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-cyber-cyan/60 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-cyber-muted/20" />
                    <div className="w-2 h-2 rounded-full bg-cyber-muted/20" />
                  </div>
                </div>
                <div className="font-mono text-sm leading-relaxed text-cyber-text">
                  <span className="text-cyber-cyan mr-2 font-bold group-hover:animate-pulse">&gt;</span> 
                  "{log.content}"
                </div>
                <div className="mt-8 text-right">
                  <div className="font-mono text-xs text-cyber-muted italic tracking-tight">— {log.author}</div>
                  <div className="font-mono text-[10px] text-cyber-muted/60 uppercase mt-1">{log.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyber-dark border-t border-cyber-gray/50 relative overflow-hidden">
        {/* Animated Background Decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" className="text-cyber-cyan stroke-current fill-none">
            <path d="M0,100 L100,100 L150,50 L300,50 L350,100 L1000,100" strokeWidth="1" />
            <path d="M1000,900 L800,900 L750,950 L600,950 L550,900 L0,900" strokeWidth="1" />
            <motion.circle 
              cx="100" cy="100" r="3" fill="currentColor"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.circle 
              cx="800" cy="900" r="3" fill="currentColor"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-display text-3xl text-cyber-text mb-2 tracking-widest">NOVACORP</div>
            <div className="font-mono text-[10px] text-cyber-muted tracking-[0.2em]">
              © 2077 NOVACORP_CLINIC // PROTOCOL_V.4.0.2
            </div>
          </div>

          <div className="flex gap-10 font-mono text-xs tracking-tighter">
            <SocialLink icon={<Twitter className="w-3 h-3" />} label="--TWITTER" />
            <SocialLink icon={<MessageSquare className="w-3 h-3" />} label="--DISCORD" />
            <SocialLink icon={<Briefcase className="w-3 h-3" />} label="--RECRUITMENT" />
          </div>

          <div className="flex gap-8 items-center font-mono text-[10px] text-cyber-muted tracking-widest uppercase">
            <a href="#" className="hover:text-cyber-cyan transition-colors">--TERMS</a>
            <a href="#" className="hover:text-cyber-cyan transition-colors">--PRIVACY</a>
            <a href="#" className="hover:text-cyber-yellow transition-colors">--LOGOUT</a>
          </div>
        </div>

        <div className="absolute bottom-4 right-6 font-mono text-[8px] text-cyber-gray select-none tracking-[0.5em]">
          Z-AXIS: TERMINAL_BASE
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 clip-angled bg-cyber-yellow text-cyber-dark shadow-[0_0_25px_rgba(253,228,0,0.4)] flex items-center justify-center z-50 group"
      >
        <ShoppingCart className="w-7 h-7 group-hover:animate-bounce" />
      </motion.button>
    </div>
  );
}

function SocialLink({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <a href="#" className="flex items-center gap-2 text-cyber-muted hover:text-cyber-cyan transition-all group">
      <span className="opacity-0 group-hover:opacity-100 transition-opacity">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
