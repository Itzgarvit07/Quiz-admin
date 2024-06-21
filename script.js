  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import {
    getFirestore,
    setDoc,
    doc,
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBcUKpt8zuM4WcoWgeU6F2p36EULXmQW5Y",
    authDomain: "quiz-fbf9b.firebaseapp.com",
    projectId: "quiz-fbf9b",
    storageBucket: "quiz-fbf9b.appspot.com",
    messagingSenderId: "455636176055",
    appId: "1:455636176055:web:d7bad53aca6919c552d132",
    measurementId: "G-P6WQV3LYH4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app)
 const db = getFirestore()
  const btn = document.getElementById('submit')

  btn.addEventListener("click",function(event){
event.preventDefault()
const name = document.getElementById('registerName').value
const email = document.getElementById('registerEmail').value
const password = document.getElementById('registerPassword').value
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const userData = {
      email: email,
      name:name,
    }
    return setDoc(doc(db,"users",user.uid),userData)
  
    // ...
  }).then(()=>{
      alert('creating account...')
window.location.href = "login.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  })