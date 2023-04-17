import { OAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';

function logMicrosoft () {
    const provider = new OAuthProvider('microsoft.com');
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
    // User is signed in.
    // IdP data available in result.additionalUserInfo.profile.

    // Get the OAuth access token and ID Token
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
    })
    .catch((error) => {
    // Handle error.
    });
    
    
};

export default logMicrosoft;