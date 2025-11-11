import { Check, ArrowRight } from 'lucide-react'

const Packages = ({ openContactModal }) => {
  const packages = [
    {
      id: 'launch',
      name: 'Launch',
      price: '₹50,000',
      period: 'one-time',
      description: 'Perfect for startups ready to launch',
      deliverables: [
        '1-page professional website',
        '30-second promo video',
        'Basic branding guidelines',
        'Mobile-responsive design',
        '1-week delivery',
      ],
      who: 'Early-stage startups, solo founders, MVPs',
      popular: false,
    },
    {
      id: 'growth',
      name: 'Growth',
      price: '₹1,00,000',
      period: 'one-time',
      description: 'Full website and video package for scaling',
      deliverables: [
        'Full multi-page website (up to 5 pages)',
        '2 promotional videos',
        'Complete branding package',
        'Basic SEO setup',
        'Contact form integration',
        '2-week delivery',
      ],
      who: 'Growing startups, established products, rebrands',
      popular: true,
    },
    {
      id: 'retainer',
      name: 'Full-Stack Retainer',
      price: '₹1,50,000',
      period: 'per month',
      description: 'Ongoing support and content creation',
      deliverables: [
        'Up to 6 hours of site updates/month',
        '4 short videos per month',
        'Monthly strategy call',
        'Priority support',
        'Content updates',
        'Performance monitoring',
      ],
      who: 'Established startups, scale-ups, ongoing projects',
      popular: false,
    },
  ]

  return (
    <section
      id="packages"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-label="Packages section"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Productized pricing means no surprises. Pick the package that fits
            your stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative p-8 rounded-2xl border-2 transition-all ${
                pkg.popular
                  ? 'border-primary-500 bg-primary-50 scale-105 shadow-xl'
                  : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {pkg.price}
                  </span>
                  <span className="text-gray-600">/{pkg.period}</span>
                </div>
                <p className="text-gray-600">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {pkg.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check
                        className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Who it's for:
                </p>
                <p className="text-sm text-gray-600">{pkg.who}</p>
              </div>

              <button
                onClick={openContactModal}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  pkg.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
                aria-label={`Book intro call for ${pkg.name} package`}
              >
                Book Intro Call
                <ArrowRight className="w-4 h-4 inline-block ml-2" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages

