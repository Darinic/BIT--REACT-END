import firebase from "firebase/app";
import 'firebase/firestore';
require('firebase/auth');


const firebaseConfig = {
  apiKey: "AIzaSyANXJOkF1A22y3VbIZbJwNjDvkZMAXHNDM",
  authDomain: "expenses-a1950.firebaseapp.com",
  projectId: "expenses-a1950",
  storageBucket: "expenses-a1950.appspot.com",
  messagingSenderId: "1085473128782",
  appId: "1:1085473128782:web:609b87f9450b1bf481de1f"
};

  //Initialize Firebase
  export const app= firebase.initializeApp(firebaseConfig);

  export default firebase