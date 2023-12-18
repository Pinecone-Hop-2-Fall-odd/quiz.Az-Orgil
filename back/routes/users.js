import express from "express";
import { UserModel } from "../models/user-model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const router = express.Router();
router.post("/user", async (request, response) => {
    const body = request.body
    const hashedpassword = await bcrypt.hash(body.pass || "", 10);
    await UserModel.create({
        username: body.username,
        pass: hashedpassword
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
        if (await bcrypt.compare(body.password, oneUser.pass)) {
            const token = jwt.sign(
                { user_id: oneUser.id, email:oneUser.username },
                "MySuperDuperPrivateKey",
                {
                    expiresIn: "2h",
                }
            );
            response.status(200).json({ token});
            return;
        }
        else {
            response.status(403).json({ message: "Password not right" });
            return;
        }
    }
});