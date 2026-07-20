import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Microscope, Dna, Activity, HeartPulse, ChevronRight, Menu, X, FileText, Shield, Award, Users } from 'lucide-react';
import './_group.css';

const NAV_LINKS = ['Inicio', 'Sobre el Evento', 'Video', 'Temática', 'Ponentes', 'Precios', 'Resúmenes', 'Lugar', 'Hoteles'];

export function Biopulse() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const target = new Date('2026-10-08T00:00:00').getTime();
    
    // Set initial to avoid jump
    const calcTime = () => {
      const now = new Date().getTime();
      const difference = target - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    calcTime();
    const interval = setInterval(calcTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050f0a] min-h-screen text-white font-jakarta overflow-x-hidden selection:bg-[#10b981] selection:text-white relative">
      
      {/* Decorative organic background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#10b981] opacity-[0.03] blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#f59e0b] opacity-[0.03] blur-[150px]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel-bio py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-[#10b981] animate-heartbeat" />
            <span className="font-outfit font-bold text-xl md:text-2xl text-[#10b981] tracking-wider">
              DTF/LCPG <span className="text-white font-light">2026</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.slice(0, 7).map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-[#d1fae5] hover:text-[#10b981] transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#10b981] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://forms.gle/dTzxtuDDPSCvaEeU8" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#10b981] text-[#050f0a] font-semibold text-sm hover:bg-[#f59e0b] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 flex items-center gap-2"
            >
              Reserva tu cupo <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button className="lg:hidden text-[#d1fae5]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full glass-panel-bio border-t border-[rgba(16,185,129,0.1)] py-4 flex flex-col">
            {NAV_LINKS.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="px-6 py-3 text-[#d1fae5] hover:bg-[rgba(16,185,129,0.1)] hover:text-[#10b981] transition-colors border-b border-[rgba(255,255,255,0.05)]">
                {link}
              </a>
            ))}
            <div className="p-6">
              <a 
                href="https://forms.gle/dTzxtuDDPSCvaEeU8" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 rounded-full bg-[#10b981] text-[#050f0a] font-semibold text-center hover:bg-[#f59e0b] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Reserva tu cupo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden z-10">
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/hero-biopulse.png" 
            alt="Biopulse Hero" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050f0a]/60 via-[#050f0a]/80 to-[#050f0a]"></div>
          {/* Subtle radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050f0a_80%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start pt-10">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b] text-sm font-medium mb-6 backdrop-blur-md animate-fade-up-1 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                <Microscope className="w-4 h-4" />
                <span>🔬 Oncopatología Veterinaria</span>
              </div>
              
              <h1 className="font-outfit font-black leading-[1.1] tracking-tight mb-6 flex flex-col">
                <span className="text-3xl md:text-5xl lg:text-6xl text-white mb-2 animate-fade-up-1">
                  Seminario Internacional de
                </span>
                <span className="text-5xl md:text-7xl lg:text-8xl text-gradient-bio pb-2 animate-fade-up-2">
                  Oncopatología
                </span>
                <span className="text-4xl md:text-6xl lg:text-7xl text-white mb-2 animate-fade-up-2">
                  Veterinaria
                </span>
              </h1>
              
              {/* Massive Outline Text for Year */}
              <div className="absolute top-10 right-0 lg:right-auto lg:left-[50%] text-9xl md:text-[14rem] font-black outline-text-bio opacity-20 -z-10 pointer-events-none select-none tracking-tighter">
                2026
              </div>

              <p className="text-xl md:text-2xl text-[#d1fae5] font-light max-w-2xl mb-8 animate-fade-up-3 leading-relaxed">
                Descubre el futuro de la biología tumoral. <span className="text-[#f59e0b] font-medium">Te esperamos</span> en el epicentro de la investigación veterinaria.
              </p>

              <div className="flex flex-wrap gap-4 mb-10 animate-fade-up-3">
                <div className="glass-panel-bio px-5 py-3 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#d1fae5]/70 uppercase tracking-wider font-semibold">Fecha</p>
                    <p className="text-white font-medium">8 al 10 de Oct, 2026</p>
                  </div>
                </div>
                
                <div className="glass-panel-bio px-5 py-3 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f59e0b]/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#f59e0b]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#d1fae5]/70 uppercase tracking-wider font-semibold">Sede</p>
                    <p className="text-white font-medium">Hotel Cuellars, Pasto</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-up-4">
                <a 
                  href="https://forms.gle/dTzxtuDDPSCvaEeU8" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative overflow-hidden px-8 py-4 rounded-full bg-[#10b981] text-[#050f0a] font-bold text-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-500 text-center flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2 group-hover:-translate-x-1 transition-transform">
                    Inscríbete como participante
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 opacity-0 -ml-4 group-hover:opacity-100 group-hover:translate-x-1 group-hover:ml-0 transition-all duration-300" />
                  <div className="absolute inset-0 bg-[#f59e0b] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                </a>

                <a 
                  href="https://ci.udenar.edu.co:8082/recibos/Tesoreria/ImpresionInternetEve.aspx?id=249" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group px-8 py-4 rounded-full border-2 border-[#f59e0b] text-[#f59e0b] font-bold text-lg hover:bg-[#f59e0b] hover:text-[#050f0a] transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.1)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
                >
                  <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Genera tu recibo
                </a>
              </div>
            </div>

            {/* Countdown Box */}
            <div className="lg:col-span-4 mt-12 lg:mt-0 animate-fade-up-4 relative">
              <div className="absolute inset-0 bg-[#10b981] opacity-5 blur-[100px] rounded-full"></div>
              <div className="glass-panel-bio rounded-[2rem] p-8 border border-[rgba(16,185,129,0.3)] animate-pulse-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/10 rounded-bl-[100px]"></div>
                
                <h3 className="font-outfit font-bold text-2xl text-white mb-6 flex items-center gap-3 relative z-10">
                  <HeartPulse className="w-6 h-6 text-[#10b981] animate-heartbeat" />
                  El pulso comienza en
                </h3>
                
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {[
                    { label: 'Días', value: timeLeft.days },
                    { label: 'Horas', value: timeLeft.hours },
                    { label: 'Minutos', value: timeLeft.minutes },
                    { label: 'Segundos', value: timeLeft.seconds }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-[rgba(5,15,10,0.8)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden group">
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] to-[#f59e0b] opacity-50"></div>
                      <span className="font-outfit font-black text-4xl text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                        {String(item.value).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-medium text-[#d1fae5]/60 uppercase tracking-widest">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Institutional Logos Band */}
          <div className="mt-20 pt-8 border-t border-[rgba(255,255,255,0.05)] animate-fade-up-4">
            <p className="text-center text-sm font-medium text-[#d1fae5]/50 uppercase tracking-[0.2em] mb-8">Organizado y Avalado por</p>
            <div className="glass-panel-bio rounded-3xl py-8 px-6 overflow-hidden flex justify-center w-full max-w-4xl mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
               <img 
                 src="/__mockup/images/logos-institucionales.png" 
                 alt="Instituciones Organizadoras" 
                 className="h-16 md:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-700 opacity-70 hover:opacity-100"
               />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-el-evento" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-outfit font-black text-4xl md:text-5xl text-white mb-6">
              Donde la ciencia <span className="text-[#10b981]">cobra vida</span>
            </h2>
            <p className="text-lg text-[#d1fae5]/80 leading-relaxed font-light">
              Únete a nosotros en una exploración profunda de la oncopatología. Un evento diseñado para revelar los mecanismos biológicos del cáncer en especies animales y conectar con las mentes más brillantes del sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Microscope className="w-8 h-8 text-[#f59e0b]" />,
                title: 'Ciencia Celular',
                desc: 'Análisis microscópico y diagnóstico avanzado de neoplasias.'
              },
              {
                icon: <Dna className="w-8 h-8 text-[#10b981]" />,
                title: 'Genética Tumoral',
                desc: 'Marcadores moleculares y evolución de patologías oncológicas.'
              },
              {
                icon: <Users className="w-8 h-8 text-[#34d399]" />,
                title: 'Red Global',
                desc: 'Intercambio vital de conocimientos con expertos de LCPG y DTF.'
              }
            ].map((pillar, idx) => (
              <div key={idx} className="glass-panel-bio rounded-[2rem] p-8 glass-card-hover border-[rgba(16,185,129,0.15)] relative overflow-hidden group">
                {/* Organic glow blob inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#10b981]/10 rounded-full blur-[40px] group-hover:bg-[#f59e0b]/20 transition-colors duration-500"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-[#050f0a] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {pillar.icon}
                </div>
                <h3 className="font-outfit font-bold text-2xl text-white mb-4">{pillar.title}</h3>
                <p className="text-[#d1fae5]/70 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Compact Footer */}
      <footer className="border-t border-[rgba(16,185,129,0.1)] bg-[#030906] py-12 relative z-10 overflow-hidden">
        {/* Subtle bottom glow */}
        <div className="absolute bottom-[-50%] left-[20%] w-[60%] h-[50%] rounded-[100%] bg-[#10b981] opacity-[0.02] blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
             <Activity className="w-6 h-6 text-[#10b981]" />
             <span className="font-outfit font-bold text-xl text-white">
               DTF/LCPG <span className="text-[#10b981]">2026</span>
             </span>
          </div>
          
          <div className="flex gap-4">
             <div className="px-4 py-2 rounded-full border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.05)] text-xs text-[#10b981] font-medium backdrop-blur-sm">
               Davis-Thompson Foundation
             </div>
             <div className="px-4 py-2 rounded-full border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.05)] text-xs text-[#f59e0b] font-medium backdrop-blur-sm">
               Latin Comparative Pathology Group
             </div>
          </div>
          
          <p className="text-sm text-[#d1fae5]/40 font-light">
            © 2026. Todos los derechos reservados.
          </p>
          
        </div>
      </footer>

    </div>
  );
}
