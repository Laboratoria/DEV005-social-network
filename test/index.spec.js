// // Importar las dependencias necesarias para las pruebas
// import { signOut } from "firebase/auth";
// import { addPost } from "../src/firebase/configuracion.js";
// import { homeLogic } from "../src/lib/index.js";

// // Mockear los elementos necesarios para la prueba
// const containerMock = document.createElement("div");
// containerMock.innerHTML = `
//     <input id="commentField" type="text">
//     <button id="publishBtn"></button>
//     <div id="publications"></div>
//     <button id="signOffBtn"></button>
//     <span id="userName"></span>
// `;
// // Mockear localStorage
// const localStorageMock = {
//     getItem: jest.fn(),
//     removeItem: jest.fn(),
// };
// global.window = {
//     localStorage: localStorageMock,
//     location: {
//         href: "",
//     },
// };

// // Mockear las funciones de Firebase que se utilizan en la función homeLogic
// jest.mock("firebase/auth", () => ({
//     signOut: jest.fn(),
// }));
// jest.mock("../firebase/configuracion.js", () => ({
//     addPost: jest.fn(),
//     deletePost: jest.fn(),
//     editPost: jest.fn(),
//     paintPostsRealTime: jest.fn(),
//     aboutLikes: jest.fn(),
//     aboutDislikes: jest.fn(),
// }));

// describe("homeLogic", () => {
//     beforeEach(() => {
//         // Limpiar el mock y reiniciar los mocks antes de cada prueba
//         jest.clearAllMocks();
//     });

//     test("signOffBtn click event should call signOut and removeItem from localStorage", () => {
//         homeLogic(containerMock);

//         const signOffBtn = containerMock.querySelector("#signOffBtn");
//         signOffBtn.click();

//         expect(signOut).toHaveBeenCalledTimes(1);
//         expect(localStorageMock.removeItem).toHaveBeenCalledWith("auth");
//     });

//     test("publishBtn click event should call addPost with the comment value and clear the commentField", () => {
//         homeLogic(containerMock);

//         const commentField = containerMock.querySelector("#commentField");
//         const publishBtn = containerMock.querySelector("#publishBtn");

//         commentField.value = "Test comment";
//         publishBtn.click();

//         expect(addPost).toHaveBeenCalledWith("Test comment");
//         expect(commentField.value).toBe("");
//     });

//     // Agregar más pruebas unitarias según sea necesario
// });
