---
author: 'Erick Marcia'
slug: 'Actualizar-Consecutivo-con-SQL'
title: 'Actualizar Consecutivo con formato "CON-2022-000" en SQL'
layout: post
timestamp: '2022-01-05T07:08:02.000-07:00'
date: '2022-01-05T23:52:00.000+00:00'
primary_tag: 'SQL'
secondary_tag: 'Scripts'
brief:
    'Soluciona  Actualización de Consecutivos que tiene formato "CON-2022-000"
    con funciones de SQL'
keywords: 'SQL,blog'
feature_image: 'media/blog/SQL/Consecutivo/Banner.jpg'
---

<figcaption>Ilustración Gracias a <a href='https://www.freepik.es/vectores/red'>Vector de Red creado por freepik - www.freepik.es</a></figcaption>

## Introducción

Uno de los problemas que comunmente nos encontramos es el trabajar con
consecutivos y más cuando estos estan estructurados con caracteres y números, ya
que se dificulta el poder aumentarlos.

En este post trateremos de poder resolver este problema, para ello vamos a
utilizar una estructura de datos que nos permita almacenar los consecutivos, y
una funcion que nos permita actualizarlos.

## Diseño Tabla Consecutivos

Para este ejemplo necesitaremos una tabla donde guardaremos los consecutivo a
utilizar en nuestro sistema con los siguientes campos:

![Consecutivo1](media/blog/SQL/Consecutivo/1-Consecutivo.png)

Una vez que tenemos la tabla con los datos a ocupar, podemos buscar el campo con
el consecutivo a aumentar en este caso el campo [ultimoValor]:

![Consecutivo2](media/blog/SQL/Consecutivo/2-Consecutivo.png)

## Creando Función Rellenar con Ceros

A continuación vamos a crear un función que nos ayudara al momento de aumentar
el consecutivo rellenando con ceros según la longitud requerida, la cual
llamaremos [fncRellenarConCeros], esta función recibira 2 parametros:

1. [@numero] = Consecutivo
2. [@longitudRequerida] = Longitud del consecutivo .

![Consecutivo3](media/blog/SQL/Consecutivo/3-Consecutivo.png)

> Nota: Si no deseas crear la función [fncRellenarConCeros], puedes utilizarla
> script que se útiliza dentro de la función [fncDameNuevoConsecutivo] para
> rellenar los ceros.

## Creando Función Dame Nuevo Consecutivo

A continuación vamos a crear un función la cual llamaremos
[dbo].[fncDameNuevoConsecutivo], esta función recibira 1 parametro:

1. [@CODIGO] = Código del Consecutivo o el identificador del consecutivo que
   necesitamos, cabe aclarar que este parametro lo ocupamos porque estamos
   usando una tabla consecutivos donde se guardan todos los consecutivos que se
   pueden utilizar en nuestro sistema.

Dentro de la función [dbo].[fncDameNuevoConsecutivo] vamos a realizar los
siguientes pasos:

1. Declaramos las variables a ocupar

![Consecutivo4.1](media/blog/SQL/Consecutivo/4.1-Consecutivo.png)

2. Obtenemos el último valor o consecutivo guardado y lo asignamos a nuestra
   variable consecutivo_global.

![Consecutivo4.2](media/blog/SQL/Consecutivo/4.2-Consecutivo.png)

3. Separamos nuestro consecutivo, para ello vamos a seleccionar el parte que se
   desea incrementar que debe de ser número, en mi caso de derecha a izquierda 3
   digitos, le sumamos 1 y lo asignamos a la variable consecutivo.

![Consecutivo4.3](media/blog/SQL/Consecutivo/4.3-Consecutivo.png)

4. Por último obtenemos la parte del consecutivo que no varia en mi caso de
   izquierda a derecha los primeros 9 caracteres con la función LEFT de SQL, lo
   concatenamos con el resultado obtenido al ejecutar la función antes creada
   [fncRellenarConCeros] y lo asignamos a la variable nuevo_consecutivo.

![Consecutivo4.4](media/blog/SQL/Consecutivo/4.4-Consecutivo.png)

5. para terminar nuestra función retornamos la variable nuevo_consecutivo.

![Consecutivo4.5](media/blog/SQL/Consecutivo/4.5-Consecutivo.png)

El resultado final será de nuestra función es el siguiente:

![Consecutivo4](media/blog/SQL/Consecutivo/4-Consecutivo.png)

## Probando Actualización de Consecutivos

A continuación procederemos a ejeccutar la función
[dbo].[fncDameNuevoConsecutivo] dentro de un SELECT quedando de la siguiente
manera:

![Consecutivo5](media/blog/SQL/Consecutivo/5-Consecutivo.png)

## Revisando Ubicación Funciones Creadas

Si deseas ver donde se encuentran las funciones que creamos.

Selecciona la base de datos -> Procedimientos -> Funciones -> Funciones
Escalares

![Consecutivo6](media/blog/SQL/Consecutivo/6-Consecutivo.png)

## Conclusiones

Se que hay muchas opciones en internet para resolver este problema, pero esta es
una de las que me ha funcionado.

Te invito a que la puedas probar, si deseas agregarle alguna funcionalidad
extra, no dudes en compartirla.

Puedes descargar los scripts utilizados desde mi repositorio en
[GitHub](https://github.com/erickmarcia/SQL)
