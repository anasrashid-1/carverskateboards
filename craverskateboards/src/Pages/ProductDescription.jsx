import React from 'react'
import axios from 'axios';
import { useState } from 'react'

const ProductDescription = () => {
    const [prData,setPrData] = useState([]);

    const getProductData = async () => {
        let res = await axios.get(`http://localhost:8080/products?id=1`)
        let data = res.data;
        setPrData(data);
    }
  return (
    <div>
      
    </div>
  )
}

export default ProductDescription
