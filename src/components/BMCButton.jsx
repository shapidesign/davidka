import React from 'react';

const BMCButton = ({ className = "" }) => {
    return (
        <a
            href="https://www.buymeacoffee.com/shapi"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-6 py-2 bg-[#3aa2db] text-white rounded-full text-sm font-bold transition-transform hover:scale-105 shadow-md hover:shadow-lg ${className}`}
            style={{ fontFamily: "'Times New Roman', serif" }}
        >
            <span>Support My Work</span>
        </a>
    );
};

export default BMCButton;
