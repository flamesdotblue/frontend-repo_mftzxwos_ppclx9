import React, { useState } from 'react';
import { Send } from 'lucide-react';

const MessageInput = ({ onSend, preset, onClearPreset }) => {
  const [value, setValue] = useState('');

  React.useEffect(() => {
    if (preset) setValue(preset);
  }, [preset]);

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue('');
    onClearPreset?.();
  };

  const onKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      submit();
    }
  };

  return (
    <div className="mt-4">
      <div className="rounded-lg border border-stone-300 bg-stone-50/70 shadow-sm">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          rows={3}
          placeholder="Type your question... (Press ⌘/Ctrl + Enter to send)"
          className="w-full bg-transparent p-3 sm:p-4 outline-none resize-none text-stone-800 placeholder-stone-400"
        />
        <div className="flex items-center justify-between border-t border-stone-200 p-2 sm:p-3">
          <p className="text-xs text-stone-500">
            Keep it crisp. I'll give you a grounded, practical answer.
          </p>
          <button
            onClick={submit}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-stone-800 text-stone-50 border border-stone-700 hover:bg-stone-700 transition"
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
