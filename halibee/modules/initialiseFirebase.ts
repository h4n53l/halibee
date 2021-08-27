import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import {getAnalytics} from "firebase/analytics"

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMATIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}
const firebaseApp = initializeApp(firebaseConfig); 

export const analytics = getAnalytics(firebaseApp)
export const auth = getAuth(firebaseApp);