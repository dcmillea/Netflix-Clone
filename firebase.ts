// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_D6VWMQ0jwfafzSb3IOeqDz3BhgHf7OY",
  authDomain: "netflix-clone-8be8e.firebaseapp.com",
  projectId: "netflix-clone-8be8e",
  storageBucket: "netflix-clone-8be8e.appspot.com",
  messagingSenderId: "793894205116",
  appId: "1:793894205116:web:31eb8d666c2ca85485c2b9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }