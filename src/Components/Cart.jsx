import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import './Cart.css'

function Cart() {

    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [orderTotal, setOrderTotal] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [itemTotal, setItemTotal] = useState(0);
    const [count, setCount] = useState(0);


    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);

    }, []);


    useEffect(() => {
        const newSubtotal = cartItems.reduce((acc, item) => {
            return acc + (item.price);
        }, 0);
        setSubtotal(newSubtotal);
        setOrderTotal(newSubtotal)
    }, [cartItems]);

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const updateSubTotal = (itemTotal, action) => {
        let subTotal;
        subTotal = (action === "add") ? subtotal + itemTotal : subtotal - itemTotal;
        setOrderTotal(subTotal);
        setSubtotal(subTotal);

    }

    const total = (totalQuantity, action) => {
        // console.log(totalQuantity);
        setItemTotal(totalQuantity);
        updateSubTotal(totalQuantity, action);
    }

    const handleCoupon = (e) => {
        setCoupon(e.target.value);
    }

    const applyCoupon = () => {
        setCount(count + 1);
        if (count == 0) {
            if (coupon === "APPLY10") {
                setOrderTotal(Math.ceil(orderTotal * 0.9))
            }
            else {
                alert("Enter valid coupon code!!!");
            }
        }
        else {
            alert("Coupon already applied!!!")
        }
    }

    return <div className="cart">
        <h2>Your Cart ({cartItems.length} Items)</h2>
        {cartItems.map(item => (

            <CartItem key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                total={total}
            />
        ))}
        <div className="coupon-box">
            Coupon Code
            <div>
                <input type="text" onChange={(e) => { handleCoupon(e) }} />
                <button onClick={applyCoupon} >Apply</button>
            </div>
        </div>
        <div className="subtotal">Subtotal: <div>${subtotal}</div></div>
        <div className="orderTotal">Order total: <div>${orderTotal}</div></div>

    </div>
}

export default Cart;