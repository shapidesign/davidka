import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-10">
      <div className="relative mb-8 w-full max-w-4xl mx-auto">
        <img
          src="/hero-title.svg"
          alt="דוידקה"
          className="w-full h-auto"
        />
      </div>

      <p className="mb-12 text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-davidka text-gray-700 leading-relaxed">
        הגופן שהופך את המסמך שלכם לארוך יותר בלי שהמרצים ישימו לב
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
