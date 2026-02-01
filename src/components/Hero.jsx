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

      <div className="mb-12 w-full max-w-2xl mx-auto">
        <img
          src="/hero-subheader.svg"
          alt="הסבר על הפונט"
          className="w-full h-auto"
        />
      </div>

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
