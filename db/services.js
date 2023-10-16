const { getConnection } = require("../index.js");
const { DB_DATABASE } = process.env;

const getContenidoPrueba = async (id) => {
  let connection;

  try {
    connection = await getConnection();

    await connection.query(`USE ${DB_DATABASE}`);

    console.log("id");
    console.log(id);

    const [result] = await connection.query(
      `SELECT * FROM contenidoprueba WHERE idcontenidoprueba = ?`,
      [id]
    );

    if (!result.length) {
      console.error(`No hay ningún servicio con ID ${id}`);
    }

    return result[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = { getContenidoPrueba };
