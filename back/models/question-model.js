import mongoose from 'mongoose';
const questionSchema = new mongoose.Schema({
    question: Number,
    ans1: Number,
    ans2: Number,
    ans3: Number,
    ans4: Number
})

export const QuestionModel = mongoose.model("question", questionSchema)