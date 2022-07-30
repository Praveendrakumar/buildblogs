import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCdbVtKZXQz2qx2pgN4EobH-jEjiSC9r2A",
    authDomain: "react-hooks-blog-6cc99.firebaseapp.com",
    projectId: "react-hooks-blog-6cc99",
    storageBucket: "react-hooks-blog-6cc99.appspot.com",
    messagingSenderId: "1046895943876",
    appId: "1:1046895943876:web:26df0815efc0ff44f16991"
  };

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();