import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBLbiAl7Md2VsSBd2PJuK-kZMsgIPaZs6E',
  authDomain: 'dnd-vendor.firebaseapp.com',
  projectId: 'dnd-vendor',
  storageBucket: 'dnd-vendor.appspot.com',
  messagingSenderId: '321854062150',
  appId: '1:321854062150:web:49d629beb0b45eb3d69447',
}

firebase.initializeApp(firebaseConfig)

export default firebase
