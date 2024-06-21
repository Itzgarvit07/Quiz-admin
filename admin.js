import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
    getFirestore, getDoc, doc
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
const db= getFirestore()

onAuthStateChanged(auth,(user) =>{
    if(user){
        const loggedInUserId = localStorage.getItem("loggedInUserId");
        if(loggedInUserId){
            const docRef= doc(db,"users",loggedInUserId)
            console.log("Retrieving document with ID:",loggedInUserId)

            getDoc(docRef).then((docSnap)=>{
                if(docSnap.exists()){
                    const userData = docSnap.data()
                    console.log("Document data:",userData)
                    const userNameElement = document.getElementById('loggedUserName')
                    const userEmailElement = document.getElementById('loggedUserEmail')
                    
                    if(userNameElement && userEmailElement){
                        userNameElement.innerText = userData.name;
                        userEmailElement.innerText = userData.email;
                        console.log('User data set in DOM elements');
                    } else{
                        console.error('DOM elements for user data not found')
                    }
                } else{
                    console.log("No document found matching the provided ID:",loggedInUserId)
                }
            }).catch((error)=>{
                console.error('error getting document',error)
            })
        } else{
            console.log('user ID not found in local storage')
        }
    } else{
        console.log('User is not authenticated')
    }
})

const logOutButton = document.getElementById("logout");
if (logOutButton) {
  logOutButton.addEventListener("click", () => {
    localStorage.removeItem("loggedInUserId");
    signOut(auth).then(() => {
      window.location.href = "login.html";
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  });
} else {
  console.error("Logout button not found");
}
