import React, { useEffect } from 'react';

const ChatWidget: React.FC = () => {
  useEffect(() => {
    // Inject n8n chat widget stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);

    // Inject n8n chat widget script
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'http://localhost:5678/webhook/4091fa09-fb9a-4039-9411-7104d213f601/chat',
        initialMessages: ['Hello! I am an AI assistant trained directly on the content of the website, some Wikipedia pages and some scikit-learn documentation. How can I help you?'],
        mode: 'window',
        i18n: {
          en: {
            title: 'Hi there! 👋',
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your question..',
          },
        },
        target: '#n8n-chat'
      });
    `;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWidget;
