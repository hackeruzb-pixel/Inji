
// 🔑 Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyAHFfEYpJcxJQT_7KcFbrvrsfWuyki2O9I",
//   authDomain: "task-dfbbf.firebaseapp.com",
//   projectId: "task-dfbbf",
//   storageBucket: "task-dfbbf.firebasestorage.app",
//   messagingSenderId: "1077781805742",
//   appId: "1:1077781805742:web:3742f8ca26ec4a2f980b3f"
// };
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🔑 Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyAHFfEYpJcxJQT_7KcFbrvrsfWuyki2O9I",
  authDomain: "task-dfbbf.firebaseapp.com",
  projectId: "task-dfbbf",
  storageBucket: "task-dfbbf.firebasestorage.app",
  messagingSenderId: "1077781805742",
  appId: "1:1077781805742:web:3742f8ca26ec4a2f980b3f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔥 REGISTER
window.register = function () {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Registered!");
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
};

// 🔥 LOGIN
window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "home.html"; // 🚀 REDIRECT
    })
    .catch(err => alert(err.message));
};

// 🔥 LOGOUT
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};