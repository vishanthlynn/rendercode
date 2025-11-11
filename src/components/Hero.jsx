import { Play, ArrowRight } from 'lucide-react'

const Hero = ({ scrollToSection, openContactModal }) => {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
      aria-label="Hero section"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Proof Badge - Replace with your case study link */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
              <span>Spec Case Study:</span>
              <a
                href="#case-study"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('case-study')
                }}
                className="hover:underline font-semibold"
                aria-label="View UrbanFuel case study"
              >
                UrbanFuel
              </a>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Branding, Websites & Videos for Tech-first Startups
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Productized retainers that turn website bugs into trust — and
              consistent revenue into growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('packages')}
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="View packages"
              >
                See Packages
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={openContactModal}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="Request a Loom audit"
              >
                Request a Loom Audit
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 justify-center lg:justify-start">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Fast Delivery
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                No Surprises
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Productized Pricing
              </span>
            </div>
          </div>

          {/* Right Column - Loom Thumbnail/Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl shadow-2xl overflow-hidden">
              {/* Replace this placeholder with your Loom video thumbnail */}
              {/* Loom video embed or thumbnail image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={openContactModal}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  aria-label="Play Loom audit example"
                >
                  <Play className="w-10 h-10 text-primary-600 ml-1" fill="currentColor" aria-hidden="true" />
                </button>
              </div>
            </div>
            {/* Optional: Add a caption */}
            <p className="text-center text-sm text-gray-500 mt-4">
              60-second technical audit example
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

