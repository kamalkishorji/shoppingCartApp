import { collection ,addDoc, Timestamp, doc,updateDoc,getDocs,setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth } from "firebase/auth";

// const auth = getAuth();
// const user = auth.currentUser;
//const userref = collection(db,'users/');
// var path = doc.ref.path
//console.log(user.email);

export const addProductToDatabase = async (product,userid)=>{
    try{
      await addDoc(collection(db,`users/${userid}/cart`),{
        id : product.id,
        name : product.name,
        price : product.price,
        quantity : product.quantity,
        created : Timestamp.now()
      })
    }catch(err){
           alert(err);
    }
  }
//   const productDocref = doc(db,'product',user.id);
//     console.log(productDocref);

// export const updateProductInDatabase = async (productId)=>{
//     const productDocref = doc(db,'products',productId);
//     console.log(productDocref);
//     try{
//         await updateDoc(productDocref, {
//             quantity : 2
//         })

//     }catch(err){
//         alert(err);
//      }

//     }
 export  const updateProduct = async(id,quantity,product)=>{
      await setDoc(doc(db, "products", id), {
        id : product.id,
        name : product.name,
        price : product.price,
        quantity : quantity,
      });
    }

