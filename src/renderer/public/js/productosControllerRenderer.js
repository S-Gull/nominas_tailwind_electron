document.addEventListener('DOMContentLoaded', () => {
  console.log('📦 Sistema de productos iniciado desde el renderer');

  const form = document.getElementById('productForm');
  const submitText = document.getElementById('submitText');
  const loading = document.getElementById('loadingMessage');
  const productContainer = document.getElementById('products');

  // Obtener productos al cargar
  window.api.invoke('obtenerProductos_vc_ga').then(productos => {
    loading.remove();
    renderizarProductos_vc_ga(productos);
  });

  // Evento al enviar el formulario
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nuevoProducto = {
      nombre: document.getElementById('name').value,
      precio: parseFloat(document.getElementById('price').value),
      descripcion: document.getElementById('description').value
    };

    const respuesta = await window.api.invoke('crearProducto_vc_ga', nuevoProducto);
    if (respuesta.success) {
      alert('Producto agregado');
      form.reset();
      window.location.reload(); // o actualizar dinámicamente
    } else {
      alert('Error: ' + respuesta.mensaje);
    }
  });

  const renderizarProductos_vc_ga = (productos) => {
    productos.forEach(p => {
      const div = document.createElement('div');
      div.className = 'p-4 bg-gray-100 dark:bg-gray-700 rounded shadow';
      div.innerHTML = `
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">${p.nombre}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300">${p.descripcion}</p>
        <p class="text-indigo-500 dark:text-indigo-400 mt-2 font-bold">Bs. ${p.precio}</p>
      `;
      productContainer.appendChild(div);
    });
  };
});
