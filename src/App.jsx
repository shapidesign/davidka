import React from 'react'
import Hero from './components/Hero'
import Comparison from './components/Comparison'
import Features from './components/Features'
import Download from './components/Download'

function App() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] overflow-x-hidden font-david" dir="rtl">
      <nav className="fixed w-full z-50 bg-[#fdfbf7]/80 backdrop-blur-sm border-b border-[#e5e5e5] py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold font-davidka tracking-tighter">דוידקה</div>
          <a href="#download" className="bg-[#2c2c2c] text-white px-6 py-2 rounded-full hover:bg-[#4a4a4a] transition-colors text-sm font-medium">
            הורד את דוידקה
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Comparison />
        <Features />
        <Download />
      </main>

      <footer className="bg-[#2c2c2c] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="opacity-60 text-sm">© {new Date().getFullYear()} דוידקה - אגודת הסטודנטים העצלנים. לא באמת מגיע ל-12 עמודים.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
