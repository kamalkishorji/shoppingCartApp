import { ADD_TO_CART,UPDATE_CART_QUANTITY, REMOVE_CART_ITEM,LOGIN_TO_ACCOUNT } from "./actionconstant";
export const addToCart = (product)=>{
    return {
        type : ADD_TO_CART,
        payload :{ product}
    }
};



export const updateCartQuantity = (productid,quantity)=>{
    return {
        type : UPDATE_CART_QUANTITY,
        payload : {
            productid : productid,
            quantity : quantity,
        }
    }
};

export const removeItem = (productid)=>{
    return {
        type : REMOVE_CART_ITEM,
        payload : {
            productid : productid,
        }
    }
};

// export const setIsLogidIn = (isLogedin) => {
//     return {
//         type : LOGIN_TO_ACCOUNT,
//         payload : {
//             isLogidin : isLogedin,
//         }
//     }
// };