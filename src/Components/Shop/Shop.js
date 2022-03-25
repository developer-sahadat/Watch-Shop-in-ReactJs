import React, { useEffect, useState } from 'react';
import './Shop.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products/Products';


const Shop = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('watchFakeData.json')
        .then(Response=>Response.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='row m-0 w-100'>
            
            <div className="products-container col-lg-9 ">
                <h2><span>O</span>ur <span>B</span>est <span>S</span>elling <span>P</span>roducts</h2>
                <div className='row g-4 p-2 row-cols-lg-3 row-cols-md-2'>
                    {
                        products.map(product=> <Products
                            product={product}
                            key={product.id}
                             >
                        </Products>)
                    }
                    </div>
            </div>

            <div className="cart-container col-lg-3">
                <h2>Summary</h2>
            </div>    

        </div>
    );
};

export default Shop;