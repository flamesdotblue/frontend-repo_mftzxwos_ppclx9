import React from 'react';
import { Lightbulb } from 'lucide-react';

const TIPS = [
  "Help me refine my value proposition in one sentence.",
  "List the riskiest assumptions in my business model.",
  "Turn this idea into a 3-step customer discovery plan.",
  "Challenge my pricing with 2 alternative strategies.",
  "Draft a minimum lovable product for early adopters.",
];

const CoachTips = ({ onSelectTip }) => {
  return (
    <aside className="hidden lg:block w-80 shrink-0">
      <div className="sticky top-6 space-y-3">
        <div className="flex items-center gap-2 text-stone-700">
          <Lightbulb className="h-5 w-5" />
          <span className="font-medium">Prompts</span>
        </div>
        <ul className="space-y-2">
          {TIPS.map((tip, idx) => (
            <li key={idx}>
              <button
                onClick={() => onSelectTip(tip)}
                className="w-full text-left text-sm p-3 rounded-md border border-stone-300 bg-stone-50/80 hover:bg-stone-100 transition shadow-sm"
              >
                {tip}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CoachTips;
