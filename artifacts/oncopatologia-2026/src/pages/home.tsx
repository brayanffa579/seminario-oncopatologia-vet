import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Microscope, ChevronDown, FileText, Award, ClipboardList, BookOpen, Send, CheckCircle2, PlayCircle, UserPlus, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import bannerMain from "@assets/1_1777148830299.png";
import heroCells from "@assets/generated_images/hero_cells_clean.png";
import bannerTematica from "@assets/Temática_DTF_LCPG_Colombia_2026_1777148830300.png";
import bannerResumenes from "@assets/generated_images/resumenes_bg.png";
import speakerMeuten from "@assets/4_1777148830299.png";
import speakerClemente from "@assets/5_1777148830299.png";
import speakerRocha from "@assets/6_1777148830300.png";
import speakerCassali from "@assets/7_1777148830300.png";
import speakerBarato from "@assets/8_1777148830300.png";

const speakers = [
  {
    name: "Donald Meuten",
    country: "USA",
    title: "DVM, PhD, DACVP — Profesor Emérito de la NCSU",
    bio: "Dr. Donald Meuten, DMV, PhD, DACVP. Profesor emérito de la NCSU (Universidad Estatal de Carolina del Norte), donde fue docente durante más de 30 años. Es editor del libro Tumores de Animales Domésticos (Tumors of Domestic Animals), autor de múltiples publicaciones científicas en patología veterinaria y cofundador de vcgp.org (veterinary cancer guidelines and protocols). Está certificado en patología anatómica y clínica por la ACVP (Colegio Americano de Patólogos Veterinarios). Cuenta con experiencia en oncología, citología, patología quirúrgica, endocrinología y enfermedades óseas.",
    photo: speakerMeuten
  },
  {
    name: 'Francisco "Pachi" Clemente',
    country: "ESP",
    title: "DVM, DACVIM — Miembro del grupo de trabajo de oncología de la WSAVA",
    bio: "Dr. Francisco 'Pachi' Clemente Vicario es médico veterinario especialista en oncología veterinaria. Se graduó en Medicina Veterinaria en la Universidad de Extremadura (España) en 1993. Posteriormente realizó una residencia en Oncología Médica y un Máster en Medicina Comparada y Veterinaria en la Universidad Estatal de Ohio (Estados Unidos), obteniendo el título de Diplomado del Colegio Americano de Medicina Interna Veterinaria (ACVIM) en la especialidad de Oncología. Director científico de AVEPA y miembro del grupo de trabajo de oncología de la WSAVA.",
    photo: speakerClemente
  },
  {
    name: "Noeme Sousa Rocha",
    country: "BRA",
    title: "DVM, PhD — Profesora Titular UNESP",
    bio: "La Dra. Noeme Sousa Rocha es Médica Veterinaria de la Universidade Estadual do Maranhão (UEMA) con formación de Residencia, Maestría y Doctorado por la Universidade Estadual Paulista (UNESP), institución donde se desempeña como Profesora Titular de Patología en el campus de Botucatu. Referente internacional en su área, fue pionera en la implementación del servicio de citopatología del Hospital Veterinario de la UNESP en 1994 y miembro fundador de la Asociación Brasileña de Medicina Veterinaria Legal en 2009. Revisora científica del libro 'Citología canina y felina' de Rose E. Raskin.",
    photo: speakerRocha
  },
  {
    name: "Geovanni Cassali",
    country: "BRA",
    title: "DVM, PhD — Profesor Titular UFMG",
    bio: "El Dr. Geovanni Cassali es uno de los mayores referentes en oncología y patología veterinaria en América Latina. Como Profesor Titular en el Instituto de Ciencias Biológicas de la Universidad Federal de Minas Gerais (UFMG), ha dedicado su carrera a liderar la investigación en patología mamaria comparada. Investigador CNPq 1A, la máxima categoría otorgada por el gobierno brasileño. Editor del libro 'Patología Mamaria Canina y Felina: Del Diagnóstico al Tratamiento'.",
    photo: speakerCassali
  },
  {
    name: "Paola Barato",
    country: "COL",
    title: "DVM, PhD — Socia fundadora y Directora Científica CORPAVET y MolecularVet",
    bio: "La Dra. Paola Barato es patóloga médica veterinaria y Doctora en Biotecnología en la Universidad Nacional de Colombia. Es especialista en acuicultura en la Universidad de los Llanos en Colombia. Es elegible para diplomarse del American College of Veterinary Pathologist (ACVP). Es socia fundadora y directora científica de CORPAVET, MolecularVet SAS y MolecularVet US LLC. Es consultora para la FAO, APEC, ONUDI, industria, gobiernos y universidades en salud, bioseguridad y patología de peces de agua dulce. Expresidenta de LCPG (Grupo Latino de Patología Comparada) de Davis-Thompson Foundation (2020-2022).",
    photo: speakerBarato
  }
];

