import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Navbar() {
  const links = [
    { label: "Why us", href: "#why-us" },
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#packages" },
    { label: "Contact", href: "#contact" },
  ]
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-[#0A0A0A]/60 backdrop-blur-md text-white z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <a href="#home" className="hover:opacity-80 transition-opacity flex items-center">
        <Logo size="default" />
      </a>
      <ul className="hidden md:flex gap-8">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="hover:text-neon transition-all cursor-pointer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="#contact"
        className="bg-neon text-black px-5 py-2 rounded-full font-medium"
      >
        Book Intro Call
      </motion.a>
    </motion.nav>
  )
}


