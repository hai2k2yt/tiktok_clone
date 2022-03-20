// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVMbcvp_jqiFzKoGoLG-2QVEvDYNSToeE",
  authDomain: "tiktok-clone-376c5.firebaseapp.com",
  projectId: "tiktok-clone-376c5",
  storageBucket: "tiktok-clone-376c5.appspot.com",
  messagingSenderId: "409662208997",
  appId: "1:409662208997:web:c07179f7e0b898aa4f0d0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();
console.log("db: ", db);

// const data = (tag) => {
//   // collection ref
//   let dbs = [];

//   // get collection data
//   getDocs(collection(db, tag))
//     .then((snapshot) => {
//       snapshot.docs.forEach((doc) => {
//         dbs.push({ ...doc.data(), id: doc.id });
//       });
//       console.log("length of dbs: " + dbs.length);
//     })
//     .catch((err) => console.log("Err: " + err));

//   console.log(dbs);
//   return dbs;
// };

export default db;
