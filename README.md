![image logo book ]()
# Book Reviews 
## Índice

* [1. Arquetipo del proyecto](#1-arquetipo-del-proyecto)
* [2. Descripcion de Book Reviews](#2-resumen-de-book-reviews)
* [3. Prototipo y diseño de usuario ](#3-prototipo-y-diseño-de-usuario)
* [4. Historias de usuario](#4-historias-de-usuario)
* [5. Testeo de usabilidad](#5-testeo-de-usabilidad)
* [6. Tecnologías usadas ](#6-tecnologías-usadas)
* [7. Creditos](#7-creditos)

# 1. Arquetipo del proyecto
**Descripción:** Este proyecto busca desarrollar una red social temática que proporcione un entorno seguro y atractivo para que los usuarios puedan conectarse, compartir experiencias, buscar apoyo y participar activamente en la comunidad, promoviendo así la interacción social y la generación de contenido relevante

**Funcionalidad general:** La Red Social tendrá que permitir a cualquier usuario crear una cuenta de acceso
y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones. En pocas palabras este proyecto construirás una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](https://curriculum.laboratoria.la/es/topics/css/02-responsive) (con más de una vista / página)
en la que podamos **leer y escribir datos**.

## Objetivos del proyecto
* Desarrollar una SPA con temática de red social
* Aplicar los conceptos de responsividad en el desarrollo de las vistas (templates)
* Implementar un router para la navegación entre las diferentes vistas de la aplicación
* Emplear un servicio externo para la persistencia de datos de la aplicación
* Crear una suite de pruebas unitarias que permitan testear código asíncrono


# 2. Resumen de Book Reviews
Nuestra red social Book Reviews se desarrolló en base del foco de la investigación de usuarios que buscan una aplicación de libros para encontrar recomendaciones, compartir opiniones y leer reseñas. Con base en estos hallazgos, hemos desarrollado prototipos de una red social funcional y atractiva para aquellos amantes de la lectura.

Nuestro objetivo principal es proporcionar a los usuarios una plataforma de redes sociales donde puedan registrarse y compartir publicaciones. Queremos fomentar la interacción y la participación de los usuarios a través de la función de "me gusta" en las publicaciones. Nos esforzamos por ofrecer una interfaz intuitiva y atractiva, con funciones que faciliten la exploración de géneros, la creación de listas de lectura personalizadas y la interacción con otros miembros de la comunidad.

Creemos firmemente que esta red social será un espacio enriquecedor para los amantes de los libros, donde podrán encontrar inspiración, recomendaciones de calidad y la oportunidad de formar parte de una comunidad apasionada por la lectura.

## Características de Book Reviews
 * **Registro de usuarios:** Los usuarios pueden crear una cuenta personalizada en nuestra plataforma, lo que les permite acceder a todas las funciones y participar en la comunidad de Book Reviews.

 * **Interacción con "me gusta":** Fomentamos la participación y la interacción entre los usuarios mediante la función de "me gusta". Los usuarios pueden expresar su aprecio por las publicaciones de otros miembros al darles un "me gusta", lo que promueve la comunidad y el reconocimiento entre los usuarios.
 * **Interfaz intuitiva y atractiva:** Nos esforzamos por ofrecer una interfaz de usuario fácil de usar, visualmente atractiva y accesible desde diferentes dispositivos. Queremos que la experiencia de navegación sea agradable y cómoda para todos los usuarios.



# 3. Prototipo y diseño de usuario

* ## Prototipo de baja fidelidad
![image prototipo de baja fidelidad movil ]() ![image prototipo de baja fidelidad deskop]()
* ## Prototipo de alta fidelidad
![image prototipo de alta fidelidad movil ]() ![image prototipo de alta fidelidad deskop]()

* ## Flujo de funcionamiento
![image Flujo del post]() 


<details><summary>Links</summary><p>

  * [Figma](https://www.figma.com/file/lKZF7Xn8xjvC0Ctdh34Eu2/Untitled?type=design&node-id=101%3A2&t=20BrO9bJvOnhE2zf-1)

</p></details>



# 4. Historias de usuario

### **Historia de usuario 1:** 
Yo como usuaria quiero poder registrarme en una cuenta por correo o directamente por Google.
  * **Criterios de Aceptación:**
    - Se debe proporcionar un formulario de registro que incluya los campos necesarios para crear una cuenta, como dirección de correo electrónico y contraseña para el logeo como tambien para el reguistro.
    -Si el usuario selecciona la opción de registro por correo electrónico.
    -  Si el usuario ya creo su cuenta y le da guardar, esta la debe redirigir ala ruta welcome para poder logearse.
    - Si el usuario elige la opción de registro por Google, se debe redirigir al usuario a la página de autenticación de Google para completar el proceso y logearse.
    - Si hay errores durante el proceso de logearse, se deben mostrar mensajes de error claros.
  * **Definición de terminado:**
      - Se ha implementado la funcionalidad para registrar una cuenta utilizando correo y contraseña.
      - Se ha implementado la funcionalidad para registrar una cuenta utilizando la opción de inicio de sesión con Google.
      - El formulario de registro permite al usuario ingresar los datos requeridos, como correo electrónico y contraseña.
      - Se han establecido los flujos de navegación adecuados para redirigir al usuario a la pantalla de inicio de sesión después de un registro exitoso.
      - Se han implementado mensajes de confirmación y errores claros y descriptivos para guiar al usuario durante el proceso de registro.
### **Historia de usuario 2:**
Yo como usuario quiero poder publicar un post de recomendación de libros donde pueda agregar el tirulo del libro y el resumen así mismo pueda editar el post oh borrarlo.
  * **Criterios de Aceptación:**
      - Como usuario, puedo acceder a la función de publicar un post con un botón y llenar los campos para postear.
      - Al postear mi post, se mostrara mi nombre de usuario en el post.
      - Podre editar un post existente y permite actualizar el título oh la descripción, se actualiza la visualización del post en la lista de publicaciones.
      - Al borrar un post, se solicita una confirmación para asegurarme de que realmente deseo eliminarlo.
  * **Definición de terminado:**
      - Se creara un botón con una funcionalidad de popup para abrir una caja de los campos de publicar con título y descripción.
      - Se implemento imagen  y nombre a cada post con el usuario correspondiente que da post.
      - Implemente un botón para las funcionalidades de borrar y editar 
      - Se brinda la funcionalidad de editar el contenido de un post existente, permitiendo a los usuarios actualizar el título del libro o modificar el resumen
      - El botón editar abrirá el popup y se podrá cambiar y salvar los datos y también si no desea cambiar, se implementara un botón de cerrar popup.      
      - Para borrar el post se implementó un botón que si le da clic el usuario, saldrá un mensaje de confirmación si desea borrar oh no.
### **Historia de usuario 3:**
Yo como usuario quiero interactuar en los otros posts con un like y ver el numero de likes que tiene el post.
  * **Criterios de Aceptación:**
      - Como usuario, puedo interactuar con los posts de otros usuarios utilizando la función de "like".
      - Al dar "like" a un post, se registra mi interacción y se refleja en el contador de likes del post.
      - El contador de likes del post muestra el número total de "likes" que ha recibido.
      - Si doy "like" a un post y luego lo retiro, el contador de likes se actualiza correctamente reflejando el cambio
  * **Definición de terminado:**
      - Se agrego un botón con diseños de corazón.
      - Se agrego un capo para gurdar y mostrar los numeros de likes
      - Agregamos una funcionalidad de agregar y remover likes validando que sea el usuario logeado.

# 5. Testeo de usabilidad
*  Agregar a la función de borrar post una ventana de confirmación para una buena experiencia de usuario.
* Cursor tex para los campos de texto
* Se puede agregar un cursor pointer  botones a los botones y enlaces.
* Se podría  cambiar el color de la fuente de la letra en el login de "recomiéndanos un libro" por un color mas claro.
* Los botones tiene forma de campos, podría ser mas redondeado para dar la impresión de un botón.

# 6. Tecnologías usadas 
### Tecnologías 
* Java script 
* HTML
* CSS
* GIT
* FIGMA
*FIRE BASE
### Otras herramientas
* Testing
* Eslint

# 7. Creditos 
## _"Mantén una actitud positiva y persevera en tu búsqueda del éxito."_
### Desarrolladora:  _Fiorella Yumi diaz_




