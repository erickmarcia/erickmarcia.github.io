---
author: "Erick Marcia"
slug: "xamarin-conectar-un-dispositivo-para-probar-apps"
title: "Xamarin - Conectar un Dispositivo para probar Apps!"
layout: post
timestamp: "2019-02-09T07:08:02.000-07:00"
date: "2019-12-18T07:08:02.000-07:00"
primary_tag: "Xamarin"
secondary_tag: "Apps"
brief: "En este artículo vamos a conocer como poder conectar nuestro dispositivo
  movil, para probar como emulador de nuestras Apps"
keywords: "formik,español,react,cómo,validar formularios react,binaria,blog"
image: "media/blog/Xamarin/How-to-Debug-Xamarin-Application-on-Visual-Studio-660x420.png"
---

<!-- ![Post Xamarin](media\blog\Xamarin\Debug\How-to-Debug-Xamarin-Application-on-Visual-Studio-660x420.png) -->

> Este artículo hace parte de una iniciativa genial: del primer calendario de
> Xamarin en español. Cada día, dos artículos nuevos sobre C# serán compartidos
> por la comunidad. Esta es mi contribución.

Conozco de vista Xamarin desde que era parte del Proyecto Mono, pero siempre me
dio miedo trastearlo aún cuando ya se habia convertido en Xamarin, pero hasta
hace poco he comenzado a practicarlo, practicas que van desde conectar a azure,
firebase, o bases de datos internas LiteDB, entre muchas cosas más por lo cual
estoy convencido que me falta mucho por aprender.

Pero en este articulo quisiera mostrarle algo que seguro todos los expertos ya
saben, pero que los novatos como yo batallamos mucho al iniciar en Xamarin y es
el tratar de conectar nuestro dispositivo ya sea un celular, tablet, etc, para
ver como se miran nuestras apps en el dispositivo, aunque tengamos un emulador,
nosotros queremos quitarnos las ganas de ver nuestra app en el dispositivo, asi
que vamos a darle..

## Conectar tu Celular para probar Apps

Bueno para iniciar cuando ya tenemos nuestro proyecto cargado, en la parte
superior donde se encuentran las opciones de debug popdras ver que solo
encontran las opciones de compilación con simulador que trae integrado Visual
Studio.

![Debug Simulador](media\blog\Xamarin\Debug\dev-1.png)

## Activar Modo Desarrollador y Depuración USB

Para poder conectar nuestro dispositivo, primeros debemos ir a ajustes > Acerca
del télefono y debes de seleccionar **Versión MIUI** varias veces hasta que te
salga que ya eres un programador.

![Activar modo desarrrollador](media\blog\Xamarin\Debug\dev-2.gif)

Luego busca el menu de **Opciones de Desarrollador** que se te acaba de activar,
en las opciones de desarrollador activa el modo de **depuración USB e Instalar
vía USB**, en mi caso lo encontre en Ajuste adicionales, cabe mencionar que
estoy usando un Redmi Note 8 Pro.

![Activar depuración USB](media\blog\Xamarin\Debug\dev-3.png)

> Nota: al Activar la depuración, te aparecera un mensaje emergente
> preguntandote si te gustaria activar la depuración USB, dale aceptar.

Una vez realizado todo los pasos anteriores, ve a tu proyecto de Xamarin y
revisa la opciones de debug, y veras seleccionado tu dispositivo listo para
hacer tus pruebas.

## Compilar e Instalar nuestra Apps en el dispositivo

![Debugactivado](media\blog\Xamarin\Debug\dev-4.png)

Una vez que corras tu proyecto en tu dispositivo se mostrara un mensaje
emergente indicando si quieres instalar una nueva app con el nombre de tu
proyecto.

![Activar depuración USB](media\blog\Xamarin\Debug\dev-5.jpg)

Seguido en tu dispositivo aparece el logo de Xamarin indicando que tu app se ha
instalado.

![Activar depuración USB](media\blog\Xamarin\Debug\dev-6.png)

## Conclusiones

Como puede ver, no es demasiado complicado pero que si resulta un dolor de
cabeza cuando estas iniciando, espero les ayude y compartan para que más
personas conozcan el mundo de Xamarin.

Buenos eso ha sido todo ppara este post, nos vemos en el siguiente.

![Xamarin](media\blog\Xamarin\Debug\xamarin-visualStudio.png)

## Agradecimimento

Un Agradecimiento especial a los organizadores del primer **#AdvientoXamarin**
en español en especial a **@Luis Beltran** por alentarnos a publicar lo poco que
sabemos y por darme la oportunidad de ser parte de esta evento esperando un día
conocerlo en persona y estrechar su mano.

Esperando que este articulos sea de sua agrado me despido.
