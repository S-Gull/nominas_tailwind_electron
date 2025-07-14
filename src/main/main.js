const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const {
  obtenerUsuarios_vc_ga,
  crearUsuario_vc_ga
} = require('../server/models/usuario'); // o a través de un controlador si prefieres

const crearVentanaPrincipal = () => {
  const ventana = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  ventana.loadFile(path.join(__dirname, '../renderer/views/index.html'));
};

// IPC: Obtener todos los empleados
ipcMain.handle('obtenerEmpleados_vc_ga', async () => {
  try {
    const empleados = await obtenerUsuarios_vc_ga();
    return empleados;
  } catch (error) {
    console.error('❌ Error en IPC al obtener empleados:', error);
    return { error: true, mensaje: 'No se pudo obtener empleados.' };
  }
});

// IPC: Crear nuevo empleado
ipcMain.handle('crearEmpleado_vc_ga', async (_event, datos) => {
  try {
    const resultado = await crearUsuario_vc_ga(datos);
    return { success: true, id: resultado.insertId };
  } catch (error) {
    console.error('❌ Error en IPC al crear empleado:', error);
    return { error: true, mensaje: 'No se pudo crear el empleado.' };
  }
});

app.whenReady().then(() => {
  crearVentanaPrincipal();
});
