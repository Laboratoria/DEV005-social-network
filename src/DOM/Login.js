// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { LoginTemplate } from "../templates/loginTemplate.js";
import { auth } from "../lib/index.js";
import { async } from "@firebase/util";

export const Login = (onNavigate) => {
  const div = document.createElement("div");
  div.innerHTML = LoginTemplate;
  const register = div.querySelector("#linkRegister");
  register.addEventListener("click", () => {
    onNavigate("/registrate");
  });
  const loginGoogle = div.querySelector("#btn-google");
  loginGoogle.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials);
    } catch (error) {
      console.log(error);
    }
  });
  const signIn = div.querySelector("#signIn");
  signIn.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signIn["email"].value;
    const password = signIn["password"].value;
    try {
      const credentialEmail = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentialEmail);
    } catch (error) {
      console.log(error);
    }
  });

  return div;
};
