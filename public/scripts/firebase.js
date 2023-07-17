import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getFirestore,collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvjHxxFF9TyQBjJ5_6w-mks1eFn00R6uA",
  authDomain: "soma-2023.firebaseapp.com",
  databaseURL: "https://soma-2023-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "soma-2023",
  storageBucket: "soma-2023.appspot.com",
  messagingSenderId: "1088709556296",
  appId: "1:1088709556296:web:02eda02909576de6ee007d",
  measurementId: "G-B4FMXJEEG8"
};
//initialise firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

/* VOLLIE FORM */
console.log(db);
var vollieAppForm = document.getElementById("vol-form")

vollieAppForm.addEventListener('submit',submitForm);

function submitForm(e) {
  e.preventDefault();
  const formData = {
    firstName: getInputVal('first-name'),
    lastName: getInputVal('last-name'),
    preferredName:getInputVal('preferred-name'),
    pronoun:getInputVal('pronoun'),
    email:getInputVal('email'),
    mobile:getInputVal('mobile'),
    prevVol:getInputVal('prev-vol'),
    whyVol:getInputVal('why-vol'),
    qualDriver:getInputVal('qual-driver'),
    qualWhite:getInputVal('qual-white'),
    qualFirstAid:getInputVal('qual-firstaid'),
    qualMentalHealth:getInputVal('qual-mental'),
    otherSkills:getInputVal('other-skills'),
    friendAct:getInputVal('friend-act'),
    seperateDays:getInputVal('seperate-days'),
    sameDay:getInputVal('same-day'),
    roleSustainability:getInputVal('role-sustainability'),
    roleWelcome:getInputVal('role-welcome'),
    roleSafety:getInputVal('role-safety'),
    rolePackdown:getInputVal('role-packdown'),
    accessibility:getInputVal('vol-accessibility'),
    timestamp:serverTimestamp()
  }
  saveVollieApp(formData);
  vollieAppForm.classList.add('visually-hidden');
  document.querySelector('.form-accepted').classList.remove('visually-hidden');
}

function getInputVal(id) {

  const el = document.getElementById(id)

  if (el.matches('[type="checkbox"]')) {
    return el.checked;
  }
  return el.value;
}

function saveVollieApp(formData) {
  addDoc(collection(db, "VollieApplications"),formData);
}
/*
function saveVollieApp(formData) {
    const newVollieKey = push(child(ref(db), 'vollieForm')).key;
    const updates = {};
    updates['/vollieForm/' + newVollieKey] = formData;
    update(ref(db),updates)
}
*/


