import { useEffect } from "react"
import axios from "axios"

export const useFetching = (timetableIsUploaded, setTimetableIsUploaded, setTimetable, scheduleIsUploaded, setScheduleIsUploaded, setSchedule) => {
    useEffect(() => {
        const get = async(isUploaded, setIsUploaded, setData, file) => {
          try {
            if (!isUploaded) {
              const response = await axios.get(`http://localhost:5000/api/${file}`)
              if (!response.data) 
                return 
              setData(JSON.parse(response.data))
              setIsUploaded(true)
            }
          } catch (e) {
            console.log(e)
          }
        }
        const getTimetable = async () => {
          get(timetableIsUploaded, setTimetableIsUploaded, setTimetable, "timetable")
        }
        const getSchedule = async () => {
          get(scheduleIsUploaded, setScheduleIsUploaded, setSchedule, "schedule")
        }
        try {
          getTimetable()
          getSchedule()
        } catch (e) {
          console.log(e)
        }
        
    }, [timetableIsUploaded, scheduleIsUploaded])
}
     