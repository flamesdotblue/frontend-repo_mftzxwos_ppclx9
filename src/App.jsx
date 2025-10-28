import React, { useState } from 'react';
import PaperContainer from './components/PaperContainer';
import Header from './components/Header';
import CoachTips from './components/CoachTips';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

// Lightweight on-device coaching logic (no network calls)
function craftCoachReply(input) {
  const prompt = input.toLowerCase();

  const trims = (s) => s.replace(/\s+/g, ' ').trim();

  const sections = [];
  // 1. Clarify
  sections.push(
    "Clarify: What problem are you solving, for whom, and why now? Be painfully specific."
  );

  // 2. Risk assumptions
  sections.push(
    "Risks: Identify your riskiest assumption (customer, channel, pricing, or retention). Design one small test to break it on purpose."
  );

  // 3. Suggested next step based on prompt
  let step = '';
  if (prompt.includes('pricing')) {
    step = 'Next: Talk to 5 ideal buyers, anchor high, then present 3 price tiers with clear trade‑offs. Capture reactions verbatim.';
  } else if (prompt.includes('customer') || prompt.includes('discovery')) {
    step = 'Next: Line up 5 interviews. Ask about their last attempt to solve the problem, budget, and decision triggers. No pitching.';
  } else if (prompt.includes('mvp') || prompt.includes('mlp') || prompt.includes('product')) {
    step = 'Next: Build the smallest workflow that completes the job once. Ship ugly, track completion rate and time-to-value.';
  } else if (prompt.includes('marketing') || prompt.includes('channel')) {
    step = 'Next: Pick one channel. Commit to a 2-week sprint with a single KPI (responses or demos booked). Kill the rest.';
  } else {
    step = 'Next: Define a 2-week goal with a single measurable outcome. Trim scope until it fits your current resources.';
  }
  sections.push(step);

  // 4. A simple framework
  sections.push(
    'Frame: Problem → Segment → Promise → Proof → Price → Path to 10 customers. Write one sentence for each.'
  );

  return trims(sections.join('\n\n'));
}

const App = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text:
        'Welcome. Keep it raw. Tell me your idea in one messy paragraph. I will cut it to the bone and give you the next move.',
    },
  ]);
  const [preset, setPreset] = useState('');

  const handleSend = (text) => {
    const userMsg = { role: 'user', text };
    const reply = { role: 'assistant', text: craftCoachReply(text) };
    setMessages((m) => [...m, userMsg, reply]);
  };

  return (
    <PaperContainer>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 min-w-0">
          <Header />
          <ChatWindow messages={messages} />
          <MessageInput
            onSend={handleSend}
            preset={preset}
            onClearPreset={() => setPreset('')}
          />
        </div>
        <CoachTips onSelectTip={(t) => setPreset(t)} />
      </div>
    </PaperContainer>
  );
};

export default App;
