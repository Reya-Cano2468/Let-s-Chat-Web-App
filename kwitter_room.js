
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAEG5pkWoo2ydGsLFFAoHJ4hQFeWN30Y3g",
    authDomain: "kwitter-c833a.firebaseapp.com",
    projectId: "kwitter-c833a",
    storageBucket: "kwitter-c833a.appspot.com",
    messagingSenderId: "398997861862",
    appId: "1:398997861862:web:98543424fb85a94ada1227",
    measurementId: "G-MXGS3TDN7V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();