export default function Home() {
  const [splashOpen, setSplashOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSplashOpen(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-10-08T08:00:00-05:00").getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background font-sans text-foreground">

      {/* ── Rompepantallas: video de presentación ── */}
      <AnimatePresence>
        {splashOpen && (
          <motion.div
            key="splash-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            style={{ background: "rgba(5,10,30,0.88)", backdropFilter: "blur(10px)" }}
            onClick={() => setSplashOpen(false)}
          >
            <motion.div
              key="splash-card"
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Resplandor ambiental */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/25 rounded-3xl blur-3xl -z-10" />

              {/* Marco exterior con gradiente */}
              <div className="rounded-2xl p-[3px] bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl shadow-primary/40">
                <div className="rounded-[14px] bg-[#07101f] p-4">

                  {/* Cabecera del modal */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-semibold text-white/90 tracking-wide uppercase">
                        Video de presentación
                      </span>
                    </div>
                    <button
                      onClick={() => setSplashOpen(false)}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
                      aria-label="Cerrar video"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Contenedor del video con esquinas decorativas */}
                  <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary rounded-tr-lg z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary rounded-bl-lg z-10 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg z-10 pointer-events-none" />
                    <video
                      className="w-full h-full object-contain bg-black rounded-xl"
                      controls
                      autoPlay
                      playsInline
                      src={`${import.meta.env.BASE_URL}video-presentacion.mp4`}
                    />
                  </div>

                  {/* Pie del modal */}
                  <div className="flex items-center justify-between mt-3 px-1">
                    <p className="text-xs text-white/50">
                      Seminario Internacional de Oncopatología Veterinaria 2026
                    </p>
                    <button
                      onClick={() => setSplashOpen(false)}
                      className="text-xs text-white/40 hover:text-white/70 transition-colors underline underline-offset-2"
                    >
                      Cerrar y explorar el sitio
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-primary tracking-tight">DTF/LCPG 2026</div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre el Evento</a>
            <a href="#video" className="hover:text-primary transition-colors">Video</a>
            <a href="#tematica" className="hover:text-primary transition-colors">Temática</a>
            <a href="#ponentes" className="hover:text-primary transition-colors">Ponentes</a>
            <a href="#precios" className="hover:text-primary transition-colors">Precios</a>
            <a href="#resumenes" className="hover:text-primary transition-colors">Resúmenes</a>
            <a href="#lugar" className="hover:text-primary transition-colors">Lugar</a>
            <a href="#hoteles" className="hover:text-primary transition-colors">Hoteles</a>
          </div>
          <a
            href="https://forms.gle/dTzxtuDDPSCvaEeU8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Reserva tu cupo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroCells} alt="Células oncológicas veterinarias" className="w-full h-full object-cover opacity-45" style={{ objectPosition: 'center center' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80"></div>
          <div className="absolute inset-0 bg-background/30"></div>
        </div>
        
        <div className="container relative z-10 px-4 py-20 mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary border border-secondary/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          >
            <Microscope className="w-4 h-4" />
            <span>Oncopatología Veterinaria</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl tracking-tight text-white mb-6 leading-tight"
          >
            Seminario Internacional de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Oncopatología Veterinaria 2026</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            ¡Reserva la fecha! Te esperamos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-12"
          >
            <div className="flex items-center space-x-3 text-white/90 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10">
              <Calendar className="w-5 h-5 text-accent" />
              <span>8 al 10 de Octubre, 2026</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Hotel Cuellars, Pasto</span>
            </div>
          </motion.div>

          {/* Contador regresivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Faltan para el evento</p>
            <div className="flex gap-3 sm:gap-5 justify-center">
              {[
                { value: timeLeft.days,    label: "Días" },
                { value: timeLeft.hours,   label: "Horas" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Seg" },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="relative w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg">
                    {/* separador ":" entre bloques (excepto el último) */}
                    {i < 3 && (
                      <span className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 text-white/30 text-lg font-bold select-none">:</span>
                    )}
                    <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums leading-none">
                      {String(value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-white/40">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Banner de logos institucionales */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mb-10 w-full max-w-4xl mx-auto"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}logos-institucionales.png`}
                alt="Instituciones aliadas"
                draggable={false}
                className="w-full h-12 object-contain select-none transition-transform duration-300 ease-out hover:scale-105 cursor-default"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <a href="#sobre" className="flex flex-col items-center text-muted-foreground hover:text-white transition-colors">
              <span className="text-sm mb-2">Descubre más</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Sobre el Evento</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La Davis Thompson Foundation (DTF) y el Latin Comparative Pathology Group (LCPG) apoyan año a año el entrenamiento de clínicos y patólogos veterinarios en Latinoamérica con expertos en áreas de interés. Para el año 2026 se desarrollará del 8 al 10 de Octubre, el Seminario-Taller en Oncopatología Veterinaria DTF/LCPG Colombia 2026 en el Hotel Cuellars de Pasto, Nariño, Colombia.
          </p>
        </div>
      </section>

      {/* Video instructivo */}
      <section id="video" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/8 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-primary/15 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <PlayCircle className="w-4 h-4" />
              <span>Video instructivo</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Video instructivo</h2>
          </div>

          {/* Marco decorativo del video */}
          <div className="relative mx-auto max-w-3xl">
            {/* Capa exterior con gradiente llamativo */}
            <div className="rounded-2xl p-[3px] bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl shadow-primary/30">
              {/* Capa interior oscura */}
              <div className="rounded-[14px] bg-background/95 p-3">
                {/* Esquinas decorativas */}
                <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg z-10 pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary rounded-tr-lg z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary rounded-bl-lg z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg z-10 pointer-events-none"></div>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/0EuYHoSGLd0?si=NZBEK8NRnFZA0_8_"
                    title="Video instructivo – Seminario Internacional de Oncopatología Veterinaria 2026"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Resplandor ambiental detrás del marco */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-3xl blur-2xl -z-10"></div>
          </div>

          {/* CTA de inscripción */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://forms.gle/dTzxtuDDPSCvaEeU8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-white hover:bg-accent/90 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-accent/30 hover:scale-105"
            >
              <UserPlus className="w-5 h-5" />
              Inscríbete aquí como participante
            </a>
            <p className="text-muted-foreground text-sm max-w-xs text-center sm:text-left leading-snug">
              Si ya tienes tu recibo de pago, regístrate en el botón.
            </p>
          </div>
        </div>
      </section>

      {/* Temática Section */}
      <section id="tematica" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={bannerTematica} alt="Temática Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Temática</h2>
            <p className="text-muted-foreground">Un programa científico riguroso y actualizado</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">Componente Teórico</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5"></div>
                    <span>Actualización de la nueva edición del libro Tumors of Domestic Animals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5"></div>
                    <span>¿Cómo mejorar lo que hacemos en citología? Correlación de patología clínica y la neoplasia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5"></div>
                    <span>Evaluación de márgenes incluyendo planos fasciales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5"></div>
                    <span>Aproximación clínica oncológica al informe oncopatológico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5"></div>
                    <span>Pronóstico, ¿quién lo define?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5"></div>
                    <span>Inmunohistoquímica de valor pronóstico clínico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5"></div>
                    <span>Actualización del estado del arte en investigación en cáncer de mama y osteosarcoma canino</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5"></div>
                    <span>Neoplasias en peces de agua dulce</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-secondary/20 h-fit">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">Componente Práctico</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                    <span>Revisión de casos de citología e histopatología</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="ponentes" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ponentes Internacionales</h2>
            <p className="text-muted-foreground">Expertos de clase mundial en oncopatología</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {speakers.map((speaker, idx) => (
              <Dialog key={idx}>
                <DialogTrigger asChild>
                  <Card className="bg-card cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group">
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={speaker.photo} 
                        alt={speaker.name} 
                        className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 text-[10px] font-bold bg-background/80 rounded border border-border text-foreground">
                            {speaker.country}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-primary font-medium mb-4 line-clamp-2">{speaker.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-3">{speaker.bio}</p>
                      <div className="mt-4 text-xs font-semibold text-secondary flex items-center gap-1 group-hover:gap-2 transition-all">
                        Leer biografía <ChevronDown className="w-3 h-3 -rotate-90" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-card border-border">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      {speaker.name}
                      <span className="px-2 py-1 text-xs font-bold bg-muted rounded text-foreground">
                        {speaker.country}
                      </span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-primary font-medium mb-6">{speaker.title}</p>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <div className="rounded-xl overflow-hidden aspect-[3/4]">
                          <img 
                            src={speaker.photo} 
                            alt={speaker.name} 
                            className="w-full h-full object-cover object-[center_20%]" 
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-2/3 text-muted-foreground leading-relaxed">
                        {speaker.bio}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Inversión</h2>
            <p className="text-muted-foreground">Asegura tu participación en este evento único</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-border text-primary">
                  <th className="p-4 font-semibold text-lg">Categoría</th>
                  <th className="p-4 font-semibold">Registro Temprano<br/><span className="text-xs text-muted-foreground font-normal">Hasta Sep 1, 2026</span></th>
                  <th className="p-4 font-semibold">Registro Regular<br/><span className="text-xs text-muted-foreground font-normal">Hasta Oct 2, 2026</span></th>
                  <th className="p-4 font-semibold">Grupos (10 personas)<br/><span className="text-xs text-muted-foreground font-normal">Hasta Oct 2, 2026</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium">Estudiantes en Colombia</td>
                  <td className="p-4">$60.000 COP</td>
                  <td className="p-4">$66.000 COP</td>
                  <td className="p-4">$540.000 COP</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium">Profesionales en Colombia</td>
                  <td className="p-4">$295.500 COP</td>
                  <td className="p-4">$325.050 COP</td>
                  <td className="p-4">$2.659.500 COP</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium">Miembros LCPG - ACPAVET</td>
                  <td className="p-4">$174.000 COP</td>
                  <td className="p-4">$191.400 COP</td>
                  <td className="p-4">$1.566.000 COP</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors bg-primary/5">
                  <td className="p-4 font-medium text-primary">Extranjeros (USD)</td>
                  <td className="p-4 text-primary font-semibold">USD $110</td>
                  <td className="p-4 text-primary font-semibold">USD $121</td>
                  <td className="p-4 text-primary font-semibold">USD $990</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="https://forms.gle/dTzxtuDDPSCvaEeU8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-secondary text-white hover:bg-secondary/90 px-8 py-6 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-secondary/20"
            >
              Realizar Pago / Inscripción
            </a>
          </div>
        </div>
      </section>

      {/* Resúmenes científicos / Pósters */}
      <section id="resumenes" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bannerResumenes} alt="Salud animal y oncopatología" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/15 text-secondary border border-secondary/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>Convocatoria abierta</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Presentación de Resúmenes Científicos en Pósters</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              El Comité Organizador invita a profesionales, investigadores, docentes y estudiantes de medicina veterinaria y áreas afines a presentar resúmenes científicos para su exposición en modalidad póster.
            </p>
          </div>

          {/* Objetivo */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-card/60 backdrop-blur border-border/60 hover:border-primary/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Objetivo</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Promover la difusión de avances científicos en oncopatología veterinaria y patología comparada del cáncer, con énfasis en el diagnóstico clínico, histopatológico, anatomopatológico y el uso de técnicas innovadoras.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur border-border/60 hover:border-secondary/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Fechas importantes</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between gap-4 pb-2 border-b border-border/40">
                    <span>Inicio de recepción</span>
                    <span className="text-foreground font-medium whitespace-nowrap">1 de mayo de 2026</span>
                  </li>
                  <li className="flex justify-between gap-4 pb-2 border-b border-border/40">
                    <span>Límite de envío</span>
                    <span className="text-foreground font-medium whitespace-nowrap">15 de agosto de 2026</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Notificación de aceptación</span>
                    <span className="text-foreground font-medium whitespace-nowrap">30 de agosto de 2026</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Ejes temáticos */}
          <Card className="bg-card/60 backdrop-blur border-border/60 mb-12">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Ejes temáticos</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-5">Los trabajos deberán enmarcarse en uno o más de los siguientes ejes:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Patología veterinaria oncológica (innovación, IA, patología digital, telepatología)",
                  "Diagnóstico histopatológico y anatomopatológico de neoplasias en animales",
                  "Correlación clínico–patológica en oncología veterinaria",
                  "Técnicas moleculares y diagnóstico avanzado: PCR, RT-PCR, qPCR, IHQ, hibridación in situ, secuenciación y biomarcadores",
                  "Oncopatología veterinaria: clasificación tumoral, marcadores pronósticos y patogénesis del cáncer",
                  "Patología comparada (animal–humano, modelos animales de cáncer humano)"
                ].map((eje, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span className="leading-relaxed">{eje}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Requisitos del resumen + Modalidad póster */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-card/60 backdrop-blur border-border/60">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Requisitos del resumen</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Fuente:</strong> Times New Roman, 12 pt, interlineado doble.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Extensión máxima:</strong> 300 palabras (~2.000 caracteres), excluyendo título y autores.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Idioma:</strong> español, portugués o inglés.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Estructura obligatoria:</strong> título, autores, autor de correspondencia (nombre completo, afiliación, correo, institución, país), palabras clave (máx. 5).</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Texto del resumen:</strong> introducción, objetivo, materiales y métodos, resultados, conclusiones.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Debe incluir descripción histopatológica detallada y un diagnóstico histopatológico final.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Se aceptan reportes de casos, trabajos originales, resultados preliminares y revisiones de literatura.</span></li>
                </ul>
                <p className="mt-5 text-xs text-muted-foreground/80 italic">
                  Se valorará positivamente el uso de técnicas diagnósticas complementarias (moleculares, inmunohistoquímicas) y el enfoque de patología comparada con humanos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur border-border/60">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Únicamente modalidad póster</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Formato:</strong> vertical.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Dimensiones sugeridas:</strong> 90 cm x 120 cm.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" /><span><strong className="text-foreground">Contenido mínimo:</strong> título, autores y afiliación.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" /><span>Introducción y objetivo.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" /><span>Metodología.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" /><span>Resultados (incluyendo imágenes macroscópicas o microscópicas).</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" /><span>Conclusiones.</span></li>
                </ul>
                <div className="mt-5 p-4 rounded-lg bg-primary/10 border border-primary/20 text-xs text-foreground/90 leading-relaxed">
                  Únicamente se considerarán resúmenes que se ajusten rigurosamente a los parámetros establecidos. Solo se presentan los pósters de participantes que hayan pagado su inscripción.
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Premiación */}
          <Card className="bg-gradient-to-br from-primary/10 via-card/60 to-secondary/10 backdrop-blur border-border/60 mb-12">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Premiación</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">Categorías de reconocimiento</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Diagnóstico patológico</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Innovación</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Patología comparada</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Mejor trabajo estudiantil</li>
                  </ul>

                  <h4 className="text-sm uppercase tracking-wider text-secondary font-semibold mt-6 mb-3">Criterios diferenciales</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Innovación técnica</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Impacto en salud pública o clínica</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Relevancia en patología comparada con humanos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Premios para los mejores trabajos</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Publicación del artículo completo (1°, 2° y 3° puesto) en las memorias de la <em>Revista de Investigación Pecuaria de la Universidad de Nariño</em>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Membresía LCPG 2027 para los autores presentadores del 1°, 2° y 3° puesto.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Reconocimiento escrito.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA al formulario */}
          <div className="text-center bg-card/40 backdrop-blur border border-border/60 rounded-2xl p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Envío de resúmenes</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Registra tu resumen completando el formulario oficial. ¡Esperamos tu participación para fortalecer la oncopatología veterinaria desde una perspectiva diagnóstica, molecular y comparativa!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://forms.gle/kzTP7N56HkPdQTwo8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-primary/20"
                data-testid="link-submit-abstract"
              >
                <Send className="w-5 h-5" />
                Enviar mi resumen
              </a>
              <a
                href={`${import.meta.env.BASE_URL}instrucciones-resumenes.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-secondary text-white hover:bg-secondary/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-secondary/20"
                data-testid="link-submission-instructions"
              >
                <FileText className="w-5 h-5" />
                Instrucciones de Envío
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground/80 break-all">
              forms.gle/kzTP7N56HkPdQTwo8
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="lugar" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Sede del Evento</h2>
              <h3 className="text-2xl text-primary font-semibold mb-4">Hotel Cuellars</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Pasto, Colombia, te espera. Una de las ciudades andinas más hermosas del país, a los pies del imponente volcán Galeras, reconocida por su riqueza cultural, gastronómica y calidez humana.
              </p>
              <div className="flex items-center gap-3 text-muted-foreground mb-8 bg-card p-4 rounded-lg border border-border">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Hotel Cuellars, Pasto, Nariño, Colombia</span>
              </div>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden border border-border/50 shadow-xl">
              <iframe 
                src="https://maps.google.com/maps?q=Hotel+Cuellars+Pasto+Colombia&output=embed&z=16" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hoteles cercanos ── */}
      <section id="hoteles" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs uppercase tracking-widest text-primary font-semibold mb-3 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">Alojamiento</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoteles Cercanos al Evento</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Para asistentes que viajan desde otras ciudades. Todos los hoteles están ubicados en el centro de Pasto, a pocos minutos del Hotel Cuellars. Los precios son estimados por noche en pesos colombianos (Oct 2026).
            </p>
          </div>

          {/* Tarjetas de hoteles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                name: "Hotel Posada León",
                stars: 5,
                priceMin: 250000,
                priceMax: 490000,
                highlight: "El más popular de Pasto · Calificación 9.3/10",
                distance: "~5 min en carro",
                amenities: ["Wi-Fi", "Restaurante", "Parqueadero"],
                badge: "Muy valorado",
                mapsUrl: "https://maps.google.com/?q=Hotel+Posada+León+Pasto+Colombia",
                bookingUrl: "https://www.booking.com/search.html?ss=Hotel+Posada+León+Pasto+Colombia",
              },
              {
                name: "El Loft Hotel",
                stars: 4,
                priceMin: 160000,
                priceMax: 290000,
                highlight: "A 2 cuadras de la Plaza de Nariño",
                distance: "~3 min en carro",
                amenities: ["Wi-Fi", "Desayuno", "Parqueadero"],
                badge: "Céntrico",
                mapsUrl: "https://maps.google.com/?q=El+Loft+Hotel+Pasto+Colombia",
                bookingUrl: "https://www.booking.com/search.html?ss=El+Loft+Hotel+Pasto+Colombia",
              },
              {
                name: "Hotel Plaza Carnaval",
                stars: 4,
                priceMin: 200000,
                priceMax: 370000,
                highlight: "Diseño moderno · Piscina · Terraza",
                distance: "~5 min en carro",
                amenities: ["Piscina", "Wi-Fi", "Room service"],
                badge: null,
                mapsUrl: "https://maps.google.com/?q=Hotel+Plaza+Carnaval+Pasto+Colombia",
                bookingUrl: "https://www.booking.com/search.html?ss=Hotel+Plaza+Carnaval+Pasto+Colombia",
              },
              {
                name: "Hotel Siete Balcones",
                stars: 4,
                priceMin: 160000,
                priceMax: 310000,
                highlight: "Cra 26 Nro. 15-70 · Personal muy atento",
                distance: "~4 min en carro",
                amenities: ["Wi-Fi", "Parqueadero", "Desayuno"],
                badge: null,
                mapsUrl: "https://maps.google.com/?q=Hotel+Siete+Balcones+Pasto+Colombia",
                bookingUrl: "https://www.booking.com/search.html?ss=Hotel+Siete+Balcones+Pasto+Colombia",
              },
              {
                name: "Hotel Max",
                stars: 3,
                priceMin: 100000,
                priceMax: 200000,
                highlight: "Pleno centro · Zona comercial y gastronómica",
                distance: "~2 min en carro",
                amenities: ["Wi-Fi", "Parqueadero", "Recepción 24h"],
                badge: "Económico",
                mapsUrl: "https://maps.google.com/?q=Hotel+Max+Pasto+Colombia",
                bookingUrl: "https://www.booking.com/search.html?ss=Hotel+Max+Pasto+Colombia",
              },
              {
                name: "Hotel Versalles",
                stars: 3,
                priceMin: 80000,
                priceMax: 185000,
                highlight: "Gimnasio · Restaurante · Acepta mascotas",
                distance: "~6 min en carro",
                amenities: ["Gimnasio", "Wi-Fi", "Restaurante"],
                badge: null,
                mapsUrl: "https://maps.google.com/?q=Hotel+Versalles+Pasto+Colombia",
                bookingUrl: "https://www.booking.com/search.html?ss=Hotel+Versalles+Pasto+Colombia",
              },
            ].map((hotel) => (
              <div
                key={hotel.name}
                className="relative bg-card rounded-2xl border border-border/60 p-6 flex flex-col gap-3 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              >
                {hotel.badge && (
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
                    {hotel.badge}
                  </span>
                )}

                {/* Estrellas */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < hotel.stars ? "text-yellow-400" : "text-border"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{hotel.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{hotel.highlight}</p>

                {/* Precio */}
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-bold text-primary">
                    ${hotel.priceMin.toLocaleString("es-CO")}
                  </span>
                  <span className="text-muted-foreground text-sm">– ${hotel.priceMax.toLocaleString("es-CO")} COP/noche</span>
                </div>

                {/* Distancia y amenidades */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                  <span>{hotel.distance} del evento</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {hotel.amenities.map((a) => (
                    <span key={a} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/60">
                      {a}
                    </span>
                  ))}
                </div>

                {/* Botones de acción */}
                <div className="flex gap-2 mt-auto pt-2">
                  <a
                    href={hotel.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border/70 text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Ver en Maps
                  </a>
                  <a
                    href={hotel.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 border border-primary/30 text-xs font-medium text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Más info
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Nota informativa */}
          <div className="bg-card/60 border border-border/50 rounded-xl p-5 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Los precios son estimados para octubre de 2026 y pueden variar según disponibilidad. Se recomienda reservar con al menos <strong className="text-foreground">4 semanas de anticipación</strong>. Los miércoles suelen ofrecer las mejores tarifas. Plataformas sugeridas: <strong className="text-foreground">Booking.com · Expedia · Hotels.com</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold mb-6">Organizadores y Co-organizadores</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground">
              <span className="px-4 py-2 bg-background rounded-full border border-border">Davis-Thompson Foundation (DTF)</span>
              <span className="px-4 py-2 bg-background rounded-full border border-border">Latin Comparative Pathology Group (LCPG)</span>
              <span className="px-4 py-2 bg-background rounded-full border border-border">Universidad de Nariño</span>
              <span className="px-4 py-2 bg-background rounded-full border border-border">FACIPEC</span>
              <span className="px-4 py-2 bg-background rounded-full border border-border">ACPAVET</span>
              <span className="px-4 py-2 bg-background rounded-full border border-border">CORPAVET</span>
              <span className="px-4 py-2 bg-background rounded-full border border-border">Universidad de Antioquia</span>
              <span className="px-4 py-2 bg-background rounded-full border border-border">Universidad Juan de Castellanos</span>
              <span className="px-4 py-2 bg-background rounded-full border border-border">Universidad Nacional de Colombia</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2026 Seminario Internacional de Oncopatología Veterinaria. Todos los derechos reservados.
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Contacto
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Botón flotante WhatsApp ── */}
      <a
        href="https://wa.me/573155815375?text=Hola,%20tengo%20una%20consulta%20sobre%20el%20Seminario%20de%20Oncopatolog%C3%ADa%20Veterinaria%202026"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-green-500/40 group"
        style={{ background: "#25D366" }}
      >
        {/* Logo WhatsApp */}
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        <span className="hidden sm:inline">Consultar por WhatsApp</span>
        {/* Pulso */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: "#25D366" }} />
      </a>
    </div>
  );
}

function GraduationCap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a2 2 0 0 1-.01 2.833l-7.1 7.1a2 2 0 0 1-2.82.01l-7.1-7.1a2 2 0 0 1 .01-2.834l7.1-7.1a2 2 0 0 1 2.82-.01l7.1 7.1Z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}
