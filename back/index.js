import express from 'express'
import cors from 'cors'
const PORT = 8080
const app = express()
import mongoose  from 'mongoose'
import { router } from './routes/users.js'
import { add } from './routes/add.js'

app.use(cors())
app.use(express.json())
app.use(router)
app.use(add)

const connectDb = async () => {
    await mongoose.connect('mongodb+srv://Az-Orgil:20080505@cluster0.ttoqpbz.mongodb.net/')
    console.log('database connected');
    
}

connectDb();

app.listen(PORT, () => {
    console.log(`Server is running on
http://localhost:${PORT}`)
})