// // src/server/controllers/apiEmpleados.js
// const usuarioModel = require('../models/usuario');

// const crearUsuario_vc_ga = async (req, res) => {
//   try {
//     const resultado = await usuarioModel.crearUsuario_vc_ga(req.body);
//     console.log('🟢 Usuario creado correctamente');
//     res.status(201).json({ mensaje: 'Usuario creado', id: resultado.insertId });
//   } catch (error) {
//     console.error('🔴 Error en crearUsuario_vc_ga:', error);
//     res.status(500).json({ error: 'Error al crear usuario' });
//   }
// };

// const obtenerUsuarios_vc_ga = async (_req, res) => {
//   try {
//     const usuarios = await usuarioModel.obtenerUsuarios_vc_ga();
//     res.json(usuarios);
//   } catch (error) {
//     console.error('🔴 Error en obtenerUsuarios_vc_ga:', error);
//     res.status(500).json({ error: 'Error al obtener usuarios' });
//   }
// };

// const obtenerUsuarioPorId_vc_ga = async (req, res) => {
//   try {
//     const usuario = await usuarioModel.obtenerUsuarioPorId_vc_ga(req.params.id);
//     res.json(usuario || {});
//   } catch (error) {
//     console.error('🔴 Error en obtenerUsuarioPorId_vc_ga:', error);
//     res.status(500).json({ error: 'Error al obtener usuario' });
//   }
// };

// const actualizarUsuario_vc_ga = async (req, res) => {
//   try {
//     await usuarioModel.actualizarUsuario_vc_ga(req.params.id, req.body);
//     res.json({ mensaje: 'Usuario actualizado' });
//   } catch (error) {
//     console.error('🔴 Error en actualizarUsuario_vc_ga:', error);
//     res.status(500).json({ error: 'Error al actualizar usuario' });
//   }
// };

// const eliminarUsuario_vc_ga = async (req, res) => {
//   try {
//     await usuarioModel.eliminarUsuario_vc_ga(req.params.id);
//     res.json({ mensaje: 'Usuario eliminado' });
//   } catch (error) {
//     console.error('🔴 Error en eliminarUsuario_vc_ga:', error);
//     res.status(500).json({ error: 'Error al eliminar usuario' });
//   }
// };

// module.exports = {
//   crearUsuario_vc_ga,
//   obtenerUsuarios_vc_ga,
//   obtenerUsuarioPorId_vc_ga,
//   actualizarUsuario_vc_ga,
//   eliminarUsuario_vc_ga
// };
