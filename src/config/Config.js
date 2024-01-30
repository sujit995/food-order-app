import firebase from 'firebase/compat/app'; // Import the compat version for Firebase 10
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDGkFXv2wn3wx4p_oWIKjrgTprOEizRcqA",
  authDomain: "online-food-app-656bf.firebaseapp.com",
  projectId: "online-food-app-656bf",
  storageBucket: "online-food-app-656bf.appspot.com",
  messagingSenderId: "611293670819",
  appId: "1:611293670819:web:db7bf22acafafa3eec7e16"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const fs = app.firestore();
const storage = app.storage();

export { auth, fs, storage }
