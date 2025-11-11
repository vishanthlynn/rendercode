const CaseStudy = () => {
  return (
    <section
      id="case-study"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-label="Case study section"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Case Study
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            UrbanFuel Coffee
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From slow website to conversion machine in 2 weeks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Before Image */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Before</h3>
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg">
              {/* Replace with actual before image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <p className="text-lg">Before: Slow, outdated design</p>
              </div>
            </div>
          </div>

          {/* After Image */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">After</h3>
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl overflow-hidden shadow-lg">
              {/* Replace with actual after image */}
              <div className="w-full h-full flex items-center justify-center text-primary-700">
                <p className="text-lg font-semibold">After: Fast, modern, converting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results & Testimonial */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-200">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Results</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              UrbanFuel saw a 45% increase in online orders and a 60% reduction
              in page load time. The new website and promotional videos helped
              them scale from 2 locations to 5 within 6 months.
            </p>
          </div>

          <div className="border-l-4 border-primary-600 pl-6">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "FrameStack didn't just build us a website—they built us a growth
              engine. The Loom audit showed us exactly what was wrong, and the
              final product exceeded our expectations. Our conversion rate
              doubled."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                <span className="text-primary-700 font-semibold">UF</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-sm text-gray-600">Founder, UrbanFuel Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy

