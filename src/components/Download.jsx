import React from 'react'

import useScrollReveal from '../hooks/useScrollReveal';

const Download = () => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="download" ref={ref} className={`py-24 bg-[#fdfbf7] border-t border-gray-200 reveal ${isVisible ? 'active' : ''}`}>
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="flex justify-center">
                    <a href="/Davidka 2026.zip" download className="group relative inline-flex items-center justify-center px-10 py-6 text-xl font-bold text-white transition-all duration-300 bg-[#2c2c2c] font-davidka rounded-xl hover:bg-[#3aa2db] hover:scale-105 shadow-xl hover:shadow-2xl">
                        <span className="mr-2">הורד את כל המשקלים (ZIP)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Download
