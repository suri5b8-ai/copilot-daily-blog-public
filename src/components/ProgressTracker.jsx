export default function ProgressTracker({ completed, total, percent }) {
  return (
    <div className="progress-tracker">
      <div className="progress-info">
        <span className="progress-label">Your Progress</span>
        <span className="progress-count">{completed} / {total} topics completed</span>
        <span className="progress-percent">{percent}%</span>
      </div>
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {percent === 100 && (
        <p className="progress-complete">
          🎉 Congratulations! You have completed the full 42-day GitHub Copilot curriculum!
        </p>
      )}
    </div>
  )
}
