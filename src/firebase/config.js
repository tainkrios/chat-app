import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAr50tmHtIf-w9vSPI0vMFUO6BOCFfY1HI",
  authDomain: "chat-app-6eb0c.firebaseapp.com",
  projectId: "chat-app-6eb0c",
  storageBucket: "chat-app-6eb0c.appspot.com",
  messagingSenderId: "1017223270622",
  appId: "1:1017223270622:web:2b38422335b572146db24f"
}

const app = initializeApp(firebaseConfig)

const projectFirestore = getFirestore(app)

export { projectFirestore }