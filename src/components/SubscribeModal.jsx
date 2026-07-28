import { useState } from 'react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export default function SubscribeModal({ onClose }) {
  const [email, setEmail]     = useState('')
  const [state, setState]     = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setState('loading')
    try {
      const res  = await fetch(`${API}/api/subscribe`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json()

      if (res.ok) {
        setState('success')
        setMessage(data.message)
      } else {
        setState('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setState('error')
      setMessage('Could not reach the server. Make sure the email server is running on port 3001.')
    }
  }

  // Close on Escape
  const handleKeyDown = (e) => { if (e.key === 'Escape') onClose() }

  return (
    <div className="modal-overlay" onClick={onClose} onKeyDown={handleKeyDown} role="dialog" aria-modal="true" aria-label="Subscribe to daily emails">
      <div className="sub-modal" onClick={e => e.stopPropagation()}>

        {state === 'success' ? (
          <div className="sub-success">
            <span className="sub-success-icon">🎉</span>
            <h2>You're in!</h2>
            <p>{message}</p>
            <p className="sub-success-note">
              Check your inbox for a welcome email with today's topic. Daily emails arrive at <strong>8:00 AM</strong>.
            </p>
            <button className="sub-btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="sub-header">
              <div className="sub-icon">✉</div>
              <div>
                <h2 className="sub-title">Subscribe to Daily Emails</h2>
                <p className="sub-desc">
                  Get one GitHub Copilot topic in your inbox every morning — 42 days from basics to expert.
                </p>
              </div>
              <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
            </div>

            <div className="sub-features">
              <div className="sub-feat"><span>📅</span> <span>One topic per day, 8:00 AM</span></div>
              <div className="sub-feat"><span>👩‍💻</span> <span>Covers both developers &amp; testers</span></div>
              <div className="sub-feat"><span>🔗</span> <span>Official docs links in every email</span></div>
              <div className="sub-feat"><span>🔕</span> <span>One-click unsubscribe anytime</span></div>
            </div>

            <form onSubmit={handleSubmit} className="sub-form" noValidate>
              <label htmlFor="sub-email" className="sub-label">Your email address</label>
              <div className="sub-input-row">
                <input
                  id="sub-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={state === 'loading'}
                  className="sub-input"
                  required
                  maxLength={254}
                />
                <button
                  type="submit"
                  disabled={state === 'loading' || !email.trim()}
                  className="sub-btn-primary"
                >
                  {state === 'loading' ? 'Subscribing…' : 'Subscribe →'}
                </button>
              </div>
              {state === 'error' && (
                <p className="sub-error" role="alert">{message}</p>
              )}
            </form>

            <p className="sub-footnote">
              Starting today — <strong>Day 1 of 42</strong>. No spam. Unsubscribe at any time.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
