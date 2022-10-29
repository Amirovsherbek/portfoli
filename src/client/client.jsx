import firebase from 'firebase/app'

const firebaseConfig ={
  apiKey: "AIzaSyCypkhQS58fb0n3p7_FSTkPvBMSaJksn3c",
  authDomain: "portfoli-a8463.firebaseapp.com",
  projectId: "portfoli-a8463",
  storageBucket: "portfoli-a8463.appspot.com",
  messagingSenderId: "352264400057",
  appId: "1:352264400057:web:a98b4e7b7ac6e538d8bf68"
 }
 firebase.initializeApp(firebaseConfig);
 const storage=firebase.storage();
export {storage,firebase as default};
