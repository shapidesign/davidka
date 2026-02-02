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
        <div className="container mx-auto px-6 text-center space-y-4">
          <p className="opacity-80 text-sm">
            עיצוב מקורי: איתמר דוד (Ismar David), עוצב במקור עבור חברת "אינטרטייפ" בשנת 1954.
          </p>
          <p className="opacity-80 text-sm">
            פיתוח ועיצוב הגרסה הדיגיטלית (Libre): מאיר סדן (Meir Sadan), בשיתוף עם גוגל פונטס.
          </p>
          <p className="opacity-80 text-sm">
            רישיון: מופץ תחת רישיון הקוד הפתוח SIL Open Font License 1.1.
          </p>
          <p className="opacity-100 text-sm font-bold pt-4 text-[#3aa2db]">
            פיתוח Davidka: יהונתן שפירא @ ShapiDesign.com (2026).
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
