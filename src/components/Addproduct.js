import React, { useState } from 'react'

const ProductModal = (props) => {
    const {id,name,price,quantity} = props.citem;
    const [product,setProduct] = useState({
        id : '',
        name : '',
        price : '',
        quantity : ''
    });
    //console.log(product);
    return (
        <>

            <div className='card'>
            <input placeholder={`${id}`}
                 className="form-control"
                 onChange={(e)=>setProduct({...product, id : e.target.value})}
                 ></input>
                <input placeholder={`${name}`}
                 className="form-control"
                 onChange={(e)=>setProduct({...product, name : e.target.value})}
                 ></input>
                <input placeholder={`${price}`}
                 className="form-control"
                 onChange={(e)=>setProduct({...product, price : e.target.value})}
                 ></input>
                 <input placeholder={`${quantity}`}
                 className="form-control"
                 onChange={(e)=>setProduct({...product, quantity : e.target.value})}
                 ></input>
                <button className="btn btn-dark" onClick={()=>props.onclick(product)}>Update</button>
            </div>
        </>
    )
}

export default ProductModal