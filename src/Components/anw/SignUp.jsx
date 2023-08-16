import './styles/auth.css'
import React, { useState, useEffect } from 'react';


const SignUp = () => {
  const initialData = {
    name: '',
    email: '',
    password: '',
    phone: '',
    addressLine: '',
    city: '',
    state: '',
    zip: ''
  };

  const [data, setData] = useState(initialData);

  useEffect(() => {
    // Fetch the list of countries from the REST Countries API
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(countriesData => {
        const countrySelect = document.getElementById('country');

        countriesData.forEach(country => {
          const option = document.createElement('option');
          option.value = country.name.common;
          option.text = country.name.common;
          countrySelect.appendChild(option);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    // Save data to localStoragej
    console.log(data)
    localStorage.setItem('userData', JSON.stringify(data));
    window.location.href='/signin'
    // You can also redirect the user or perform any other actions here
  };

  return (
    <>
      <h1>REGISTER</h1>
      <form   id="registration_form">
        <div id="Signupmain">
          <div>
            <div className='label'>
              <label   >Name *</label>
            </div>
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <div>
              <label  >Email *</label>
            </div>
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
          <div>
            <div>
              <label  >Password *</label>
            </div>
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
          <div>
            <div>
              <label  >Phone Number</label>
            </div>
            <input type="text" placeholder="Phone Number" id="phone"

              name="phone"
              value={data.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>
              <label  >Address Line</label>
            </div>
            <input type="text" placeholder="Address Line" id="addressLine"
              name="addressLine"
              value={data.addressLine}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>
              <label  >Suburb/City *</label>
            </div>
            <input type="text" placeholder="Suburb/City" id="city" required

              name="city"
              value={data.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>
              <label  >State/Province *</label>
            </div>
            <input type="text" placeholder="states" id="state" required

              name="state"
              value={data.state}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>
              <label  >Zip/Postcode *</label>
            </div>
            <input type="text" placeholder="Zip/Postcode" id="zip" required name="zip"
              value={data.zip}
              onChange={handleInputChange} />
          </div>
          <div>
            <div>
              <label className='country'  >Country *</label>
            </div>
            <select id="country" required>
              <option value="" disabled  >
                Choose a Country
              </option>
            </select>
          </div>

          <div className="regisDiv">
          <button style={{"margin-top":"35px"}} type="button" id="register" onClick={handleRegister}>
            CREATE ACCOUNT
          </button>
          </div>
          
        </div>
      </form>
    </>
  );
}

export default SignUp