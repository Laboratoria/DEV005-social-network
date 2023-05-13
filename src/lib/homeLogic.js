import { signOut } from "firebase/auth";
import {
    addPost,
    auth,
    deletePost,
    editPost,
    paintPostsRealTime,
    db,
    aboutLikes,
} from "../firebase/configuracion.js";
// Se define una función llamada homeLogic que toma un elemento container como argumento.
const homeLogic = (container) => {
    // Se obtienen los elementos HTML necesarios:
    const commentField = container.querySelector("#commentField");
    const publishBtn = container.querySelector("#publishBtn");
    const publications = container.querySelector("#publications");
    const signOffBtn = container.querySelector("#signOffBtn");
    // Se agrega un listener al botón de cerrar sesión para que cuando el usuario de clic se cierre la sesión de Firebase Auth, se borre el ID de usuario guardado en localStorage y se redirija al usuario a welcome
    signOffBtn.addEventListener("click", () => {
        signOut(auth);
        window.localStorage.removeItem("auth");
        window.location.href = "welcome";
    });
    // Se agrega un listener al botón de publicar para que cuando el usuario de clic se obtenga el texto del comentario, se borre el campo de comentario y se llame a la función addPost con el texto del comentario como argumento.
    publishBtn.addEventListener("click", () => {
        const comment = commentField.value;
        commentField.value = "";
        addPost(comment);
    });
    // Se define una función llamada paintPostsRealTime recibe un callback que se ejecuta cada vez que se reciben datos actualizados en tiempo real desde Firestore. El parámetro querySnapshot contiene los datos recibidos.
    paintPostsRealTime((querySnapshot) => {
        // Código que se ejecuta cuando se reciben datos actualizados en tiempo real.
        // Se vacía el contenido actual del elemento publications para evitar la duplicación de datos.
        publications.innerHTML = "";
        // Se recorren todos los documentos recibidos en la consulta y se crea un elemento DIV para cada uno de ellos.
        querySnapshot.forEach((doc) => {
            const postElement = document.createElement("DIV");
            // Se crea un botón para eliminar el post, se le agrega un evento click que llama a la función deletePost con el ID del documento como parámetro, y se agrega este botón como hijo del elemento DIV creado en el paso anterior.
            const deleteBtn = document.createElement("BUTTON");
            deleteBtn.textContent = "Eliminar";
            deleteBtn.addEventListener("click", () => {
                deletePost(doc.id);
            });

            postElement.appendChild(deleteBtn);
            // Se crea un botón para editar el post y se agrega como hijo del elemento DIV creado en el paso 3.

            const likesBtn = document.createElement("BUTTON");
            likesBtn.classList.add("likeBtn");
            likesBtn.textContent = "Like";
            likesBtn.addEventListener("click", () => {
                aboutLikes(doc.id, auth.currentUser.uid)
                    .then(() => {
                        console.log("Like agregado correctamente");
                    })
                    .catch((error) => {
                        console.error("Error al agregar el like:", error);
                    });
            });
            postElement.appendChild(likesBtn);

            const editBtn = document.createElement("BUTTON");
            editBtn.classList.add("editBtn");
            editBtn.textContent = "Editar";
            postElement.appendChild(editBtn);
            // Se crea un campo de entrada INPUT para editar el contenido del post, se establece su valor como el texto del comentario del documento actual, y se agrega como hijo del elemento DIV creado en el paso 3.

            const editField = document.createElement("INPUT");
            editField.setAttribute("type", "text");
            editField.value = doc.data().comment;
            postElement.appendChild(editField);
            // Se crea un elemento SPAN para mostrar el texto del comentario del documento actual, y se agrega como hijo del elemento DIV creado en el paso 3.

            const postText = document.createElement("SPAN");
            postText.classList.add("postText");
            postText.textContent = doc.data().comment;
            postElement.appendChild(postText);
            /* Se agrega un evento a editar que obtiene el valor actual del campo de entrada,
            llama a la función editPost con el ID del documento y el nuevo valor del comentario como parámetros,
            y luego actualiza el documento. Si todo funciona correctamente, se muestra un mensaje de confirmación en la consola.
            Si hay un error, se muestra un mensaje de error en la consola. */
            editBtn.addEventListener("click", () => {
                const newComment = editField.value;
                editPost(doc.id, { comment: newComment })
                    .then(() => {
                        console.log("Comentario actualizado correctamente");
                    })
                    .catch((error) => {
                        console.error("Error al actualizar el comentario:", error);
                    });
            });
            // Finalmente, se agrega el elemento DIV creado en el paso 3 al elemento publications.
            publications.appendChild(postElement);
        });
    });
};
export { homeLogic };
