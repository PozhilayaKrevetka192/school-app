import React from 'react'
import { Link } from 'react-router-dom'

export const ScheduleExample = () => {
  return (
    <div>
        <h4>List of objects, every single means lesson with "start" and "end" keys</h4>
        <p><Link to="/">Return to timetable</Link></p>
        {`[
            {"start": "9-20", "end": "10-00"},
            {"start": "10-10", "end": "10-50"},
            {"start": "11-00", "end": "11-40"},
            {"start": "12-00", "end": "12-40"},
            {"start": "12-50", "end": "13-30"},
            {"start": "13-40", "end": "14-20"}
        ]`}
    </div>
  )
}
