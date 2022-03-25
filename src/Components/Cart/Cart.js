import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const {image, title}=cart
    return (
        <div className='row align-items-center my-2'>
                <img className='col-lg-4 w-25' src={image} alt="" />
                <h6 className='col-lg-8'>{title}</h6>    
        </div>
    );
};

export default Cart;