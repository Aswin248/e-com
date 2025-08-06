import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import BecomeASeller from './pages/BecomeaSeller';
import Kilos from './pages/Kilos';
import Mobiles from './pages/Mobiles';
import Fashion from './pages/Fashion';
import Electronics from './pages/Electronics';
import HomeAndFurtniture from './pages/HomeAndFurniture';
import Appliances from './pages/Appliances';
import FlightAndBookings from './pages/FlightAndBookings';
import BeautyAndToys from './pages/BeautyAndToys';
import TwoWheelers from './pages/HomeAndFurniture';
import BestTrueHeadphones from './pages/BestTrueHeadphones';
import FastrackSmartWatches from './pages/FastrackSmartWatches';
import SellingMobileSpeakers from './pages/SellingMobileSpeakers';
import AddToCart2 from './pages/AddToCart2';
import MonitorProduct from './pages/MonitorProduct';
import Monitors from './pages/Monitors';
import CartProvider from './Context/CartContext';
import Profile from './pages/Profile';
import AdminPanel from './pages/AdminPanel';
import ProductBrands from './pages/ProductBrands';
import RegisterUser from './pages/RegisterUser';
import Orders from './pages/Orders';
import CheckOut from './pages/CheckOut';





function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/BecomeaSeller" element={<BecomeASeller />} />
        <Route path="/Kilos" element={<Kilos />} />
        <Route path="/Mobiles" element={<Mobiles />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/HomeAndFurniture" element={<HomeAndFurtniture />} />
        <Route path="/Appliances" element={<Appliances />} />
        <Route path="/FlightAndBookings" element={<FlightAndBookings />} />
        <Route path="/BeautyAndToys" element={<BeautyAndToys />} />
        <Route path="/TwoWheelers" element={<TwoWheelers />} />
        <Route path="/BestTrueheadphones" element={<BestTrueHeadphones />} />
        <Route path="/FastrackSmartwatches" element={<FastrackSmartWatches />} />
        <Route path="/SellingMobileSpeakers" element={<SellingMobileSpeakers />} />
        <Route path="/AddToCart2" element={<AddToCart2 />} />
        <Route path="/Monitors" element={<Monitors />} />
        <Route path="/" element={<Monitors />} />
        <Route path="/MonitorProduct/:brand" element={<MonitorProduct />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/products/:id" element={<ProductBrands />} />
        <Route path="/ProductBrands/:brand" element={<ProductBrands />} />
        <Route path="/RegisterUser" element={<RegisterUser />} />
        {/* <Route path="/Profile" element={<Profile />} />
        <Route path="/Profile/:id" element={<Profile />} /> */}
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/CheckOut" element={<CheckOut />} />

        

      </Routes>
      
    </Router>
    </CartProvider>
    
  );
}

export default App;