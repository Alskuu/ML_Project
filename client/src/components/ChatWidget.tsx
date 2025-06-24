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
        webhookUrl: 'https://n8n-y2rr.onrender.com/webhook/4091fa09-fb9a-4039-9411-7104d213f601/chat',
        target: '#n8n-chat',
        initialMessages: ['Hello! I am an AI assistant trained directly on the content of the website, some Wikipedia pages and some scikit-learn documentation. How can I help you?'],
        mode: 'window',
        i18n: {
          en: {
            title: 'Hi there! 👋',
            subtitle: 'As I chose to not pay, you can use me only when the owner of the website is online and has opened its onlin n8n instance. After 15 minutes of inactivity from the owner, the instance will be closed and you will not be able to use me anymore.',
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your question..',
          },
        },
      });
      chat.open();
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
