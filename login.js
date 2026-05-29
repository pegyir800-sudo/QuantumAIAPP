// login.js

import { initializeApp }

from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {

getAuth,

signInWithEmailAndPassword,

GoogleAuthProvider,

signInWithPopup,

onAuthStateChanged

}

from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

/* FIREBASE CONFIG */

const firebaseConfig = {

apiKey: "AIzaSyA6RGcEIFPSF25wsMN-7QLg1-EvJrtvLmY",

authDomain: "my-web-e9b90.firebaseapp.com",

projectId: "my-web-e9b90",

storageBucket: "my-web-e9b90.firebasestorage.app",

messagingSenderId: "253275343289",

appId: "1:253275343289:web:169a10b703962d3ae90e68",

measurementId: "G-RDV9JZYJDZ"

};

/* INITIALIZE FIREBASE */

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

const provider =
new GoogleAuthProvider();

/* AUTO LOGIN CHECK */

onAuthStateChanged(auth,
(user)=>{

if(user){

window.location.href =
"menu.html";

}

});

/* LOGIN FUNCTION */

window.login =
async function(){

const email =

document.getElementById(
"email"
).value.trim();

const password =

document.getElementById(
"password"
).value.trim();

if(email === "" || password === ""){

alert(
"Please fill all fields."
);

return;

}

try{

const userCredential =

await signInWithEmailAndPassword(
auth,
email,
password
);

const user =
userCredential.user;

/* EMAIL VERIFIED */

if(user.emailVerified){

localStorage.setItem(
"userEmail",
user.email
);

sessionStorage.setItem(
"isLoggedIn",
"true"
);

alert(
"Login Successful"
);

window.location.href =
"menu.html";

}else{

alert(
"Please verify your email first."
);

}

}catch(error){

alert(error.message);

}

}

/* GOOGLE LOGIN */

window.googleLogin =
async function(){

try{

const result =

await signInWithPopup(
auth,
provider
);

const user =
result.user;

localStorage.setItem(
"userEmail",
user.email
);

sessionStorage.setItem(
"isLoggedIn",
"true"
);

alert(
"Google Login Successful"
);

window.location.href =
"menu.html";

}catch(error){

alert(error.message);

}

}