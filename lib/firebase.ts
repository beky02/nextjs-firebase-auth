import Firebase from "firebase/app";
import "firebase/Auth";

if (Firebase.apps.length == 0) {
  Firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_PROJECT_ID,
  });
}


export default Firebase;
