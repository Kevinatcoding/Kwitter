var firebaseConfig = {
      apiKey: "AIzaSyBDEDjKGX2U1Z6TokUbUd0k5EMJHeQFbD0",
      authDomain: "kwitter-2ef6b.firebaseapp.com",
      databaseURL: "https://kwitter-2ef6b-default-rtdb.firebaseio.com",
      projectId: "kwitter-2ef6b",
      storageBucket: "kwitter-2ef6b.appspot.com",
      messagingSenderId: "271507098991",
      appId: "1:271507098991:web:24e834605be1c7dd10ac9a",
      measurementId: "G-DJ61WJT41K"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "addding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
     window.location = "kwitter.html";
}



