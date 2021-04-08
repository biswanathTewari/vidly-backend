const express = require("express");
const app = express();
const mongoose = require("mongoose");
const genres = require("./routes/genres");

//& db connection
mongoose
	.connect("mongodb://localhost/vidly")
	.then(() => console.log("connected to the mongodb"))
	.catch((err) => console.error("unable to connect to the db", err));

app.use(express.json());
app.use("/api/genres", genres);

//& welcome
app.get("/", (req, res) => {
	res.send("welcome to vidly");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening to port 3000"));
