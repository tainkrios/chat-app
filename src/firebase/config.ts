import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBxyaugvX-DEBWlNPXK0p_rWIOblfKWu4o',
  authDomain: 'myfirebasestorage-4800d.firebaseapp.com',
  projectId: 'myfirebasestorage-4800d',
  storageBucket: 'myfirebasestorage-4800d.appspot.com',
  messagingSenderId: '101125819938',
  appId: '1:101125819938:web:ca68c6e40e611a326d847b'
}

//init firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app),
             timestamp = serverTimestamp(),
             auth = getAuth(app)