import React from 'react'

export const Timetable = props => {
  try {
    return (
      <div>
      {
        props.timetable.map(day => {
          return (
            <div>
              <h2>{day.dayname}</h2>

              <div>
                <ol>
                  {day.lessons.map(lesson => {
                    return (
                      <li>
                        <a style={{margin: "5px"}} href={lesson.url}>{lesson.name}</a> 
                        {
                          props.schedule
                          ? (` (${props.schedule[day.lessons.indexOf(lesson)].start} - ${props.schedule[day.lessons.indexOf(lesson)].end})`)
                          : <></>
                        }
                      </li> 
                    )
                  })}
                </ol>
              </div>
            </div>
            )
        })
      }
      </div>
    )
  } catch (e) {
    console.log(e.message)
  }
}
