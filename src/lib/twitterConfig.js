/* import { signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import { auth } from './firebaseConfig';

 const providerTwitter = new TwitterAuthProvider();
export const twitterConfig = () => {
    const credentials3 = signInWithPopup(auth, providerTwitter);
    console.log(credentials3);
    console.log("sign in with Twitter");
    return credentials3;
}
signInWithPopup(auth, providerTwitter);
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  }); */
