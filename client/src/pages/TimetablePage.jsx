import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Timetable } from '../components/Timetable'
import { onUploadClient } from '../tools/onUploadClient'
import { useFetching } from '../hooks/useFetching'
import { useTimetableChecking } from '../hooks/useTimetableChecking'
import { useScheduleChecking } from '../hooks/useScheduleChecking'
import { deleteFile } from '../tools/deleteFile'

export const TimetablePage = () => {
  const [timetableIsUploaded, setTimetableIsUploaded] = useState(false)
  const [scheduleIsUploaded, setScheduleIsUploaded] = useState()
  const [timetable, setTimetable] = useState()
  const [schedule, setSchedule] = useState()
  const [fileDoesNotFit, setFileDoesNotFit] = useState(false)
  const [event, setEvent] = useState()
  
  useFetching(timetableIsUploaded, setTimetableIsUploaded, setTimetable, scheduleIsUploaded, setScheduleIsUploaded, setSchedule)
  useTimetableChecking(timetable, event, setFileDoesNotFit, fileDoesNotFit, setTimetable, setTimetableIsUploaded)
  useScheduleChecking(schedule, event, setFileDoesNotFit, fileDoesNotFit, setSchedule, setScheduleIsUploaded)

  const onTimetableUpload = async e => {
    onUploadClient(e, setTimetable)  
    setEvent(e)
  }

  const onScheduleUpload = async e => {
    await onUploadClient(e, setSchedule)
    setEvent(e)
  }
  
  return (
    <div>
      <h1>Timetable</h1>
      {/* Checking if timetable is uploaded, then showing it or asking to upload */}
      {
        timetableIsUploaded
        ? 
        <div>
          <button onClick={() => deleteFile("timetable", setTimetableIsUploaded, setTimetable)} className="delete" id="timetable">Delete timetable</button>
          {
            scheduleIsUploaded
            ? <button onClick={() => deleteFile("schedule", setScheduleIsUploaded, setSchedule)} className="delete" id="schedule">Delete schedule</button>
            : 
            <div className='file-choosing'>
              <p>You can also download your time schedule. <Link to="/schedule-example">Example</Link></p>
              <input onChange={e => onScheduleUpload(e)} type="file" id="file" accept='.json'/>
            </div>
          }
          
          <Timetable timetable={timetable} schedule={schedule}/>
        </div>
        : 
          <div className='file-choosing'>
            <p>Download your file in json extention. <Link to="/timetable-example">Example</Link></p>
            <input onChange={e => onTimetableUpload(e)} type="file" id="file" accept='.json'/>
          </div>
      }
    </div>
  )
}
