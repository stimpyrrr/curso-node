# **Curso Node**
## *Iniciar proyecto*
``` js 
npm init
// version: 0.1.0     
// descripción: Curso de node.js de escalab  
// entry point: src/index.js
// test command:
// git repository:
// keywords:
// author: oscargm
// license: "ISC" 
```
> El achivo **index.http** se utiliza para la extensión de vscode **Rest Client** (donde haremos nuestras consultas)
---
## Instalación nodemon
> Nodemon se utiliza para que el servidor se reinicie automáticamente.
```js
// -D => se instala en dependencias de desarrollo.
npm i nodemon -D
```

### package.json:
```diff
{
  "name": "curso-node",
  "version": "0.1.0",
  "description": "Curso de node.js de escalab",
  "main": "src/index.js",
  "scripts": {
    "service": "node src/index.js",
-    "http": "node src/httpExample/index.js"
+    "http": "nodemon src/httpExample/index.js"
  },
  "author": "oscargm",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.19"
  }
}
```
---
## Instalación dotenv
> dotenv se utiliza como variables globales de desarrollo/producción
```js
// -D => se instala en dependencias de desarrollo.
npm i -D dotenv
```
> Creamos archivo: **.env** para colocar las variables de entorno

### .env
```js
PORT = 3000
```
> Editamos **package.json**
### package.json
```diff
{
  "name": "curso-node",
  "version": "0.1.0",
  "description": "Curso de node.js de escalab",
  "main": "src/index.js",
  "scripts": {
-    "service": "node src/index.js",
-    "http": "nodemon src/httpExample/index.js"
+    "service": "node -r dotenv/config src/index.js",
+    "http": "nodemon -r dotenv/config src/httpExample/index.js"
  },
  "author": "oscargm",
  "license": "ISC",
  "devDependencies": {
    "dotenv": "^16.0.1",
    "nodemon": "^2.0.19"
  }
}
```
### ejmplo para llamar a variables de entorno con **dotenv**:
```js
const PORT = process.env.PORT
```
---
## Instalación de Express
```js
npm i express
```
### Importar **Express**:
```js
const express = require('express')
```
---
### Instalación de Morgan
> Nos permite hace un print de todos los request que vengan. Crea un middleware de loggeo.
```js
npm i morgan
```
---
### Instalar nanoID
> Para crear ID aleatorias
```js
npm i nanoid@^3 //compatible con esta versión de node
```
---
### Datos Varios
> * En esta app da puntos de acceso que es crear archivos **index.js** en cada carpeta, y este archivo index lo único que hacer es exportar. 