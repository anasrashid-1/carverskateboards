import React, { useEffect, useState } from "react";
import "./Checkout.css";

function CheckoutCard({ item }) {

    const [deliveryDate, setDeliveryDate] = useState('');

    useEffect(() => {
        var day = new Date();

        var nextDay = new Date(day);
        nextDay.setDate(day.getDate() + 4);
        setDeliveryDate(nextDay.toUTCString().slice(5, 16));

    }, []);


    return <div className="checkoutCard">
        <img src={item.image} alt="" />
        <div>
            <p id="title">{item.title}</p>
            <p id="date">Estimated delivery by : {deliveryDate}</p>
        </div>
    </div>
}

export default CheckoutCard;