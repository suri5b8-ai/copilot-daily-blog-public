export default function Header({ onSubscribe }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <div className="header-logo">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="10" fill="#1a1a2e"/>
              <path d="M10 26L18 10L26 26" stroke="#58a6ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="18" cy="20" r="2.5" fill="#79c0ff"/>
            </svg>
          </div>
          <div>
            <h1 className="header-title">GitHub Copilot Daily</h1>
            <p className="header-subtitle">42-Day Learning Journey — From Zero to Expert</p>
          </div>
        </div>
        <div className="header-badges">
          <span className="badge badge-dev">For Developers</span>
          <span className="badge badge-test">For Testers</span>
          <button className="badge badge-subscribe" onClick={onSubscribe}>
            ✉ Subscribe
          </button>
          <a
            href="https://docs.github.com/en/copilot"
            target="_blank"
            rel="noopener noreferrer"
            className="badge badge-docs"
          >
            Official Docs ↗
          </a>
        </div>
      </div>
    </header>
  )
}
