import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Globe, Award, Calendar, MapPin, ArrowRight, Menu, X } from 'lucide-react';
import './_group.css';

export function CosmosOscuro() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2026-10-08T00:00:00');
    
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Sobre el Evento', href: '#sobre-el-evento' },
    { name: 'Video', href: '#' },
    { name: 'Temática', href: '#' },
    { name: 'Ponentes', href: '#' },
    { name: 'Precios', href: '#' },
    { name: 'Resúmenes', href: '#' },
    { name: 'Lugar', href: '#' },
    { name: 'Hoteles', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-[#040d1a] text-white font-sans overflow-x-hidden selection:bg-[#00d4ff] selection:text-[#040d1a]">
      {/* Navbar Sticky */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-panel py-3 shadow-[0_4px_30px_rgba(0,212,255,0.1)]' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-[#00d4ff] font-bold text-xl tracking-wider uppercase drop-shadow-[0_0_8px_rgba(0,212,255,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.8)] transition-all">
                DTF/LCPG 2026
              </span>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="flex items-center gap-6 text-sm font-medium text-[#a5c8e1]">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-[#00d4ff] hover:drop-shadow-[0_0_5px_rgba(0,212,255,0.5)] transition-all">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://forms.gle/dTzxtuDDPSCvaEeU8"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm border border-[#00d4ff] bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 text-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.2)] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all"
              >
                Reserva tu cupo <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-[#00d4ff] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#040d1a]/95 backdrop-blur-xl pt-24 px-6 flex flex-col"
          >
            <ul className="flex flex-col gap-6 text-lg font-medium text-[#a5c8e1]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block hover:text-[#00d4ff]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="https://forms.gle/dTzxtuDDPSCvaEeU8"
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-lg border border-[#00d4ff] bg-[#00d4ff]/10 text-[#00d4ff]"
            >
              Reserva tu cupo <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/hero-cosmos.png" 
            alt="Cosmos Background" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040d1a]/80 via-[#040d1a]/60 to-[#040d1a]"></div>
        </div>

        {/* Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-12 md:mt-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-4">
              <span className="block text-white mb-2">Seminario Internacional de</span>
              <span className="block text-gradient pb-2 drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                Oncopatología
              </span>
              <span className="block text-[#ff0080] drop-shadow-[0_0_15px_rgba(255,0,128,0.5)]">
                Veterinaria 2026
              </span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-[#a5c8e1] font-light">
              ¡Reserva la fecha! <span className="text-[#00d4ff] font-medium drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]">Te esperamos.</span>
            </p>
          </motion.div>

          {/* Date and Location Pills */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-12"
          >
            <div className="glass-panel glow-border rounded-full px-6 py-3 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#00d4ff]" />
              <span className="font-medium">8 al 10 de Octubre, 2026</span>
            </div>
            <div className="glass-panel border border-[#ff0080]/40 shadow-[0_0_10px_rgba(255,0,128,0.2)] rounded-full px-6 py-3 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#ff0080]" />
              <span className="font-medium">Hotel Cuellars, Pasto, Colombia</span>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {[
              { label: 'DÍAS', value: timeLeft.days },
              { label: 'HORAS', value: timeLeft.hours },
              { label: 'MINUTOS', value: timeLeft.minutes },
              { label: 'SEGUNDOS', value: timeLeft.seconds }
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="glass-panel w-20 h-24 md:w-24 md:h-28 rounded-xl flex items-center justify-center border-t border-[#00d4ff]/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <span className="text-4xl md:text-5xl font-bold text-[#00d4ff] animate-flicker">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className="mt-3 text-xs tracking-[0.2em] font-medium text-[#a5c8e1]">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 flex flex-col sm:flex-row gap-5"
          >
            <a 
              href="https://forms.gle/dTzxtuDDPSCvaEeU8"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-lg bg-[#00d4ff] text-[#040d1a] font-bold text-lg hover:bg-white hover:text-[#040d1a] hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all flex items-center justify-center gap-2"
            >
              Inscríbete aquí <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="https://ci.udenar.edu.co:8082/recibos/Tesoreria/ImpresionInternetEve.aspx?id=249"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-lg bg-transparent text-[#ff0080] border border-[#ff0080] font-bold text-lg animate-pulse-glow hover:bg-[#ff0080]/10 transition-all flex items-center justify-center gap-2"
            >
              Genera tu recibo de pago
            </a>
          </motion.div>
        </div>

        {/* Logos Carousel */}
        <div className="absolute bottom-0 left-0 right-0 w-full glass-panel border-t border-[#00d4ff]/20 py-6 overflow-hidden">
          <div className="container mx-auto px-4">
            <p className="text-center text-xs text-[#a5c8e1] uppercase tracking-[0.2em] mb-4">Organizan y Respaldan</p>
            <div className="flex justify-center items-center">
              <img 
                src="/__mockup/images/logos-institucionales.png" 
                alt="Instituciones Organizadoras" 
                className="max-h-16 md:max-h-20 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre el Evento Section */}
      <section id="sobre-el-evento" className="py-24 relative bg-gradient-to-b from-[#040d1a] to-[#020610]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Sobre el </span>
              <span className="text-[#00d4ff]">Evento</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#ff0080] mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-[#a5c8e1] leading-relaxed">
              Únete a nosotros en una experiencia académica inmersiva, donde la ciencia de vanguardia se encuentra con la excelencia clínica. El Seminario Internacional de Oncopatología Veterinaria 2026 reúne a los mayores expertos para desentrañar el universo celular del cáncer en animales de compañía.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-[#00d4ff]/30 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#00d4ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Microscope className="w-7 h-7 text-[#00d4ff]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ciencia Avanzada</h3>
              <p className="text-[#a5c8e1] text-sm leading-relaxed">
                Profundiza en la biología tumoral, diagnóstico molecular y las fronteras de la patología oncológica veterinaria.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-[#ff0080]/30 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#ff0080]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-[#ff0080]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Red Global</h3>
              <p className="text-[#a5c8e1] text-sm leading-relaxed">
                Conecta con colegas de toda América Latina y el mundo. Un espacio para el intercambio de conocimientos y casos clínicos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-[#7c3aed]/30 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#7c3aed]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-[#7c3aed]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Certificación de Excelencia</h3>
              <p className="text-[#a5c8e1] text-sm leading-relaxed">
                Avalado por la Davis-Thompson Foundation y el Latin Comparative Pathology Group (LCPG).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 relative overflow-hidden">
        {/* Subtle glow at the bottom */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00d4ff]/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="px-4 py-2 rounded-full border border-[#00d4ff]/30 text-xs font-medium text-[#00d4ff] bg-[#00d4ff]/5">
              Davis-Thompson Foundation
            </div>
            <div className="px-4 py-2 rounded-full border border-[#00d4ff]/30 text-xs font-medium text-[#00d4ff] bg-[#00d4ff]/5">
              Latin Comparative Pathology Group
            </div>
          </div>
          
          <p className="text-[#a5c8e1]/60 text-sm text-center">
            © 2026 Seminario Internacional de Oncopatología Veterinaria. Todos los derechos reservados.
          </p>
          <p className="text-[#a5c8e1]/40 text-xs text-center mt-2">
            Desarrollado para fines académicos y de investigación.
          </p>
        </div>
      </footer>
    </div>
  );
}
