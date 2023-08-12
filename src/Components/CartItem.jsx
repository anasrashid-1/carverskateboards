import React, { useEffect, useState } from "react";
import '../Components/CartItem.css'


function CartItem({ item, removeFromCart, total }) {

    const [quantity, setQuantity] = useState(1);

    const handleChange = (val) => {
        setQuantity(pre => pre + val);
        let action;
        if (val === -1) {
            action = "subtract";
        }
        else {
            action = "add";
        }
        total(item.price, action);

    }

    return <div className="cart-item">
        <img src={item.image} alt="" />
        <p id="item-title" >{item.title}</p>
        <p id="item-price"> ${item.price}</p>
        <div className="quantity-div">
            <button onClick={() => { handleChange(1) }}>+</button>
            {quantity}
            <button disabled={quantity == 0} onClick={() => { handleChange(-1) }}>-</button>
        </div>
        <p>Total : ${item.price * quantity}</p>
        <button id="remove-btn" onClick={() => { removeFromCart(item.id) }}>Remove</button>
    </div >
}


export default CartItem;