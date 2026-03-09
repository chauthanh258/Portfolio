import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  User, 
  Briefcase, 
  GraduationCap,
  ChevronRight
} from 'lucide-react'

import resumePdf from '../CV_FrontEndIntern_PhamNgocChauThanh.pdf'

// Content from CV
const personalInfo = {
  name: "Pham Ngoc Chau Thanh",
  role: "Front-end Web Developer Intern",
  email: "phamngocchauthanh2004@gmail.com",
  phone: "0386457404",
  location: "Go Vap District, Ho Chi Minh City",
  summary: "Fourth-year student majoring in Software Engineering at Saigon University. Passionate about building modern, optimized user interfaces and enhancing user experience. Seeking a Front-end Web Developer Internship to gain hands-on experience and strengthen technical skills in a dynamic working environment."
}

const skills = [
  { name: "ReactJS", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Redux", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "TailwindCSS", level: 90 },
  { name: "Bootstrap 5", level: 85 },
  { name: "Git", level: 85 },
  { name: "Figma", level: 80 }
]

const projects = [
  {
    title: "Online Movie Ticket Booking",
    period: "7/2025 - Now",
    role: "UX/UI Designer & Front-end Developer",
    tech: ["React TypeScript", "TailwindCSS", "WebSocket", "REST API", "PostgreSQL"],
    features: [
      "Real-Time Seat Status Update using WebSocket",
      "Barcode Ticket Detail Retrieval",
      "VNPay Integration for secure payments"
    ],
    github: "https://github.com/MPIO1002/CINEME.git",
  },
  {
    title: "E-commerce - Manwah Clone",
    period: "9/2024 - 12/2024",
    role: "UX/UI Designer & Front-end Developer",
    tech: ["ReactJS", "Java", "REST API", "PostgreSQL", "TailwindCSS"],
    features: [
      "QR Code Ordering system",
      "Loyalty Program integration",
      "VNPay Integration"
    ],
    github: "https://github.com/Restaurant-Manager-Project/Restaurant-Manager-FE.git",
  },
  {
    title: "LaptopShop Website",
    period: "3/2024 - 5/2024",
    role: "UX/UI Designer & Front-end Developer",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Product Search and filtering",
      "Shopping Cart management",
      "Secure Payment processing"
    ],
    github: "https://github.com/NewMXHieu/LAPTOPSHOP.git",
  }
]

const ProjectCard = ({ project }) => (
  <motion.article
    whileHover={{ y: -8, scale: 1.01 }}
    className="glass rounded-2xl overflow-hidden flex flex-col h-full focus-within:ring-2 focus-within:ring-primary outline-none shadow-lg"
  >
    <div className="relative bg-gradient-to-tr from-primary/10 to-transparent">
      <div className="h-44 sm:h-40 flex items-end p-4">
        <div>
          <h4 className="text-white font-semibold text-lg">{project.title}</h4>
          <p className="text-white/40 text-xs mt-1">{project.role} • {project.period}</p>
        </div>
      </div>

      <div className="absolute top-3 right-3 flex items-center space-x-2">
        {/* <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/6 hover:bg-primary/90 hover:text-white text-white/80 px-3 py-1.5 rounded-full text-sm transition-colors"
          aria-label={`Open demo for ${project.title}`}
        >
          <ExternalLink size={14} />
          <span className="hidden sm:inline">Demo</span>
        </a> */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/6 hover:bg-primary/90 hover:text-white text-white/80 px-3 py-1.5 rounded-full text-sm transition-colors"
          aria-label={`Open GitHub for ${project.title}`}
        >
          <Github size={14} />
          <span className="hidden sm:inline">Code</span>
        </a>
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <p className="text-white/60 text-sm mb-3 line-clamp-3">
        {project.features && project.features.length ? project.features[0] : project.description}
      </p>

      <ul className="grid grid-cols-1 gap-2 mb-4" aria-label="Key features">
        {project.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 text-primary"><ChevronRight size={16} /></span>
            <span className="text-sm text-white/70">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tech.map((t, i) => (
          <span key={i} className="text-[11px] font-semibold uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full text-white/70 border border-white/5">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30">
      <header>
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 glass" aria-label="Main Navigation">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-gradient focus:outline-none focus:ring-2 focus:ring-primary rounded px-2" aria-label="Go to home">PNCT.</a>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#about" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2">About</a>
              <a href="#projects" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2">Projects</a>
              <a href="#skills" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2">Skills</a>
              <a href="#contact" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="about" className="pt-32 pb-20 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto relative">
            {/* Decorative background element */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">Hi, my name is</h2>
              <h1 className="text-5xl md:text-8xl font-bold mb-6 text-white leading-tight tracking-tight">
                {personalInfo.name}<br />
                <span className="text-white/40">Frontend Developer.</span>
              </h1>
              <p className="max-w-xl text-white/60 text-lg mb-10 leading-relaxed font-light">
                {personalInfo.summary}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                  View My Work <ChevronRight size={18} />
                </a>
                  <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/6 hover:bg-primary/90 hover:text-white text-white/80 px-6 py-3 rounded-full text-sm transition-colors" aria-label="Open Resume in new tab">
                    <ExternalLink size={16} />
                    <span>Resume</span>
                  </a>
                  <a href="#contact" className="border border-white/10 hover:bg-white/5 px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm">
                    Let's Talk
                  </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight">Selected Projects</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-white/[0.01] scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight">Expertise</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.05 }}
                  className="glass p-8 rounded-2xl text-center border-white/5 hover:border-primary/20 transition-all flex flex-col items-center gap-4"
                >
                  <p className="font-bold text-white/90 tracking-wide uppercase text-xs">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 scroll-mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Available for Internships
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Get In Touch</h2>
            <p className="text-white/50 text-xl font-light mb-12 leading-relaxed">
              I'm always looking for interesting projects and opportunities to grow. 
              Drop me a line and let's build something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-3 text-lg hover:text-primary transition-colors group p-4 glass rounded-2xl" aria-label="Send me an email">
                <Mail size={24} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium">{personalInfo.email}</span>
              </a>
              <div className="flex items-center space-x-3 text-lg text-white/70 p-4 glass rounded-2xl">
                <Phone size={24} className="text-primary" />
                <span className="font-medium">{personalInfo.phone}</span>
              </div>
            </div>
            
            <div className="mt-16 flex justify-center space-x-6 text-white/30">
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub"><Github size={28} /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={28} /></a>
              <div className="flex items-center space-x-2">
                <MapPin size={24} />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-white/30 text-sm font-light">
        <div className="max-w-6xl mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Inspired by premium standards.</p>
          <p className="mt-3 flex items-center justify-center gap-2">
            Built with <span className="text-primary font-medium">React</span> • <span className="text-primary font-medium">Tailwind</span> • <span className="text-primary font-medium">Framer Motion</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
