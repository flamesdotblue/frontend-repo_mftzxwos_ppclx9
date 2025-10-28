import React from 'react';
import { Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="mb-6 sm:mb-8">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md border border-stone-300 bg-stone-100 shadow-sm">
          <Rocket className="h-5 w-5 text-stone-700" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-800">
            Coach AI
          </h1>
          <p className="text-stone-600 text-sm sm:text-base">
            A grounded startup coach — raw, analog, and honest.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
