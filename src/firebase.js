import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,

} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAae7FeeRMyu8ctNhhYBPc5IVWfv3wEueo",
    authDomain: "fir-auth-47465.firebaseapp.com",
    projectId: "fir-auth-47465",
    storageBucket: "fir-auth-47465.appspot.com",
    messagingSenderId: "374660477395",
    appId: "1:374660477395:web:75878efb93ae36f1183f26"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  //sign in with email and password

  const logInWithEmailAndPassword = async(email,password)=>{
      try{
         await signInWithEmailAndPassword(auth,email,password);

      }catch(error){
          console.error(error);
          alert(error.message);

      }

  };

  //register function

  const registerWithEmailAndPassword = async (name,email,password)=>{
      try{
          const res = await createUserWithEmailAndPassword(auth,email,password);
          const user = res.user;
          await addDoc(collection(db,'users'),{
              uid : user.uid,
              name,
              authProvider : 'local',
              email,
          });
      }
      catch(err){
          console.error(err);
          alert(err.message);
      }
  }

  const logOut = ()=>{
      signOut(auth);
      
  };

  export {
      db,
      auth,
      logInWithEmailAndPassword,
      registerWithEmailAndPassword,
      logOut
  };