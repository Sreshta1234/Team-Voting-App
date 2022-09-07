import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyAC1isF3WI2Y82_NAxazZI6Zr5EgxDdCnc",
    authDomain: "team-voting-app-fb932.firebaseapp.com",
    databaseURL: "https://team-voting-app-fb932-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-fb932",
    storageBucket: "team-voting-app-fb932.appspot.com",
    messagingSenderId: "640441136688",
    appId: "1:640441136688:web:aff886897ad2c9436e5ff5",
    measurementId: "G-8RDD5F5XC1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();