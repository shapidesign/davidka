import React from 'react';

const BMCButton = ({ className = "" }) => {
    return (
        <a
            href="https://www.buymeacoffee.com/shapi"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-6 py-2 bg-[#3aa2db] text-white rounded-full text-sm font-bold font-david transition-transform hover:scale-105 shadow-md hover:shadow-lg ${className}`}
            onClick={() => {
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'click_support', {
                        event_category: 'engagement',
                        event_label: 'support_my_work'
                    });
                }
            }}
        >
            <span>לתמיכה קטנה</span>
        </a>
    );
};

export default BMCButton;
