REGISTRO DE ACTIVIDADES

El presente proyecto es un aplicativo web sobre registro de actividades, el cual permite registrar mis trabajos académicos por hacer, permite la introducción, consulta, modificación y eliminación de los datos pertenecientes a la base de datos establecida.

ARQUITECTURA:
  Está desarrollado en el lenguaje de programación JavaScript tanto en la parte del frontend como en el backend. No se utilizó ningún framework para la programación del frontend, es JavaScript puro.
  Para el frontend se utilizan clases, fetch, funciones asíncronas, HTML5, algúnos estilos propios de CSS y un framework de CSS llamado Bootstrap 4 para los estilos, Webpack para el desarrollo de la aplicación, fontawesome para los íconos, entre otros.
  Para la parte del backend se utilizó NodeJS que es un intérprete de JavaScript, y para la creación del servidor se utilizará un ExpressJS, un framework de NodeJS. Se desarrollo una API REST para realizar las petición HTTP a distintas rutas del servidor.
  La base de datos es una base de datos estructural o SQL llamada Postgresql.
  Para el despliegue de la aplicación se usa el servicio de hosting de Heroku para subir el proyecto y Clever Cloud para la base de datos.
  Además, todo el código como se notará esta subido a un repositorio de GitHub.
  
FUNCIONALIDAD:
  *Registro:
      Este apartado registra las actividades académicas que usted desee. Los parámetros son: nombre de la actividad, descripción, materia, curso, docente, fecha inicio, fecha final y un código que se genera automáticamente al insertar el dato.
      Esta interfaz válida que la tarea tenga una longuitud de caracteres con un mínimo de 5 y máximo de 25. Además, de que todos los campos son requeridos, excepto la descripción que es opcional.
  *Consulta:
      En este interfaz se puede consultar todas las actividades registradas por medio de 4 parámetro: código de la actividad, materia, curso y docente.
      Valida que al menos haya un parámetro seleccionado para buscar.
  *Edición:
      En esta interfaz se realizan ediciones de las actividades, para ello hay un apartado donde debe ingresar el código de la actividad, si esta existe los datos se muestran en pantalla, sino muestra un mensaje de error, una vez cargado se puede editar y guardar.
      Vaiida que el código exista, si no se obtienen datos el botón guardar seguira desactivado, valida los campos que esten completos, y que se haya hecho al menos un cambio en cualquier parámetro.
  *Eliminar:
    Esta interfaz es similar a la de consulta, consulta por 4 parámetos ya mencionados, pero agrega en los datos obteidos por la búsqueda un botón para eliminar.
    Valida que al menos haya un parámetro seleccionado para buscar. 
