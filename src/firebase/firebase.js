// // Import the functions you need from the SDKs you need
// import firebase from "firebase";
// // import getFirestore from "firebase/firestore";

// // import "firebase/compat/firestore";
// // import "firebase/compat/database";


// // import "firebase/compat/firestore";
// // import "firebase/compat/auth";
// // import "firebase/compat/storage";



// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyABqVgvhOrJx0OrK-JHd8SbI4AFzF7zf6U",
//   authDomain: "vue-chat-23d82.firebaseapp.com",
//   projectId: "vue-chat-23d82",
//   storageBucket: "vue-chat-23d82.appspot.com",
//   messagingSenderId: "384129173975",
//   appId: "1:384129173975:web:cd295e905c913b5ba9a392"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export default firebase;

// // const db = getFirestore();
// // export { db };

// // init firestore service
// // const projectFirestore = firebase.firestore(); // firebaseのサービスも初期化する
// // const projectAuth = firebase.auth();
// // const projectStorage = firebase.storage();

// // const timestamp = firebase.firestore.FieldValue.serverTimestamp; //firebaseのtimestamp

// // export { projectFirestore, projectAuth, projectStorage, timestamp };




// Import the functions you need from the SDKs you need
import firebase from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABqVgvhOrJx0OrK-JHd8SbI4AFzF7zf6U",
  authDomain: "vue-chat-23d82.firebaseapp.com",
  projectId: "vue-chat-23d82",
  storageBucket: "vue-chat-23d82.appspot.com",
  messagingSenderId: "384129173975",
  appId: "1:384129173975:web:cd295e905c913b5ba9a392"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export default firebase;

