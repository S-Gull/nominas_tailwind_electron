const {
  crearSalarioHistorico_vc_ga,
  obtenerSalariosHistoricosPorUsuario_vc_ga
} = require('../models/salarioHistorico');

const obtenerHistorialSalarios_vc_ga = async (req, res) => {
  console.log("[GET] /api/empleados/:id/salarios");
  try {
    const data = await obtenerSalariosHistoricosPorUsuario_vc_ga(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener salarios históricos.' });
  }
};

const crearSalarioParaEmpleado_vc_ga = async (req, res) => {
  console.log("[POST] /api/empleados/:id/salarios", req.body);
  try {
    const datos = {
      ...req.body,
      id_usuario_vc_ga: req.params.id
    };
    const data = await crearSalarioHistorico_vc_ga(datos);
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al crear salario histórico.' });
  }
};

module.exports = {
  obtenerHistorialSalarios_vc_ga,
  crearSalarioParaEmpleado_vc_ga
};