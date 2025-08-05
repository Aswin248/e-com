import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Order = () => {
  const userId = '101'; // ✅ static user ID
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/order/orders/${userId}`);

        setOrders(res.data);
      } catch (err) {
        console.error('❌ Failed to fetch orders:', err);
        setError('Could not load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h3>Your Orders</h3>
        {orders.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          orders.map((order, idx) => (
            <div key={order._id} className="border p-3 my-3 rounded">
              <h5>Order {idx + 1}</h5>
              <p><strong>Date:</strong> {new Date(order.placedAt).toLocaleString()}</p>
              <p><strong>Total:</strong> ₹{order.total}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Payment Option:</strong> {order.paymentOption}</p>
              <p><strong>Notes:</strong> {order.orderSummary}</p>
              <ul className="mt-2">
                {order.items.map((item, i) => (
                  <li key={i}>{item.title} x {item.quantity} = ₹{item.price * item.quantity}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Order;
