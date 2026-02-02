import React from 'react';

const BMCButton = ({ className = "" }) => {
    return (
        <a
            href="https://www.buymeacoffee.com/shapi"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-6 py-2 bg-[#3aa2db] text-white rounded-full text-sm font-medium transition-transform hover:scale-105 shadow-md hover:shadow-lg ${className}`}
        >
            <span className="mr-2 text-lg">📖</span>
            <span>Support My Work</span>
        </a>
    );
};

export default BMCButton;
