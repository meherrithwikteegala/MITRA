import React from 'react';

const TypingIndicator: React.FC = () => {
    return (
        <div className="message bot flex items-center gap-3 mb-5 animate-fade-in">
            <div className="avatar bot w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 bg-gradient-to-br from-[#4682B4] to-[#5F9EA0] text-white shadow-md">
                🧳
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-center space-x-1">
                    <span className="w-2 h-2 bg-[#4682B4] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-[#4682B4] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-[#4682B4] rounded-full animate-bounce"></span>
                </div>
            </div>
        </div>
    );
};

export default TypingIndicator;
