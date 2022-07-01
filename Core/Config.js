import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBTmCBANRsUvaLx_K69_T7U_x-fmt38aEY",
    authDomain: "crud-react-fc6a8.firebaseapp.com",
    projectId: "crud-react-fc6a8",
    storageBucket: "crud-react-fc6a8.appspot.com",
    messagingSenderId: "852923465136",
    appId: "1:852923465136:web:49f742df5388526188aa75",
    measurementId: "G-Z91C79712Q"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);