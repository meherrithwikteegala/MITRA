import React from 'react';

interface InputContainerProps {
    userInput: string;
    setUserInput: (value: string) => void;
    onSendMessage: () => void;
    isSending: boolean;
}

const InputContainer: React.FC<InputContainerProps> = ({ userInput, setUserInput, onSendMessage, isSending }) => {
    
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && !isSending) {
            onSendMessage();
        }
    };

    return (
        <div className="flex gap-3 p-4 bg-white/90 backdrop-blur-sm border-t border-slate-200">
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                disabled={isSending}
                className="flex-1 p-3 border-2 border-slate-300 rounded-full text-base outline-none transition-all duration-300 bg-white/80 focus:border-[#4682B4] focus:ring-2 focus:ring-[#B0E0E6] disabled:opacity-50"
            />
            <button
                onClick={onSendMessage}
                disabled={isSending || !userInput}
                className="px-8 bg-gradient-to-br from-[#4682B4] to-[#5F9EA0] text-white border-none rounded-full cursor-pointer text-base font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 disabled:bg-[#B0E0E6] disabled:cursor-not-allowed disabled:scale-100"
            >
                Send
            </button>
        </div>
    );
};

export default InputContainer;
