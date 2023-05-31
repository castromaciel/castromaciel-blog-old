---
title: "3. Formalización del Álgebra de Boole"
lang: es
author: Castro Maciel
createdAt: 17 Abril 2023
---

<h1>Formalización del Álgebra de Boole</h1>

<p>Un álgebra de booleana <b>B</b> consiste en:</p>

<ul>
  <li>
    Un conjunto <b> S </b> que contiene al menos dos elementos distintos.
  </li>
  <li>
    Dos operaciones binarias en <b> S </b>
    <ul>
      <li>
        <b> + </b> (suma logica) x, y → x <b> + </b> y
      </li>
      <li>
        <b> • </b> (producto lógico) x, y → x <b> • </b> y
      </li>
    </ul>
  </li>
  <li>
    Una operación unaria en <b> S </b>
      <ul>
        <li>
          <b> ¬ </b> (negación) x → <b>¬</b>x
        </li>
      </ul>
  </li>
  <li>
    Existen dos elementos únicos
    <ul>
      <li>
        <b> 0 </b> para la suma +
      </li>
      <li>
        <b> 1 </b> para el producto •
      </li>
    </ul>
  </li>
</ul>

<p> Además se cumplen las siguientes leyes: </p>

<table class="law-table">
  <tbody>
    <tr>
      <th colspan="3">Ley asociativa</th>
    </tr>
    <tr>
      <td>∀ x, y, z ∈ S</td>
      <td>(x + y) + z = x + (y +z)</td>
      <td>(x • y) • z = x • (y • z)</td>
    </tr>
    <tr>
      <th colspan="3">Ley conmutativa</th>
    </tr>
    <tr>
      <td>∀ x, y ∈ S</td>
      <td>(x + y) = (y + x)</td>
      <td>(x • y) = (y • x)</td>
    </tr>
    <tr>
      <th colspan="3">Ley distributiva</th>
    </tr>
    <tr>
      <td>∀ x, y, z ∈ S</td>
      <td>x + (y • z) = (x + y) • (x + z)</td>
      <td>x • (y + z) = xy + xz</td>
    </tr>
    <tr>
      <th colspan="3">Ley de identidad</th>
    </tr>
    <tr>
      <td>∀ x ∈ S</td>
      <td>x + 0 = x</td>
      <td>x • 1 = x</td>
    </tr>
    <tr>
      <th colspan="3">Ley de complementación</th>
    </tr>
    <tr>
      <td>∀ x ∈ S</td>
      <td>x + ¬x = 1</td>
      <td>x • ¬x = 0</td>
    </tr>
  </tbody>
</table>

<p>Luego se dice que <code>B = (S, +, •, 1, 0, ¬)</code> es un <strong>álgebra de boole</strong></p>