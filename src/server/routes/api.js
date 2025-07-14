const express = require('express');
const router = express.Router();

const {
  obtenerEmpleados_vc_ga,
  obtenerEmpleadoPorId_vc_ga,
  crearEmpleado_vc_ga,
  actualizarEmpleado_vc_ga,
  eliminarEmpleado_vc_ga
} = require('../controllers/usuario');

const {
  obtenerSucursalesController_vc_ga,
  crearSucursalController_vc_ga,
  actualizarSucursalController_vc_ga,
  eliminarSucursalController_vc_ga
} = require('../controllers/sucursal');

const {
  obtenerDepartamentosController_vc_ga,
  crearDepartamentoController_vc_ga,
  actualizarDepartamentoController_vc_ga,
  eliminarDepartamentoController_vc_ga
} = require('../controllers/departamento');

const {
  obtenerHistorialSalarios_vc_ga,
  crearSalarioParaEmpleado_vc_ga
} = require('../controllers/salarioHistorico');

// Empleados
router.get('/empleados', obtenerEmpleados_vc_ga);
router.get('/empleados/:id', obtenerEmpleadoPorId_vc_ga);
router.post('/empleados', crearEmpleado_vc_ga);
router.put('/empleados/:id', actualizarEmpleado_vc_ga);
router.delete('/empleados/:id', eliminarEmpleado_vc_ga);

// Sucursales
router.get('/sucursales', obtenerSucursalesController_vc_ga);
router.post('/sucursales', crearSucursalController_vc_ga);
router.put('/sucursales/:id', actualizarSucursalController_vc_ga);
router.delete('/sucursales/:id', eliminarSucursalController_vc_ga);

// Departamentos
router.get('/departamentos', obtenerDepartamentosController_vc_ga);
router.post('/departamentos', crearDepartamentoController_vc_ga);
router.put('/departamentos/:id', actualizarDepartamentoController_vc_ga);
router.delete('/departamentos/:id', eliminarDepartamentoController_vc_ga);

// Salarios Históricos
router.get('/empleados/:id/salarios', obtenerHistorialSalarios_vc_ga);
router.post('/empleados/:id/salarios', crearSalarioParaEmpleado_vc_ga);

module.exports = router;