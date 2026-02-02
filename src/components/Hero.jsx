import React from 'react'

import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
  const [isDavidka, setIsDavidka] = React.useState(true);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-10 reveal ${isVisible ? 'active' : ''}`}>
      <div className="relative mb-8 w-full max-w-4xl mx-auto flex justify-center group cursor-pointer" onClick={() => setIsDavidka(!isDavidka)}>
        <div className="grid grid-cols-1 grid-rows-1 items-center justify-items-center w-full min-h-[150px]">
          {/* Davidka Active (Davidka over David) */}
          <img
            src="/Davidka-over-David.svg"
            alt="דוידקה"
            className={`col-start-1 row-start-1 w-full h-auto max-w-[300px] md:max-w-full transition-opacity duration-500 ease-in-out ${isDavidka ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          />
          {/* David Active (David over Davidka) */}
          <img
            src="/David-over-Davidka.svg"
            alt="דוד"
            className={`col-start-1 row-start-1 w-full h-auto max-w-[300px] md:max-w-full transition-opacity duration-500 ease-in-out ${!isDavidka ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          />
        </div>

        {/* Toggle Indicator */}
        <div className="absolute top-0 right-0 md:right-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </div>
      </div>

      <p className="mb-12 text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto font-davidka text-gray-700 leading-relaxed">
        הגופן שהופך את המסמך שלכם לארוך יותר בלי שהמרצים ישימו לב
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#download" className="px-8 py-4 bg-[#2c2c2c] text-white rounded-lg text-lg font-medium hover:bg-[#3aa2db] transition-all hover:scale-105 shadow-lg transform duration-300">
          הורד את דוידקה
        </a>
        <a href="#comparison" className="px-8 py-4 border-2 border-[#2c2c2c] text-[#2c2c2c] rounded-lg text-lg font-medium hover:bg-[#3aa2db] hover:border-[#3aa2db] hover:text-white transition-all transform duration-300">
          ראה את ההבדל
        </a>
      </div>
    </section>
  )
}

export default Hero
