import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref } from 'vue'
import { auth } from './../firebase/config'

const error = ref()
