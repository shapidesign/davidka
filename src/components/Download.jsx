import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import BMCButton from './BMCButton';

const Download = () => {
    const { ref, isVisible } = useScrollReveal();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="download" ref={ref} className={`py-24 bg-[#fdfbf7] border-t border-gray-200 reveal ${isVisible ? 'active' : ''}`}>
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="flex justify-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group relative inline-flex items-center justify-center px-10 py-6 text-xl font-bold text-white transition-all duration-300 bg-[#2c2c2c] font-davidka rounded-xl hover:bg-[#3aa2db] hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                        <span className="mr-2">הורד את כל המשקלים (ZIP)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Download Modal - Fixed Position, High Z-Index */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsModalOpen(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all scale-100">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h3 className="text-2xl font-bold font-davidka mb-2 text-[#2c2c2c]">רגע לפני ההורדה...</h3>
                        <p className="text-gray-600 mb-8 font-david text-lg">
                            אם אהבתם את הפונט והוא עזר לכם, אשמח אם תשקלו לתמוך בעבודה שלי! ☕
                        </p>

                        <div className="flex flex-col gap-4">
                            <BMCButton className="w-full py-4 !text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1" />

                            <a
                                href="/Davidka 2026.zip"
                                download
                                className="inline-flex items-center justify-center px-6 py-3 bg-[#2c2c2c] text-white font-medium rounded-full hover:bg-[#4a4a4a] transition-colors shadow-md"
                                onClick={() => setIsModalOpen(false)} // Optional: close on click
                            >
                                לא תודה, רק להוריד
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Download
