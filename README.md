# Laboratorio-5-WEB

## Ejercicio 4

>Analicemos ¿Qué resultado arroja esta funcionalidad?

Esto lo que hace es crear los archivo necesarios para el proyecto y luego con `npm i` se instalan los modulos necesarios.

## Ejercicio 5

>¿Porqué se comporta exactamente igual que si lo hubiera cambiado por HTML puro?

Porque esta creando una funcion que retorna una linea de codigo html, y al llamarla es como si esa linea de html se ejecutara.


>Veamos los resultados y pensemos ¿Qué significa className en React? ¿las props tienen un limite? ¿Quién define las props?

En React, `className` es la forma correcta de asignar clases CSS a un elemento HTML. No se usa `class` como en HTML puro porque `class` es una palabra reservada en JavaScript.
No hay un límite técnico en la cantidad de props que puedes pasar a un componente. Y las props las define el componente padre al invocar al componente hijo. El hijo solo las recibe como argumentos.



