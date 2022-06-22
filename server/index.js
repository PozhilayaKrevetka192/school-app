import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload"
import router from "./router.js"

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use("/api", router)

app.listen(PORT, () => console.log("Server started on port " + PORT))
