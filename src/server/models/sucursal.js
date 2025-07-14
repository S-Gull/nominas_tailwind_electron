// src/server/models/sucursalModel_vc_ga.js
const db = require('../config/database');


const crearSucursal_vc_ga = async ({ nombre_sucursal_vc_ga }) => {
  const sql = `INSERT INTO td_sucursal_vc_ga (nombre_sucursal_vc_ga) VALUES (?)`;
  const [resultado] = await db.execute(sql, [nombre_sucursal_vc_ga]);
  console.log('🟢 Sucursal creada');
  return resultado;
};

const obtenerSucursales_vc_ga = async () => {
  const [filas] = await db.execute(`SELECT * FROM td_sucursal_vc_ga`);
  return filas;
};

const obtenerSucursalPorId_vc_ga = async (id) => {
  const [filas] = await db.execute(`SELECT * FROM td_sucursal_vc_ga WHERE id_sucursal_vc_ga = ?`, [id]);
  return filas[0];
};

module.exports = {
  crearSucursal_vc_ga,
  obtenerSucursales_vc_ga,
  obtenerSucursalPorId_vc_ga
};
