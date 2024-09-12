// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoLEJ8r5LUh8XnOKbyAKKG7My-IQjFOdA",
  authDomain: "moviebooking-fa042.firebaseapp.com",
  databaseURL: "https://moviebooking-fa042-default-rtdb.firebaseio.com",
  projectId: "moviebooking-fa042",
  storageBucket: "moviebooking-fa042.appspot.com",
  messagingSenderId: "536339067315",
  appId: "1:536339067315:web:02987a2901be8f2bf9dbc6",
  measurementId: "G-XN81RS14BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { auth, database, storage };
