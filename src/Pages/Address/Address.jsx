import { useState } from "react";
import { Link } from "react-router-dom";
import "./Address.css";

const initialData = {
    name: "",
    email: "",
    mobile: "",
    add1: "",
    add2: "",
    city: "",
    state: "",
    pincode: "",
}

function Address() {

    const [address, setAddress] = useState(initialData);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!address.name || !address.email || !address.mobile || !address.add1 || !address.add2 || !address.city || !address.state || !address.pincode) {
            alert("Please fill all deta")
        } else {
            localStorage.setItem('addressDetails', JSON.stringify(address));
            window.location.href = '/checkout';
        }
    }

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // // console.log(name, value);
        // setAddress({ ...address, [e.target.name]: e.target.value });
        const { name, value } = e.target;
        setAddress((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    // console.log(address);

    return <div>
        <div className="address">
            <form action="submit" id="addressForm" onSubmit={handleFormSubmit}>
                <h3>Add Address</h3>
                <input type="text" name="name" value={address.name} placeholder="Full Name" onChange={handleChange} required />
                <input type="text" name="email" value={address.email} placeholder="Email" onChange={handleChange} required />
                <input type="text" name="mobile" value={address.mobile} placeholder="Mobile no." onChange={handleChange} required />
                <input type="text" name="add1" value={address.add1} placeholder="Flat no./Building,Street name" onChange={handleChange} required />
                <input type="text" name="add2" value={address.add2} placeholder="Area/Locality" onChange={handleChange} required />
                <div id="cityInfo">
                    <input type="text" name="city" value={address.city} placeholder="City" onChange={handleChange} required />
                    <input type="text" name="state" value={address.state} placeholder="State" onChange={handleChange} required />
                    <input type="text" name="pincode" value={address.pincode} placeholder="Pincode" onChange={handleChange} required />
                </div>
                <input type="text" placeholder="Landmark(optional)" />
                {/* <Link to={'/checkout'}><input type="submit" id="submit" /></Link> */}
                <input type="submit" id="submit" />
            </form>
        </div>
    </div>
}

export default Address;