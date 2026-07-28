import TopicCard from './TopicCard'

export default function WeekSection({ week, topics, completed, onSelectTopic, onToggleComplete }) {
  const weekCompleted = topics.filter(t => completed.has(t.id)).length

  return (
    <section className="week-section">
      <div className="week-header" style={{ borderLeftColor: week.color }}>
        <div className="week-header-left">
          <span className="week-label" style={{ color: week.color, backgroundColor: week.color + '18' }}>
            Week {week.week} · Days {week.days}
          </span>
          <h2 className="week-title">{week.title}</h2>
          <p className="week-desc">{week.description}</p>
        </div>
        <div className="week-progress-badge">
          <span style={{ color: week.color }}>{weekCompleted}</span>
          <span className="week-progress-sep">/</span>
          <span>{topics.length}</span>
          <span className="week-progress-done">done</span>
        </div>
      </div>

      <div className="topic-grid">
        {topics.map(topic => (
          <TopicCard
            key={topic.id}
            topic={topic}
            isCompleted={completed.has(topic.id)}
            weekColor={week.color}
            onSelect={() => onSelectTopic(topic)}
            onToggleComplete={() => onToggleComplete(topic.id)}
          />
        ))}
      </div>
    </section>
  )
}
