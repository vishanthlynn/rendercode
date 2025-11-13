import { Mail, Linkedin, Twitter, Github } from 'lucide-react'
import ContactForm from './ContactForm'

const Footer = ({ isContactModalOpen, openContactModal, closeContactModal }) => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8" role="contentinfo">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Get in Touch</h3>
              <p className="mb-4">
                Ready to transform your online presence? Let's talk.
              </p>
              <a
                href="mailto:hello@rendercodestudios.com"
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                hello@rendercodestudios.com
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#packages"
                    className="hover:text-primary-400 transition-colors"
                  >
                    Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#workflow"
                    className="hover:text-primary-400 transition-colors"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#case-study"
                    className="hover:text-primary-400 transition-colors"
                  >
                    Case Study
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-primary-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/rendercodestudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/rendercode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/rendercodestudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h3 className="text-white font-bold text-lg mb-4">Send us a Message</h3>
            <button
              onClick={openContactModal}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Open contact form"
            >
              Open Contact Form
            </button>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <p className="text-sm">
                © {currentYear} Rendercode Studios. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a
                  href="/privacy"
                  className="hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500">
                Designed and developed by{' '}
                <span className="text-gray-400">Vishanth Dandu</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <ContactForm onClose={closeContactModal} packageSelect="" />
      )}
    </>
  )
}

export default Footer

