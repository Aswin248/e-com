import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';

const CheckOut = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = '101';

  const buyNowItem = location.state?.buyNowItem;
  const [cartItems, setCartItems] = useState(buyNowItem ? [buyNowItem] : []);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState('');
  const [orderSummary, setOrderSummary] = useState('');
  const [paymentOption, setPaymentOption] = useState('');

  useEffect(() => {
    // 🔐 Check login
    const token = localStorage.getItem('token');
    if (!token) {
      alert('⚠️ Please login to continue to checkout.');
      navigate('/Login');
      return;
    }

    const fetchCart = async () => {
      if (buyNowItem) {
        const price = buyNowItem.price;
        const discount = 700, coupon = 5, platformFee = 3, handlingFee = 4;
        const totalCost = price - discount - coupon + platformFee + handlingFee;
        setTotal(totalCost);
        return;
      }

      try {
        const res = await axios.get(`http://localhost:3000/cart/${userId}`);
        const items = res.data.cartItems || [];

        const price = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discount = 700, coupon = 5, platformFee = 3, handlingFee = 4;
        const totalCost = price - discount - coupon + platformFee + handlingFee;

        setCartItems(items);
        setTotal(totalCost);
      } catch (err) {
        console.error('❌ Error fetching cart:', err);
      }
    };

    fetchCart();
  }, [buyNowItem, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      alert('⚠️ Please login to place an order.');
      navigate('/Login');
      return;
    }

    try {
      await axios.post('http://localhost:3000/order/orders', {
        userId,
        address,
        paymentOption,
        orderSummary,
        items: cartItems,
        total,
      });

      if (!buyNowItem) {
        await axios.post('http://localhost:3000/cart', {
          userId,
          cartItems: [],
        });
      }

      navigate('/orders');
    } catch (err) {
      console.error('❌ Order Error:', err);
      alert('Failed to place order. Try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        {cartItems.length > 0 && (
          <div className="m-3 border rounded p-3">
            <h5>Order Summary:</h5>
            {cartItems.map(item => (
              <div key={item.id} className="d-flex align-items-center mb-2">
                <img src={item.img} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
                <div className="flex-grow-1">
                  <strong>{item.title}</strong> × {item.quantity}
                </div>
                <div>₹{item.price * item.quantity}</div>
              </div>
            ))}
            <h6 className="mt-3">Total: ₹{total}</h6>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control m-2"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="text"
            className="form-control m-2"
            placeholder="Order Summary / Note"
            value={orderSummary}
            onChange={(e) => setOrderSummary(e.target.value)}
            required
          />
          <input
            type="text"
            className="form-control m-2"
            placeholder="Payment Option"
            value={paymentOption}
            onChange={(e) => setPaymentOption(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-danger m-3">
            Place Order
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckOut;
