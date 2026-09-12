/*
  =======================================================
  🚀 CLASE 05: ASINCRONISMO, HTTP Y FETCH (7° 5ta)
  =======================================================
  Completen los ejercicios en este archivo.
  Abran la consola del navegador (F12) para ver los resultados.
*/

// =======================================================
// 🟢 BLOQUE 1: Desmontando el Flujo en Consola
// =======================================================

// Ejercicio 1: El Misterio de la Promesa Pendiente
function probarFetchSinAwait() {
  // Hacemos el fetch SIN await: la función sigue ejecutándose
  // sin esperar a que la petición HTTP termine, por eso lo que
  // se guarda en "resultado" no son los datos, sino la Promise
  // en estado "pending" (todavía viajando por la red).
  const resultado = fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log("Resultado directo del fetch:", resultado);
}
probarFetchSinAwait();

/*
  Preguntas de reflexión:
  1. Al lado de "Promise" aparece la palabra "pending" (o el estado
     interno <pending>), porque la petición todavía no terminó.
  2. No aparece el título del ítem, porque fetch() es asíncrono:
     el console.log se ejecuta inmediatamente, antes de que el
     servidor haya respondido. Sin await, JS no espera esa respuesta.
*/


// Ejercicio 2: Inspeccionando el Sobre HTTP (Response)
async function inspeccionarSobreHTTP() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  console.log("Objeto Response completo:", response);
  console.log("Código de Estado HTTP (status):", response.status);
  console.log("¿La petición fue exitosa? (ok):", response.ok);
}
inspeccionarSobreHTTP();

/*
  Preguntas de reflexión:
  1. Se ve el objeto Response con metadatos (status, ok, headers, etc.),
     NO los datos todavía. El cuerpo con la información útil hay que
     extraerlo aparte con .json().
  2. Cuando la respuesta es correcta, response.status vale 200.
*/


// Ejercicio 3: Desempaquetando los Datos con .json()
async function extraerDatosJSON() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();

  console.log("Objeto JS desempaquetado:", data);
  console.log("Título de la tarea:", data.title);
}
extraerDatosJSON();


// =======================================================
// 🟡 BLOQUE 2: Consumiendo APIs Reales y Mostrando en el DOM
// =======================================================

// Ejercicio 4: Mi Primer Renderizado Dinámico
const btnCargar = document.getElementById('btnCargar');
const tituloTarea = document.getElementById('tituloTarea');

btnCargar.addEventListener('click', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  tituloTarea.textContent = data.title;
});


// Ejercicio 5: Recorriendo un Array de Usuarios
const listaUsuarios = document.getElementById('listaUsuarios');

async function cargarUsuarios() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const usuarios = await response.json();

  usuarios.forEach(usuario => {
    const li = document.createElement('li');
    li.textContent = `${usuario.name} - ${usuario.email}`;
    listaUsuarios.appendChild(li);
  });
}
cargarUsuarios();


// Ejercicio 6: Control de Errores con response.ok
const mensajeError = document.getElementById('mensajeError');

async function probarEndpointInvalido() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/endpoint-invalido');

    if (!response.ok) {
      throw new Error(`Recurso no encontrado (HTTP ${response.status})`);
    }

    const datos = await response.json();
    console.log("Datos recibidos:", datos);
  } catch (error) {
    mensajeError.textContent = "Recurso no encontrado (HTTP 404)";
    console.error("No se pudo completar la carga:", error.message);
  }
}
probarEndpointInvalido();


// =======================================================
// 🔵 BLOQUE 3: Recursos Locales y Parámetros
// =======================================================

// Ejercicio 7: Consumiendo un recurso JSON local
async function cargarRecursoLocal() {
  const response = await fetch('./productos.json');
  const productos = await response.json();

  console.log("Lista de productos locales:", productos);
}
cargarRecursoLocal();


// Ejercicio 8: Búsqueda dinámica con parámetros (Profundización)
const inputBuscar = document.getElementById('inputBuscar');
const btnBuscar = document.getElementById('btnBuscar');

