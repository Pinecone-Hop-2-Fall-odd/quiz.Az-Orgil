import express from "express";
import { UserModel } from "../models/user-model.js";
import { QuestionModel } from "../models/question-model.js";

export const add = express.Router();

add.post("/question", async (request, response) => {
    const body = request.body
    console.log(body)
    try{
    await QuestionModel.create(body)
}
    catch (err) {
        res.status(400).json({ message: err });
    }
    response.status(200).json({ "message": "success" })
});
add.get("/question", async (request, response) => {
    const data = await QuestionModel.find({})
    response.status(200).json({ data })
});