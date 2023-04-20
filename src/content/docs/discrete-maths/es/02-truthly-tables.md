---
title: "2. Tablas de verdad"
lang: es
author: Castro Maciel
createdAt: 20 Abril 2023
---

<h1> Tablas de verdad</h1>

<ul>
  <li> Las tablas de verdad son útiles para examinar el significado del valor de las formulas lógicas. </li>
  <li> Todos los conectivos vistos determinan una función de verdad, que aceptan valores de verdad como entrada por medio de los operandos, y producen otros valores de verdad como resultado. </li>
  <li> La tabla de verdad de una proposición compuesta muestra todas las combinaciones posibles de valores de verdad de las proposiciones atómicas. Para cada combinación se muestra un resultado. </li>
  <li> El tamaño de una tabla de verdad de una proposición crecera <strong> exponencialmente </strong> según la cantidad de proposiciones atómicas que intervienen en la misma. </li>
</ul>

<blockquote>
  <h4> Existen 2^n combinaciones posibles</h4>
  <small> Donde n indica el número de variables proposicionales que aparecen en una expresión. </small>
</blockquote>


<p>A continuacion presentamos las tablas de verdad, donde A y B no son fórmulas del lenguaje, sino metavariables que representan cualquier fórmula del lenguaje.</p>

<h3> Conjunción (AND) </h3>

<table class="truthly-table">
  <thead>
    <tr>
      <th>A</th>
      <th>B</th>
      <th>A ^ B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>F</td>
    </tr>
  </tbody>
</table>

<h3> Disyunción (OR) </h3>

<table class="truthly-table">
  <thead>
    <tr>
      <th>A</th>
      <th>B</th>
      <th>A v B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>F</td>
    </tr>
  </tbody>
</table>

<h3> Negación (NOT) </h3>

<table class="truthly-table">
  <thead>
    <tr>
      <th>A</th>
      <th>¬ A</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>V</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
    </tr>
  </tbody>
</table>

<h3> Condicional </h3>

<table class="truthly-table">
  <thead>
    <tr>
      <th>A</th>
      <th>B</th>
      <th>A –> B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>V</td>
    </tr>
  </tbody>
</table>

<h3> Bicondicional </h3>

<table class="truthly-table">
  <thead>
    <tr>
      <th>A</th>
      <th>B</th>
      <th>A <–> B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>V</td>
      <td>V</td>
      <td>V</td>
    </tr>
    <tr>
      <td>V</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>V</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>V</td>
    </tr>
  </tbody>
</table>
