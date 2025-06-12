# API RESTful - Supermercado

Este proyecto realizado como parte de la Pre Entrega 02 del curso de Backend. El objetivo fue construir una API REST utilizando Node.js, Express y MongoDB, para gestionar productos de supermercado a partir de un archivo JSON.

*************************************************************************************************************************************************

## Objetivo del proyecto

Aprender a crear una API capaz de realizar operaciones CRUD (crear, leer, actualizar y eliminar), conectándose a una base de datos MongoDB. También se trabajó con la estructura de carpetas, rutas y pruebas utilizando herramientas externas como Postman y MongoDB Compass.

*************************************************************************************************************************************************

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- MongoDB Compass
- Postman

*************************************************************************************************************************************************

## Instalación y uso

1. Clonar este repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Verificar que MongoDB esté instalado y funcionando localmente.
(nos paso en mi pc, que el servicio que maneja mongo db en windows, no iniciaba y todo ver muchos tutoriales para hacerlo andar)
4. Ejecutar el servidor con:

```bash
node app.js
La API quedará disponible en: http://localhost:3000/api/productos

Estructura del proyecto

api-frutas/
├── models/
│   └── producto.js
├── routes/
│   └── productos.js
├── app.js
├── package.json
└── README.md

******************************************
 Endpoints disponibles

******************************************
 GET /api/productos
Devuelve todos los productos.

 GET /api/productos/:id (ejemplo de como lo escribo textualmente en el navegador, lo aclaro porque me costo entenderlo "http://localhost:3000/api/productos/684a4304337003955103f63a")
Devuelve un producto específico por su ID.

******************************************

 POST /api/productos
Agrega un nuevo producto. Ejemplo de JSON:

{
  "codigo": 8888,
  "nombre": "Dulce de leche",
  "precio": 3.75,
  "categoria": "Postres"
}

******************************************

 PUT /api/productos/:id
Actualiza un producto existente. Ejemplo:

{
  "precio": 4.99
}

******************************************

 DELETE /api/productos/:id
Elimina un producto de la base de datos.

******************************************

 Ejemplo de prueba con Postman
Método: POST

URL: http://localhost:3000/api/productos

Body (raw - JSON):

{
  "codigo": 9999,
  "nombre": "Yerba Mate",
  "precio": 5.99,
  "categoria": "Infusiones"
}

**************************************************************************************************************************************************************************************************************************************************************************************************

Aprendizajes
Durante el trabajo aprendimos a conectar una base de datos MongoDB a una aplicación Node.js usando Mongoose, a definir modelos y rutas, y a usar herramientas como Postman para realizar pruebas. También comprendimos cómo organizar la estructura de carpetas en un proyecto real.
(nos dejo un poco mas, ya que mongo costo hacerlo andar y instalar y entender postman tambien costo un poco :)

*************************************************************************************************************************************************

Integrantes del grupo
Yesica Finocchio
Maira Belen Masdea

*************************************************************************************************************************************************

 Diagrama del flujo del proyecto

[ Cliente (Postman o Navegador) ]
              ↓
[ Servidor Express (Node.js) ]
              ↓
[ Mongoose (ODM) ]
              ↓
[ Base de datos MongoDB - frutasdb.productos ]
