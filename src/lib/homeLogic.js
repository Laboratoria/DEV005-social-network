import { signOut } from "firebase/auth";
import { addPost, auth, paintPostsRealTime } from "../firebase/configuracion.js";

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

    //  Se está llama a la función paintPostsRealTime con una función de devolución de llamada como argumento.
    // Esta función de devolución de llamada se ejecutará cada vez que haya cambios en la colección de publicaciones en Firestore,
    // y en ella se vaciará el contenedor de publicaciones y se añadirá un elemento HTML para cada publicación en la colección.
    paintPostsRealTime((querySnapshot) => {
        publications.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const postElement = document.createElement("DIV");
            postElement.textContent = doc.data().comment;
            publications.appendChild(postElement);
        });
    });
};
export { homeLogic };
