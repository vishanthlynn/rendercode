import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import DevelopersAdvantage from './components/DevelopersAdvantage'
import WhatYouLearn from './components/WhatYouLearn'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <main className="bg-dark text-white min-h-screen">
      <Navbar />
      <Hero />
      <Packages />
      <DevelopersAdvantage />
      <WhatYouLearn />
      <Contact />
      <Footer />
    </main>
  )
}
