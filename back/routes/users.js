const express = require("express");
const router = express.Router();
const fs = require("fs")

router.post("/user", (request, response) => {
    const body = request.body;
    fs.readFile("./data/user.json", (readError, data) => {
        if (readError) {
            response.json({
                status: "read file error",
            });
        }

        let savedData = JSON.parse(data);
        const newUser = {
            id: Date.now().toString(),
            username: body.username,
            pass: body.pass,
        };

        savedData.push(newUser);


        fs.writeFile(
            "./data/user.json",
            JSON.stringify(savedData),
            (writeError) => {
                if (writeError) {
                    response.json({
                        status: "error",
                    });
                } else {
                    response.json({
                        status: "success",
                        data: savedData,
                    });
                }
            }
        );


    });
});
router.get("/user", (request, response) => {
    fs.readFile("./data/user.json", "utf-8",
        (readError, data) => {
            let savedData = JSON.parse(data);
            if (readError) {
                response.json({
                    status: "read file error",
                });
            }
            response.json({
                status: "success",
                data: savedData,
            });
        });
});

router.post("/login", (request, response) => {
    const { username, password } = request.body

    fs.readFile("./data/user.json", "utf-8",
        (readError, data) => {
            let savedData = JSON.parse(data);
            if (readError) {
                response.json({
                    status: "read file error",
                });
            }
            const oneUser = savedData.filter((userData) => userData.username === username)
            if (oneUser.length === 0) {
                response.status(403).json({ message: "User not found" });
            } else {
                if (oneUser[0].pass === password) {
                    response.status(200).json({ user: oneUser[0] });
                }
                else {
                    response.status(403).json({ message: "Password not right" });
                }
            }
        });
});
module.exports = router