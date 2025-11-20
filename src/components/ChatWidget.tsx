'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Terminal, ArrowRight, Minimize2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
    role: 'user' | 'model';
    text: string;
    isError?: boolean;
}

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: "SYSTEM INITIALIZED. WAITING FOR QUERY..." }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputText.trim() || isLoading) return;

        const userMsg: Message = { role: 'user', text: inputText };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsLoading(true);

        try {
            const responseText = await sendMessageToGemini(inputText);
            setMessages(prev => [...prev, { role: 'model', text: responseText.toUpperCase() }]);
        } catch {
            setMessages(prev => [...prev, { role: 'model', text: "ERROR: CONNECTION FAILURE", isError: true }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-mono">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[90vw] md:w-[400px] h-[500px] bg-black border border-brand-accent shadow-[0_0_30px_rgba(163,230,53,0.1)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
                    {/* Header */}
                    <div className="p-3 border-b border-brand-accent bg-brand-accent/10 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-brand-accent">
                            <Terminal className="w-4 h-4" />
                            <h3 className="text-xs font-bold uppercase tracking-widest">Leo.AI_Terminal</h3>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-brand-accent hover:text-white transition-colors"
                        >
                            <Minimize2 className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-brand-accent scrollbar-track-black">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                            >
                                <span className="text-[10px] text-zinc-600 mb-1 uppercase">
                                    {msg.role === 'user' ? '> USER' : '> SYSTEM'}
                                </span>
                                <div
                                    className={`max-w-[90%] p-3 text-sm ${msg.role === 'user'
                                        ? 'bg-zinc-900 text-white border border-zinc-700'
                                        : 'bg-brand-accent/5 text-brand-accent border border-brand-accent/30'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="text-brand-accent text-xs animate-pulse">
                                &gt; PROCESSING DATA...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-black border-t border-brand-accent">
                        <div className="flex items-center gap-2">
                            <span className="text-brand-accent">{'>'}</span>
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="ENTER COMMAND..."
                                className="flex-1 bg-transparent text-sm text-white focus:outline-none placeholder-zinc-700"
                                autoFocus
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !inputText.trim()}
                                className="text-brand-accent hover:text-white disabled:opacity-30 transition-colors"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center justify-center w-14 h-14 bg-black border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-black transition-all duration-300"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageSquare className="w-6 h-6" />
                )}
            </button>
        </div>
    );
};

export default ChatWidget;
