const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'Rendercode Studios transformed our online presence. The technical audit was eye-opening, and the execution was flawless.',
      author: 'Raj Patel',
      role: 'CTO, TechFlow',
      company: 'TechFlow',
    },
    {
      quote:
        'Finally, an agency that speaks our language. They understand both design and code, which is rare.',
      author: 'Priya Sharma',
      role: 'Founder, DataViz',
      company: 'DataViz',
    },
    {
      quote:
        'The retainer model is perfect for us. We get ongoing support without the overhead of a full-time team.',
      author: 'Amit Kumar',
      role: 'CEO, CloudScale',
      company: 'CloudScale',
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white"
      aria-label="Testimonials section"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what startups like yours are
            saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-primary-600 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-700 font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  {/* Replace with actual company logo */}
                  <p className="text-xs text-gray-500 mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

