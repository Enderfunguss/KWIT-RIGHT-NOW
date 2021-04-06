
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBru6EddmWV6b3i9YSgF_uHoq-WP2XbXRM",
      authDomain: "copycatapplol.firebaseapp.com",
      projectId: "copycatapplol",
      storageBucket: "copycatapplol.appspot.com",
      messagingSenderId: "292975934533",
      appId: "1:292975934533:web:1d6cd64ccadd01981df72c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
