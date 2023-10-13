const express = require("express");
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 5001;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/beer", (req, res) => res.send("HOLA"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
