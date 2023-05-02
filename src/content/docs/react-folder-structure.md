---
lang: es
title: Estructura de carpetas de react
description: Cuando empezamos a desarrollar un nuevo proyecto de React, una de las primeras preguntas que nos hacemos es ¿Cómo organizo mi proyecto de manera eficaz?
author: Castro Maciel
createdAt: 17 April 2023
---

<h1> Estructura de carpetas de React</h1>

<p>
  Cuando empezamos a desarrollar un nuevo proyecto de React, una de las primeras preguntas que nos hacemos es ¿Cómo organizo mi proyecto de manera eficaz?
</p>

<p>
  Esta pregunta surge puesto que a medida que vamos creando proyectos, viendo distintos videos de youtube, o incluso viendo los proyectos de terceros, muchos tienen una forma distinta de organizar su proyecto como tal.
</p>

<p>
  A continuación, te comparto una de las formas en las que yo particularmente organizo mis proyectos. Esta estructura es una muy conocida y es de las primeras que se ven debido a su simplicidad.
</p>

<p>
  Antes de continuar, quiero aclarar que la estructura que veremos es dentro de la carpeta <strong><i>src.</i></strong> Esto es así, porque por fuera de este, la estructura dependera mucho del alcance y del proyecto en general.
</p>

<h2> Estructura Básica (O por tipos de carpetas)</h2>

```
project-folder
└─ src
  ├─ components
    ├─ Avatar
      ├── Avatar.tsx
      ├── Avatar.test.tsx
      ├── Avatar.css
    ├─ Button
      ├── Button.tsx
      ├── Button.test.tsx
      ├── Button.css
  ├─ helpers
    ├── formatDate.ts
  ├─ hooks
    ├─ useFetch
      ├── useFetch.ts
      ├── useFetch.test.ts
    ├─ useLocalStorage
      ├── useLocalStorage.test.ts
  ├─ pages
    ├── Home.tsx
    ├── Login.tsx
  ├─ routes
    ├── routes.tsx
    ├── routes.test.tsx
  ├─ services
    ├─ users
      ├── getUsers.ts
      ├── createUser.ts
      ├── index.test.ts
  ├── App.css
  ├── App.tsx
  ├── index.css
  ├── index.tsx
```

<p>
  Cuando iniciamos un proyecto con <code class="inline-code"> create-react-app </code> no hay carpetas dentro del <code class="inline-code"> src </code>. Y por lo general las primeras carpetas que creamos son <code class="inline-code"> components </code> y <code class="inline-code"> pages </code>.
</p>

<p>
  A las dos carpetas mencionadas anteriormente, sumamos la carpeta de <code class="inline-code"> hooks </code> y <code class="inline-code"> helpers </code>, donde a continuación definiremos por cuales archivos estarán compuestas.
</p>

<h3> <code class="inline-code"> components </code> </h3>

<p>
  Dentro de la carpeta de <code class="inline-code"> components </code>, de su traducción literal 'componentes', ubicaremos los componentes comunes dentro de la aplicación, tales como botones, inputs, etc. Cada uno de estos componentes, tiene su carpeta con su nombre especifico, su respectivo test y hoja de estilos.
</p>

<p>
  A medida que nuestro proyecto va creciendo, esta carpeta puede resultar un poco dificil de manejar, para lo que se utilizan otro tipo de estructuras de carpetas.
</p>

<p>
  De todas formas, para proyectos pequeños o de prácticas, una sola carpeta de componentes, está bien.
</p>

<h3> <code class="inline-code"> helpers </code> </h3>

<p>
  Dentro de la carpeta de <code class="inline-code"> helpers </code>, colocamos las funciones que utilizamos a lo largo de la aplicación. Esta carpeta se crea con la finalidad de evitar la duplicidad de funciones en nuestros componentes.
</p>

<h3> <code class="inline-code"> hooks </code> </h3>

<p>
  La carpeta <code class="inline-code"> hooks </code> contiene todos los custom hooks que utilizamos en nuestro proyecto. Esta es una carpeta muy útil en proyectos tanto básicos como grandes, ya que casi todos los proyectos tendrán múltiples hooks personalizados.
</p>

<h3> <code class="inline-code"> pages </code> (Opcional) </h3>

<p>
  En <code class="inline-code"> pages </code> ubicaremos las páginas de nuestro proyecto (en caso de que tengan).
</p>

<h3> <code class="inline-code"> routes </code> (Opcional) </h3>

<p>
  En la carpeta <code class="inline-code"> routes </code>, llevaremos a cabo la configuracion del enrutamiento y redirecciones de la aplicación.
</p>

<h3> <code class="inline-code"> services </code> (Opcional) </h3>

<p>
  La ultima carpeta dentro de esta estructura, es la carpeta <code class="inline-code"> services </code>. Aquí crearemos las carpetas necesarias con las peticiones al servidor. En el ejemplo se creó una carpeta de users dentro de services. Esto significa que haremos peticiones de usuarios. Podemos tener un metodo get, para obtener los usuarios, o un post para crear los mismos.
</p>


<p>
  Las carpetas <code class="inline-code"> pages </code>, <code class="inline-code"> routes </code>, y <code class="inline-code"> services </code> son "opcionales". Ya que nuestro proyecto puede no tener páginas adicionales. Asi como también, puede ser una aplicación estática, que no consuma ninguna api.
</p>

<p>
  A continuación se deja un ejemplo de un proyecto básico de react <a href="https://github.com/castromaciel/rc-fakestore/tree/main/src#readme" target="_blank"> react-folder-structure </a>
</p>
