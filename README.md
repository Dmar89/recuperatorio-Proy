1) Clonar el proyecto
2) Ejecutar npm install para instalar dependencias
3) El esquema de datos debe estar previamente cargado 
4) Dentro de la tabla movies en la base de datos hay que agregar la columna deleted_at (`deleted_at` timestamp NULL DEFAULT NULL) para poder cumplir con el requisito de paranoid en el delete de datos de dicha tabla.
5) Se deja base de datos movies-db.sql (con campo deleted_at agregado en tabla movies)
6) No es necesario definir password en el archivo config para la conexion con la bd desde el modelo.
7) Correr con el comando nodemon .\src\app.js
8) Ingresar por un navegador mediante la siguiente url http://localhost:3001/
