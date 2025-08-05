import React from 'react'
import Carousel1 from '../assets/Pictures/Carousel1.jpg'
import Carousel2 from '../assets/Pictures/Carousel2.jfif'
import Carousel3 from '../assets/Pictures/Carousel3.jfif'



const Carousel = () => {
  return (
    <div>
       <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Carousel1} className="d-block w-100" style={{width:"40px",height:"187px"}} alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={Carousel2} className="d-block w-100" style={{width:"40px",height:"187px"}}  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={Carousel3} className="d-block w-100" style={{width:"40px",height:"187px"}}  alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel