import { useState, useMemo } from 'react'
import { topics, weeks } from './data/topics'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import WeekSection from './components/WeekSection'
import TopicDetail from './components/TopicDetail'
import ProgressTracker from './components/ProgressTracker'
import SubscribeModal from './components/SubscribeModal'
import './App.css'

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [showSubscribe, setShowSubscribe] = useState(false)
  const [filters, setFilters] = useState({
    audience: 'all',
    difficulty: 'all',
    week: 'all',
    search: '',
    completed: new Set(),
  })

  const toggleCompleted = (id) => {
    setFilters(prev => {
      const next = new Set(prev.completed)
      next.has(id) ? next.delete(id) : next.add(id)
      return { ...prev, completed: next }
    })
  }

  const filteredTopics = useMemo(() => {
    return topics.filter(t => {
      if (filters.audience !== 'all') {
        if (filters.audience === 'developer' && t.audience === 'tester') return false
        if (filters.audience === 'tester' && t.audience === 'developer') return false
      }
      if (filters.difficulty !== 'all' && t.difficulty !== filters.difficulty) return false
      if (filters.week !== 'all' && t.week !== Number(filters.week)) return false
      if (filters.search) {
        const q = filters.search.toLowerCase()
        const matches =
          t.title.toLowerCase().includes(q) ||
          t.subtitle.toLowerCase().includes(q) ||
          t.summary.toLowerCase().includes(q) ||
          t.tags.some(tag => tag.toLowerCase().includes(q))
        if (!matches) return false
      }
      return true
    })
  }, [filters])

  const visibleWeeks = useMemo(() => {
    if (filters.week !== 'all') return weeks.filter(w => w.week === Number(filters.week))
    return weeks
  }, [filters.week])

  const completionPercent = Math.round((filters.completed.size / topics.length) * 100)

  return (
    <div className="app">
      <Header onSubscribe={() => setShowSubscribe(true)} />
      <ProgressTracker
        completed={filters.completed.size}
        total={topics.length}
        percent={completionPercent}
      />
      <FilterBar filters={filters} setFilters={setFilters} />

      <main className="main">
        {filteredTopics.length === 0 ? (
          <div className="no-results">
            <span className="no-results-icon">&#128269;</span>
            <p>No topics match your current filters.</p>
            <button onClick={() => setFilters(f => ({ ...f, search: '', audience: 'all', difficulty: 'all', week: 'all' }))}>
              Clear Filters
            </button>
          </div>
        ) : (
          visibleWeeks.map(week => {
            const weekTopics = filteredTopics.filter(t => t.week === week.week)
            if (weekTopics.length === 0) return null
            return (
              <WeekSection
                key={week.week}
                week={week}
                topics={weekTopics}
                completed={filters.completed}
                onSelectTopic={setSelectedTopic}
                onToggleComplete={toggleCompleted}
              />
            )
          })
        )}
      </main>

      {selectedTopic && (
        <TopicDetail
          topic={selectedTopic}
          isCompleted={filters.completed.has(selectedTopic.id)}
          onToggleComplete={() => toggleCompleted(selectedTopic.id)}
          onClose={() => setSelectedTopic(null)}
        />
      )}

      {showSubscribe && (
        <SubscribeModal onClose={() => setShowSubscribe(false)} />
      )}
    </div>
  )
}
