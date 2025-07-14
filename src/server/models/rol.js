const db = require('../config/database');

const crearRol_vc_ga = async ({ nombre_rol_vc_ga }) => {
  const sql = `INSERT INTO td_roles_vc_ga (nombre_rol_vc_ga) VALUES (?)`;
  const [resultado] = await db.execute(sql, [nombre_rol_vc_ga]);
  console.log('🟢 Rol creado');
  return resultado;
};

const obtenerRoles_vc_ga = async () => {
  const [filas] = await db.execute(`SELECT * FROM td_roles_vc_ga`);
  return filas;
};

const obtenerRolPorId_vc_ga = async (id) => {
  const [filas] = await db.execute(`SELECT * FROM td_roles_vc_ga WHERE id_rol_vc_ga = ?`, [id]);
  return filas[0];
};

module.exports = {
  crearRol_vc_ga,
  obtenerRoles_vc_ga,
  obtenerRolPorId_vc_ga
};
