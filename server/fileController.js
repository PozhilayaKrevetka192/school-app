import fileService from "./fileService.js"

const save = (req, res, fileName) => {
    const file = req.files?.file
    const e = fileService.saveFile(file, fileName)
    if (e)
        return res.status(500).json(e.message)

    res.status(200).json()    
}

const read = (req, res, fileName) => {
    try {
        if (!fileName)
            res.status(400).json({message: "No file"}) 
        fileService.readFileAsync(fileName)
        .then(data => res.json(data))
    } catch (e) {
        res.status(500).json(e)
    }
}

class fileController {
    saveTimetable(req, res) {
        const e = save(req, res, "timetable.json")
        if (e)
            return res.status(500).json(e.message)
        res.status(200).json()
    }
    saveSchedule(req, res) {
        const e = save(req, res, "schedule.json")
        if (e)
            return res.status(500).json(e.message)

        res.status(200).json()
    }
    
    async readTimetable(req, res, file) {
        try {
            read(req, res, "timetable.json")
        } catch (e) {
            res.json(e)
        }
    }
    async readSchedule(req, res) {
        try {
            read(req, res, "schedule.json")
        } catch (e) {
            res.json(e)
        }
    }
    deleteTimetable(req, res) {
        const e = fileService.delete("timetable.json", res)
        if (e)
            return res.status(500).json(e.message)
        res.status(200)
    }
    deleteSchedule(req, res) {
        const e = fileService.delete("schedule.json", res)
        if (e)
            return res.status(500).json(e.message)
        res.status(200)
    }
}

export default new fileController()
