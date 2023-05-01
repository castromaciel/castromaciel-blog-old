---
lang: es
title: Node + express basado en modulos de ES6
author: Castro Maciel
createdAt: 1 May 2023
---

<h1> Nodejs + express basado en modulos de ES6 </h1>

```json
{
  "name": "node-example",
  "version": "1.0.0",
  "description": "node project based in modules",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node app.js",
  },
  "keywords": [],
  "author": "mlcastro",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
  },
  "devDependencies": {
    "nodemon": "^2.0.21"
  }
}
```

<p> La parte mas importante para poder trabajar nuestro proyecto de nodejs con modules, es necesario especificar el <code class="inline-code"> type </code> en nuestro archivo <code class="inline-code"> package.json </code>. </p> 
