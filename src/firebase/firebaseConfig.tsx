import firebase from "firebase/compat/app";
// import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
import "firebase/compat/auth"; // Import Firebase Authentication
import "firebase/compat/firestore"; // Import Firestore

    const config = {
        apiKey: import.meta.env.VITE_APP_API_KEY,
        authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_APP_PROJECT_ID,
        storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_APP_ID,
        measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
      };
let app ;
if(!firebase.apps.length){ // condition that multiple instances of firebase is not created
    app = firebase.initializeApp(config); // it initialize the firebase app
}

// Messaging service
export const messaging = getMessaging(app);
const firestore = firebase.firestore(); 
export { firestore };
export default firebase;