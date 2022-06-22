import axios from "axios"

export const deleteFile = (fileName, set, setFile) => {
    axios.delete(`http://localhost:5000/api/${fileName}`)
    set(false)
    setFile()
}