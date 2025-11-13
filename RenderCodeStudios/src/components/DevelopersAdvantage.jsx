import { motion } from 'framer-motion'
import { fadeUp } from '../motion'

export default function DevelopersAdvantage() {
  return (
    <section
      id="why-us"
      className="bg-black text-white py-32 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Developer's Advantage
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We combine technical expertise with strategic thinking. Our Loom
              technical audit gives you a 60-second walkthrough of exactly what
              needs fixing—before you commit to a project.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              No vague proposals. No surprise scope creep. Just clear,
              actionable insights that help you make informed decisions.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neon/20 rounded-lg flex items-center justify-center">
                  <span className="text-neon text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Technical Expertise</h3>
                  <p className="text-gray-400 text-sm">
                    Full-stack developer with real-world experience
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neon/20 rounded-lg flex items-center justify-center">
                  <span className="text-neon text-2xl">🎥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    60-Second Loom Audit
                  </h3>
                  <p className="text-gray-400 text-sm">
                    See exactly what needs fixing before you commit
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-neon/20 rounded-lg flex items-center justify-center">
                  <span className="text-neon text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Visual Communication</h3>
                  <p className="text-gray-400 text-sm">
                    High-end video production that converts
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-neon text-black px-8 py-4 rounded-full font-semibold text-lg"
            >
              Request Your 60s Loom Audit
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border-2 border-gray-800 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-neon/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-neon text-4xl">▶</span>
                  </div>
                  <p className="text-lg font-semibold mb-2">
                    60-Second Technical Audit
                  </p>
                  <p className="text-sm text-gray-400">
                    See exactly what needs fixing before you commit
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

