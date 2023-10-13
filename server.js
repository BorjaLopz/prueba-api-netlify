const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.get("/prueba", (req, res) => {
  res.send("Hola mundo desde prueba!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
