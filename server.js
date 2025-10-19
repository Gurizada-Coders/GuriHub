
const firebaseConfig = {
    apiKey: "AIzaSyA3U9irLoN0ESX1KOQxF54OMixdZjRXFQI",
    authDomain: "lista-do-mercado-54717.firebaseapp.com",
    databaseURL: "https://lista-do-mercado-54717-default-rtdb.firebaseio.com",
    projectId: "lista-do-mercado-54717",
    storageBucket: "lista-do-mercado-54717.firebasestorage.app",
    messagingSenderId: "773980205827",
    appId: "1:773980205827:web:ddf4b3898361eaa3012f36"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function loadGurizes() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "Los Forumzitos:<br>";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val();

            onlineName = childKey;

            document.getElementById("output").innerHTML += "<button onclick='openForum(this.innerHTML)' class='forums'>" + onlineName + "</button>";
        });
    });
}

function openForum(id) {
    //quase que escrevo print()
    console.log("Opening Forum: " + id);
    localStorage.setItem("guri", id);
    window.location = "forum.html";
}

function loadForum() {
    id = localStorage.getItem("guri")
    firebase.database().ref("/" + id + "/top").on("value", data => {
        document.getElementById("top").innerHTML = "<h1>" + data.val() + "</h1>";
    });
    firebase.database().ref("/" + id + "/description").on("value", data => {
        document.getElementById("output").innerHTML = "<p>" + data.val() + "</p>";
    });
    firebase.database().ref("/" + id + "/curriculo").on("value", data => {
        document.getElementById("rodape").innerHTML = "<a href='/curriculo/" + data.val() + "'>" + data.val() + "</a>";
    });
}

function addForum() {
    newname = document.getElementById("forumname").value;
    newtop = document.getElementById("forumtop").value;
    newdesc = document.getElementById("forumdesc").value;
    newc = document.getElementById("forumc").value;
    firebase.database().ref("/" + newname + "/").set({
        top: newtop,
        description: newdesc,
        curriculo: newc
    })
    setTimeout(() => {
        window.location = "gurizada.html";
    },500)
}

//porque kkkkkk
//nem dei a bunda hoje ainda kkkkkkkkkkkkkkkkkkkkkkkkkkkkk
//C é mó gay kkk