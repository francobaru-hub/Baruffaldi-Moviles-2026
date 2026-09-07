# Herramientas utilizadas

Para completar el **Proyecto Integrador "TechStore Móvil"** de la Clase 04 utilicé diferentes herramientas y recursos de aprendizaje.

## 1. Contenido teórico del repositorio

Utilicé el **contenido teórico de la Clase 04** como material de consulta:

* `js-teoria.md`, para repasar ES Modules (`import`/`export`), funciones de orden superior (`.filter`, `.map`, `.reduce`), `fetch` con `async`/`await` y `Promise.all`, `localStorage` y delegación de eventos.
* La carpeta `ejemplos-practicos/` que resuelve casos parecidos a los que pedía el proyecto y me sirvió de referencia para entender el patrón.
* El `README.md` de la consigna, siguiendo bloque por bloque lo que pedía cada uno.

## 2. Claude

Utilicé **Claude** para:

* Entender errores y conceptos que no me habían quedado claros de la teoría.
* Resolver dudas sobre JavaScript que me traban, que eran por despiste mio.
* Revisar la lógica utilizada en las funciones antes de darlas por terminadas.
* Redactar este README.

## 3. Live Server (VS Code)

Utilicé la extensión **Live Server** para correr `index.html` con el protocolo `http://` (necesario porque el proyecto usa ES Modules y estos no funcionan abriendo el archivo directamente con `file://`). Con esto pude:

* Probar el modo oscuro, el buscador y los filtros en el navegador.
* Verificar que el `fetch` a la API de DummyJSON trajera los productos reales.
* Comprobar que los favoritos persistieran en `localStorage` después de recargar con F5.
