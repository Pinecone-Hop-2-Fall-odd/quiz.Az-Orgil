const express = require('express')
const cors = require('cors')
const PORT = 8080
const app = express()
const userRouter = require("./users")

app.use(cors())
app.use(express.json())
app.use(userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on
http://localhost:${PORT}`)
})