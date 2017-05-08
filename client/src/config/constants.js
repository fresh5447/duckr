import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyALFXaGCSapM7el-fp0AdG3QJy6oJnWWC8",
  authDomain: "duckr-d371b.firebaseapp.com",
  databaseURL: "https://duckr-d371b.firebaseio.com",
  projectId: "duckr-d371b",
  storageBucket: "duckr-d371b.appspot.com",
  messagingSenderId: "1045299414519"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth


export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
export const repliesExpirationLength = 300000
