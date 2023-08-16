import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/auth.css'


const SignIn = () => {

    const initialData = {

        email: '',
        password: '',

    };

    const [data, setData] = useState(initialData);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleLogin = () => {
        // Save data to localStoragej
        console.log("lding data", data)
        const userData = JSON.parse(localStorage.getItem("userData")) || ""

        console.log(" localStorge", userData)

        if (data.email !== userData.email || data.password !== userData.password) {
            alert('Invalid Credentials')
        } else {
            window.location = '/';
        }
        // You can also redirect the user or perform any other actions here
    };
    return (
        <>
            <h1 id="head">SIGN IN</h1>

            <div id="massage-signout">
                <div id="message" style={{ "display": "none" }}>
                    <p id="message-text"></p>
                </div>
                <div>
                    <button id="logout" style={{ "display": "none" }}>Sign Out</button>
                </div>
            </div>

            <form >
                <div id="main">
                    <div id="sign">
                        <div id="head-sign">
                            <h1>SIGN IN</h1>
                        </div>
                        <div id="gmail">
                            <label htmlFor="email"></label>
                            <input
                                type="text"
                                placeholder="Email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div id="pass">
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                autoComplete="on"
                                name="password"
                                value={data.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div id="forget">
                            <a href="Forget Password.html">Forget password?</a>
                        </div>
                        <Link>

                            <button type="button" id="login" name="login" className="btn btn-success" onClick={handleLogin}>SIGN IN</button>
                        </Link>
                    </div>

                    <div id="reg">
                        <div id="reg-head">
                            <h1>REGISTER</h1>
                        </div>

                        <ul id="point">
                            <li id="line">Create an account with us and you'll be able to:</li>
                            <li id="line">Check out faster</li>
                            <li id="line">Save multiple shipping addresses</li>
                            <li id="line">Access your order history</li>
                            <li id="line">Track new orders</li>
                            <li id="line">Save items to your Wish List</li>
                        </ul>
                        <div id="reg-button">
                            <Link to={'/signup'}><button type="button" id="register" name="register"
                                className="btn-register">REGISTER</button></Link>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default SignIn