btnBuscar.addEventListener('click', async () => {
  const textoIngresado = inputBuscar.value;

  const response = await fetch(`https://dummyjson.com/products/search?q=${textoIngresado}`);
  const data = await response.json();

  console.log("Productos encontrados:", data.products);
});


// =======================================================
// 🔴 BLOQUE 4: Desafíos Integradores
// =======================================================

// Ejercicio 9: Catálogo de Productos con Estado de Carga
const btnCatalogo = document.getElementById('btnCatalogo');
const catalogo = document.getElementById('catalogo');

btnCatalogo.addEventListener('click', async () => {
  // 1. Mostrar estado de carga inmediatamente
  catalogo.innerHTML = "⏳ Cargando productos del servidor...";

  // 2. Pedir los productos a la API
  const response = await fetch('https://dummyjson.com/products');
  const datos = await response.json();
  const productos = datos.products;

  // 3. Reemplazar el contenido de carga con las tarjetas de productos
  catalogo.innerHTML = "";
  productos.forEach(producto => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${producto.thumbnail}" alt="${producto.title}" width="120">
      <h3>${producto.title}</h3>
      <p>Precio: $${producto.price}</p>
    `;
    catalogo.appendChild(card);
  });
});


// Ejercicio 10: La Explicación del Modelo Mental (Cierre)
/*
  Explicación del flujo completo:

  1. Botón: es el elemento del DOM con el que interactúa el usuario
     (por ejemplo, "Cargar Catálogo").

  2. Evento click: cuando el usuario hace clic, el navegador dispara
     un evento que ejecuta la función que le asociamos con
     addEventListener('click', ...).

  3. fetch(): dentro de esa función llamamos a fetch() con la URL
     del servidor/API a la que queremos pedirle datos.

  4. Promise: fetch() no devuelve los datos al instante, porque la
     red tarda; devuelve inmediatamente una Promise en estado
     "pending" que representa un resultado que llegará más adelante.

  5. HTTP Request: mientras la Promise está pendiente, el navegador
     realmente envía por la red una petición HTTP (con la URL,
     método y encabezados) hacia el servidor.

  6. API / Endpoint: del lado del servidor, esa petición es recibida
     por una ruta específica (el endpoint) que sabe qué hacer con
     ella (por ejemplo, buscar productos en una base de datos).

  7. HTTP Response: el servidor termina de procesar la solicitud y
     arma una respuesta HTTP, que incluye un código de estado
     (200, 404, 500, etc.) y el cuerpo con la información.

  8. Response: esa respuesta HTTP llega al navegador y fetch()
     resuelve su Promise entregándonos un objeto Response. Este
     objeto todavía NO son los datos: son los metadatos y el cuerpo
     "envuelto" (por eso podemos leer response.status y response.ok
     antes de tener los datos reales).

  9. response.json(): para sacar la información útil del cuerpo,
     llamamos a response.json(), que lee y convierte ese contenido.

  10. Promise: como leer y parsear el cuerpo también toma tiempo,
      response.json() devuelve otra Promise, por eso necesitamos un
      segundo await.

  11. Objeto / Array de JavaScript: cuando esa segunda Promise se
      resuelve, obtenemos por fin datos nativos de JS (objetos {} o
      arrays []) con los que podemos trabajar directamente en el código.

  12. Procesamiento JS: con esos datos ya utilizables, el código hace
      lo que necesite: recorrerlos con forEach, filtrarlos, armar
      strings de HTML, etc.

  13. DOM: ese procesamiento termina modificando el árbol del DOM,
      por ejemplo creando elementos nuevos (createElement) o
      cambiando el innerHTML/textContent de un contenedor existente.

  14. Pantalla: finalmente, esos cambios en el DOM son lo que el
      navegador pinta, y el usuario ve el resultado (la tarea, la
      lista de usuarios, las tarjetas del catálogo, etc.) reflejado
      en la pantalla.
*/
