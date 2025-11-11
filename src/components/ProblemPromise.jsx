import { Bug, Palette, TrendingDown } from 'lucide-react'

const ProblemPromise = () => {
  const problems = [
    {
      icon: Bug,
      problem: 'Slow Websites',
      solution:
        'We build lightning-fast sites using modern frameworks and optimized assets, ensuring your visitors never wait.',
    },
    {
      icon: Palette,
      problem: 'Inconsistent Branding',
      solution:
        'Unified design systems that maintain your brand identity across every touchpoint, from website to video.',
    },
    {
      icon: TrendingDown,
      problem: 'Low Conversion',
      solution:
        'Data-driven design and clear CTAs that turn visitors into customers, with continuous optimization.',
    },
  ]

  return (
    <section
      id="problem-promise"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-label="Problem and promise section"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Problems We Solve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every tech startup faces these challenges. We turn them into your
            competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.problem}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.solution}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemPromise

