import { useEffect } from "react"
import { onUploadServer } from "../tools/onUploadServer"

export const useTimetableChecking = (timetable, event, setFileDoesNotFit, fileDoesNotFit, setTimetable, setTimetableIsUploaded) => {
    useEffect(() => {
        const condition = (
          timetable &&
          timetable[0].dayname && 
          timetable[0].lessons[0]?.name &&
          timetable[0].lessons[0]?.url 
        )
    
        const fileName = "timetable"
        const file = timetable
    
        onUploadServer(condition, event, file, fileName, setFileDoesNotFit, fileDoesNotFit, setTimetable, setTimetableIsUploaded)  
    }, [timetable])
}
