// src/render/js/employeeForm_vc_ga.js

// =======================
// Controlador del formulario de empleados
// =======================

console.log('✅ employeeForm_vc_ga.js cargado correctamente.');

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modalEmpleado_vc_ga');
  const btnCancelar = document.getElementById('cancelarEmpleado_vc_ga');
  const form = document.getElementById('formEmpleado_vc_ga');

  // Función para mostrar el modal
  const mostrarFormularioEmpleado_vc_ga = () => {
    console.log('🟢 Mostrando formulario de empleado');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

mostrarFormularioEmpleado_vc_ga();
  // Función para ocultar el modal
  const ocultarFormularioEmpleado_vc_ga = () => {
    console.log('🔴 Ocultando formulario de empleado');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    form.reset(); // limpia campos
  };

  // Evento para cancelar
  btnCancelar.addEventListener('click', ocultarFormularioEmpleado_vc_ga);

  // Evento submit del formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('📤 Intentando enviar formulario de empleado...');

    const formData = new FormData(form);
    const datos = Object.fromEntries(formData.entries());

    if (!validarFormularioEmpleado_vc_ga(datos)) {
      console.warn('⚠️ Validación fallida, revise los campos.');
      return;
    }

    const datosNormalizados = normalizarDatosEmpleado_vc_ga(datos);
    console.log('✅ Datos normalizados y listos para enviar:', datosNormalizados);

    // Aquí podrías hacer: window.api.send('crear-empleado', datosNormalizados);
    ocultarFormularioEmpleado_vc_ga();
  });
});

// =======================
// Validaciones del Formulario
// =======================

const validarFormularioEmpleado_vc_ga = (datos) => {
  const { cedula_vc_ga, rif_vc_ga, fecha_nacimiento_vc_ga, fecha_ingreso_vc_ga } = datos;

  const errores = [];

  if (!validarCedula_vc_ga(cedula_vc_ga)) errores.push('Cédula inválida.');
  if (!validarRIF_vc_ga(rif_vc_ga)) errores.push('RIF inválido.');
  if (!validarFechas_vc_ga(fecha_nacimiento_vc_ga, fecha_ingreso_vc_ga)) errores.push('Fechas incoherentes.');

  if (errores.length > 0) {
    alert('Errores:\n' + errores.join('\n'));
    return false;
  }

  return true;
};

// =======================
// Normalización de Datos
// =======================

const normalizarDatosEmpleado_vc_ga = (datos) => {
  return {
    ...datos,
    cedula_vc_ga: datos.cedula_vc_ga.replace(/\D/g, ''),
    rif_vc_ga: datos.rif_vc_ga.replace(/[^VEJG\d]/gi, '').toUpperCase(),
    telefono_vc_ga: datos.telefono_vc_ga.replace(/\D/g, '')
  };
};
