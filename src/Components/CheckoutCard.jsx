import React, { useEffect, useState } from "react";

function CheckoutCard() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    return <div>
        Hello
    </div>
}

export default CheckoutCard;