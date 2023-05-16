// Se importan las siguientes funciones y objetos de Firebase.
import { signOut } from "firebase/auth";

import {
    addPost,
    auth,
    deletePost,
    editPost,
    paintPostsRealTime,
    aboutLikes,
    aboutDislikes,
} from "../firebase/configuracion.js";

// Se define una función llamada loginLogic que toma un elemento container como argumento.
const homeLogic = (container) => {
    // Se obtienen los elementos HTML necesarios:
    const commentField = container.querySelector("#commentField");
    const publishBtn = container.querySelector("#publishBtn");
    const publications = container.querySelector("#publications");
    const signOffBtn = container.querySelector("#signOffBtn");
    const userName = container.querySelector("#userName");

    // Usamos la información del localStorage
    const user = JSON.parse(window.localStorage.getItem("user"));
    userName.textContent = user.displayName;

    // Boton de salida
    signOffBtn.addEventListener("click", () => {
        signOut(auth);
        window.localStorage.removeItem("auth");
        window.location.href = "welcome";
    });

    // Boton de publicar
    publishBtn.addEventListener("click", () => {
        const comment = commentField.value;
        commentField.value = "";
        addPost(comment);
    });

    // Mostrar publiciones
    paintPostsRealTime(async (querySnapshot) => {
        publications.innerHTML = "";
        querySnapshot.forEach((doc) => {
            // Contenedor para cada publicación
            const postElement = document.createElement("DIV");
            postElement.classList.add("publicationContainer");
            // Boton de like
            const likesBtn = document.createElement("IMG");
            const isLike = doc.data().likes.some((item) => item === auth.currentUser.uid);
            likesBtn.classList.add("likeBtn");
            likesBtn.src = isLike ? "./img/redLike.svg" : "./img/grayLike.svg";
            likesBtn.addEventListener("click", async () => {
                if (isLike) {
                    await aboutDislikes(doc.id, auth.currentUser.uid);
                } else {
                    await aboutLikes(doc.id, auth.currentUser.uid);
                }
            });
            postElement.appendChild(likesBtn);
            // Contador de likes
            const likesParagraph = document.createElement("SPAN");
            likesParagraph.classList.add("likesParagraph");
            const countLikes = doc.data().likes.length;
            likesParagraph.textContent = countLikes;
            postElement.appendChild(likesParagraph);
            // Boton eliminar
            const deleteBtn = document.createElement("IMG");
            deleteBtn.classList.add("deleteBtn");
            deleteBtn.src = "./img/iconDelete.svg";
            deleteBtn.addEventListener("click", () => {
                deletePost(doc.id);
            });
            postElement.appendChild(deleteBtn);
            // Boton editar
            const editBtn = document.createElement("IMG");
            let IsActualizar = false;
            editBtn.classList.add("editBtn");
            editBtn.src = "./img/iconEdit.svg";
            postElement.appendChild(editBtn);
            // Contenedor editField y postText
            const divContentComment = document.createElement("DIV");
            divContentComment.classList.add("divContentComment");
            postElement.appendChild(divContentComment);
            // Campo de texto para actualizar comentario
            const editField = document.createElement("INPUT");
            editField.setAttribute("type", "text");
            editField.value = doc.data().comment;
            // Comentario
            const postText = document.createElement("SPAN");
            postText.classList.add("postText");
            postText.textContent = doc.data().comment;
            divContentComment.appendChild(postText);
            editBtn.addEventListener("click", async () => {
                if (IsActualizar) {
                    const newComment = editField.value;
                    await editPost(doc.id, { comment: newComment });
                    IsActualizar = false;
                    editBtn.src = "./img/iconEdit.svg";
                    divContentComment.innerHTML = "";
                    divContentComment.appendChild(postText);
                } else {
                    IsActualizar = true;
                    editBtn.src = "./img/checkEdit.svg";
                    divContentComment.innerHTML = "";
                    divContentComment.appendChild(editField);
                }
            });
            publications.appendChild(postElement);
        });
    });
};
export { homeLogic };
