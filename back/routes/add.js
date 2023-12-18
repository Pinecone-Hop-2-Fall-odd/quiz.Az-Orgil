import express from "express";
import { UserModel } from "../models/user-model.js";
import { QuestionModel } from "../models/question-model.js";
export const add = express.Router();
add.post("/question", async (request, response) => {
    const body = request.body
    console.log(body)
    await QuestionModel.create({
        question: body.question,
        ans1: body.ans1,
        ans2: body.ans2,
        ans3: body.ans3,
        ans4: body.ans4,
    })
    response.status(200).json({ "message": "success" })
});
add.get("/question", async (request, response) => {
    const data = await UserModel.find({})
    response.status(200).json({ data })
});