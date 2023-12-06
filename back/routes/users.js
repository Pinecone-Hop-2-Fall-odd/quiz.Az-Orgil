import express from "express";
import { UserModel } from "../models/user-model.js";
export const router = express.Router();

router.post("/user", async (request, response) => {
    const body = request.body
    await UserModel.create({
        username: body.username,
        pass: body.pass,
    })
    response.status(200).json({ "message": "success" })
});

router.get("/user", async (request, response) => {
    const data = await UserModel.find({})
    response.status(200).json({ data })
});

router.post("/login", async (request, response) => {
    const body = request.body
    const oneUser = await UserModel.findOne({ username: body.username })
    if (!oneUser) {
        response.status(403).json({ message: "User not found" });
    } else {
        if (oneUser.pass === Number(body.password)) {
            response.status(200).json({ user: oneUser });
        }
        else {
            response.status(403).json({ message: "Password not right" });
        }
    }
});