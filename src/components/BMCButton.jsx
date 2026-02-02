import React from 'react';

const BMCButton = ({ className = "" }) => {
    return (
        <a
            href="https://www.buymeacoffee.com/shapi"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-4 py-2 bg-[#5F7FFF] text-white rounded-lg font-['Poppins',sans-serif] font-medium transition-transform hover:scale-105 shadow-md hover:shadow-lg ${className}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <span className="mr-2 text-xl">📖</span>
            <span>Support My Work</span>
        </a>
    );
};

export default BMCButton;
