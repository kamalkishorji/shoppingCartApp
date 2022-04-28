

const initialstate = {
     products : [],
    //     {
    //         "id": 1,
    //         "name": "Boats Headphone",
    //         "price": 999,
    //         "quantity": 5
    //     },
    //     {
    //         "id": 2,
    //         "name": "Apple Watch",
    //         "price": 30000,
    //         "quantity": 10
    //     },
    //     {
    //         "id": 3,
    //         "name": "MSI Laptop",
    //         "price": 72000,
    //         "quantity": 3
    //     },
    //     {
    //         "id": 4,
    //         "name": "Tooth Brush",
    //         "price": 20,
    //         "quantity": 2
    //     },
    //     {
    //         "id": 5,
    //         "name": "Wild craft bag",
    //         "price": 1999,
    //         "quantity": 1
    //     },
    //     {
    //         "id": 6,
    //         "name": "Nike shoes",
    //         "price": 4500,
    //         "quantity": 8
    //     }
    //  ],

     cart : [],
     isLogedin : false,
     admin : false,
     
}

const productReducer = (state = initialstate,action)=>{
    let cart = state.cart;
    let product = state.products
    if(action.type === 'UPDATE_PRODUCT'){
        let newproduct = [...action.payload];
        return {
            ...state,
            products : [...newproduct]
        }
    }
    else if(action.type === 'ADD_TO_CART'){
        let newcart = [...cart];
        let updatedproduct = {...action.payload};
       // console.log("updated product",updatedproduct);
        //console.log("cart : ",newcart );
        updatedproduct.quantity = 1;
        updatedproduct.total = updatedproduct.price;
        //newcart.push(updatedproduct);
        if(newcart.length){
            let flag = false;
            for(let i=0;i<newcart.length;i++){
                if(newcart[i].id === updatedproduct.id && action.payload.quantity >newcart[i].quantity){
                    newcart[i].quantity +=1;
                    newcart[i].total = newcart[i].quantity*newcart[i].price;
                    flag = true;
                }
            }
            if(!flag){
                newcart.push(updatedproduct);
            }
        }
        else{
            //console.log('inside else ', newcart);
            //console.log('updated ',updatedproduct);
            newcart.push(updatedproduct);
        }    
        
       //console.log(newcart);
        return {
            ...state,
            cart : [...newcart],
        }
    }
    else if(action.type === 'UPDATE_CART_QUANTITY'){
        let newcart = [...cart];
        let item = cart.find((item)=>item.id== action.payload.productid);
       // let x = data.find((item)=>item.id== action.payload.productid);
        item.quantity += action.payload.quantity;
        item.total = item.price*item.quantity;
        
        for(let i=0;i<newcart.length;i++){
            if(newcart[i].id==action.payload.productid){
                newcart[i]=item;
            }

        }
    
        
        return {
            ...state,
            cart : [...newcart],
        }
    }
    else if(action.type === 'REMOVE_CART_ITEM'){
        
        let idx;
        for(let i=0;i<cart.length;i++){
              if(cart[i].id == action.payload.productid){
                  idx = i;
                  break;
              }

        }
        let newcart = [...cart.slice(0,idx),...cart.slice(idx+1)];
        
        return {
            ...state,
            cart : [...newcart],
        }

    }

    
    else if(action.type === 'EMPTY_CART'){
        let newcart = [];
        console.log('newcart ',newcart);
        return {
            ...state,
            cart : newcart,
        }
    }
    else if(action.type === 'AUTH_HANDLE'){
        return {
            ...state,
            isLogedin : action.payload,
        }
    }
    else if(action.type === 'ADMIN_CHECK'){
        //console.log('action from reducer',!action.payload)
        return{
            ...state,
            admin : !action.payload,
        }
    }
    else {
        return state;
    }
}

export default productReducer;