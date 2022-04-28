import React, { useState } from 'react'

const ProductModal = (props) => {
    const { id, name, price, quantity } = props.citem;
    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: '',
        quantity: ''
    });
    //console.log(product);
    return (
        <>

            <div className='card'>
                <input placeholder={name ? `${name}` : 'Product Name'}
                    className=" form-control "
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                ></input>
                {!product.name && <div className='text-danger'>
                    Please enter  produt name.
                </div>}
                <input placeholder={price ? `${price}` : 'Product Price'}
                    className="form-control"
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                ></input>
                {!product.price && <div className='text-danger'>
                    Please enter produt price.
                </div>}
                <input placeholder={quantity ? `${quantity}` : "Quantity"}
                    className="form-control "
                    onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
                ></input>
                {!product.quantity && <div className='text-danger'>
                    Please enter produt quantity.
                </div>}
                {name && <button className="btn btn-dark" onClick={() => props.onclick(product)}>Update</button>}
                {!name && <button className="btn btn-danger" onClick={() => props.addNew(product)}>Add New Product</button>}
            </div>
        </>
    )
}

export default ProductModal