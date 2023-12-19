import React, { useState, useEffect } from 'react';
import './ArrivalsProduct.css'

function ArrivalProduct() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:8080/products?_limit=4')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
  
    return (
      <div>
        <h1 style={{marginLeft:'40%'}}>NEW ARRIVALS</h1>
        <div className="product-list">
          {products?.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
                          <h4 className='price'> ${product.price.toFixed(2)}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ArrivalProduct;
  
