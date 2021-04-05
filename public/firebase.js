import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_ENV_LOCAL_API_KEY,
  authDomain:process.env.NEXT_PUBLIC_ENV_LOCAL_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_ENV_LOCAL_PROJECT_ID,
  storageBucket:process.env.NEXT_PUBLIC_ENV_LOCAL_STORAGE_BUCKET,
  messagingSenderId:process.env.NEXT_PUBLIC_ENV_LOCAL_MESSAGINGSENDER_ID,
  appId: process.env.NEXT_PUBLIC_ENV_LOCAL_API_ID,
  measurementId: process.env.NEXT_PUBLIC_ENV_LOCAL_MEASUREMENT_ID
};

const app = !firebase.apps.length? firebase.initializeApp(firebaseConfig):firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export{db,auth,provider};