import React from 'react'
import Navbar from '../components/Navbar';
import Sell from '../assets/Pictures/Sell.jfif'; 
import FlipkSeller from '../assets/Pictures/Flipkart Seller.png';
import { Link } from 'react-router-dom';

const BecomeaSeller = () => {
  return (
    <>
    <Navbar />
    <div>
      <h6 className='m-3'>Existing Seller? Explore our product recommendations with Dhamaka Selection</h6>
      <div className='d-flex'>
      <img className='m-4' src={FlipkSeller} style={{width:"137px",height:"36px"}}></img>
      <Link className="text-decoration-none ms-4 text-black" to="/Sell Online">Sell Online</Link>
      <Link className="text-decoration-none ms-4 text-black" to="/Fees And Commission">Fees And Commission</Link>
      <Link className="text-decoration-none ms-4 text-black" to="/Grow">Grow</Link>
      <Link className="text-decoration-none ms-4 text-black" to="/Learn">Learn</Link>
      <Link className="text-decoration-none ms-4 text-black" to="/Shopsy">Shopsy</Link>
      <div className='ms-5'>
      <Link className="text-decoration-none ms-4 text-black" to="/Login">Login</Link>
      <button className='btn btn-primary ms-2'>Start Selling</button>
      </div>
      
      </div>
      <img className='m-4' src={Sell} style={{width:"1270px",height:"131px"}}></img>
    </div>
    </>
  )
}

export default BecomeaSeller