import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'

const Products = ({product, addToCartHandler}) => {
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
                <button className='product-btn' onClick={()=>addToCartHandler(product)}>Add to cart <span> <FontAwesomeIcon icon={faShoppingCart} /></span> </button>
            </div>
        </div>
    );
};

export default Products;