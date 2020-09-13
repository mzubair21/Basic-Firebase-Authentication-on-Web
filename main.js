// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCf3xsMPr8R5jRo_h8kpvsdEwQRLMVoZH8",
    authDomain: "bytewise-form.firebaseapp.com",
    databaseURL: "https://bytewise-form.firebaseio.com",
    projectId: "bytewise-form",
    storageBucket: "bytewise-form.appspot.com",
    messagingSenderId: "1077728036836",
    appId: "1:1077728036836:web:16ecb077daecaeb49629f1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(function() {
    var user = auth.currentUser;
    if (user) {
        alert("Active User " + user.email);
    } else {
        alert("No Active User");
    }
});

function signUp() {
    var user = auth.currentUser;
    if (user) {
        alert("Already Logged in")
    } else {
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        auth.createUserWithEmailAndPassword(email.value, password.value).catch(e => alert(e.message));
        alert("SignUp");
    }
}

function signIn() {
    var user = auth.currentUser;
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    if (!(user)) {
        auth.signInWithEmailAndPassword(email.value, password.value).catch(e => alert(e.message));
        alert("Signing in");
    } else {
        alert("Already Logged in");
    }
}

function signOut() {
    var user = auth.currentUser;
    if (user) {
        if (confirm(" Are you sure to SignOut?")) {
            auth.signOut().catch(e => alert(e.message));
            alert("Signed Out");
        }
    } else {
        alert("No Active User to SignOut");
    }
}

function deleteUser() {
    var user = auth.currentUser;
    if (user) {
        alert("User " + user.email + " Deleted");
        user.delete().then(function() {}).catch(e => alert(e.message));
    } else {
        alert("No Active User to Delete");
    }
}

document.getElementById('clear').addEventListener('submit', clear);

function clear(e) {
    e.preventDefault();
    alert("Page Cleared");
    document.getElementById('clear').reset();
}