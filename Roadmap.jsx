import React, { useState } from 'react'
import './index.css'
import { EPICS } from './data'

const monthsBetweenQuarters = (start, end) => {
  const qToIndex = (qStr) => {
    const [q, yearStr] = qStr.split(' ')
    const year = parseInt(yearStr, 10)
    const qNum = parseInt(q.replace('Q',''), 10)
    const month = (qNum - 1) * 3 + 1
    return year * 12 + month
  }
  const startIdx = qToIndex(start)
  const endIdx = qToIndex(end) + 2
  return endIdx - startIdx + 1
}

const humanize = (months) => {
  if (months >= 12) return `~${months} months (≈${Math.round((months/12)*10)/10} years)`
  return `~${months} months`
}

function EpicCard({ item }) {
  const [open, setOpen] = useState(false)
  const months = monthsBetweenQuarters(item.start, item.end)
  const approx = humanize(months)
  const color = item.type === 'CloudOps' ? 'var(--blue)' : 'var(--green)'
  const maxMonths = 24
  const widthPct = Math.min(100, Math.round((months / maxMonths) * 100))

  return (
    <div className="card">
      <div className="row">
        <div>
          <h2>{item.epic}</h2>
          <p className="meta"><strong>Start:</strong> {item.start} &nbsp; | &nbsp; <strong>End:</strong> {item.end}</p>
          <p className="meta"><strong>Approx. time:</strong> {approx}</p>
        </div>
        <button className="btn" onClick={() => setOpen(!open)}>{open ? 'Hide details' : 'View details'}</button>
      </div>
      <div className="bar-rail">
        <div className="bar" style={{ width: widthPct + '%', background: color }}></div>
      </div>
      {open && (
        <div>
          <hr className="hr" />
          {item.stories.map((s, idx) => (
            <div key={idx}>
              <div className="story">Story: {s.title}</div>
              <ul>
                {s.tasks.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Roadmap() {
  return (
    <div className="container">
      <h1>CloudOps + IT Ops Roadmap (2025–2026)</h1>
      <p className="subtle">Click an epic to view Stories & Tasks. Default stays high-level to avoid clutter.</p>
      <div className="legend">
        <span className="dot" style={{ background: 'var(--blue)' }}></span><span>CloudOps</span>
        <span className="dot" style={{ background: 'var(--green)' }}></span><span>IT Ops</span>
      </div>
      {EPICS.map((e, i) => <EpicCard key={i} item={e} />)}
    </div>
  )
}
