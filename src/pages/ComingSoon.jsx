import { useState } from 'react';
import siteConfig from '../data/siteConfig.json';

export default function ComingSoon() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Google Apps Script URL - configure in .env as VITE_FORM_URL
    const formUrl = import.meta.env.VITE_FORM_URL;

    if (!formUrl) {
      // If no form URL configured, just show success (for development)
      console.log('Form submitted:', { name, email });
      setStatus('success');
      setName('');
      setEmail('');
      return;
    }

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus('success');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="coming-soon">
      <div className="coming-soon__content">
        <h1 className="coming-soon__logo">cow-boys collab</h1>
        <p className="coming-soon__message">coming soon</p>
        <p className="coming-soon__tagline">
          upcycled clothing, art prints, and other stuff
        </p>

        <form className="coming-soon__form" onSubmit={handleSubmit}>
          {status === 'success' ? (
            <p className="coming-soon__success">thanks! we'll keep you posted.</p>
          ) : (
            <>
              <label className="coming-soon__label" htmlFor="name">
                get notified when we launch:
              </label>
              <div className="coming-soon__input-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="your name"
                  required
                  disabled={status === 'submitting'}
                  className="coming-soon__input"
                />
              </div>
              <div className="coming-soon__input-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === 'submitting'}
                  className="coming-soon__input"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="coming-soon__button"
                >
                  {status === 'submitting' ? '...' : 'notify me'}
                </button>
              </div>
              {status === 'error' && (
                <p className="coming-soon__error">something went wrong. try again?</p>
              )}
            </>
          )}
        </form>

        {siteConfig.social.instagram && (
          <a
            href={`https://instagram.com/${siteConfig.social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="coming-soon__social"
          >
            @{siteConfig.social.instagram}
          </a>
        )}
      </div>
    </div>
  );
}
