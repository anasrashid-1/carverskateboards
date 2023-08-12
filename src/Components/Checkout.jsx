import { useState, useEffect } from "react";
import CheckoutCard from "./CheckoutCard";

function Checkout() {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);



    return <div className="checkout">
        <h1>Checkout Page</h1>
        <CheckoutCard />
    </div>
}

export default Checkout;