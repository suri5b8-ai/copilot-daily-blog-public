import { weeks } from '../data/topics'

export default function FilterBar({ filters, setFilters }) {
  const update = (key, value) => setFilters(f => ({ ...f, [key]: value }))

  return (
    <div className="filter-bar">
      <div className="filter-bar-inner">
        <div className="filter-search">
          <span className="search-icon">⌕</span>
          <input
            type="search"
            placeholder="Search topics, tags, or keywords..."
            value={filters.search}
            onChange={e => update('search', e.target.value)}
            className="search-input"
            aria-label="Search topics"
          />
        </div>

        <div className="filter-groups">
          <div className="filter-group">
            <label className="filter-label">Audience</label>
            <div className="filter-pills">
              {['all', 'developer', 'tester'].map(a => (
                <button
                  key={a}
                  className={`filter-pill ${filters.audience === a ? 'active audience-' + a : ''}`}
                  onClick={() => update('audience', a)}
                >
                  {a === 'all' ? 'Everyone' : a.charAt(0).toUpperCase() + a.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Difficulty</label>
            <div className="filter-pills">
              {['all', 'Beginner', 'Intermediate', 'Advanced'].map(d => (
                <button
                  key={d}
                  className={`filter-pill ${filters.difficulty === d ? 'active difficulty-' + d : ''}`}
                  onClick={() => update('difficulty', d)}
                >
                  {d === 'all' ? 'All Levels' : d}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Week</label>
            <div className="filter-pills">
              <button
                className={`filter-pill ${filters.week === 'all' ? 'active' : ''}`}
                onClick={() => update('week', 'all')}
              >
                All Weeks
              </button>
              {weeks.map(w => (
                <button
                  key={w.week}
                  className={`filter-pill ${filters.week === w.week ? 'active' : ''}`}
                  onClick={() => update('week', w.week)}
                  title={w.title}
                  style={filters.week === w.week ? { backgroundColor: w.color, color: '#fff', borderColor: w.color } : {}}
                >
                  Week {w.week}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
