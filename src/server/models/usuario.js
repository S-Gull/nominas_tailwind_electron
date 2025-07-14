// src/server/models/usuarioModel_vc_ga.js
const db = require('../config/database');
// Crea un nuevo usuario (empleado)
const crearUsuario_vc_ga = async (datos) => {
  const sql = `INSERT INTO td_usuarios_vc_ga (nombre_completo_vc_ga, cedula_vc_ga, rif_vc_ga, correo_vc_ga) VALUES (?, ?, ?, ?)`;
  const valores = [datos.nombre_completo_vc_ga, datos.cedula_vc_ga, datos.rif_vc_ga, datos.correo_vc_ga];
  console.log('🟢 Insertando nuevo usuario:', valores);
  const [resultado] = await db.execute(sql, valores);
  return resultado;
};

// Obtiene todos los usuarios
const obtenerUsuarios_vc_ga = async () => {
  const [filas] = await db.execute(`SELECT * FROM td_usuarios_vc_ga`);
  return filas;
};

// Obtiene un usuario por ID
const obtenerUsuarioPorId_vc_ga = async (id) => {
  const [filas] = await db.execute(`SELECT * FROM td_usuarios_vc_ga WHERE id_usuario_vc_ga = ?`, [id]);
  return filas[0];
};

// Actualiza un usuario existente
const actualizarUsuario_vc_ga = async (id, datos) => {
  const sql = `UPDATE td_usuarios_vc_ga SET nombre_completo_vc_ga = ?, cedula_vc_ga = ?, rif_vc_ga = ?, correo_vc_ga = ? WHERE id_usuario_vc_ga = ?`;
  const valores = [datos.nombre_completo_vc_ga, datos.cedula_vc_ga, datos.rif_vc_ga, datos.correo_vc_ga, id];
  console.log('🟡 Actualizando usuario:', valores);
  const [resultado] = await db.execute(sql, valores);
  return resultado;
};

// Elimina un usuario por ID
const eliminarUsuario_vc_ga = async (id) => {
  console.log('🔴 Eliminando usuario ID:', id);
  const [resultado] = await db.execute(`DELETE FROM td_usuarios_vc_ga WHERE id_usuario_vc_ga = ?`, [id]);
  return resultado;
};

module.exports = {
  crearUsuario_vc_ga,
  obtenerUsuarios_vc_ga,
  obtenerUsuarioPorId_vc_ga,
  actualizarUsuario_vc_ga,
  eliminarUsuario_vc_ga
};