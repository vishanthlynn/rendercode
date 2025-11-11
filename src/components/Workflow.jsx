import { Search, Rocket, RefreshCw, TrendingUp } from 'lucide-react'

const Workflow = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Audit',
      description:
        'We review your current site, branding, and goals. You get a 60-second Loom video with actionable insights.',
    },
    {
      number: '02',
      icon: Rocket,
      title: 'Launch',
      description:
        'We build your website and create your videos. Clear timelines, regular updates, and zero surprises.',
    },
    {
      number: '03',
      icon: RefreshCw,
      title: 'Retainer',
      description:
        'Ongoing support keeps your site updated and your content fresh. You focus on growth; we handle the rest.',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Growth',
      description:
        'Monthly strategy calls and performance reviews ensure you're always moving forward, not just maintaining.',
    },
  ]

  return (
    <section
      id="workflow"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
      aria-label="How it works section"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, transparent process from audit to growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-200 -z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full"></div>
                  </div>
                )}

                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                    </div>
                    <span className="text-2xl font-bold text-gray-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Workflow

