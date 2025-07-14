const db = require('../config/database');

const crearDepartamento_vc_ga = async ({ nombre_departamento_vc_ga }) => {
  const sql = `INSERT INTO td_departamento_vc_ga (nombre_departamento_vc_ga) VALUES (?)`;
  const [resultado] = await db.execute(sql, [nombre_departamento_vc_ga]);
  console.log('🟢 Departamento creado');
  return resultado;
};

const obtenerDepartamentos_vc_ga = async () => {
  const [filas] = await db.execute(`SELECT * FROM td_departamento_vc_ga`);
  return filas;
};

const obtenerDepartamentoPorId_vc_ga = async (id) => {
  const [filas] = await db.execute(`SELECT * FROM td_departamento_vc_ga WHERE id_departamento_vc_ga = ?`, [id]);
  return filas[0];
};

module.exports = {
  crearDepartamento_vc_ga,
  obtenerDepartamentos_vc_ga,
  obtenerDepartamentoPorId_vc_ga
};
