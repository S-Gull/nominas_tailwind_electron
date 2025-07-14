const db = require('../config/database');

// Crea un nuevo registro salarial para un usuario
const crearSalarioHistorico_vc_ga = async ({ id_usuario_vc_ga, sueldo_vc_ga, fecha_inicio_vc_ga }) => {
  const sql = `INSERT INTO td_salario_historico_vc_ga (id_usuario_vc_ga, sueldo_vc_ga, fecha_inicio_vc_ga) VALUES (?, ?, ?)`;
  const valores = [id_usuario_vc_ga, sueldo_vc_ga, fecha_inicio_vc_ga];
  console.log('🟢 Nuevo salario histórico:', valores);
  const [resultado] = await db.execute(sql, valores);
  return resultado;
};

// Obtiene el historial salarial de un usuario
const obtenerSalariosHistoricosPorUsuario_vc_ga = async (idUsuario) => {
  const [filas] = await db.execute(`SELECT * FROM td_salario_historico_vc_ga WHERE id_usuario_vc_ga = ? ORDER BY fecha_inicio_vc_ga DESC`, [idUsuario]);
  return filas;
};

// Obtiene el salario actual (último) de un usuario
const obtenerSalarioActualPorUsuario_vc_ga = async (idUsuario) => {
  const [filas] = await db.execute(`SELECT * FROM td_salario_historico_vc_ga WHERE id_usuario_vc_ga = ? ORDER BY fecha_inicio_vc_ga DESC LIMIT 1`, [idUsuario]);
  return filas[0];
};

module.exports = {
  crearSalarioHistorico_vc_ga,
  obtenerSalariosHistoricosPorUsuario_vc_ga,
  obtenerSalarioActualPorUsuario_vc_ga
};
