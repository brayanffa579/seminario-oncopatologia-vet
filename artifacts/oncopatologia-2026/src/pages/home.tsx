import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Microscope, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import bannerMain from "@assets/1_1777148830299.png";
import bannerTematica from "@assets/Temática_DTF_LCPG_Colombia_2026_1777148830300.png";
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
  return (
    <div className="min-h-screen w-full bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-primary tracking-tight">DTF/LCPG 2026</div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre el Evento</a>
            <a href="#tematica" className="hover:text-primary transition-colors">Temática</a>
            <a href="#ponentes" className="hover:text-primary transition-colors">Ponentes</a>
            <a href="#precios" className="hover:text-primary transition-colors">Precios</a>
            <a href="#lugar" className="hover:text-primary transition-colors">Lugar</a>
          </div>
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Reserva tu cupo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bannerMain} alt="Nariño Landscape" className="w-full h-full object-cover opacity-15" style={{ objectPosition: 'center bottom' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background"></div>
          <div className="absolute inset-0 bg-background/60"></div>
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
            Seminario Colombiano Internacional de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Oncopatología Veterinaria 2026</span>
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
              <span>Universidad de Nariño, Pasto</span>
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
            La Davis Thompson Foundation (DTF) y el Latin Comparative Pathology Group (LCPG) apoyan año a año el entrenamiento de clínicos y patólogos veterinarios en Latinoamérica con expertos en áreas de interés. Para el año 2026 se desarrollará del 8 al 10 de Octubre, el Seminario-Taller en Oncopatología Veterinaria DTF/LCPG Colombia 2026 en la Universidad de Nariño (Nariño - Colombia).
          </p>
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
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-lg">
              Realizar Pago / Inscripción
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="lugar" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Sede del Evento</h2>
              <h3 className="text-2xl text-primary font-semibold mb-4">Universidad de Nariño</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Pasto, Colombia, te espera. Una de las ciudades andinas más hermosas del país, a los pies del imponente volcán Galeras, reconocida por su riqueza cultural, gastronómica y calidez humana.
              </p>
              <div className="flex items-center gap-3 text-muted-foreground mb-8 bg-card p-4 rounded-lg border border-border">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Universidad de Nariño, Cl. 18 #50-02, Pasto, Nariño, Colombia</span>
              </div>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden border border-border/50 shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9482598363717!2d-77.29415512401655!3d1.230554598758064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2ed487376c70b7%3A0xa59b720b080f53d7!2sUniversidad%20de%20Nari%C3%B1o!5e0!3m2!1sen!2sus!4v1709605204481!5m2!1sen!2sus" 
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
