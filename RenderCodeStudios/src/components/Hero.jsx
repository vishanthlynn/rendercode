import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import Logo from './Logo'

export default function Hero() {
  return (
    <section id="home" className="bg-dark text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <motion.h1
        className="absolute top-1/3 text-[6rem] md:text-[8rem] font-extrabold opacity-[0.08] whitespace-nowrap pointer-events-none"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        RENDERCODE STUDIOS • RENDERCODE STUDIOS •
      </motion.h1>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto"
      >
        <div className="mb-8 md:mb-12">
          <Logo size="large" className="mx-auto block" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Branding, Websites & Videos for Tech-first Startups
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
          Productized retainers that turn website bugs into trust — and
          consistent revenue into growth. Fast, modern websites, branding, and
          video content for tech startups in Hyderabad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#packages"
            className="inline-block bg-neon text-black px-8 py-4 rounded-full font-semibold text-lg"
          >
            See Packages
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-transparent border-2 border-neon text-neon px-8 py-4 rounded-full font-semibold text-lg hover:bg-neon/10"
          >
            Book Intro Call
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}


