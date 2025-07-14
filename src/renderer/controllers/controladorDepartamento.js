const {
  crearDepartamento_vc_ga,
  obtenerDepartamentos_vc_ga,
  actualizarDepartamento_vc_ga,
  eliminarDepartamento_vc_ga
} = require('../models/departamentoModel_vc_ga');

const obtenerDepartamentosController_vc_ga = async (req, res) => {
  console.log("[GET] /api/departamentos");
  try {
    const data = await obtenerDepartamentos_vc_ga();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener departamentos.' });
  }
};

const crearDepartamentoController_vc_ga = async (req, res) => {
  console.log("[POST] /api/departamentos", req.body);
  try {
    const data = await crearDepartamento_vc_ga(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al crear departamento.' });
  }
};

const actualizarDepartamentoController_vc_ga = async (req, res) => {
  console.log("[PUT] /api/departamentos/:id", req.body);
  try {
    const data = await actualizarDepartamento_vc_ga(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al actualizar departamento.' });
  }
};

const eliminarDepartamentoController_vc_ga = async (req, res) => {
  console.log("[DELETE] /api/departamentos/:id");
  try {
    const data = await eliminarDepartamento_vc_ga(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al eliminar departamento.' });
  }
};

module.exports = {
  obtenerDepartamentosController_vc_ga,
  crearDepartamentoController_vc_ga,
  actualizarDepartamentoController_vc_ga,
  eliminarDepartamentoController_vc_ga
};