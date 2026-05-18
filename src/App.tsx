/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  Zap, 
  ShoppingCart, 
  Twitter, 
  MessageSquare, 
  Briefcase, 
  Cpu,
  Menu,
  X,
  ScanSearch,
  BrainCircuit,
  Syringe,
  HeartPulse,
  ChevronDown,
  ShieldCheck
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

const TESTIMONIALS = [
  {
    name: 'KIRA VEX',
    content:
      'Operación Blackwall. Perdí sensibilidad en ambos brazos tras una emboscada Militech. NovaCorp instaló tendones sintéticos y un enlace neural dual en 17 horas. Volví al campo con +22% de precisión balística y cero latencia táctil.'
  },
  {
    name: 'AXEL MORROW',
    content:
      'Solicité un Kiroshi MK-IV con módulo térmico para infiltración nocturna. El calibrado de retina fue perfecto al primer ciclo. Reconocimiento de amenazas en 0.3s y sincronización total con mi Sandevistan E-7. Nivel corporativo real.'
  },
  {
    name: 'DR. N. KOVAL',
    content:
      'Como cirujano de trauma, evalué sus bio-polímeros de sellado vascular en 41 pacientes de alto riesgo. Rechazo inmunológico prácticamente nulo y recuperación de tejido acelerada. NovaCorp está 5 años por delante de cualquier clínica de Night City.'
  },
];

const NAV_LINKS = [
  { label: 'SYST_INIT', id: 'syst-init' },
  { label: 'AUG_CATALOG', id: 'aug-catalog' },
  { label: 'BIO_STATS', id: 'bio-stats' },
  { label: 'OPS_FEED', id: 'ops-feed' },
  { label: 'SEC_PORTAL', id: 'sec-portal' },
];

const PROCEDURE_STEPS = [
  {
    id: '01',
    title: 'INTAKE_SCAN',
    description: 'Full-spectrum biometric intake and cybernetic compatibility check.',
    icon: <ScanSearch className="w-7 h-7" />,
  },
  {
    id: '02',
    title: 'NEURAL_MAP',
    description: 'Cortex route mapping with low-latency synaptic profile generation.',
    icon: <BrainCircuit className="w-7 h-7" />,
  },
  {
    id: '03',
    title: 'INSTALLATION',
    description: 'Precision implant integration under sterile tactical conditions.',
    icon: <Syringe className="w-7 h-7" />,
  },
  {
    id: '04',
    title: 'RECOVERY',
    description: 'Realtime telemetry monitoring and adaptive bio-stabilization.',
    icon: <HeartPulse className="w-7 h-7" />,
  },
];

const PRICING_TIERS = [
  {
    id: 'STANDARD_OPS',
    price: '€ 9,900',
    border: 'border-cyber-cyan',
    cta: '[DEPLOY_STANDARD]',
    features: ['Neural diagnostics', 'One hardware slot', '72h remote monitoring'],
  },
  {
    id: 'TACTICAL_GRADE',
    price: '€ 24,700',
    border: 'border-cyber-yellow',
    cta: '[DEPLOY_TACTICAL]',
    features: ['Dual-slot integration', 'Priority OR queue', 'AI recovery protocol'],
  },
  {
    id: 'BLACK_OPS',
    price: '€ 61,300',
    border: 'border-[#FF003C]',
    cta: '[DEPLOY_BLACKOPS]',
    features: ['Military wetware suite', 'Stealth cortex profile', '24/7 operative support'],
  },
];

