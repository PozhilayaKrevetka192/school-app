import Router from 'express'
import fileController from './fileController.js'

const router = new Router()

router.get("/timetable", fileController.readTimetable)
router.get("/schedule", fileController.readSchedule)

router.post("/timetable", fileController.saveTimetable)
router.post("/schedule", fileController.saveSchedule)

router.delete("/timetable", fileController.deleteTimetable)
router.delete("/schedule", fileController.deleteSchedule)


export default router