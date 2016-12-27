import { ref, firebaseAuth, provider } from '../config/constants'

export function logout () {
  return firebaseAuth().signOut()
}

export function login () {
  return firebaseAuth().signInWithPopup(provider)
}