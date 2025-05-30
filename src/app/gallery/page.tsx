'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X, ExternalLink, Calendar, Tag, Menu } from 'lucide-react'
import Link from 'next/link'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [filter, setFilter] = useState('all')

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('gallery')
  
   

  const artProjects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "branding",
      date: "2024",
      description: "Complete brand identity package including logo, color palette, and typography for a tech startup.",
      image: "/api/placeholder/600/400",
      tags: ["Logo Design", "Brand Identity", "Corporate"]
    },
    {
      id: 2,
      title: "Digital Illustration Series",
      category: "illustration",
      date: "2024",
      description: "A collection of digital portraits exploring modern character design and vibrant color schemes.",
      image: "/api/placeholder/600/400",
      tags: ["Digital Art", "Character Design", "Illustration"]
    },
    {
      id: 3,
      title: "Web Design Concept",
      category: "web-design",
      date: "2023",
      description: "Modern e-commerce website design with focus on user experience and conversion optimization.",
      image: "/api/placeholder/600/400",
      tags: ["UI/UX", "Web Design", "E-commerce"]
    },
    {
      id: 4,
      title: "Poster Design Campaign",
      category: "print",
      date: "2023",
      description: "Event poster series for music festival featuring bold typography and dynamic compositions.",
      image: "/api/placeholder/600/400",
      tags: ["Poster Design", "Typography", "Event Marketing"]
    },
    {
      id: 5,
      title: "Mobile App Interface",
      category: "ui-ux",
      date: "2024",
      description: "Clean and intuitive mobile app design for fitness tracking with gamification elements.",
      image: "/api/placeholder/600/400",
      tags: ["Mobile Design", "App UI", "Fitness"]
    },
    {
      id: 6,
      title: "Abstract Art Collection",
      category: "illustration",
      date: "2023",
      description: "Series of abstract digital paintings exploring geometric forms and gradient techniques.",
      image: "/api/placeholder/600/400",
      tags: ["Abstract Art", "Digital Painting", "Geometric"]
    },
    {
      id: 7,
      title: "Social Media Graphics",
      category: "branding",
      date: "2024",
      description: "Cohesive social media template designs for small business marketing campaigns.",
      image: "/api/placeholder/600/400",
      tags: ["Social Media", "Templates", "Marketing"]
    },
    {
      id: 8,
      title: "Editorial Layout Design",
      category: "print",
      date: "2023",
      description: "Magazine layout design featuring innovative typography and image composition techniques.",
      image: "/api/placeholder/600/400",
      tags: ["Editorial", "Layout Design", "Magazine"]
    }
  ]

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'branding', label: 'Branding' },
    { key: 'illustration', label: 'Illustration' },
    { key: 'web-design', label: 'Web Design' },
    { key: 'ui-ux', label: 'UI/UX' },
    { key: 'print', label: 'Print Design' }
  ]

  const filteredProjects = filter === 'all' 
    ? artProjects 
    : artProjects.filter(project => project.category === filter)


  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
     <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
            {/* Back to Portfolio */}
            <Link href="/">
                <motion.div
                className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <ArrowLeft size={20} />
                <span>Back to Portfolio</span>
                </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
                {[
                { name: 'home', href: '/' },
                { name: 'about', href: '/#about' },
                { name: 'projects', href: '/#projects' },
                { name: 'gallery', href: '/gallery' },
                { name: 'contact', href: '/#contact' }
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
                className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
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

      <div className="pt-20 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Creative Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my graphic design and digital art projects, 
            spanning branding, illustration, and user interface design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                filter === category.key
                  ? 'bg-purple-600 text-white'
                  : 'glass-effect text-gray-300 hover:bg-purple-600/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(project)}
                  whileHover={{ y: -10 }}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold opacity-20">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs bg-black/30 text-white rounded-full backdrop-blur-sm">
                        {project.date}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="px-2 py-1 text-xs bg-gray-600/20 text-gray-400 rounded-full">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-600 to-pink-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl font-bold opacity-20">
                        {selectedImage.title.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{selectedImage.title}</h2>
                        <div className="flex items-center space-x-4 text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{selectedImage.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Tag size={16} />
                            <span className="capitalize">{selectedImage.category.replace('-', ' ')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{selectedImage.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedImage.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-purple-600/20 text-purple-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <motion.button
                        className="flex items-center space-x-2 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        <span>View Full Project</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}