const FAQS = [
  {
    q: 'Q:// HOW LONG UNTIL FULL MOTOR SYNCH?',
    a: 'A:// Standard adaptation completes between 18 and 72 hours depending on neural load and implant class.',
  },
  {
    q: 'Q:// IS MEMORY INTEGRITY PRESERVED?',
    a: 'A:// Yes. NovaCorp protocols isolate cognitive pathways before hardware handshake to prevent memory corruption.',
  },
  {
    q: 'Q:// CAN I COMBINE LEGACY CYBERWARE?',
    a: 'A:// Mixed-stack upgrades are supported after intake validation and thermal risk scoring.',
  },
  {
    q: 'Q:// WHAT IS FAILURE RATE UNDER TACTICAL_GRADE?',
    a: 'A:// Current verified rejection rate is below 0.3% under supervised clinical deployment.',
  },
  {
    q: 'Q:// DO YOU OFFER FIELD RECOVERY SUPPORT?',
    a: 'A:// Yes. BLACK_OPS contracts include encrypted telemetry and rapid-response medtech teams.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterState, setNewsletterState] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setIsReducedMotion(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => {
        const colors = ['#FFE600', '#00F0FF', '#FF003C'];
        return {
          id: i,
          size: i % 2 === 0 ? 2 : 3,
          color: colors[i % colors.length],
          left: `${(i * 37) % 100}%`,
          top: `${(i * 23) % 100}%`,
          opacity: 0.3 + (i % 3) * 0.1,
          dx: ((i % 5) - 2) * 12,
          dy: ((i % 7) - 3) * 10,
          duration: 3.5 + (i % 4) * 1.2,
        };
      }),
    []
  );

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterState('CONNECTION_ESTABLISHED');
  };

  const handleHeroParallax = (event: React.MouseEvent<HTMLElement>) => {
    if (isReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
    setParallaxOffset({ x: x * 12, y: y * 10 });
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-cyan/30 shadow-[0_4px_15px_rgba(0,238,252,0.15)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-display text-4xl text-cyber-yellow italic tracking-tighter glow-yellow">
            NOVACORP
          </div>
          
          <div className="hidden md:flex gap-8 items-center font-mono text-sm tracking-widest text-cyber-muted">
            {NAV_LINKS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={`Navigate to ${item.label}`}
                className={`transition-colors hover:text-cyber-cyan ${
                  index === 0 ? 'text-cyber-text border-b-2 border-cyber-yellow pb-1' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden xl:flex flex-col items-end mr-6 font-mono text-[10px] tracking-[0.18em]">
            <div className="text-cyber-cyan blink-status">● SYS_STATUS: ONLINE</div>
            <div className="text-cyber-yellow mt-1">THREAT_LEVEL: LOW</div>
          </div>

          <button aria-label="Initialize upgrade process" className="hidden md:block clip-button bg-cyber-yellow text-cyber-dark px-6 py-2 font-mono font-bold text-sm tracking-tight hover:brightness-110 active:scale-95 transition-all">
            UPGRADE_NOW
          </button>

          <button
            className="md:hidden text-cyber-cyan"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-cyber-cyan/20 bg-[#0D0E14]"
            >
              <div className="px-6 py-4 flex flex-col gap-3 font-mono text-sm tracking-widest text-cyber-muted">
                {NAV_LINKS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    aria-label={`Navigate to ${item.label}`}
                    className="w-full text-left border border-cyber-cyan/20 px-4 py-3 hover:bg-cyber-cyan/10 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <button aria-label="Initialize upgrade process" className="w-full clip-button bg-cyber-yellow text-cyber-dark px-6 py-3 font-bold text-sm tracking-tight hover:brightness-110 active:scale-95 transition-all">
                  UPGRADE_NOW
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
      {/* Hero Section */}
      <header
        id="syst-init"
        onMouseMove={handleHeroParallax}
        className="crosshair-zone relative min-h-screen flex items-center justify-center pt-32 md:pt-20 overflow-hidden neon-hero-grid"
      >
        <div className="absolute inset-0 scanline pointer-events-none" />
        {!isReducedMotion && particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="hero-particle absolute rounded-full pointer-events-none"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
              backgroundColor: particle.color,
              opacity: particle.opacity,
            }}
            animate={{ x: [0, particle.dx, -particle.dx, 0], y: [0, -particle.dy, particle.dy, 0] }}
            transition={{ repeat: Infinity, duration: particle.duration, ease: 'easeInOut' }}
          />
        ))}
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <motion.div 
            variants={fadeInUpVariants}
            className="inline-block mb-6"
          >
            <span className="font-mono text-xs text-cyber-cyan tracking-[0.4em] uppercase block mb-2">
              System Status: Optimal
            </span>
            <div className="h-[1px] w-full bg-cyber-cyan/50 glow-cyan" />
          </motion.div>

          <motion.h1 
            variants={fadeInUpVariants}
            className="glitch-title font-display text-5xl md:text-9xl text-cyber-yellow mb-8 tracking-[0.1em] glow-yellow leading-tight"
          >
            UPGRADE YOUR FLESH
          </motion.h1>

          <motion.p 
            variants={fadeInUpVariants}
            className="text-cyber-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans font-light"
          >
            Transcend biological limitations. NovaCorp provides military-grade neural interfaces and bio-synthetic augmentations for the elite operator.
          </motion.p>

          <motion.div 
            variants={fadeInUpVariants}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <button aria-label="Start augmentation order" className="clip-button bg-cyber-yellow text-cyber-dark px-12 py-4 font-heading text-xl font-bold tracking-[0.2em] hover:brightness-110 transition-all">
              AUGMENT NOW
            </button>
            <button aria-label="View technical specifications" className="clip-button border border-cyber-cyan text-cyber-cyan px-12 py-4 font-heading text-xl font-bold tracking-[0.2em] hover:bg-cyber-cyan/10 transition-all">
              VIEW SPECS
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          style={{ x: parallaxOffset.x, y: parallaxOffset.y }}
          className="absolute top-1/4 left-8 hidden lg:block opacity-30 select-none"
        >
          <div className="font-mono text-xs text-cyber-cyan vertical-text">
            COORD: 34.0522° N // 118.2437° W
          </div>
        </motion.div>
        <motion.div
          style={{ x: -parallaxOffset.x, y: -parallaxOffset.y }}
          className="absolute bottom-1/4 right-8 hidden lg:block opacity-30 select-none"
        >
          <div className="font-mono text-xs text-cyber-cyan vertical-text">
            Z-AXIS: ELEVATION_001
          </div>
        </motion.div>
      </header>

      <SectionBreak label="// SECTION_BREAK_0x01 //" />

      {/* Stats Bar */}
      <section id="bio-stats" className="bg-[#0D0E14] py-14 border-t border-[#FFE600] relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
        >
          <StatItem end={48291} label="AUGMENTATIONS INSTALLED" format="int" />
          <StatItem end={99.7} label="SYSTEM UPTIME" format="percent" />
          <StatItem end={2.4} label="AVG RECOVERY TIME" format="seconds" />
        </motion.div>
        <div className="hidden md:block absolute inset-y-8 left-[33.333%] w-px bg-transparent">
          <div className="w-16 h-px bg-[#FF003C] rotate-[60deg] origin-left" />
        </div>
        <div className="hidden md:block absolute inset-y-8 left-[66.666%] w-px bg-transparent">
          <div className="w-16 h-px bg-[#FF003C] rotate-[60deg] origin-left" />
        </div>
      </section>

      <SectionBreak label="// SECTION_BREAK_0x02 //" />

      {/* Procedure Flow */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="font-mono text-sm md:text-base text-cyber-cyan tracking-[0.25em] mb-14">// AUGMENTATION_PROTOCOL</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {PROCEDURE_STEPS.map((step, index) => (
            <motion.div key={step.id} variants={fadeInUpVariants} className="clip-angled relative border border-cyber-cyan/35 bg-[#0D0E14] p-6">
              {index < PROCEDURE_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 w-8 border-t border-dashed border-[#FFE600]" />
              )}
              <div className="font-display text-6xl leading-none text-cyber-yellow mb-4">{step.id}</div>
              <div className="text-cyber-cyan mb-4">{step.icon}</div>
              <h3 className="font-heading text-2xl text-cyber-text tracking-wide mb-3">{step.title}</h3>
              <p className="font-sans text-cyber-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <SectionBreak label="// SECTION_BREAK_0x03 //" />

      {/* Pricing tiers */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="font-mono text-sm md:text-base text-cyber-cyan tracking-[0.25em] mb-14">// SERVICE_CLASSIFICATION</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {PRICING_TIERS.map((tier) => (
            <motion.div key={tier.id} variants={fadeInUpVariants} className={`clip-angled bg-[#0D0E14] border ${tier.border} p-7`}>
              <h3 className="font-heading text-2xl text-cyber-text mb-4 tracking-wide">{tier.id}</h3>
              <div className="font-display text-6xl text-cyber-yellow mb-6 leading-none">{tier.price}</div>
              <ul className="space-y-2 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="font-mono text-sm text-cyber-muted flex items-center gap-2">
                    <span className="text-cyber-cyan">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button aria-label={`Initialize ${tier.id} package`} className={`w-full clip-button px-5 py-3 font-mono tracking-[0.15em] border ${tier.border} hover:bg-cyber-cyan/10 transition-colors`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <SectionBreak label="// SECTION_BREAK_0x04 //" />

      {/* Catalog Section */}
      <section id="aug-catalog" className="crosshair-zone py-32 px-6 max-w-7xl mx-auto">
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

      <SectionBreak label="// SECTION_BREAK_0x05 //" />

      {/* Testimonials Section */}
      <section id="ops-feed" className="py-28 bg-cyber-gray/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-mono text-sm md:text-base text-cyber-cyan tracking-[0.25em] mb-14">// CLIENT_TESTIMONIALS</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {TESTIMONIALS.map((item) => (
              <motion.div 
                key={item.name}
                variants={fadeInUpVariants}
                className="clip-angled bg-[#0D0E14] p-7 border border-[rgba(0,240,255,0.4)] backdrop-blur-sm shadow-xl"
              >
                <div className="font-mono text-xs text-cyber-cyan tracking-widest mb-5">&gt; OPERATOR_REVIEW:</div>
                <div className="font-display text-4xl text-cyber-yellow tracking-wide leading-none mb-4">{item.name}</div>
                <p className="font-sans text-lg text-cyber-text/90 leading-relaxed mb-6">{item.content}</p>
                <div className="font-display text-cyber-yellow text-xl tracking-[0.3em]">▮▮▮▮▮</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionBreak label="// SECTION_BREAK_0x06 //" />

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="font-mono text-sm md:text-base text-cyber-cyan tracking-[0.25em] mb-12">// FREQUENTLY_ASKED_QUERIES</h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="clip-angled border border-cyber-cyan/30 bg-[#0D0E14]/70 p-4 md:p-6">
          {FAQS.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <motion.div key={item.q} variants={fadeInUpVariants} className="border-b border-[#FFE600] last:border-b-0">
                <button
                  aria-label={`Toggle FAQ ${index + 1}`}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full py-5 flex items-center justify-between text-left"
                >
                  <span className="font-mono text-sm md:text-base text-cyber-yellow tracking-wide">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyber-cyan transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-cyber-text/90 pb-5 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <SectionBreak label="// SECTION_BREAK_0x07 //" />

      {/* Newsletter Section */}
      <section id="sec-portal" className="py-28 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="clip-angled max-w-5xl mx-auto border border-cyber-cyan/30 bg-[#0D0E14]/70 backdrop-blur-sm p-8 md:p-12"
        >
          <motion.h3 variants={fadeInUpVariants} className="font-display text-cyber-yellow text-5xl md:text-7xl tracking-[0.08em] mb-8">
            JOIN THE NETWORK
          </motion.h3>

          <motion.form variants={fadeInUpVariants} onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <label htmlFor="node-email" className="sr-only">Node email address</label>
              <input
                id="node-email"
                name="email"
                type="email"
                required
                placeholder="ENTER_NODE_ADDRESS_"
                className="terminal-input w-full bg-black/40 border border-cyber-cyan/50 text-cyber-cyan font-mono px-5 py-4 text-sm tracking-[0.12em] placeholder:text-cyber-cyan/45 focus:border-cyber-yellow"
              />
              <span className="terminal-caret" />
            </div>
            <button aria-label="Initialize secure network connection" type="submit" className="px-8 py-4 border border-[#FF003C] text-[#FF003C] font-mono tracking-[0.2em] hover:bg-[#FF003C] hover:text-black transition-colors">
              [INITIALIZE]
            </button>
          </motion.form>

          {newsletterState && (
            <p className="font-mono text-xs mt-4 tracking-[0.15em]" style={{ color: '#00F0FF' }}>
              {newsletterState}
            </p>
          )}

          <motion.p variants={fadeInUpVariants} className="font-mono text-xs text-cyber-muted mt-6 tracking-[0.12em]">
            ENCRYPTED UPLINK // NODE REGISTRATION ENABLED // PRIORITY CHANNEL ALPHA
          </motion.p>
        </motion.div>
      </section>
      </main>

      <SectionBreak label="// SECTION_BREAK_0x08 //" />

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
            <button aria-label="Scroll to FAQ section" onClick={() => scrollToSection('faq')} className="hover:text-cyber-cyan transition-colors">--TERMS</button>
            <button aria-label="Scroll to security portal section" onClick={() => scrollToSection('sec-portal')} className="hover:text-cyber-cyan transition-colors">--PRIVACY</button>
            <button aria-label="Scroll to top section" onClick={() => scrollToSection('syst-init')} className="hover:text-cyber-yellow transition-colors">--LOGOUT</button>
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
        aria-label="Open tactical shopping cart"
        className="hidden sm:flex fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 clip-angled bg-cyber-yellow text-cyber-dark shadow-[0_0_25px_rgba(253,228,0,0.4)] items-center justify-center z-50 group"
      >
        <ShoppingCart className="w-7 h-7 group-hover:animate-bounce" />
      </motion.button>
    </div>
  );
}

function SectionBreak({ label }: { label: string }) {
  return (
    <div className="section-break" aria-hidden>
      <span>{label}</span>
    </div>
  );
}

const StatItem = React.memo(function StatItem({ end, label, format }: { end: number; label: string; format: 'int' | 'percent' | 'seconds' }) {
  const [started, setStarted] = useState(false);
  const [value, setValue] = useState(0);
  const [streamValue, setStreamValue] = useState('0');

  const formatFinal = (current: number) => {
    if (format === 'int') {
      return Math.round(current).toLocaleString('es-AR');
    }
    if (format === 'percent') {
      return `${current.toFixed(1)}%`;
    }
    return `${current.toFixed(1)}s`;
  };

  const scrambleDisplay = (target: string, progress: number) => {
    if (progress >= 1) return target;
    const chars = target.split('');
    const lockPoint = Math.floor(chars.length * progress);
    return chars
      .map((char, index) => {
        if (index < lockPoint || !/[0-9]/.test(char)) return char;
        return String(Math.floor(Math.random() * 10));
      })
      .join('');
  };

  const startAnimation = () => {
    if (started) return;
    setStarted(true);

    const duration = 1500;
    const initialTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - initialTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = end * eased;
      const finalValue = formatFinal(nextValue);
      setValue(nextValue);
      setStreamValue(scrambleDisplay(finalValue, progress));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  return (
    <motion.div
      variants={fadeInUpVariants}
      onViewportEnter={startAnimation}
      viewport={{ once: true }}
      className="flex flex-col gap-2"
    >
      <span className="countup-text font-display text-[48px] leading-none text-[#FFE600] glow-yellow">{started ? streamValue : formatFinal(value)}</span>
      <span className="font-mono text-xs text-cyber-muted tracking-[0.2em] uppercase">{label}</span>
    </motion.div>
  );
});

const SocialLink = React.memo(function SocialLink({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button aria-label={`Open ${label.replace('--', '')} channel`} className="flex items-center gap-2 text-cyber-muted hover:text-cyber-cyan transition-all group">
      <span className="opacity-0 group-hover:opacity-100 transition-opacity">{icon}</span>
      <span>{label}</span>
    </button>
  );
});
