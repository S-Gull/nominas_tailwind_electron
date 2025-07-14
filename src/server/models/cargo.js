const db = require('../config/database');

const crearCargo_vc_ga = async ({ nombre_cargo_vc_ga }) => {
  const sql = `INSERT INTO td_cargos_vc_ga (nombre_cargo_vc_ga) VALUES (?)`;
  const [resultado] = await db.execute(sql, [nombre_cargo_vc_ga]);
  console.log('🟢 Cargo creado');
  return resultado;
};

const obtenerCargos_vc_ga = async () => {
  const [filas] = await db.execute(`SELECT * FROM td_cargos_vc_ga`);
  return filas;
};

const obtenerCargoPorId_vc_ga = async (id) => {
  const [filas] = await db.execute(`SELECT * FROM td_cargos_vc_ga WHERE id_cargo_vc_ga = ?`, [id]);
  return filas[0];
};

module.exports = {
  crearCargo_vc_ga,
  obtenerCargos_vc_ga,
  obtenerCargoPorId_vc_ga
};
