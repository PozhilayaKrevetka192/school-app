import * as uuid from "uuid"
import * as path from "path"
import fs from "fs"

class FileService {
    saveFile(file, fileName) {
        try {
            const filePath = path.resolve("static", fileName)
            file.mv(filePath)
        } catch (e) {
            return e
        }
    }
    async readFileAsync(fileName) {
        return new Promise((resolve, reject) => fs.readFile(path.resolve("static", fileName), {encoding: 'utf-8'}, (e, data) => {
            resolve(data)
            if (e)
                return e
        }))
    }
    delete(fileName) {
        fs.unlink(path.resolve("static", fileName), e => {
            if (e)
                return e
        })
    }
}

export default new FileService()
