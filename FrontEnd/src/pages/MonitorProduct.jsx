import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Monitor from '../assets/Pictures/Monitor.jfif';
import Lg from '../assets/Pictures/Lg.jfif';
import Msi from '../assets/Pictures/Msi.jfif';
import Zebronics from '../assets/Pictures/Zebronics.jfif';
import Aoc from '../assets/Pictures/Aoc.jfif';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const productData = {
  dell: {
    img: Monitor,
    title: "DELL S Series 27 inch Full HD IPS Monitor",
    price: 10999,
    description: "5 Years warranty, 75 Hz, 300 nits, HDMI x2, Bezel-less Monitor.",
  },
  lg: {
    img: Lg,
    title: "LG 24 inch IPS Full HD Monitor",
    price: 9999,
    description: "IPS panel, 75Hz refresh rate, anti-glare, HDMI/VGA.",
  },
  msi: {
    img: Msi,
    title: "MSI 27 inch Curved Gaming Monitor",
    price: 13999,
    description: "1ms response time, 144Hz, FreeSync, Full HD.",
  },
  zebronics: {
    img: Zebronics,
    title: "Zebronics 24 inch LED Monitor",
    price: 7499,
    description: "Affordable Zebronics monitor with HDMI, VGA, slim design.",
  },
  aoc: {
    img: Aoc,
    title: "AOC 24 inch IPS LED Monitor",
    price: 8999,
    description: "Full HD resolution, ultra-slim, eye care tech.",
  }
};

const MonitorProduct = () => {
  const { brand } = useParams();
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  const product = productData[brand.toLowerCase()];

  if (!product) return <h2>Product not found</h2>;

  const handleAddToCart = () => {
  addToCart({
    id: brand,
    title: product.title,
    price: product.price,
    img: product.img,
    quantity: 1,
  });

  setAdded(true);
  navigate('/cart');
};





  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row"> 
          <div className="col-md-6">
            <div className='buyOrganize'>
            <img src={product.img} alt={product.title} style={{ width: '100%' }} />
            <div>
            <button
            
              className={`btn m-2 ${added ? "btn-success" : "btn-primary"}`}
              onClick={handleAddToCart}
            >
              {added ? "Added to Cart" : "Add to Cart"}
            </button>
            {/*<Link to="/cart">
              <button className="btn btn-outline-primary m-2">Go to Cart</button>
            </Link>*/}
            <Link to="/BuyNow2">
            <button className='btn btn-primary'>Buy Now</button>
            </Link>
            </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <h5>₹{product.price.toLocaleString()}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonitorProduct;