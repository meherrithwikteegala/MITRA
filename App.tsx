import React, { useState, useRef, useEffect, useCallback } from 'react';
// FIX: Renamed the imported `Message` type to `MessageType` to resolve the name collision
// with the `Message` component, which caused duplicate identifier errors.
import { type Message as MessageType, type ConversationContext, type Stage } from './types';
import { INITIAL_BOT_MESSAGE_HTML, DESTINATIONS, BACKGROUND_SVG_URL } from './constants';
import { getMitraResponse } from './services/geminiService';
import Header from './components/Header';
import Message from './components/Message';
import QuickActions from './components/QuickActions';
import TypingIndicator from './components/TypingIndicator';
import InputContainer from './components/InputContainer';

const App: React.FC = () => {
    // FIX: Used the renamed `MessageType` for the state definition.
    const [messages, setMessages] = useState<MessageType[]>([
        { id: 'initial-bot', text: INITIAL_BOT_MESSAGE_HTML, isUser: false, isHtml: true },
    ]);
    const [userInput, setUserInput] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [showQuickActions, setShowQuickActions] = useState<boolean>(true);

    const [context, setContext] = useState<ConversationContext>({
        stage: null,
        destination: null,
        budget: null,
        companions: [],
        travelStyle: null,
        dates: null,
        duration: null,
        history: [],
    });

    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const addMessage = (text: string, isUser: boolean, isHtml: boolean = false) => {
        // FIX: Used the renamed `MessageType` for the new message object.
        const newMessage: MessageType = { id: Date.now().toString(), text, isUser, isHtml };
        setMessages(prev => [...prev, newMessage]);

        const role = isUser ? 'user' : 'model';
        setContext(prev => ({
            ...prev,
            history: [...prev.history, { role, parts: [{ text: text }] }]
        }));
    };
    
    const handleSendMessage = useCallback(async () => {
        if (!userInput.trim()) return;

        const userMessageText = userInput;
        addMessage(userMessageText, true);
        setUserInput('');
        setIsTyping(true);
        if (showQuickActions) setShowQuickActions(false);

        const botResponse = await getMitraResponse(userMessageText, context, DESTINATIONS);
        setIsTyping(false);
        addMessage(botResponse, false, true);
    }, [userInput, context, showQuickActions]);

    const handleSelectStage = useCallback(async (stage: Stage) => {
        const stageText = `I am in the ${stage} stage.`;
        addMessage(stageText, true);
        setShowQuickActions(false);
        setIsTyping(true);

        const newContext = { ...context, stage };
        setContext(newContext);

        const botResponse = await getMitraResponse(stageText, newContext, DESTINATIONS);
        setIsTyping(false);
        addMessage(botResponse, false, true);
    }, [context]);

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(70, 130, 180, 0.3), rgba(135, 206, 235, 0.2)), url('${BACKGROUND_SVG_URL}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    };

    return (
        <div style={backgroundStyle} className="min-h-screen w-full flex justify-center items-center p-0 sm:p-5 font-sans">
            <style>
                {`
                    .prose .destination-card {
                        background: rgba(255, 255, 255, 0.9);
                        border: 1px solid rgba(70, 130, 180, 0.2);
                        border-radius: 10px;
                        padding: 15px;
                        margin-top: 10px;
                        box-shadow: 0 2px 10px rgba(70, 130, 180, 0.15);
                    }
                    .prose .destination-card h4 {
                        color: #4682B4; /* steelblue */
                        margin-bottom: 8px;
                        margin-top: 0;
                    }
                    .prose .destination-card .price {
                        color: #28a745; /* green */
                        font-weight: bold;
                        margin: 5px 0;
                    }
                    .prose .destination-card .details {
                        font-size: 0.9em;
                        color: #666;
                        line-height: 1.5;
                    }
                    @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                    .animate-fade-in { animation: fade-in 0.3s ease-in; }
                    @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1.0); } }
                    .animate-bounce { animation: bounce 1.4s infinite ease-in-out both; }
                `}
            </style>
            <div className="max-w-3xl w-full bg-white/95 backdrop-blur-lg rounded-none sm:rounded-2xl shadow-2xl shadow-[#4682B4]/30 overflow-hidden flex flex-col h-screen sm:h-[90vh] sm:max-h-[800px] border border-white/30">
                <Header />
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-5 bg-gradient-to-b from-white/80 to-[#B0E0E6]/80">
                    {messages.map((msg, index) => (
                       <div key={msg.id}>
                         <Message message={msg} />
                         {index === 0 && showQuickActions && <QuickActions onSelectStage={handleSelectStage} />}
                       </div>
                    ))}
                    {isTyping && <TypingIndicator />}
                </div>
                <InputContainer 
                    userInput={userInput}
                    setUserInput={setUserInput}
                    onSendMessage={handleSendMessage}
                    isSending={isTyping}
                />
            </div>
        </div>
    );
};

export default App;
