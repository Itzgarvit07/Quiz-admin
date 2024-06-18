import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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

const btn = document.getElementById('login')

btn.addEventListener("click",function(event){
    event.preventDefault()
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPassword').value
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('logging account...')
    window.location.href = "admin.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})



