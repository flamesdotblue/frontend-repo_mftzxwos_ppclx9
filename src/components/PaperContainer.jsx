import React from 'react';

const PaperContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 flex items-center justify-center py-8 px-4">
      <div
        className="w-full max-w-5xl rounded-xl border border-stone-300 shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-gradient-to-b from-stone-50 to-stone-100"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 24px)",
        }}
      >
        {/* Faux deckled edge */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none rounded-xl" aria-hidden>
            <div className="absolute inset-0 rounded-xl shadow-inner" />
          </div>
          <div className="p-4 sm:p-6 md:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PaperContainer;
