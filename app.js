// app.js
const express = require("express");
require("dotenv").config();
const pageRouter = require("./routes/pageRouter");

const app = express();
const port = 3000;

app.use(express.static("static"));
app.use("/media", express.static("media"));

app.use("/", pageRouter);

app.use((req, res) => res.status(404).send("Page not found"));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));