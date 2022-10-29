import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAA7CUGMKnykEgADQXEXT2IeKh-MaBJ-BA",
  authDomain: "portfoli-ccc55.firebaseapp.com",
  projectId: "portfoli-ccc55",
  storageBucket: "portfoli-ccc55.appspot.com",
  messagingSenderId: "798387385521",
  appId: "1:798387385521:web:6b32170119aa912cb9de90",
  measurementId: "G-VN9N5VM38P"
};
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
export const GetPortfoli=getFirestore(app)