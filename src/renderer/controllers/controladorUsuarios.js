const {
  crearUsuario_vc_ga,
  obtenerUsuarios_vc_ga,
  obtenerUsuarioPorId_vc_ga,
  actualizarUsuario_vc_ga,
  eliminarUsuario_vc_ga
} = require('../models/usuario');

// Controlador: Obtener todos los empleados
const obtenerEmpleados_vc_ga = async (req, res) => {
  console.log("[GET] /api/empleados -> obtenerEmpleados_vc_ga");
  try {
    const empleados = await obtenerUsuarios_vc_ga();
    res.json(empleados);
  } catch (error) {
    console.error("Error al obtener empleados:", error);
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
};

// Controlador: Obtener un empleado por ID
const obtenerEmpleadoPorId_vc_ga = async (req, res) => {
  console.log("[GET] /api/empleados/:id -> obtenerEmpleadoPorId_vc_ga");
  try {
    const empleado = await obtenerUsuarioPorId_vc_ga(req.params.id);
    res.json(empleado);
  } catch (error) {
    console.error("Error al obtener empleado:", error);
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
};

// Controlador: Crear un nuevo empleado
const crearEmpleado_vc_ga = async (req, res) => {
  console.log("[POST] /api/empleados -> crearEmpleado_vc_ga", req.body);
  try {
    const resultado = await crearUsuario_vc_ga(req.body);
    res.status(201).json(resultado);
  } catch (error) {
    console.error("Error al crear empleado:", error);
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
};

// Controlador: Actualizar un empleado
const actualizarEmpleado_vc_ga = async (req, res) => {
  console.log("[PUT] /api/empleados/:id -> actualizarEmpleado_vc_ga", req.body);
  try {
    const resultado = await actualizarUsuario_vc_ga(req.params.id, req.body);
    res.json(resultado);
  } catch (error) {
    console.error("Error al actualizar empleado:", error);
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
};

// Controlador: Eliminar un empleado
const eliminarEmpleado_vc_ga = async (req, res) => {
  console.log("[DELETE] /api/empleados/:id -> eliminarEmpleado_vc_ga");
  try {
    const resultado = await eliminarUsuario_vc_ga(req.params.id);
    res.json(resultado);
  } catch (error) {
    console.error("Error al eliminar empleado:", error);
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
};

module.exports = {
  obtenerEmpleados_vc_ga,
  obtenerEmpleadoPorId_vc_ga,
  crearEmpleado_vc_ga,
  actualizarEmpleado_vc_ga,
  eliminarEmpleado_vc_ga
};
