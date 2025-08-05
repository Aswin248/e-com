import React from 'react'
import Navbar from '../components/Navbar';
import BlueTshirt from '../assets/Pictures/Blue T-shirt.jfif'
import YellowTshirt from '../assets/Pictures/Yellow T-shirt.jfif'
import GreenTshirt from '../assets/Pictures/Green T-shirt.jfif'
import BlackTshirt from '../assets/Pictures/Black T-shirt.jfif'

const Fashion = () => {
  return (
    <>
    <Navbar />
    
    
    
    
    <div class="card-group m-2">
  <div class="card d-flex justify-content-center align-items-center">
    <img src={BlueTshirt} className="card-img-top m-3" alt="..." style={{width:"270px",height:"296px"}}></img>
    <div class="card-body">
      <h5 class="card-title">Blue T-shirt</h5>
    </div>
  </div>
  <div class="card d-flex justify-content-center align-items-center">
     <img src={YellowTshirt} className="card-img-top m-3" alt="..." style={{width:"270px",height:"296px"}}></img>
    <div class="card-body">
      <h5 class="card-title">Yellow T-shirt Modern</h5>

    </div>
  </div>
  <div class="card d-flex justify-content-center align-items-center">
    <img src={GreenTshirt} className="card-img-top m-3" alt="..." style={{width:"270px",height:"296px"}}></img>
    <div class="card-body">
      <h5 class="card-title">Green T-shirt</h5>
      
    </div>
  </div>
    <div class="card d-flex justify-content-center align-items-center">
   <img src={BlackTshirt} className="card-img-top m-3" alt="..." style={{width:"270px",height:"296px"}}></img>
    <div class="card-body">
      <h5 class="card-title">Black T-shirt</h5>

    </div>
  </div>
</div>
    </>
  )
}

export default Fashion