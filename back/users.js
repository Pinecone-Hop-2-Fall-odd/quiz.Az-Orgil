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
        ); console.log(savedData);


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
module.exports = router