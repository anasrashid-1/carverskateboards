import './App.css';
import Products from './Pages/Products';
import ProductDescription from './Pages/ProductDescription';
import Navbar from './Components/sar/Header/Navbar/NavBar'
import Footer from './Components/sar/Footer/Footer'
import AllRoutes from './Routes/AllRoutes'
import SignUp from './Components/anw/SignUp';
import SignIn from './Components/anw/SignIn';
import Cart from './Pages/Cart/Cart';

import MainContent from './Pages/HomePage/MainContent/home';
import Address from './Pages/Address/Address';
import Checkout from './Pages/Checkout/Checkout';

function App() {
    return (
        <>
            <Navbar />
            <AllRoutes />
            <Footer />
        </>
    );
}

export default App;