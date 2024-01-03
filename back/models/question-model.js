import mongoose from 'mongoose';
const questionSchema = new mongoose.Schema({
    question: String,
    answers: [
        {
            ans: String,
            isCorrect: Boolean
        },
    ]
})

export const QuestionModel = mongoose.model("question", questionSchema)