import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemPromise from './components/ProblemPromise'
import DevelopersAdvantage from './components/DevelopersAdvantage'
import Packages from './components/Packages'
import Workflow from './components/Workflow'
import CaseStudy from './components/CaseStudy'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} openContactModal={openContactModal} />
      <main>
        <Hero scrollToSection={scrollToSection} openContactModal={openContactModal} />
        <ProblemPromise />
        <DevelopersAdvantage openContactModal={openContactModal} />
        <Packages openContactModal={openContactModal} />
        <Workflow />
        <CaseStudy />
        <Testimonials />
        <FAQ />
      </main>
      <Footer
        isContactModalOpen={isContactModalOpen}
        openContactModal={openContactModal}
        closeContactModal={closeContactModal}
      />
    </div>
  )
}

export default App

