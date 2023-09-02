---
lang: es
title: Primeros pasos en TypeScript
images: {
  src: "https://castromaciel-blog.vercel.app/docs/typescript/what-is-ts.jpeg",
  alt: "Logo TypeScript"
}
author: Castro Maciel
createdAt: 17 April 2023
---
<h1> ¿Qué es TypeScript? </h1>

<p> Bueno, en pocas palabras TypeScript es un superset de JavaScript. ¿Y esto que significa 🤔? Significa que TypeScript, al final del día, es un lenguaje de programación que se construye sobre JavaScript. No es un lenguaje nuevo, si no, que a partir del lenguaje JavaScript añade nuevas caracteristicas y ventajas (Podriamos decir que hace que escribir código Javascript sea más fácil y potente). </p> 

<p>Hasta aquí, parece todo perfecto, pero tenemos una gran desventaja. Y es que TypeScript no puede ser ejecutado por entornos de JavaScript. </p>

Estos entornos son tales como:
  * Navegadores
  * Node Js

<p>Entonces, ¿Por qué decimos que es un 'JavaScript' mejorado, pero no podemos utilizarlo? </p>

<p>TypeScript es un lenguaje de programación, pero también es una herramienta (o compilador), que se ejecuta sobre su código para compilar de TypeScript a Javascript. Como resultado final lo que se obtiene es JavaScript. </p>

<img src="https://castromaciel-blog.vercel.app/docs/typescript/compiler-process.png" alt="Proceso de compilación de TypeScript" />

<p>Bueno, eso por supuesto trae una pregunta importante, ¿Cómo puede TypeScript añadir nuevas características
si lo que se obtiene al final son archivos .js normales? Y la respuesta es que el compilador de TypeScript
compila estas nuevas características en soluciones de JavaScript, por lo que al final se obtiene una sintaxis mucho más agradable, una forma mucho más fácil de hacer algo, y que luego va a compilar esa forma más agradable y fácil en un fragmento de JavaScript más complejo, que se tendría que escribir de otra manera.</p>

<p>Además, TypeScript, por supuesto, hace una cosa importante, que el nombre ya implica. <strong>Añade tipos,</strong> una característica al lenguaje JavaScript que en realidad le dará a los desarrolladores, una oportunidad de identificar errores en su código antes de que su script se ejecute. </p>

<p>Por lo tanto, no sólo le da algunas nuevas características, y formas más agradables de hacer algo, sino que también le da una comprobación de errores adicional donde los errores que de otro modo obtendría como errores de tiempo de ejecución pueden ser detectados y corregidos temprano durante el desarrollo.</p>

<p>Entonces, ¿por qué utilizar TypeScript? Veamos el siguiente ejemplo, una función JavaScript bastante sencilla que suma dos números.</p>

```javascript
const add = (num1, num2) => num1 + num2;

console.log(add('2','5')) 
```

<p>Ahora, cuando ejecutemos esta funcion, lo que estamos pasando por parametros son <code class="inline-code">string</code> en lugar de <code  class="inline-code">number</code>. Por lo tanto, cuando se invoca esta funcion, obtenemos como resultado un comportamiento no deseado. ¿Y esto por que? Pues, por que en JavaScript, se concatenarán las cadenas en lugar de realizar el cálculo matematico.</p>

```javascript
Resultado esperado: 7
Resultado actual: '25'
```

<p>Pequeñas cosas que ocurren en JavaScript...</p>

<p>Este error como tal no es un error técnico,  por lo que probablemente no se obtendra un error de ejecución, pero lo que sí podemos estar seguros, es que se tiene un error lógico en el código.</p>

<p>Y eso, por supuesto, puede llevar a grandes problemas en las aplicaciones web que estás escribiendo con JavaScript.</p>

<p>Si bien podemos añadir una condición if en la función para comprobar los tipos de las entradas en tiempo de ejecución, también podríamos validar la entrada del usuario, y aunque podríamos querer hacer todo eso también sería bueno si pudiéramos detectar errores como este <strong>durante</strong> el desarrollo.</p>

```javascript
const add = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return +num1 + +num2
  }

  return num1 + num2
}
```

<p> De esta manera, podemos asegurarnos que la suma que realizamos en nuestra función <code class="inline-code">add</code> es una operación matemática. Pero, ¿Es esto lo mejor? Bien, aquí es donde entra TypeScript.</p> 

<h2> Instalando TypeScript </h2>

<p> Bien, en este punto nos podemos guiar de la docomentación de <a href="https://www.typescriptlang.org/download" target="_blank">TypeScript</a>, la cual es bastante intuitiva. Para no hacer este post eterno, utilizaremos la herramienta de npm que viene en el paquete cuando isntalamos <a href="https://nodejs.org/" target="_blank" >Node</a>.</p>

```
npm install -g typescript
```

<p> Ahora, creamos nuestro archivo con extensión .ts y probemos nuevamente nuestra función anterior </p>

<img src="https://castromaciel-blog.vercel.app/docs/typescript/add-function.png" alt="Funcón add" />

<p> Podemos observar en nuestro IDE (en este caso VS Code), nos da un par de errores durante el desarrollo de nuestra función. Estos errores sin del siguiente tipo </p>

```
Parameter 'num1' implicitly has an 'any' type.ts(7006)
──────────────────────────────────────────────────────
(parameter) num1: any
```

<p> TypeScript nos está alertando, en primera instancia que especifiquemos que tipo de dato queremos que tenga nuestro parametro <code class="inline-code">num1</code>. Entonces, lo que haremos en este caso es especificar que tanto <code class="inline-code">num1</code> como <code class="inline-code">num2</code> son parámetros de tipo <code class="inline-code">number</code>. </p>

<img src="https://castromaciel-blog.vercel.app/docs/typescript/add-function2.png" alt="Funcón add" />

<p>Una vez especificados los tipos de datos de nuestros parametros, podemos observar que ahroa nos advierte que cuando <strong> invocamos nuestra funcion </strong>, estamos cometiendo un error. Este error es por que nuestra función está esperando 2 parametros de tipo <code class="inline-code">number</code>. Por lo que podemos corregirlo de dos formas. </p>

<img src="https://castromaciel-blog.vercel.app/docs/typescript/add-function3.png" alt="Funcón add" />

<p> De esta manera podemos observar, que durante el desarrollo de nuestra app, pudimos alertar todos estos pequeños errores lógicos que muchas veces pasan desapercibidos. A gran escala, utilizar TypeScript es de mucha ayuda. </p>
