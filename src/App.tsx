import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Quiz from './components/Quiz'
import Advantages from './components/Advantages'
import Triggers from './components/Triggers'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import CtaBlock from './components/CtaBlock'
import Footer from './components/Footer'
import AbandonPopup from './components/AbandonPopup'

export default function App() {
  const [showAbandonPopup, setShowAbandonPopup] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [popupShown, setPopupShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && quizStarted && !quizCompleted && !popupShown) {
        setShowAbandonPopup(true)
        setPopupShown(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [quizStarted, quizCompleted, popupShown])

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <Quiz
        onStart={() => setQuizStarted(true)}
        onComplete={() => setQuizCompleted(true)}
      />
      <Advantages />
      <Triggers />
      <Gallery />
      <Reviews />
      <FAQ />
      <CtaBlock />
      <Footer />
      {showAbandonPopup && (
        <AbandonPopup onClose={() => setShowAbandonPopup(false)} />
      )}
    </div>
  )
}
