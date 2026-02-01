import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-10">
      <div className="relative mb-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-david absolute top-0 left-0 w-full text-[#3bb2db] select-none tracking-tight leading-[0.9] opacity-50 blur-[0.5px]">
          דוידקה
        </h1>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-davidka relative z-10 text-[#2c2c2c] mix-blend-multiply tracking-tight leading-[0.9]">
          דוידקה
        </h1>
      </div>

      <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-12 font-david font-light text-gray-600">
        הפונט שהופך את המאמר של 8 עמודים ליצירת מופת של 10 עמודים.
        <br />
        <span className="italic text-gray-400 text-lg mt-2 block">מבלי לכתוב מילה אחת נוספת.</span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#download" className="px-8 py-4 bg-[#2c2c2c] text-white rounded-lg text-lg font-medium hover:bg-black transition-all hover:scale-105 shadow-lg">
          הורד את דוידקה
        </a>
        <a href="#comparison" className="px-8 py-4 border-2 border-[#2c2c2c] text-[#2c2c2c] rounded-lg text-lg font-medium hover:bg-[#2c2c2c] hover:text-white transition-all">
          ראה את ההבדל
        </a>
      </div>
    </section>
  )
}

export default Hero
