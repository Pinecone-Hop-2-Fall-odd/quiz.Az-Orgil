import mongoose from 'mongoose';
const questionSchema = new mongoose.Schema({
    question: String,
    ans1: String,
    ans2: String,
    ans3: String,
    ans4: String
})

export const QuestionModel = mongoose.model("question", questionSchema)