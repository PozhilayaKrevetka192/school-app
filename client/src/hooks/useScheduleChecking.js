import { useEffect } from "react"
import { onUploadServer } from "../tools/onUploadServer"

export const useScheduleChecking = (schedule, event, setFileDoesNotFit, fileDoesNotFit, setSchedule, setScheduleIsUploaded) => {
    useEffect(() => {
        const condition = (
            schedule &&
            schedule[0].start &&
            schedule[0].end
        )

        const fileName = "schedule"
        const file = schedule
    
        onUploadServer(condition, event, file, fileName, setFileDoesNotFit, fileDoesNotFit, setSchedule, setScheduleIsUploaded)  
    }, [schedule])
}
