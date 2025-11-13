import { motion } from 'framer-motion'
import { fadeUp } from '../motion'

export default function Packages() {
  const packages = [
    {
      name: 'Social Video Starter',
      price: '₹70,000',
      period: '/month',
      description: 'Monthly social media video & design for high-visual-impact businesses',
      roi: 'Dominate Instagram with consistent, high-end video that stops the scroll',
      deliverables: [
        '12 Short-Form Videos (Reels/Shorts)',
        '8 Static Graphics',
        'Monthly Content Calendar & Strategy',
      ],
      margin: '37%',
      popular: false,
    },
    {
      name: 'Brand + Web Launch',
      price: '₹1,20,000',
      period: ' (One-Time)',
      description: 'One-time foundational brand & web project to launch a new venture',
      roi: 'Look like a market leader from Day 1 with a premium brand and a high-speed website',
      deliverables: [
        'Full Brand Identity (Logo, Colors, Fonts)',
        '5-Page Website (Dev & Design)',
        '1x Brand "Hero" Video (2-min)',
      ],
      margin: '79%',
      popular: true,
    },
    {
      name: 'Full-Stack Retainer',
      price: '₹1,50,000',
      period: '/month',
      description: 'The all-in-one monthly creative partner for funded startups & tech firms',
      roi: 'Your entire creative department—brand, web, and video—for one flat fee',
      deliverables: [
        'All Website Mgt & Hosting',
        '15 Short-Form Videos',
        '10 Static Graphics',
        '2x Monthly SEO Blog Posts',
        'Monthly Strategy & Reporting',
      ],
      margin: '57%',
      popular: false,
    },
  ]

  return (
    <section id="packages" className="bg-dark text-white py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Package
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Productized pricing means no surprises. Pick the package that fits
            your stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border-2 transition-all ${
                pkg.popular
                  ? 'border-neon bg-neon/10 scale-105 shadow-2xl shadow-neon/20'
                  : 'border-gray-800 bg-gray-900/50 hover:border-gray-700 hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-neon text-black px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-400">{pkg.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{pkg.description}</p>
                <p className="text-sm text-neon font-semibold">{pkg.roi}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {pkg.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-neon mt-1">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-4 bg-black/50 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Gross Margin</p>
                <p className="text-2xl font-bold text-neon">{pkg.margin}</p>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-neon text-black hover:bg-neon/90'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                Book Intro Call
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

