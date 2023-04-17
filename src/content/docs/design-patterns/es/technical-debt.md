---
lang: en
title: Qué es la deuda técnica?
images: {
  src: /posts/road.jpeg,
  alt: Camino a la deuda técnica,
  description: "Foto tomada en Villa Nogués, en dirección a San Javier - Tucuman"
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
  <li> Carrying out maintenance </li>
  <li> Refactor the code </li>
  <li> Understand the code </li>
  <li> Additional time on code transfer </li>
</ul>

<h2> Causes of Technical Debt </h2>

<ul>
  <li>
    <h4> Business pressure </h4>
    <p> Sometimes business circumstances call for speed over quality. So at that time, everyone wants to finish their homework above all else. </p>
  </li>
  <li>
    <h4> Incompetence </h4>
    <p> This is when developer just doesn't know how to write decent code. </p>
  </li>
</ul>

<h3> Martin Fowler technical debt scheme </h3>

<img src="/posts/technicaldebt-scheme.jpeg" alt="Technical debt scheme"/>

<h2> How is technical debt paid? </h2>

<p> Falling into technical debt is normal and often unavoidable. We must be aware and worry about paying the technical debt. Techical debt is paid with <strong><i> Refactiring </i></strong>. </p>

<h2> Refactoring </h2>

<p> It's the process that aims to improve the code without altering its behavior to make it more understandable and tolerant of changes. </p>

<p> Usually, for a strong refactoring to have the expected objective, it is essential to have unit tests. </p>

<p> If we don't implement unit tests, we'll fall into famous: <strong> "If it works, don't touch it" </strong>. </p>

<p> Poor software quality always ends up being paid or assumed by someone. Whether it is the client, the provider with resources or the developer himself spending time refactoring or wasting time programming on a fragile system. </p>
