const BASE_URL = 'http://192.168.100.5:5000/vehiculos';

async function cargarAutos() {
  document.getElementById('titulo-listado').textContent = 'Listado de Autos 🚗';
  const respuesta = await fetch(`${BASE_URL}?tipo=1`);
  const data = await respuesta.json();
  mostrarVehiculos(data);
}

async function cargarCamionetas() {
  document.getElementById('titulo-listado').textContent = 'Listado de Camionetas 🚙';
  const respuesta = await fetch(`${BASE_URL}?tipo=2`);
  const data = await respuesta.json();
  mostrarVehiculos(data);
}

async function cargarMotos() {
  document.getElementById('titulo-listado').textContent = 'Listado de Motos 🏍️';
  const respuesta = await fetch(`${BASE_URL}?tipo=3`);
  const data = await respuesta.json();
  mostrarVehiculos(data);
}

function mostrarVehiculos(vehiculos) {
  const contenedor = document.getElementById('contenedor');
  contenedor.innerHTML = '';

  vehiculos.forEach(v => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${v.marca}</h3>
      <p><strong>Placa:</strong> ${v.placa}</p>
      <p><strong>Año:</strong> ${v.anio}</p>
      <p><strong>Precio:</strong> $${v.precio}</p>
    `;
    contenedor.appendChild(card);
  });
}

// Cargar autos por defecto al abrir la página
cargarAutos();
