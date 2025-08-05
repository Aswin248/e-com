import React from 'react';
import MobilesAds from '../assets/Pictures/MobilesAds.jfif'
import Cmf from '../assets/Pictures/Cmf.jfif'
import Samsung from '../assets/Pictures/Samsung.jfif'
import Pixel9 from '../assets/Pictures/Pixel 9.jfif'
import Motorola from '../assets/Pictures/Motorola.jfif'
import Navbar from '../components/Navbar';




const Mobiles = () => {
  return (
    <>
    <Navbar />
    <div className="bg-light text-dark p-4 min-vh-100">
      <h2 className='m-2'>Mobiles Phones</h2>
      <p className='m-2'>Mobile phones are no more merely a part of our lives. Whether it's to stay connected with friends and family or to keep abreast of important developments around the world, mobiles are no longer for sending a text or making a call. From budget to state-of-the-art smartphones; indigenous names to global big-wigs - a whole universe of mobiles await you on Flipkart. Whether you’re looking for waterdrop notch screens, a high screen to body ratio, AI-powered sensational cameras, high storage capacity, blazing quick processing engines or reflective glass designs, rest assured you won’t have to venture anywhere else for your smartphone needs. </p>
      <div class="m-2">
  <div class="card">
    <div class="card-body">
      <img src={MobilesAds} alt="Flipkart" style={{ width: '1250px',height:"197px" }} />
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <img src={Cmf} alt="Flipkart" style={{ width: '1250px',height:"197px" }} />
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <img src={Samsung} alt="Flipkart" style={{ width: '1250px',height:"197px" }} />
    </div>
  </div>
    <div class="card">
    <div class="card-body">
      <img src={Motorola} alt="Flipkart" style={{ width: '1250px',height:"197px" }} />
    </div>
  </div>
    <div class="card">
    <div class="card-body">
   <img src={Pixel9} alt="Flipkart" style={{ width: '1250px',height:"197px" }} />
    </div>
  </div>
</div>
    </div>
    </>
  );
};

export default Mobiles;

