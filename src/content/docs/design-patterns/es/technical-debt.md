---
lang: es
title: Qué es la deuda técnica?
description:  La deuda técnica es el costo adicional de re-trabajo ocasionado por elegir la solución más rápida por sobre la más efectiva.
images: {
  src: https://castromaciel-blog.netlify.app/docs/design-patterns/road.jpeg,
  alt: Camino a la deuda técnica,
}
author: Castro Maciel
createdAt: 3 Abril 2023
updatedAt: 16 Abril 2023
---

<h1> Deuda Técnica </h1>

<h2> Qué es la deuda técnica? </h2>

<p> La deuda técnica es <strong>el costo adicional de re-trabajo </strong> ocasionado por elegir la solución más rápida por sobre la más efectiva. </p>

<p> <strong> Es la falta de calidad en el código, </strong> lo que genera una  <i> deuda </i> que repercutirá en los costes futuros. Estos costos son económicos y de tiempo: <p>

<ul>
  <li> Mantenimiento </li>
  <li> Refactorizar el código </li>
  <li> Entender el codigo </li>
  <li> Tiempo adicional en transferir el código </li>
</ul>

<h2> Causas de la deuda técnica </h2>

<ul>
  <li>
    <h4> Presión de la empresa </h4>
    <p> Muchas veces, las circunstancias de la empresa apremian la velicodad antes que la calidad. Entonces, es cuando TODOS quieren finalizar su tarea por encima de cualquier cosa. </p>
  </li>
  <li>
    <h4> Incompetencia </h4>
    <p> Puede sonar un poco duro, pero la realidad es que cuando el desarrollador simplemente no sabe como escribir código decente. </p>
  </li>
</ul>

<h3> Esquema de Martin Fowler sobre la deuda técnica </h3>

<img src="https://castromaciel-blog.netlify.app/docs/design-patterns/technicaldebt-scheme.jpeg" alt="Esquema de la deuda técnica"/>

<h2> ¿Cómo se paga la deuda técnica? </h2>

<p> Caer en deuda técnica, es normal y a veces inevitable. We must be aware and worry about paying the technical debt. Techical debt is paid with <strong><i> Refactiring </i></strong>. </p>

<h2> Refactorización </h2>

<p> Es el proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para hacerlo más comprensible y tolerante a los cambios. </p>

<p>Por lo general, para que una refactorización fuerte tenga el objetivo esperado, es fundamental contar con pruebas unitarias. </p>

<p> Si no implementamos pruebas unitarias, caeremos en los famosos: <strong> "Si funciona, no lo toques" </strong>. </p>

<p> La mala calidad del software siempre termina siendo pagada o asumida por alguien. Ya sea el cliente, el proveedor con recursos o el propio desarrollador dedicando tiempo a refactorizar o perdiendo tiempo programando en un sistema frágil. </p>
