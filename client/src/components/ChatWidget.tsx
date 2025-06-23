import React, { useState } from 'react';

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I am an AI assistant trained directly on the content of the website some Wikipedia pages. How can I help you?' },
  ]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await fetch('http://localhost:5678/webhook/4091fa09-fb9a-4039-9411-7104d213f601/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      // Assume n8n returns { reply: '...' }
      setMessages((prev) => [...prev, { from: 'bot', text: data.reply || 'No response from bot.' }]);
    } catch (error) {
      setMessages((prev) => [...prev, { from: 'bot', text: 'Sorry, there was an error connecting to the bot.' }]);
    }
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed z-50 bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-3xl focus:outline-none transition-all duration-300"
        aria-label="Open chat"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed z-50 bottom-24 right-6 w-80 max-w-full bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-blue-600 text-white px-4 py-3 font-semibold flex justify-between items-center">
            <span>Chat with us</span>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white text-lg">×</button>
          </div>
          <div className="flex-1 p-4 space-y-2 overflow-y-auto max-h-72 text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.from === 'user' ? 'text-right' : 'text-left'}>
                <span className={msg.from === 'user' ? 'inline-block bg-blue-100 text-blue-800 rounded-lg px-3 py-1 my-1' : 'inline-block bg-gray-100 text-gray-800 rounded-lg px-3 py-1 my-1'}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex border-t border-gray-200">
            <input
              type="text"
              className="flex-1 px-3 py-2 text-gray-800 focus:outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button type="submit" className="px-4 text-blue-600 font-bold hover:text-blue-800">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
