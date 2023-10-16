const { getContenidoPrueba } = require("../db/services.js");

const getContenidoPruebaController = async (req, res, next) => {
  try {
    //Obtener el ID que le pasamos por params
    const { id } = req.params;

    //Obtener el servicio
    const service = await getContenidoPrueba(id);

    //Enviarlo a postman
    res.send({
      status: "ok",
      message: service,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { getContenidoPruebaController };
