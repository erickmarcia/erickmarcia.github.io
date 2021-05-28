---
author: "Erick Marcia"
slug: "base-de-datos-error-1115-laragon"
title: "Base de Datos + Error 1115 + Laragon!"
layout: post
timestamp: "2019-02-09T07:08:02.000-07:00"
date: "2020-08-16T23:52:00.000+00:00"
primary_tag: "Laragon"
secondary_tag: "MySQL"
brief: "Descubre como solucionar el “ERROR #1115: Unknown character set: utf8mb4”"
keywords: "formik,español,react,cómo,error 1115,binaria,blog"
feature_image: "media/blog/Laragon/error-1115/Banner.png"
# title: "media/blog/Laragon/error-1115/Banner.png"
---

<!-- image: 'media/about-me/foto.jpg' -->

<!-- ![Banner](media/blog/Laragon/error-1115/Banner.jpg) -->

Estaba tratando de importar una base de datos de mi máquina local a otra y me
encontré con el siguiente error: **“ERROR #1115: Unknown character set: utf8mb4
”.**

<!-- ![ERROR #1115](..\images\Blog\error-1115.png) -->

![ERROR #1115](media/blog/Laragon/error-1115/error-1115.png)

Este mensaje se debe a incompatibilidades de versiones de MYSQL, en un lenguaje
mas sencillo es que la versión que utilizamos en local es superior a la que
disponemos en el hosting, servidor, etc. (en mi caso en otra máquina local).

## Solución con Visual Studio Code

Para solucionar esto, lo que vamos a hacer, es abrir el fichero **.sql** con un
editor de textos plano, en mi caso uso visual studio code, y usaremos la
herramienta de “Buscar y reemplazar”. Vamos a buscar utf8mb4 y lo vamos a
reemplazar por utf8.

<!-- ![visual-studio-code](..\images\Blog\visual-studio-code.png) -->

![visual-studio-code](media/blog/Laragon/error-1115/visual-studio-code.png)

## Solución con Laragon

Como estoy utilizando Laragon, este trae integrado como administrador de base de
datos [download](https://www.heidisql.com/download.php)

<!-- ![heidisql](..\images\Blog\heidisql.png) -->

![heidisql](media/blog/Laragon/error-1115/heidisql.png)

Para solucionar esto, lo que vamos a hacer, es abrir el fichero **.sql** en el
editor de consultas, y usaremos la herramienta de “Buscar y reemplazar”. Vamos a
buscar utf8mb4 y lo vamos a reemplazar por utf8.

<!-- ![buscar](..\images\Blog\buscaryremplazar.png) -->

![buscar](media/blog/Laragon/error-1115/buscaryremplazar.png)

Nuestro archivo quedara de la siguiente manera.

## Antes

<!-- ![antes](..\images\Blog\antes.png) -->

![antes](media/blog/Laragon/error-1115/antes.png)

## Después

<!-- ![después](..\images\Blog\despues.png) -->

![después](media/blog/Laragon/error-1115/despues.png)

## Conclusiones

¡Listos para importar sus Bases de Datos!
