import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDGkFXv2wn3wx4p_oWIKjrgTprOEizRcqA",
  authDomain: "online-food-app-656bf.firebaseapp.com",
  projectId: "online-food-app-656bf",
  storageBucket: "online-food-app-656bf.appspot.com",
  messagingSenderId: "611293670819",
  appId: "1:611293670819:web:db7bf22acafafa3eec7e16"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage }
