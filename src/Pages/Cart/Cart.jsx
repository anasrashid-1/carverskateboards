import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                alert("Coupon applied!!");
            }
            else {
                alert("Enter valid coupon code!!!");
            }
        }
        else {
            alert("Coupon already applied!!!")
        }
    }

    // const handleNextPage = () => {

    // }
    // <button id="continue-btn" onClick={handleNextPage}>Continue</button>
    const handleProduct = () => {
        <Link to={'/products'} ></Link>
    }
    // let totalPriceObj = {subtotal, orderTotal};

    localStorage.setItem("totalPrice", JSON.stringify(orderTotal));

    return <div className="cart">
        {cartItems.length <= 0 ? <div style={{ alignItems: "center", margin: "10% 20%" }}> <h1>Your cart is empty!!!</h1>
            <button style={{ padding: "10px", color: "green" }} onClick={handleProduct}>Continue Shopping</button></div> : <div>
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
            <Link to={'/address'}><button id="continue-btn" >Continue</button></Link>

        </div>
        }
    </div>
}

export default Cart;