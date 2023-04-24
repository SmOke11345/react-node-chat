const {default: axios} = require("axios");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const {username} = req.body;

    try {
        const response = await axios.put("https://api.chatengine.io/users/", {
            username: username,
            secret: username,
            first_name: username,
        }, {
            headers: {
                "private-key": "78861380-6934-4356-8744-fb0384c0fc6f",
            },
        });
        return res.status(response.status).json(response.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});

app.listen(3001);