import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Do you require an upfront payment?',
      answer:
        'Yes — we require 50% upfront payment on fixed projects (Launch and Growth packages). Full-Stack Retainer packages are billed monthly in advance. This ensures we can dedicate resources to your project from day one.',
    },
    {
      question: 'What are your typical delivery timelines?',
      answer:
        'Launch package: 1 week. Growth package: 2 weeks. Full-Stack Retainer: Ongoing support with same-week turnaround for updates. All timelines are communicated upfront and tracked in our project management system.',
    },
    {
      question: 'Is there a stop-work clause?',
      answer:
        'Yes. Either party can terminate with 30 days written notice. For fixed projects, you own all completed work up to the termination date. For retainers, the final month is prorated based on work completed.',
    },
    {
      question: 'Do you provide a Memorandum of Understanding (MoU)?',
      answer:
        'Yes. Every project starts with a clear MoU that outlines deliverables, timelines, payment terms, and expectations. This document protects both parties and ensures there are no surprises.',
    },
    {
      question: 'How do I get started?',
      answer:
        "Book an intro call using the button above. We'll discuss your needs, provide a 60-second Loom audit if requested, and recommend the best package. If we're a good fit, we'll send over the MoU and get started within 48 hours.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-label="Frequently asked questions"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp
                    className="w-5 h-5 text-gray-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                ) : (
                  <ChevronDown
                    className="w-5 h-5 text-gray-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed"
                  role="region"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

