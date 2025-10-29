import React from 'react';
import { type Message as MessageType } from '../types';

interface MessageProps {
    message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const { text, isUser, isHtml } = message;

    const botAvatar = (
        <div className="avatar bot w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 bg-gradient-to-br from-[#4682B4] to-[#5F9EA0] text-white shadow-md">
            🧳
        </div>
    );

    const userAvatar = (
        <div className="avatar user w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 bg-gradient-to-br from-[#87CEEB] to-[#5F9EA0] text-white shadow-md">
            👤
        </div>
    );

    const messageContent = (
        <div className={`message-content max-w-[70%] p-4 rounded-2xl leading-relaxed ${isUser ? 'bg-gradient-to-br from-[#87CEEB] to-[#5F9EA0] text-white shadow-md' : 'bg-white text-gray-800 shadow-sm border border-slate-200'}`}>
            {isHtml ? (
                <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: text }} />
            ) : (
                <p>{text}</p>
            )}
        </div>
    );

    return (
        <div className={`message flex items-start gap-3 mb-5 animate-fade-in ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
            {isUser ? userAvatar : botAvatar}
            {messageContent}
        </div>
    );
};

export default Message;
