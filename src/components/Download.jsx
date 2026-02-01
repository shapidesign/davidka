import React from 'react'

const Download = () => {
    return (
        <section id="download" className="py-24 bg-[#2c2c2c] text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex justify-center items-center">
                <h1 className="text-[20vw] font-davidka text-white whitespace-nowrap">Davidka</h1>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="relative inline-block mb-8">
                    <h2 className="text-5xl md:text-6xl font-bold font-david absolute top-0 left-0 w-full text-[#3bb2db] opacity-30 blur-[1px]">תפסיק לכתוב. תתחיל לעצב.</h2>
                    <h2 className="text-5xl md:text-6xl font-bold font-davidka relative z-10 text-white mix-blend-lighten">תפסיק לכתוב. תתחיל לעצב.</h2>
                </div>

                <p className="text-xl md:text-2xl font-david text-gray-300 mb-12 max-w-2xl mx-auto">
                    הורד את דוידקה היום וסיים את התואר בזמן במינימום מאמץ.
                </p>

                <div className="flex justify-center">
                    <a href="/Davidka 2026.zip" download className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-black transition-all duration-200 bg-white font-davidka rounded-xl hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white ring-offset-gray-900 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                        <span className="mr-2">הורד את כל המשקלים (ZIP)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                </div>

                <p className="mt-8 text-sm text-gray-500 font-mono">
                    *לא תקף למסמכים משפטיים או מכתבי כופר. השתמשו באחריות.
                </p>
            </div>
        </section>
    )
}

export default Download
