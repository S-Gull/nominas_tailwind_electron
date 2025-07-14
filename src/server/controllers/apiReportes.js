// // src/server/controllers/apiReportes.js
// const salarioModel = require('../models/salarioHistorico');

// // Crear un nuevo registro salarial
// const crearSalarioHistorico_vc_ga = async (req, res) => {
//   try {
//     const resultado = await salarioModel.crearSalarioHistorico_vc_ga(req.body);
//     res.status(201).json({ mensaje: 'Salario registrado', id: resultado.insertId });
//   } catch (error) {
//     console.error('🔴 Error en crearSalarioHistorico_vc_ga:', error);
//     res.status(500).json({ error: 'Error al registrar salario' });
//   }
// };

// // Obtener historial salarial completo
// const obtenerHistorialSalarial_vc_ga = async (req, res) => {
//   try {
//     const historial = await salarioModel.obtenerSalariosHistoricosPorUsuario_vc_ga(req.params.id);
//     res.json(historial);
//   } catch (error) {
//     console.error('🔴 Error en obtenerHistorialSalarial_vc_ga:', error);
//     res.status(500).json({ error: 'Error al obtener historial salarial' });
//   }
// };

// // Obtener salario actual (último registro)
// const obtenerSalarioActual_vc_ga = async (req, res) => {
//   try {
//     const salario = await salarioModel.obtenerSalarioActualPorUsuario_vc_ga(req.params.id);
//     res.json(salario || {});
//   } catch (error) {
//     console.error('🔴 Error en obtenerSalarioActual_vc_ga:', error);
//     res.status(500).json({ error: 'Error al obtener salario actual' });
//   }
// };

// module.exports = {
//   crearSalarioHistorico_vc_ga,
//   obtenerHistorialSalarial_vc_ga,
//   obtenerSalarioActual_vc_ga
// };
