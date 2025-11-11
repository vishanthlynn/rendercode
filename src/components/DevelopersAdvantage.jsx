import { Video, Code, ArrowRight } from 'lucide-react'

const DevelopersAdvantage = ({ openContactModal }) => {
  return (
    <section
      id="developers-advantage"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white"
      aria-label="Developer's advantage section"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Developer's Advantage
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We combine technical expertise with strategic thinking. Our Loom
              technical audit gives you a 60-second walkthrough of exactly what
              needs fixing—before you commit to a project.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              No vague proposals. No surprise scope creep. Just clear,
              actionable insights that help you make informed decisions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <Code className="w-5 h-5 text-primary-600" aria-hidden="true" />
                <span className="font-medium">Technical Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Video className="w-5 h-5 text-primary-600" aria-hidden="true" />
                <span className="font-medium">Visual Communication</span>
              </div>
            </div>

            <button
              onClick={openContactModal}
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Request a 60-second Loom audit"
            >
              Request Your 60s Loom Audit
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Right Column - Visual/Mock Loom Embed */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden">
              {/* Replace with actual Loom embed or thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Video className="w-16 h-16 mx-auto mb-4 text-primary-400" aria-hidden="true" />
                  <p className="text-lg font-semibold mb-2">60-Second Technical Audit</p>
                  <p className="text-sm text-gray-300">
                    See exactly what needs fixing before you commit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopersAdvantage

