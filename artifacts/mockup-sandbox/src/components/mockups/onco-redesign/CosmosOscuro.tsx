import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Globe, Award, Calendar, MapPin, ArrowRight, Menu, X, FileText, UserPlus } from 'lucide-react';
import './_group.css';

const LOGOS = [
  { src: "/__mockup/images/logos/davis-thompson.jpg",       name: "Davis-Thompson Foundation (DTF)" },
  { src: "/__mockup/images/logos/lcpg.png",                 name: "LCPG" },
  { src: "/__mockup/images/logos/udenar.png",               name: "Universidad de Nariño" },
  { src: "/__mockup/images/logos/universidad-nacional.png", name: "Universidad Nacional de Colombia" },
  { src: "/__mockup/images/logos/universidad-antioquia.png",name: "Universidad de Antioquia" },
  { src: "/__mockup/images/logos/universidad-tolima.png",   name: "Universidad del Tolima" },
  { src: "/__mockup/images/logos/universidad-caldas.png",   name: "Universidad de Caldas" },
  { src: "/__mockup/images/logos/fundacion-san-martin.jpg", name: "Fundación Universitaria San Martín" },
  { src: "/__mockup/images/logos/juan-castellanos.png",     name: "Universidad Juan de Castellanos" },
  { src: "/__mockup/images/logos/unilasallista.png",        name: "Unilasallista" },
  { src: "/__mockup/images/logos/corhuila.png",             name: "CORHUILA" },
  { src: "/__mockup/images/logos/unad.png",                 name: "UNAD" },
  { src: "/__mockup/images/logos/vision-americas.png",      name: "IU Visión de las Américas" },
  { src: "/__mockup/images/logos/paw.png",                  name: "PAW Patología Veterinaria" },
  { src: "/__mockup/images/logos/vitalab.png",              name: "VitaLab" },
  { src: "/__mockup/images/logos/zoopath.png",              name: "ZooPath" },
  { src: "/__mockup/images/logos/acpavet.png",              name: "ACPAVET" },
  { src: "/__mockup/images/logos/facipec.jpg",              name: "FACIPEC" },
  { src: "/__mockup/images/logos/corpavet.jpg",             name: "CORPAVET" },
  { src: "/__mockup/images/logos/asfamedez.jpg",            name: "ASFAMEDEZ" },
  { src: "/__mockup/images/logos/supercan.jpg",             name: "SUPERCAN" },
];

