import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import CardMid from '../components/CardMid';
import Carousel from '../components/Carousel';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Products from '../components/Products';

// Images
import Rin from '../assets/Pictures/Rin.jfif';
import Mobile from '../assets/Pictures/Mobile.jfif';
import FashionBoy from '../assets/Pictures/Fashion Boy.jfif';
import Electronics from '../assets/Pictures/Electronics.jfif';
import HomeandFurniture from '../assets/Pictures/Home and Furtniture.jfif';
import Appliances from '../assets/Pictures/Appliances.jfif';
import FlightandBookings from '../assets/Pictures/Flight and Booking.jfif';
import Monitor from '../assets/Pictures/Monitor.jfif';
import NoiseSmartwatch from '../assets/Pictures/NoiseSmartwatch.jfif';
import Oppo from '../assets/Pictures/Oppo.jfif';
import Smartwatch from '../assets/Pictures/Smartwatch.jfif';
import MobileVofer from '../assets/Pictures/MobileVofer.jfif';

const cardItems = [
  { to: "/kilos", img: Rin, label: "Kilos" },
  { to: "/Mobiles", img: Mobile, label: "Mobiles" },
  { to: "/Fashion", img: FashionBoy, label: "Fashion" },
  { to: "/Electronics", img: Electronics, label: "Electronics" },
  { to: "/HomeAndFurniture", img: HomeandFurniture, label: "Home And Furniture" },
  { to: "/Appliances", img: Appliances, label: "Appliances" },
  { to: "/FlightAndBookings", img: FlightandBookings, label: "Flight And Bookings" },
];

const cardItem2 = [
  { to: "Monitors", img: Monitor, label: "Monitor" },
  { to: "Monitors", img: NoiseSmartwatch, label: "Noise SmartWatch" },
  { to: "Monitors", img: Oppo, label: 'Oppo' },
  { to: "Monitors", img: Smartwatch, label: "Smartwatch" },
  { to: "Monitors", img: MobileVofer, label: "Speaker" },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products');
        setProducts(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch products:", err);
        setError('Failed to load products');
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <CardMid items={cardItems} />
      <Carousel />
      {/*<Cards item2={cardItem2} />*/}
        <Products item4={products} />
      <Footer />
    </>
  );
};

export default Home;
