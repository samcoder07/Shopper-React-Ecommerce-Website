import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from '../src/Pages/Login'
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Registration from './Pages/Registration'
import Protected from './Components/Protected/Protected';
function App() {
  return (
    <div>
        <Outlet/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='mens'/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='womens'/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kids'/>}/>
        <Route path='/product'element={<Product/>} >
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/loginsign' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path="/" element={<Protected/>}>
        <Route path="/" index element={<Shop/>}/>
       </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
