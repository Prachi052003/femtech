// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDFq91FaX5PRzb_qlIS-_AoxEUeLHncWXM",
	authDomain: "developforher-e7f4c.firebaseapp.com",
	projectId: "developforher-e7f4c",
	storageBucket: "developforher-e7f4c.appspot.com",
	messagingSenderId: "530653445391",
	appId: "1:530653445391:web:1e70bb5ab5f7b44a2ed27a"
  };
// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
