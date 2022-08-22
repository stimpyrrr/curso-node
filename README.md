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