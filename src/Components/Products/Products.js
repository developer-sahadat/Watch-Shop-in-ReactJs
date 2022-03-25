import React from 'react';
import './Products.css'

const Products = ({product}) => {
    const {title, image, price}=product
    return (
        <div>
            <div className='product-card'>
                <div className='text-center'>
                    <img src={image} className="img-fluid" alt="" />
                </div>
                <div className="product-info">
                    <h4>{title}</h4>
                    <h6>${price}.00</h6>
                </div>
                <button className='product-btn'>Add to cart</button>
            </div>
        </div>
    );
};

export default Products;