function LogoCarousel() {
  const [paused, setPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const items = [...LOGOS, ...LOGOS];
  return (
    <div
      className="overflow-hidden py-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); setHoveredIdx(null); }}
    >
      <div
        className="flex gap-8 items-center"
        style={{
          animation: `logo-scroll 40s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
          width: 'max-content',
        }}
      >
        {items.map((logo, i) => {
          const isHov = hoveredIdx === i;
          return (
            <div
              key={i}
              className="relative flex-shrink-0 flex flex-col items-center cursor-default"
              style={{ width: 110 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <img
                src={logo.src}
                alt={logo.name}
                draggable={false}
                className="h-10 w-auto object-contain select-none transition-all duration-300"
                style={{
                  filter: isHov ? 'brightness(1.2) drop-shadow(0 0 8px rgba(0,212,255,0.6))' : 'brightness(0.85) grayscale(20%)',
                  transform: isHov ? 'scale(1.35)' : 'scale(1)',
                }}
              />
              {isHov && (
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gray-900/95 text-white text-[9px] rounded px-2 py-1 whitespace-nowrap z-20 shadow-lg border border-cyan-500/30 max-w-[160px] text-center pointer-events-none">
                  {logo.name}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CosmosOscuro() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const target = new Date('2026-10-08T08:00:00-05:00').getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const navLinks = ['Inicio','Sobre el Evento','Video','Temática','Ponentes','Precios','Resúmenes','Lugar','Hoteles'];

  return (
    <div className="min-h-screen bg-[#040d1a] text-white font-sans overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#040d1a]/85 backdrop-blur-md shadow-[0_2px_30px_rgba(0,212,255,0.12)] py-3' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-5 flex items-center justify-between">
          <span className="text-[#00d4ff] font-black text-xl tracking-widest uppercase drop-shadow-[0_0_10px_rgba(0,212,255,0.7)]">DTF/LCPG 2026</span>
          <div className="hidden lg:flex items-center gap-5">
            <ul className="flex gap-5 text-sm font-medium text-[#a5c8e1]">
              {navLinks.map(n => (
                <li key={n}><a href="#" className="hover:text-[#00d4ff] transition-colors">{n}</a></li>
              ))}
            </ul>
            <a href="https://forms.gle/dTzxtuDDPSCvaEeU8" target="_blank" rel="noreferrer"
               className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold border border-[#00d4ff] text-[#00d4ff] bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 shadow-[0_0_14px_rgba(0,212,255,0.25)] hover:shadow-[0_0_22px_rgba(0,212,255,0.5)] transition-all">
              Reserva tu cupo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <button className="lg:hidden text-[#00d4ff]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-8 overflow-hidden">

        {/* Background image — much more visible now */}
        <div className="absolute inset-0 z-0">
          <img src="/__mockup/images/hero-cosmos.png" alt="bg"
               className="w-full h-full object-cover object-center"
               style={{ opacity: 0.82 }} />
          {/* Light gradient only at edges so image is clearly visible */}
          <div className="absolute inset-0"
               style={{ background: 'linear-gradient(to bottom, rgba(4,13,26,0.55) 0%, rgba(4,13,26,0.15) 40%, rgba(4,13,26,0.15) 60%, rgba(4,13,26,0.92) 100%)' }} />
          <div className="absolute inset-0"
               style={{ background: 'linear-gradient(to right, rgba(4,13,26,0.6) 0%, transparent 30%, transparent 70%, rgba(4,13,26,0.6) 100%)' }} />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.18) 0%, transparent 70%)', animation: 'orbFloat 8s ease-in-out infinite' }} />
        <div className="absolute top-1/3 right-12 w-64 h-64 rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(255,0,128,0.15) 0%, transparent 70%)', animation: 'orbFloat 10s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', animation: 'orbFloat 6s ease-in-out infinite 2s' }} />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle" style={{ '--pi': i } as React.CSSProperties} />
        ))}

        {/* Content */}
        <div className="container relative z-10 mx-auto px-5 flex flex-col items-center text-center mt-8">

          {/* Badge */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border text-sm font-medium"
            style={{ background:'rgba(0,212,255,0.08)', borderColor:'rgba(0,212,255,0.35)', color:'#00d4ff', boxShadow:'0 0 14px rgba(0,212,255,0.2)' }}>
            <Microscope className="w-4 h-4" />
            Oncopatología Veterinaria
          </motion.div>

          {/* Main title */}
          <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.15 }}
            className="font-black uppercase leading-tight max-w-5xl text-center"
            style={{ fontSize:'clamp(2.2rem,6vw,4.5rem)', letterSpacing:'-0.02em' }}>
            <span className="block text-white mb-1"
                  style={{ textShadow:'0 0 40px rgba(255,255,255,0.3)' }}>
              Seminario Internacional de
            </span>
            <span className="block mb-1"
                  style={{ background:'linear-gradient(90deg,#00d4ff,#a855f7,#ff0080)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', filter:'drop-shadow(0 0 20px rgba(0,212,255,0.4))' }}>
              Oncopatología
            </span>
            <span className="block"
                  style={{ color:'#ff0080', textShadow:'0 0 25px rgba(255,0,128,0.7), 0 0 50px rgba(255,0,128,0.3)' }}>
              Veterinaria 2026
            </span>
          </motion.h1>

          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8, delay:0.4 }}
            className="mt-5 text-xl text-[#a5c8e1] font-light">
            ¡Reserva la fecha!{' '}
            <span style={{ color:'#00d4ff', textShadow:'0 0 10px rgba(0,212,255,0.7)' }}>Te esperamos.</span>
          </motion.p>

          {/* Date & location pills */}
          <motion.div initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.6, delay:0.55 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full"
                 style={{ background:'rgba(255,255,255,0.07)', backdropFilter:'blur(14px)', border:'1px solid rgba(0,212,255,0.3)', boxShadow:'0 0 12px rgba(0,212,255,0.15)' }}>
              <Calendar className="w-5 h-5 text-[#00d4ff]" />
              <span className="font-semibold">8 al 10 de Octubre, 2026</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full"
                 style={{ background:'rgba(255,255,255,0.07)', backdropFilter:'blur(14px)', border:'1px solid rgba(255,0,128,0.35)', boxShadow:'0 0 12px rgba(255,0,128,0.15)' }}>
              <MapPin className="w-5 h-5 text-[#ff0080]" />
              <span className="font-semibold">Hotel Cuellars, Pasto</span>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.7 }}
            className="mt-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#a5c8e1]/60 mb-5">Faltan para el evento</p>
            <div className="flex gap-4 sm:gap-6 justify-center">
              {[
                { v: timeLeft.days,    l: 'Días' },
                { v: timeLeft.hours,   l: 'Horas' },
                { v: timeLeft.minutes, l: 'Min' },
                { v: timeLeft.seconds, l: 'Seg' },
              ].map(({ v, l }, i) => (
                <div key={l} className="flex flex-col items-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-xl"
                       style={{ background:'rgba(0,0,0,0.5)', backdropFilter:'blur(12px)', border:'1px solid rgba(0,212,255,0.25)', boxShadow:'0 0 20px rgba(0,212,255,0.12), inset 0 1px 0 rgba(255,255,255,0.05)' }}>
                    {i < 3 && <span className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 text-[#00d4ff]/50 text-xl font-bold">:</span>}
                    <span className="text-3xl sm:text-4xl font-black tabular-nums"
                          style={{ color:'#00d4ff', textShadow:'0 0 16px rgba(0,212,255,0.8)' }}>
                      {String(v).padStart(2,'0')}
                    </span>
                  </div>
                  <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#a5c8e1]/60">{l}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="https://forms.gle/dTzxtuDDPSCvaEeU8" target="_blank" rel="noreferrer"
               className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all"
               style={{ background:'#00d4ff', color:'#040d1a', boxShadow:'0 0 24px rgba(0,212,255,0.5)' }}
               onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow='0 0 40px rgba(0,212,255,0.8)'; }}
               onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow='0 0 24px rgba(0,212,255,0.5)'; }}>
              <UserPlus className="w-5 h-5" />
              Inscríbete aquí como participante
            </a>
            <a href="https://ci.udenar.edu.co:8082/recibos/Tesoreria/ImpresionInternetEve.aspx?id=249"
               target="_blank" rel="noreferrer"
               className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all receipt-pop"
               style={{ background:'rgba(245,158,11,0.12)', color:'#f59e0b', border:'2px solid #f59e0b', boxShadow:'0 0 18px rgba(245,158,11,0.3)' }}>
              <FileText className="w-5 h-5" />
              Genera aquí tu recibo de pago
            </a>
          </motion.div>

          {/* Logo carousel */}
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:1.1 }}
            className="mt-12 w-full max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-[#a5c8e1]/50 mb-4 text-center">Organizan y Respaldan</p>
            <div className="rounded-xl px-4 py-4"
                 style={{ background:'rgba(255,255,255,0.06)', backdropFilter:'blur(14px)', border:'1px solid rgba(0,212,255,0.15)' }}>
              <LogoCarousel />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SOBRE EL EVENTO ── */}
      <section className="py-24 relative" style={{ background:'linear-gradient(180deg,#040d1a 0%,#020610 100%)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(0,212,255,0.4),transparent)' }} />
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl mb-4">
              <span className="text-white">Sobre el </span>
              <span style={{ color:'#00d4ff', textShadow:'0 0 20px rgba(0,212,255,0.5)' }}>Evento</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ background:'linear-gradient(90deg,#00d4ff,#ff0080)' }} />
            <p className="text-lg text-[#a5c8e1] leading-relaxed max-w-3xl mx-auto">
              La Davis-Thompson Foundation (DTF) y el Latin Comparative Pathology Group (LCPG) apoyan año a año el entrenamiento de clínicos y patólogos veterinarios en Latinoamérica. En 2026 se realiza del <strong className="text-white">8 al 10 de Octubre</strong> el Seminario-Taller en Oncopatología Veterinaria en el Hotel Cuellars de Pasto, Nariño, Colombia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon:<Microscope/>, color:'#00d4ff', title:'Ciencia Avanzada', text:'Profundiza en biología tumoral, diagnóstico molecular y fronteras de la patología oncológica veterinaria.' },
              { icon:<Globe/>,      color:'#ff0080', title:'Red Global',       text:'Conecta con colegas de toda América Latina y el mundo en un espacio de intercambio de conocimientos.' },
              { icon:<Award/>,      color:'#7c3aed', title:'Certificación',    text:'Avalado por la Davis-Thompson Foundation y el Latin Comparative Pathology Group (LCPG).' },
            ].map(({ icon, color, title, text }) => (
              <div key={title} className="p-8 rounded-2xl transition-all group cursor-default"
                   style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)' }}
                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = color + '50'; }}
                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                     style={{ background: color + '18' }}>
                  {React.cloneElement(icon as any, { className:'w-7 h-7', style:{ color } })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-[#a5c8e1] text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black py-12 border-t border-white/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full pointer-events-none"
             style={{ background:'rgba(0,212,255,0.05)', filter:'blur(80px)' }} />
        <div className="container mx-auto px-5 flex flex-col items-center relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#a5c8e1]/50 mb-5">Organizadores y Co-organizadores</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Davis-Thompson Foundation','LCPG','U. de Nariño','U. Nacional','U. de Antioquia','U. del Tolima','U. de Caldas','F.U. San Martín','U. Juan de Castellanos','Unilasallista','CORHUILA','UNAD','IU Visión de las Américas','PAW','VitaLab','ZooPath','ACPAVET','FACIPEC','CORPAVET','ASFAMEDEZ','SUPERCAN'].map(n => (
              <span key={n} className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ border:'1px solid rgba(0,212,255,0.3)', color:'#00d4ff', background:'rgba(0,212,255,0.06)' }}>
                {n}
              </span>
            ))}
          </div>
          <p className="text-[#a5c8e1]/50 text-sm text-center">
            © 2026 Seminario Internacional de Oncopatología Veterinaria. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
