import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYKcn7c6Jkkx2d-CLgP28Pp89N0cEiyM8",
    authDomain: "slack-clone-7f7ff.firebaseapp.com",
    databaseURL: "https://slack-clone-7f7ff.firebaseio.com",
    projectId: "slack-clone-7f7ff",
    storageBucket: "slack-clone-7f7ff.appspot.com",
    messagingSenderId: "849030847305",
    appId: "1:849030847305:web:593292bb6dd99534165898",
    measurementId: "G-1KK8VBWE8C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
  

