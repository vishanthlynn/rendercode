import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo size="default" />
            </div>
            <p className="text-gray-400 mb-4">
              Full-Stack Creative Partner for Tech-first Startups in Hyderabad
            </p>
            <p className="text-sm text-gray-500">
              Branding • Websites • Videos
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#packages" className="text-gray-400 hover:text-neon transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-neon transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-neon transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-neon transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Hyderabad, India</p>
            <a
              href="mailto:rendercodestudios@gmail.com"
              className="text-gray-400 mb-2 hover:text-neon transition-colors inline-block"
            >
              rendercodestudios@gmail.com
            </a>
            <a
              href="tel:+917995022614"
              className="text-gray-400 mb-4 hover:text-neon transition-colors inline-block"
            >
              +91 7995022614
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com/in/rendercodestudios-undefined-ba445a396"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-neon hover:text-black transition-colors"
              >
                in
              </a>
              <a
                href="https://twitter.com/rendercode"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-neon hover:text-black transition-colors"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Rendercode Studios. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Designed and developed by{' '}
            <span className="text-gray-500">Vishanth Dandu</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

