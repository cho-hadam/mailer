const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const mailRouter = require("./routes/mail");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use("/api", mailRouter);

app.get("/", (req, res) => res.send("mailer"));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
