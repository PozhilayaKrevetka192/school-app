import React from 'react'

export const SubjectsList = (props) => {
  return (
    <div>
      <ol>
        {props.subjects.map(subject => {
            return (
              <li>{subject.name} - {subject.url}</li>
            )})
        }
      </ol>
    </div>
  )
}
