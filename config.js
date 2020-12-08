import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCnEOl_VXgMNscU6TbH2DVVoVO8wx3C5rs",
    authDomain: "attendance-app-1652b.firebaseapp.com",
    databaseURL: "https://attendance-app-1652b.firebaseio.com",
    projectId: "attendance-app-1652b",
    storageBucket: "attendance-app-1652b.appspot.com",
    messagingSenderId: "663800953689",
    appId: "1:663800953689:web:158e41bfe08a5ddb142a48"
  };
   //Initialize Firebase;
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();