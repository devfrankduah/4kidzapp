var firebaseConfig = {
    apiKey: "AIzaSyA_rX5UbnADz3IALB9tP34jUQqNm_BO9GE",
    authDomain: "chat-app-5515a.firebaseapp.com",
    projectId: "chat-app-5515a",
    storageBucket: "chat-app-5515a.appspot.com",
    messagingSenderId: "844286719938",
    appId: "1:844286719938:web:4073041379b404200d085b",
    measurementId: "G-WQCF25YL5T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    alert("Successfully Signed In");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}