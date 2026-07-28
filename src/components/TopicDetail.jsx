import { useEffect } from 'react'
import { audienceLabels, difficultyColors, weeks } from '../data/topics'

export default function TopicDetail({ topic, isCompleted, onToggleComplete, onClose }) {
  const audience = audienceLabels[topic.audience]
  const difficulty = difficultyColors[topic.difficulty]
  const week = weeks.find(w => w.week === topic.week)

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  // Format content: convert **bold**, `code`, and bullet points
  const formatContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('# ')) return <h3 key={i} className="content-h3">{line.slice(2)}</h3>
      if (line.startsWith('## ')) return <h4 key={i} className="content-h4">{line.slice(3)}</h4>
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="content-bold">{line.slice(2, -2)}</p>
      }
      if (line.startsWith('• ') || line.startsWith('- ')) {
        return <li key={i} className="content-li">{formatInline(line.slice(2))}</li>
      }
      if (line.match(/^\|.+\|$/)) {
        if (line.match(/^\|[-| ]+\|$/)) return null
        const cells = line.split('|').filter(Boolean).map(c => c.trim())
        const isHeader = line === line
        return (
          <tr key={i}>
            {cells.map((c, j) => <td key={j} className="tbl-cell">{formatInline(c)}</td>)}
          </tr>
        )
      }
      if (line.startsWith('```')) return null
      if (line === '') return <br key={i} />
      return <p key={i} className="content-p">{formatInline(line)}</p>
    })
  }

  const formatInline = (text) => {
    const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/)
    return parts.map((p, i) => {
      if (p.startsWith('`') && p.endsWith('`')) return <code key={i} className="inline-code">{p.slice(1, -1)}</code>
      if (p.startsWith('**') && p.endsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>
      return p
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={topic.title}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header" style={{ borderTopColor: week?.color }}>
          <div className="modal-header-top">
            <div className="modal-day-badge" style={{ backgroundColor: week?.color + '20', color: week?.color }}>
              Week {topic.week} · Day {topic.day}
            </div>
            <div className="modal-header-actions">
              <button
                className={`modal-complete-btn ${isCompleted ? 'is-done' : ''}`}
                onClick={onToggleComplete}
              >
                {isCompleted ? '✓ Completed' : '○ Mark Complete'}
              </button>
              <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
            </div>
          </div>
          <h2 className="modal-title">{topic.title}</h2>
          <p className="modal-subtitle">{topic.subtitle}</p>
          <div className="modal-tags">
            <span className="tag-audience" style={{ color: audience.color, backgroundColor: audience.bg }}>
              {audience.label}
            </span>
            <span className="tag-difficulty" style={{ color: difficulty.color, backgroundColor: difficulty.bg }}>
              {topic.difficulty}
            </span>
            <span className="tag-duration">{topic.duration}</span>
            <span className="tag-category">{topic.category}</span>
          </div>
        </div>

        <div className="modal-body">
          {/* Summary */}
          <div className="modal-section">
            <div className="modal-summary">{topic.summary}</div>
          </div>

          {/* Content */}
          <div className="modal-section">
            <h3 className="modal-section-title">📖 Overview</h3>
            <div className="modal-content">
              {formatContent(topic.content)}
            </div>
          </div>

          {/* Key Points */}
          <div className="modal-section">
            <h3 className="modal-section-title">✅ Key Takeaways</h3>
            <ul className="key-points">
              {topic.keyPoints.map((point, i) => (
                <li key={i} className="key-point-item">
                  <span className="key-point-bullet" style={{ color: week?.color }}>▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Code Example */}
          {topic.codeExample && (
            <div className="modal-section">
              <h3 className="modal-section-title">💻 Code Example</h3>
              <pre className="code-block"><code>{topic.codeExample}</code></pre>
            </div>
          )}

          {/* Tags */}
          <div className="modal-section">
            <h3 className="modal-section-title">🏷️ Tags</h3>
            <div className="tag-list">
              {topic.tags.map(tag => (
                <span key={tag} className="tag-item">#{tag}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="modal-section">
            <h3 className="modal-section-title">🔗 Resources & Links</h3>
            <ul className="links-list">
              {topic.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                    style={{ '--link-color': week?.color }}
                  >
                    <span className="resource-link-icon">↗</span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
