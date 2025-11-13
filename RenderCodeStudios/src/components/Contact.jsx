import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    package: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="bg-black text-white py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-4">
            Book an intro call or request your free 60-second Loom audit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400">
            <a
              href="mailto:rendercodestudios@gmail.com"
              className="hover:text-neon transition-colors"
            >
              rendercodestudios@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="tel:+917995022614"
              className="hover:text-neon transition-colors"
            >
              +91 7995022614
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-neon text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-neon text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Company *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-neon text-white"
                placeholder="Company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Interested Package
              </label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-neon text-white"
              >
                <option value="">Select a package</option>
                <option value="social-video">Social Video Starter</option>
                <option value="brand-web">Brand + Web Launch</option>
                <option value="full-stack">Full-Stack Retainer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-neon text-white resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-neon text-black px-8 py-4 rounded-full font-semibold text-lg"
            >
              Book Intro Call
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

