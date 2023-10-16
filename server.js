const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.APP_PORT || 3000;

app.use(bodyParser.json());

const { getContenidoPruebaController } = require("./controllers/prueba");

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.get("/prueba", (req, res) => {
  res.send("¡Hola, mundo desde prueba!");
});

//Obtener un servicio por ID
app.get("/prueba/:id", getContenidoPruebaController);

app.listen(port, () => {
  console.log(`La aplicación está en funcionamiento en el puerto ${port}`);
});
