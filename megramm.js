  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword ,} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
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



const emailup = document.querySelector("#semail");
const passwordup = document.querySelector("#spwd");
const loginBtn = document.querySelector("#loginBtn");


loginBtn.onclick = async () => {

    let email = emailup.value;
    let password = passwordup.value;

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("Compillated");
   
    
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("please try again")
   
    });
}
