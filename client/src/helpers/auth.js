import firebase from 'firebase'
import { ref, firebaseAuth } from '../config/constants'

const auth = () => {
  return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
}

export default auth


export const checkIfAuthed  = (store) => {
  return store.getState().users.isAuthed === true
}

export const logout = () => {
  return firebaseAuth().signOut()
}

export const saveUser = (user) => {
  return ref.child(`users/${user.uid}`)
    .set(user)
    .then(() => user)
}
