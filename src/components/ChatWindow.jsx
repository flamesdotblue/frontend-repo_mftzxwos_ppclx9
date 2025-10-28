import React, { useEffect, useRef } from 'react';
import { MessageSquare, User } from 'lucide-react';

const ChatBubble = ({ role, text }) => {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}> 
      <div className={`flex items-start gap-3 max-w-[80%]`}>
        {!isUser && (
          <div className="mt-1 p-2 rounded-md border border-stone-300 bg-stone-100 shadow-sm">
            <MessageSquare className="h-4 w-4 text-stone-700" />
          </div>
        )}
        <div
          className={
            isUser
              ? 'bg-stone-800 text-stone-50 border border-stone-700'
              : 'bg-stone-50 text-stone-800 border border-stone-300'
          }
          style={{
            backgroundImage: !isUser
              ? 'repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 22px)'
              : 'none',
          }}
          classNamePrefix
        >
          <div
            className={`rounded-md px-4 py-3 shadow-sm ${
              isUser ? '' : ''
            }`}
          >
            <p className="whitespace-pre-wrap leading-relaxed">{text}</p>
          </div>
        </div>
        {isUser && (
          <div className="mt-1 p-2 rounded-md border border-stone-700 bg-stone-800 shadow-sm">
            <User className="h-4 w-4 text-stone-100" />
          </div>
        )}
      </div>
    </div>
  );
};

const ChatWindow = ({ messages }) => {
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 h-[60vh] md:h-[66vh] rounded-lg border border-stone-300 bg-stone-50/60 overflow-hidden shadow-inner">
      <div className="h-full overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full grid place-items-center text-center text-stone-500">
            <div>
              <p className="font-medium text-stone-700">Start a conversation</p>
              <p className="text-sm">Ask about strategy, customers, pricing, or focus.</p>
            </div>
          </div>
        ) : (
          messages.map((m, i) => <ChatBubble key={i} role={m.role} text={m.text} />)
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default ChatWindow;
