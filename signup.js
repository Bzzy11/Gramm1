// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword,  } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByefloaP93g5DvmCvR689cnuJPPks84sU",
  authDomain: "megrammlike.firebaseapp.com",
  projectId: "megrammlike",
  storageBucket: "megrammlike.appspot.com",
  messagingSenderId: "602187000513",
  appId: "1:602187000513:web:64f92a54fc1dd38c7a8240",
  measurementId: "G-F8GFR84G76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#pwd");
const Signup = document.querySelector("#Signup");

Signup.onclick = () => {

  let email = emailInput.value;
  let password = passInput.value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    alert("AMjilttai burtgelee");
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error")
   
  });
}
