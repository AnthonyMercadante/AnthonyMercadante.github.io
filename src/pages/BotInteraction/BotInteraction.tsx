import { FormEvent, useEffect, useRef, useState } from 'react';
import PageShell from '../../components/PageShell';

type Message = { text: string; sender: 'user' | 'bot' };
const examples = [
  'Can you explain how down payments work in real estate transactions?',
  'What should first-time homebuyers know before purchasing a property?',
];

export default function BotInteraction() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [lastQuestion, setLastQuestion] = useState('');
  const request = useRef<AbortController | null>(null);
  const conversation = useRef<HTMLDivElement>(null);
  useEffect(() => () => request.current?.abort(), []);
  useEffect(() => {
    if (conversation.current) conversation.current.scrollTop = conversation.current.scrollHeight;
  }, [messages, loading, error]);
  const send = async (question: string, retry = false) => {
    const value = question.trim();
    if (!value || request.current) return;
    const controller = new AbortController();
    request.current = controller;
    setLoading(true);
    setError(false);
    setLastQuestion(value);
    setInput('');
    if (!retry) setMessages((previous) => [...previous, { text: value, sender: 'user' }]);
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch('https://realestateassistantapi.azurewebsites.net/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: value }),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error('Request failed');
      const data = await response.json();
      if (typeof data.response !== 'string' || !data.response.trim())
        throw new Error('Empty response');
      setMessages((previous) => [...previous, { text: data.response, sender: 'bot' }]);
    } catch {
      setError(true);
    } finally {
      window.clearTimeout(timeout);
      request.current = null;
      setLoading(false);
    }
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send(input);
  };
  return (
    <PageShell
      title="Real Estate Bot"
      eyebrow="Interactive project / Demo"
      description="A conversational assistant built for questions about the Toronto and Ontario real estate markets."
      parent={{ to: '/RealEstateBot', label: 'About this project' }}
      className="chat-page"
    >
      <div className="chat-panel">
        <div className="chat-panel-header">
          <span>Conversation</span>
          <span className="mono">Project demo</span>
        </div>
        <div
          className="chat-conversation"
          ref={conversation}
          role="log"
          aria-label="Conversation with the Real Estate Bot"
          aria-live="polite"
          aria-relevant="additions text"
        >
          {messages.length === 0 && (
            <div className="chat-empty">
              <span aria-hidden="true">↳</span>
              <h2>Start with a question.</h2>
              <p>Ask about the market, the process, or a term you’ve come across.</p>
            </div>
          )}
          {messages.map((message, index) => (
            <div key={index} className={`chat-message chat-${message.sender}`}>
              <span>{message.sender === 'user' ? 'You' : 'Real Estate Bot'}</span>
              <p>{message.text}</p>
            </div>
          ))}
          {loading && (
            <p className="chat-status" role="status">
              Waiting for the bot…
            </p>
          )}
        </div>
        {error && (
          <div className="chat-error" role="alert">
            <p>The demo couldn’t respond. The service may be unavailable.</p>
            <button
              className="text-link"
              onClick={() => send(lastQuestion, true)}
              disabled={loading}
            >
              Try again <span aria-hidden="true">↗</span>
            </button>
          </div>
        )}
        <form className="chat-form" onSubmit={submit}>
          <label className="sr-only" htmlFor="chat-question">
            Your question
          </label>
          <input
            id="chat-question"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask a question…"
            autoComplete="off"
            disabled={loading}
          />
          <button type="submit" disabled={loading || !input.trim()} aria-label="Send question">
            Send <span aria-hidden="true">↑</span>
          </button>
        </form>
      </div>
      <section className="chat-examples" aria-labelledby="example-heading">
        <h2 id="example-heading" className="eyebrow">
          A place to start
        </h2>
        {examples.map((question) => (
          <button key={question} onClick={() => send(question)} disabled={loading}>
            {question}
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </section>
    </PageShell>
  );
}
