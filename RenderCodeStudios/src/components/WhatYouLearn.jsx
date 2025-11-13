import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../motion'

export default function WhatYouLearn() {
  const sections = [
    {
      number: '1',
      title: 'Brand Identity & Design',
      description:
        'Complete brand identity packages that make you look like a market leader from day one.',
      topics: [
        'Logo Design & Brand Guidelines',
        'Color Palette & Typography',
        'Visual Identity System',
        'Brand "Hero" Video',
      ],
    },
    {
      number: '2',
      title: 'Web Development',
      description:
        'High-speed, conversion-optimized websites built by a full-stack developer.',
      topics: [
        'Custom Website Development',
        'Mobile-Responsive Design',
        'SEO Optimization',
        'Website Management & Hosting',
      ],
    },
    {
      number: '3',
      title: 'Short-Form Video Production',
      description:
        'High-end social media video content that stops the scroll and drives engagement.',
      topics: [
        'Reels & Shorts Production',
        'Motion Graphics & Animation',
        'Content Strategy & Planning',
        'Monthly Video Packages',
      ],
    },
    {
      number: '4',
      title: 'Full-Stack Creative Partnership',
      description:
        'Your entire creative department—brand, web, and video—for one flat monthly fee.',
      topics: [
        'Integrated Creative Strategy',
        'Monthly Reporting & Analytics',
        'Ongoing Support & Updates',
        'Dedicated Account Management',
      ],
      isNew: true,
    },
  ]

  return (
    <section
      id="services"
      className="bg-dark text-white py-32 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-stack creative services that integrate branding, web development, and video production
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all"
            >
              {section.isNew && (
                <div className="absolute -top-3 -right-3">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    NEW
                  </span>
                </div>
              )}

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-neon/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-neon">
                    {section.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{section.title}</h3>
              </div>

              <p className="text-gray-300 mb-6">{section.description}</p>

              <ul className="space-y-2">
                {section.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neon mt-1">+</span>
                    <span className="text-gray-300">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

