import { db } from "@/firebase/config"
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore"
import { ref } from "vue"

export const getCollection = (col: string) => {
  const documents = ref(),
        error     = ref(),
        colRef    = collection(db, col),
        q         = query(colRef, orderBy("createdAt")),
        colSnap   = onSnapshot(q, snap => {
          const results: { id: string }[] = []
          snap.docs.forEach((doc) => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id})
          })
          documents.value = results
          error.value = null
        }, (err) => {
          console.log(err.message)
          documents.value = null
          error.value = 'could not fetch data'
        })
        return { documents, error }
}