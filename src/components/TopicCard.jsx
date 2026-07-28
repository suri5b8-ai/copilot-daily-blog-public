import { audienceLabels, difficultyColors } from '../data/topics'

export default function TopicCard({ topic, isCompleted, weekColor, onSelect, onToggleComplete }) {
  const audience = audienceLabels[topic.audience]
  const difficulty = difficultyColors[topic.difficulty]

  return (
    <article
      className={`topic-card ${isCompleted ? 'completed' : ''}`}
      style={{ '--week-color': weekColor }}
    >
      <div className="card-top">
        <span className="card-day" style={{ color: weekColor }}>Day {topic.day}</span>
        <button
          className={`complete-btn ${isCompleted ? 'is-done' : ''}`}
          onClick={e => { e.stopPropagation(); onToggleComplete() }}
          aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
          title={isCompleted ? 'Mark incomplete' : 'Mark complete'}
        >
          {isCompleted ? '✓' : '○'}
        </button>
      </div>

      <button className="card-body" onClick={onSelect} aria-label={`Open ${topic.title}`}>
        <h3 className="card-title">{topic.title}</h3>
        <p className="card-subtitle">{topic.subtitle}</p>
        <p className="card-summary">{topic.summary}</p>
      </button>

      <div className="card-footer">
        <span
          className="tag-audience"
          style={{ color: audience.color, backgroundColor: audience.bg }}
        >
          {audience.label}
        </span>
        <span
          className="tag-difficulty"
          style={{ color: difficulty.color, backgroundColor: difficulty.bg }}
        >
          {topic.difficulty}
        </span>
        <span className="tag-duration">{topic.duration}</span>
        {topic.codeExample && <span className="tag-code">Code</span>}
      </div>
    </article>
  )
}
