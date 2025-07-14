// // src/server/controllers/apiEmpresa.js
// const sucursalModel = require('../models/sucursal');
// const departamentoModel = require('../models/departamento');
// const rolModel = require('../models/rol');
// const cargoModel = require('../models/cargo');

// // Sucursales
// const crearSucursal_vc_ga = async (req, res) => {
//   try {
//     const resultado = await sucursalModel.crearSucursal_vc_ga(req.body);
//     res.status(201).json({ mensaje: 'Sucursal creada', id: resultado.insertId });
//   } catch (error) {
//     console.error('🔴 Error en crearSucursal_vc_ga:', error);
//     res.status(500).json({ error: 'Error al crear sucursal' });
//   }
// };

// const obtenerSucursales_vc_ga = async (_req, res) => {
//   try {
//     const datos = await sucursalModel.obtenerSucursales_vc_ga();
//     res.json(datos);
//   } catch (error) {
//     console.error('🔴 Error en obtenerSucursales_vc_ga:', error);
//     res.status(500).json({ error: 'Error al obtener sucursales' });
//   }
// };

// // Departamentos
// const crearDepartamento_vc_ga = async (req, res) => {
//   try {
//     const resultado = await departamentoModel.crearDepartamento_vc_ga(req.body);
//     res.status(201).json({ mensaje: 'Departamento creado', id: resultado.insertId });
//   } catch (error) {
//     console.error('🔴 Error en crearDepartamento_vc_ga:', error);
//     res.status(500).json({ error: 'Error al crear departamento' });
//   }
// };

// const obtenerDepartamentos_vc_ga = async (_req, res) => {
//   try {
//     const datos = await departamentoModel.obtenerDepartamentos_vc_ga();
//     res.json(datos);
//   } catch (error) {
//     console.error('🔴 Error en obtenerDepartamentos_vc_ga:', error);
//     res.status(500).json({ error: 'Error al obtener departamentos' });
//   }
// };

// // Roles
// const crearRol_vc_ga = async (req, res) => {
//   try {
//     const resultado = await rolModel.crearRol_vc_ga(req.body);
//     res.status(201).json({ mensaje: 'Rol creado', id: resultado.insertId });
//   } catch (error) {
//     console.error('🔴 Error en crearRol_vc_ga:', error);
//     res.status(500).json({ error: 'Error al crear rol' });
//   }
// };

// const obtenerRoles_vc_ga = async (_req, res) => {
//   try {
//     const datos = await rolModel.obtenerRoles_vc_ga();
//     res.json(datos);
//   } catch (error) {
//     console.error('🔴 Error en obtenerRoles_vc_ga:', error);
//     res.status(500).json({ error: 'Error al obtener roles' });
//   }
// };

// // Cargos
// const crearCargo_vc_ga = async (req, res) => {
//   try {
//     const resultado = await cargoModel.crearCargo_vc_ga(req.body);
//     res.status(201).json({ mensaje: 'Cargo creado', id: resultado.insertId });
//   } catch (error) {
//     console.error('🔴 Error en crearCargo_vc_ga:', error);
//     res.status(500).json({ error: 'Error al crear cargo' });
//   }
// };

// const obtenerCargos_vc_ga = async (_req, res) => {
//   try {
//     const datos = await cargoModel.obtenerCargos_vc_ga();
//     res.json(datos);
//   } catch (error) {
//     console.error('🔴 Error en obtenerCargos_vc_ga:', error);
//     res.status(500).json({ error: 'Error al obtener cargos' });
//   }
// };

// module.exports = {
//   crearSucursal_vc_ga,
//   obtenerSucursales_vc_ga,
//   crearDepartamento_vc_ga,
//   obtenerDepartamentos_vc_ga,
//   crearRol_vc_ga,
//   obtenerRoles_vc_ga,
//   crearCargo_vc_ga,
//   obtenerCargos_vc_ga
// };
