import React, { useEffect, useState } from 'react';
import './Shop.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';


const Shop = () => {

    // Work has been done to bring product data dynamically here
        const [products, setProducts]=useState([])

        useEffect(()=>{
            fetch('watchFakeData.json')
            .then(Response=>Response.json())
            .then(data=>setProducts(data))
        },[])

    // Work has been done to bring cart data here

      const [cart, setCart]=useState([])
        const addToCartHandler=cartProduct=>{
            let newCart=[]
            if(!cart.includes(cartProduct)){
               if(cart.length<4){
                newCart=[...cart, cartProduct]
               }else{
                   return;
               }
            }else{
                return;
            }
          
            setCart(newCart)
        }

        const cartClearHandler=()=>{
            setCart([])
        }

        const chooseMeHandler=()=>{

            const chooseProduct = cart[Math.floor(Math.random() * cart.length)];
            setCart([chooseProduct])
        }   


    return (
        <div className='row m-0 w-100'>
            
        {/* Some of the work of product component has been done here */}
            <div className="products-container col-lg-9 ">
                <h2><span>O</span>ur <span>B</span>est <span>S</span>elling <span>P</span>roducts</h2>
                <div className='row g-4 p-2 row-cols-lg-3 row-cols-md-2'>
                    {
                        products.map(product=> <Products
                            product={product}
                            key={product.id}
                            addToCartHandler={addToCartHandler}
                             >
                        </Products>)
                    }
                    </div>
            </div>

        {/* Some of the work of cart component has been done here */}

            <div className="cart-container col-lg-3">
                <h3> <span>C</span>hoose <span>C</span>lothes</h3>

                {
                    cart.map(product=><Cart cart={product} key={product.id}></Cart>)
                }

                <button className='choose-me-btn' onClick={chooseMeHandler}>Choose 1 for me</button>
                <button className='choose-again-btn' onClick={cartClearHandler}>Choose again click</button>
             </div>    

    </div>
    );
};

export default Shop;