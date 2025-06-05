import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Shop from './Pages/shop';
import ShopCategory from './Pages/shopCatogory';
import Product from './Pages/product';
import Cart from './Pages/cart';
import LoginSignup from './Pages/loginSignup';
import man_banner from './Component/Assets/banner_mens.png';
import women_banner from './Component/Assets/banner_women.png';
import kids_banner from './Component/Assets/banner_kids.png';
import ShopProvider from './Context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={man_banner} category='men' />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kids' />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
