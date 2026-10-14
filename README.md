# Implementación de React y Vite

## Portada
 **Autora:** Xana Amalinalli Pérez Jiménez  
 **Institución:** Instituto Tecnológico de Oaxaca  
* **Nombre del proyecto:** LISTA DE TAREAS CON REACT  
* **Descripción breve:** Este proyecto es una aplicación web desarrollada con React y Vite para la gestión simple de tareas pendientes. Implementa conceptos fundamentales como componentes funcionales, paso de propiedades (props), manejo de estado con `useState`, manejo de eventos y renderizado dinámico de listas.

## Preguntas y Respuestas

### a) ¿Qué diferencia hay entre props y state en React?
Las **props** (propiedades) son parámetros de entrada inmutables que se pasan de un componente padre a un componente hijo para transmitir información; el componente que las recibe no las puede modificar directamente. Por otro lado, el **state** (estado) es una estructura de datos interna y mutable que maneja un componente para almacenar información que cambia a lo largo del tiempo, provocando que la interfaz se vuelva a renderizar cuando su valor se actualiza.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
Es importante usar una **key** única para que React pueda identificar de manera eficiente qué elementos de la lista han cambiado, se han agregado o han sido eliminados. Esto le permite al algoritmo de reconciliación de React actualizar únicamente los elementos específicos en el DOM en lugar de volver a renderizar toda la lista completa, mejorando el rendimiento de la aplicación.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
La función useState es un Hook que permite agregar estado interno a un componente funcional. Retorna un arreglo con dos elementos: el valor actual del estado y una función que permite actualizar dicho valor. En la lista de tareas se utilizó useState dentro del componente App.jsx para mantener el arreglo de tareas agregadas (const [tareas, setTareas] = useState(...)), y en TaskForm.jsx para controlar el texto introducido por el usuario en el campo de entrada (const [texto, setTexto] = useState('')).

### d) Repositorio: https://github.com/HannHanna/ProgWeb_t3_act4_react

### e)GitHub Pages: https://hannhanna.github.io/ProgWeb_t3_act4_react/


