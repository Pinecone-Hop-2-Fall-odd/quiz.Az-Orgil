import mongoose from 'mongoose';
const questionSchema = new mongoose.Schema({
    question: String,
    answers: [
        {
            answer: {type : String , required : true},
            isCorrect: Boolean
        },
    ]
})

export const QuestionModel = mongoose.model("question", questionSchema)