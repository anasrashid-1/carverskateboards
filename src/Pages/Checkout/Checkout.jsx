import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CheckoutCard from "./CheckoutCard";
import "./Checkout.css";

function Checkout() {


    const [address, setAddress] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [amount, setamount] = useState(0);


    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    useEffect(() => {
        const itemTotalPrice = JSON.parse(localStorage.getItem('totalPrice')) || [];
        setamount(itemTotalPrice);

    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount === "") {
            alert("please enter amount");
        } else {
            var options = {
                key: "rzp_test_0bYm5zKZEO7ht4",
                key_secret: "ghs7HXvVCZNVItTYMdP14aZ1",
                amount: amount * 100,
                currency: "INR",
                name: "Carver Skateboards",
                description: "Payment",
                handler: function (response) {
                    alert("Payment successfull");
                    window.location.href = "/";
                },
                // response.razorpay_payment_id
                // prefill: {
                //     name: "Velmurugan",
                //     email: "mvel1620r@gmail.com",
                //     contact: "7904425033"
                // },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }

    useEffect(() => {
        const add = JSON.parse(localStorage.getItem("addressDetails")) || [];
        setAddress(add)
    }, [])
    // console.log(address);

    return <div className="checkout">
        {/* <h1>Checkout Page</h1> */}
        <div className="payment-section">
            <div className="address-name">
                <h2>Address Review</h2>
                <hr />
                <div>
                    <h5>Delivering order to  </h5>
                    <p>{address.name}</p>
                    <p>{address.mobile}</p>
                </div>
                <hr />
                <div className="shipping-address">
                    <h5>Shipping Address</h5>
                    <p>{address.add1} {address.add2}</p>
                    <p>{address.city}</p>
                    <p>{address.state}</p>
                    <hr />
                </div>
            </div>

            <div id="order-summary">
                <h2 style={{ textAlign: "left", marginLeft: "20px" }}>Order Summary</h2>
                {cartItems.map((item) => (
                    <CheckoutCard key={item.id} item={item} />
                ))}
                <hr />
                <div className="orderTotal">Order total: <div>${amount}</div></div>
                <div className="orderTotal"> Shipping Charges : <div>Free</div></div>
                <hr />
                <div className="orderTotal">Total amount : <div>${amount}</div></div>
                <button id="payment-btn" onClick={handleSubmit}>Make payment</button>
            </div>

        </div>
    </div>
}

export default Checkout;