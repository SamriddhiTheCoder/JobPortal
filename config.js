import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqHjUy7cf6oGFZzYyataksHrCHN-7h-hM",
  authDomain: "jobportal-1e03d.firebaseapp.com",
  projectId: "jobportal-1e03d",
  storageBucket: "jobportal-1e03d.appspot.com",
  messagingSenderId: "890737837814",
  appId: "1:890737837814:web:f1fb5d5baa2f59f2deced7"
};

// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   