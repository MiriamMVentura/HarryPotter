# Harry Potter UI

## Índice

* [1. Como desplegar este proyecto](#como-desplegar-este-proyecto)
* [2. Anotaciones sobre el MVP](#anotaciones-sobre-el-mvp)

# Como desplegar este proyecto
- Asegurate de tener un 📝 editor de texto en condiciones, algo como Atom o Visual Studio Code.
- Para ejecutar los comandos a continuación necesitarás una 🐚 UNIX Shell, que es un programita que interpreta líneas de comando (command-line interpreter) así como tener git instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar la versión completa de Cmder que incluye Git bash y si tienes Windows 10 o superior puedes usar Windows Subsystem for Linux.
- Puedes hacer 🍴 fork este repo
- ⬇️ Clona tu fork a tu computadora (copia local).
- 📦 Instala las dependencias del proyecto con el comando npm install. Nota: nececistas tener instalado Node.js (que incluye npm).
- Este proyecto emplea una Api "falsa" por lo que antes de arrancar ejecuta el comando "npm run mock-api" para levantar el servidor con Json Server (que ya viene incluido en las dependencias), podrás ver la data en json dirigiendote http://localhost:8000/characters en tu navegador.
- Si todo ha ido bien, deberías poder ejecutar el proyecto de React con el comando "npm run start", dirígete a http://localhost:5000 en tu navegador.

- 🚀 podrás ver la información de los personajes de Harry Potter en tarjetas.

# Anotaciones sobre el MVP
- Trabaje con la metodología Agile Scrum haciendo planeación con el tablero Kanban de GitHub Projects, realicé dailys y restrospectivas al finalizar el día, esto me hizo equilibrar mi trabajo y esfuerzos en implementación de funcionalidad a la par del estilo.

Abordé el proyecto con historias de usuario llegando a un MVP:
- El usuario puede ver todos los personajes de Harry Potter al entrar a la página
- Puede identificar el estatus de vida de los personajes con una leyenda en las tarjetas o con un color de tarjeta.
- Puede identificar cúales personajes son "Estudiantes", "Maestros" a travez de un filtro por botones.
- Puede identificar qué personajes pertenecen a una casa por el color de la tarjeta.
** Puede identificar qué personajes tienen el estatus de Vivo

Un clip del proyecto desplegado en local:
https://www.loom.com/share/96b87c71bd8547d69648957f1a9cfc4d

Proyecto desplegado en Netlify:
https://happy-babbage-153716.netlify.app/


## ¿Qué es lo qué mas te gustó de tu desarrollo?
Este proyecto de 1 sprint de 2 días me enfrentó a nuevos retos que representarón nuevos conocimientos:
- Fue la primera vez que usé el procesador de Css Sass para dar estilo, me demoró un poco entenderlo y aunque no pude llevarlo al maximo, creo que lleve bien la curva de aprendizaje en este sprint, sin duda seguré explorandolo en este proyecto y en otros más.
- Aunque no logré implementar la colección de favoritos con Redux, lo que investigué en spikes me parece una buena herramienta para continuar prendiendo del state en React.

## Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?
- CREAR DATA e implementar Pruebas Unitarias de lo que ya tengo construido.
Como siguientes pasos quisiera dar funcionalidad al modal para crear data (añadir personajes) e implementar Redux para la hacer la colección de favoritos.

## Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste
- El de renderizar estilos por condiciones de información, pensé me iban a demorar más tiempo pude solucionarlos cuando los pensé como un algoritmo a resolver.
- Decidí hacerlo las peticiones a la API con Json server y la libreria Axios, la petición GET no me devolvia respuesta... Revisé la terminal donde la desplegué, me dío algunos indicios por donde buscar solución, CORS, endpoint...







