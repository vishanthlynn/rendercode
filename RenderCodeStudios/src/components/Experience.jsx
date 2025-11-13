import { motion } from 'framer-motion'
import { fadeUp } from '../motion'

export default function Experience() {
  return (
    <section className="bg-black text-white py-32 text-center relative overflow-hidden">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        The ₹3,00,000/Month Agency Blueprint
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
      >
        A strategic & financial plan for launching a productized creative agency
        in Hyderabad. We combine technical expertise with creative execution to
        deliver predictable, recurring revenue.
      </motion.p>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="text-gray-400 max-w-2xl mx-auto mb-10"
      >
        Full-Stack Creative Partner integrating Branding, Web Development, and
        Short-Form Video Production into fixed-scope, fixed-price monthly
        subscriptions.
      </motion.p>
      <motion.a
        href="#packages"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="inline-block bg-neon text-black px-8 py-4 rounded-full font-semibold text-lg cursor-pointer"
      >
        View Packages
      </motion.a>
    </section>
  )
}


