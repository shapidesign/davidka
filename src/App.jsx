import React from 'react'
import Hero from './components/Hero'
import Comparison from './components/Comparison'
import Features from './components/Features'
import Download from './components/Download'

import BMCButton from './components/BMCButton';

function App() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] overflow-x-hidden font-david" dir="rtl">
      <nav className="fixed w-full z-50 bg-[#fdfbf7]/80 backdrop-blur-sm border-b border-[#e5e5e5] py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold font-davidka tracking-tighter">דוידקה</div>
            <div className="hidden md:block">
              <BMCButton />
            </div>
          </div>
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

      <footer className="bg-[#2c2c2c] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold font-davidka mb-2 text-[#3aa2db]">עיצוב של המאה ה-21:</h3>
            <p className="text-lg md:text-xl font-david text-gray-300 max-w-2xl mx-auto">
              פתרון שאף אחד לא ביקש לבעיה שאף אחד לא התלונן עליה.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-12 space-y-4">
            <p className="opacity-60 text-sm max-w-3xl mx-auto">
              עיצוב מקורי: איתמר דוד (Ismar David), עוצב במקור עבור חברת "אינטרטייפ" בשנת 1954. | פיתוח ועיצוב הגרסה הדיגיטלית (Libre): מאיר סדן (Meir Sadan), בשיתוף עם גוגל פונטס.
            </p>
            <p className="opacity-60 text-sm">
              רישיון: מופץ תחת רישיון הקוד הפתוח SIL Open Font License 1.1.
            </p>
            <p className="opacity-100 text-sm font-bold pt-4 text-[#3aa2db]">
              פיתוח Davidka: יהונתן שפירא @ ShapiDesign.com (2026).
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
