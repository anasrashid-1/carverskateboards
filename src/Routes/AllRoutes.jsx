import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Pages/Products'
import ProductDescription from '../Pages/ProductDescription'
import MainContent from '../Pages/HomePage/MainContent/home'
import Cart from '../Pages/Cart/Cart'
import Address from '../Pages/Address/Address'
import Checkout from '../Pages/Checkout/Checkout'
import SignIn from '../Components/anw/SignIn'
import SignUp from '../Components/anw/SignUp'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainContent />} ></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/product/:id' element={<ProductDescription />}></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/address' element={<Address />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>

    </div>
  )
}

export default AllRoutes
