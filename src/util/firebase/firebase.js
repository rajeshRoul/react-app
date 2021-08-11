import firebase from 'firebase'
// Firebase Configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDexo38QT1UX1U9oC-GZT-VBhnezU8mCmg',
    authDomain: 'assignment-1-e2c42.firebaseapp.com',
    projectId: 'assignment-1-e2c42',
    storageBucket: 'assignment-1-e2c42.appspot.com',
    messagingSenderId: '935346554286',
    appId: '1:935346554286:web:110845cc05a7cb2e99b43f',
}
// Initialize Firebase
if (firebase.messaging.isSupported()) {
    firebase.initializeApp(firebaseConfig)
}
export default firebase
