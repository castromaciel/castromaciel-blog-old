---
lang: en
title: What is technical debt?
images: {
  src: https://castromaciel-blog.netlify.app/docs/design-patterns/road.jpeg,
  alt: Road image to technical debt,
  description: Photo taked at road to San Javier - Tucuman
}
author: Castro Maciel
createdAt: 3 April 2023
updatedAt: 16 April 2023
---

<h1> Technical Debt </h1>

<h2> What is technical debt? </h2>

<p> Technical debt is <strong>the cost of additional rework</strong> caused by choosing the fastest solution instead of the most effective. </p>

<p> <strong> It is the lack of quality in the code </strong> which generates a debt that will affect future costs. These costs are economic and time: <p>

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

<img src="https://castromaciel-blog.netlify.app/docs/design-patterns/technicaldebt-scheme.jpeg" alt="Technical debt scheme"/>

<h2> How is technical debt paid? </h2>

<p> Falling into technical debt is normal and often unavoidable. We must be aware and worry about paying the technical debt. Techical debt is paid with <strong><i> Refactiring </i></strong>. </p>

<h2> Refactoring </h2>

<p> It's the process that aims to improve the code without altering its behavior to make it more understandable and tolerant of changes. </p>

<p> Usually, for a strong refactoring to have the expected objective, it is essential to have unit tests. </p>

<p> If we don't implement unit tests, we'll fall into famous: <strong> "If it works, don't touch it" </strong>. </p>

<p> Poor software quality always ends up being paid or assumed by someone. Whether it is the client, the provider with resources or the developer himself spending time refactoring or wasting time programming on a fragile system. </p>
