const express = require("express");
const cors = require("cors");
const { getCompliment, getFortune, getWishes, createWish, resetWishes } = require('./controller')

const app = express();

app.use(express.json());
app.use(cors());

const SERVER_PORT = 4000;

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/wishes", getWishes)
app.post("/api/wishes", createWish)
app.delete('/api/wishes', resetWishes)

app.listen(SERVER_PORT,() => 
console.log(`Server running on server port ${SERVER_PORT}`)
);
