import React from 'react'
import { Link } from 'react-router-dom'

export const TimetableExample = () => {
  return (
    <div>
        <h4>List of day objects, every single has "dayname" and "lessons" keys.</h4>
        <h4>In "lessons" you can write name of each subject in "name" field and url this way</h4>
        <p><Link to="/">Return to timetable</Link></p>
        {`
        [
            {"dayname": "Monday", "lessons": [
                {"name": "Math", "url": "https://math-url.com"},
                {"name": "Engilsh", "url": "https://eng-url.com"},
                {"name": "PE", "url": "https://pe-url.com"},
                {"name": "Music", "url": "https://music-url.com"}
            ]},
            {"dayname": "Tuesday", "lessons": [
                {"name": "Culture", "url": "https://culture-url.com"},
                {"name": "Astronomy", "url": "https://astr-url.com"},
                {"name": "Geometry", "url": "https://geom-url.com"}
            ]},
            {"dayname": "Wednesday", "lessons": [
                {"name": "PE", "url": "https://pe-url.com"},
                {"name": "Music", "url": "https://music-url.com"}
            ]},
            {"dayname": "Thursday", "lessons": [
                {"name": "Culture", "url": "https://culture-url.com"},
                {"name": "Engilsh", "url": "https://eng-url.com"},
                {"name": "Astronomy", "url": "https://astr-url.com"},
                {"name": "Economic", "url": "https://econ-url.com"},
                {"name": "Geometry", "url": "https://geom-url.com"}
            ]},
            {"dayname": "Friday", "lessons": [
                {"name": "Math", "url": "https://math-url.com"},
                {"name": "Engilsh", "url": "https://eng-url.com"},
                {"name": "PE", "url": "https://pe-url.com"},
            ]}
        ]`}
    </div>
  )
}
