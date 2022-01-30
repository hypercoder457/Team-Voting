import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDG7INvh1D20lIMQ0HUhIOHZy15H5WTXAc",
    authDomain: "team-voting-app-332b3.firebaseapp.com",
    databaseURL: "https://team-voting-app-332b3-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-332b3",
    storageBucket: "team-voting-app-332b3.appspot.com",
    messagingSenderId: "832700178591",
    appId: "1:832700178591:web:3e57fc28f133d0a5dd42aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();