'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Smartphone,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: "Salonytics: A Web-based Resource Management System with Predictive Analytics",
      description: "A comprehensive web application for managing resources, schedules, and analytics in salons.",
      tech: ["ASP.Net", "MS SQL", "Azure", "ML.NET", "Bootstrap"],
      image: "/images/salonytics.png",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop interface.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts, interactive charts, and dark mode.",
      tech: ["Vue.js", "Chart.js", "OpenWeather API"],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#"
    }
  ]

  const skills = [
    { name: "Web Development", icon: Code, level: 85 },
    { name: "Graphic Design", icon: Palette, level: 90 },
    { name: "Customer Support", icon: Smartphone, level: 80 }
  ]

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              nicole.
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'home', href: '#home' },
                { name: 'about', href: '#about' },
                { name: 'projects', href: '#projects' },
                { name: 'gallery', href: '/gallery' },
                { name: 'contact', href: '#contact' }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`capitalize transition-colors hover:text-purple-400 ${
                    activeSection === item.name ? 'text-purple-400' : 'text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
       <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-2/3 sm:w-1/2 md:hidden bg-purple-950/60 backdrop-blur-lg shadow-lg z-50"
            >
              <div className="px-4 py-6 space-y-6 relative h-full">
                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-purple-300 text-2xl"
                  aria-label="Close menu"
                >
                  &times;
                </button>

                {/* Menu Items */}
                <div className="mt-12 space-y-6 text-center">
                  {[
                    { name: 'home', href: '#home' },
                    { name: 'about', href: '#about' },
                    { name: 'projects', href: '#projects' },
                    { name: 'gallery', href: '/gallery' },
                    { name: 'contact', href: '#contact' }
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block capitalize text-gray-200 hover:text-purple-300 transition-colors text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="mt-18 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-left mb-6">
              <span className="gradient-text">hi! <br></br> i'm nicole.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 text-left">
              Full-Stack Developer | Customer Support | General VA
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 text-left">
               Code by day, support hero by… also day (and sometimes night). I build sleek, functional web apps, wrangle inboxes, tame to-do lists, and sprinkle in just enough charm to make tech feel human.  
                <br /><br />
                Whether it’s debugging your app, managing your calendar, or creating eye-catching digital art that actually stops the scroll — I’m your person.  
                <br /><br />
                I handle the busy work so you can focus on the big work — with a splash of color and a touch of code.
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              {[
                { icon: Github, href: "https://github.com/jardinnicole" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/nicole-alexandra-jardin-11623525b/" },
                { icon: Mail, href: "nicole.jardin1@icloud.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 glass-effect rounded-full hover:bg-purple-600/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </motion.div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 px-4  bg-gradient-to-r from-purple-900/20 to-pink-900/20 w-full">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enthusiastic and detail-oriented Computer Science graduate with a strong foundation in programming, database 
              management, and web development. Experienced in providing excellent customer service, with proven problem-solving skills 
              and the ability to communicate technical concepts effectively. 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-2xl text-center hover:animate-glow transition-all duration-300"
                >
                  <div className="mb-6">
                    <IconComponent size={48} className="mx-auto text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-gray-400">{skill.level}%</span>
                </motion.div>
              )
            })}
          </div>

           {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-300">Technologies I Work With</h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-5xl mx-auto ">
              {[
                // Programming Languages
                { name: "Python", icon: "fab fa-python", color: "text-yellow-400" },
                { name: "Java", icon: "fab fa-java", color: "text-red-500" },
                { name: "C#", icon: "/logos/c-sharp.png", color: "text-purple-500" },
                { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-300" },
                
                // Databases
                { name: "SQL", icon: "fas fa-database", color: "text-blue-400" },
                { name: "MongoDB", icon: "/logos/mongodb.svg", color: "text-green-500" },
                { name: "PostgreSQL", icon: "/logos/postgresql.svg", color: "text-blue-600" },
                
                // Frameworks & Libraries
                { name: "Django", icon: "/logos/django.svg", color: "text-green-600" },
                { name: "Next.js", icon: "/logos/next-js.svg", color: "text-gray-300" },
                { name: "Node.js", icon: "fab fa-node-js", color: "text-green-400" },
                { name: "ASP.Net", icon: "/logos/dotnet.svg", color: "text-blue-500" },
                { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
                
                // Development Tools
                { name: "Git", icon: "fab fa-git-alt", color: "text-orange-500" },
                { name: "GitHub", icon: "fab fa-github", color: "text-gray-300" },
                { name: "Docker", icon: "fab fa-docker", color: "text-blue-400" },
                { name: "Visual Studio", icon: "/logos/visual-studio.svg", color: "text-purple-400" },
                { name: "VS Code", icon: "/logos/vs-code.svg", color: "text-blue-300" },
                
                // Productivity & Design Tools
                { name: "MS Office", icon: "fas fa-file-alt", color: "text-blue-600" },
                { name: "Google Suite", icon: "fab fa-google", color: "text-red-400" },
                { name: "Notion", icon: "/logos/notion.svg", color: "text-gray-300" },
                { name: "Jira", icon: "fab fa-jira", color: "text-blue-500" },
                { name: "Photoshop", icon: "/logos/photoshop.svg", color: "text-blue-400" },
                { name: "Premiere", icon: "/logos/premiere.svg", color: "text-purple-400" },
                { name: "Canva", icon: "/logos/canva.svg", color: "text-cyan-300" },
                { name: "Figma", icon: "fab fa-figma", color: "text-purple-300" }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                  className="glass-effect p-4 rounded-xl text-center group cursor-pointer hover:bg-purple-600/10 transition-all duration-300"
                >
                  <div className={`text-3xl mb-2 group-hover:animate-bounce ${tech.color}`}>
                    {tech.icon.startsWith("/") ? (
                      <img src={tech.icon} alt={tech.name} className="w-8 h-8 mx-auto" />
                    ) : (
                      <i className={tech.icon}></i>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
                  <img  
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-purple-600/20 text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">What Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take my word for it - here's what some of my clients have to say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                image: "/api/placeholder/80/80",
                content: "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and technical expertise is outstanding.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Product Manager, InnovateHub",
                image: "/api/placeholder/80/80",
                content: "The mobile app they built for us has received incredible user feedback. Clean design, smooth performance, and they were always available for questions and iterations throughout the project.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, CreativeAgency",
                image: "/api/placeholder/80/80",
                content: "Their graphic design work transformed our brand identity completely. The logo and visual assets they created perfectly captured our vision and helped us stand out in a competitive market.",
                rating: 5
              },
              {
                name: "David Thompson",
                role: "Founder, DataFlow Solutions",
                image: "/api/placeholder/80/80",
                content: "Exceptional full-stack development skills. They built our complex dashboard application with beautiful UI and robust backend. Communication was excellent throughout the entire process.",
                rating: 5
              },
              {
                name: "Lisa Park",
                role: "Operations Manager, RetailPlus",
                image: "/api/placeholder/80/80",
                content: "The web application they developed streamlined our entire workflow. User-friendly interface combined with powerful functionality. Highly recommend for any development project!",
                rating: 5
              },
              {
                name: "James Wilson",
                role: "CTO, CloudTech Systems",
                image: "/api/placeholder/80/80",
                content: "Professional, reliable, and incredibly talented. They tackled complex technical challenges with ease and delivered a scalable solution that has been running flawlessly for months.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl hover:animate-glow transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                      viewport={{ once: true }}
                    >
                      ⭐
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
            </p>
            
            <motion.a
              href="mailto:your.email@example.com"
              className="inline-flex items-center space-x-3 glass-effect px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600/20 transition-all duration-300 animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
              <span>Let's Talk</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Nicole Alexandra Jardin. Built with Next.js and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  )
}