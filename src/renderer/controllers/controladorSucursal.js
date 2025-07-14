const {
  crearSucursal_vc_ga,
  obtenerSucursales_vc_ga,
  actualizarSucursal_vc_ga,
  eliminarSucursal_vc_ga
} = require('../models/sucursal');

const obtenerSucursalesController_vc_ga = async (req, res) => {
  console.log("[GET] /api/sucursales");
  try {
    const data = await obtenerSucursales_vc_ga();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener sucursales.' });
  }
};

const crearSucursalController_vc_ga = async (req, res) => {
  console.log("[POST] /api/sucursales", req.body);
  try {
    const data = await crearSucursal_vc_ga(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al crear sucursal.' });
  }
};

const actualizarSucursalController_vc_ga = async (req, res) => {
  console.log("[PUT] /api/sucursales/:id", req.body);
  try {
    const data = await actualizarSucursal_vc_ga(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al actualizar sucursal.' });
  }
};

const eliminarSucursalController_vc_ga = async (req, res) => {
  console.log("[DELETE] /api/sucursales/:id");
  try {
    const data = await eliminarSucursal_vc_ga(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al eliminar sucursal.' });
  }
};

module.exports = {
  obtenerSucursalesController_vc_ga,
  crearSucursalController_vc_ga,
  actualizarSucursalController_vc_ga,
  eliminarSucursalController_vc_ga
};
