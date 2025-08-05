import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Cart = () => {
  const userId = '101'; // Static userId for now
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
    //const navigate = useNavigate();
  

  const fetchCart = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/cart/${userId}`);
      setCartItems(res.data.cartItems || []);
      setLoading(false);
    } catch (err) {
      console.error('❌ Error fetching cart:', err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateCartInDB = async (updatedItems) => {
    try {
      await axios.post(`http://localhost:3000/carts`, {
        userId,
        cartItems: updatedItems
      });
    } catch (err) {
      console.error('❌ Failed to sync cart:', err);
    }
  };

const increaseQty = (itemId) => {
  const updated = cartItems.map(item =>
    item.id.toString() === itemId.toString()
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
  setCartItems(updated);
  updateCartInDB(updated);
};

const decreaseQty = (itemId) => {
  const updated = cartItems.map(item =>
    item.id.toString() === itemId.toString()
      ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
      : item
  );
  setCartItems(updated);
  updateCartInDB(updated);
};


  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const price = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 700;
  const coupon = 5;
  const platformFee = 3;
  const handlingFee = 4;
  const total = price - discount - coupon + platformFee + handlingFee;

  if (loading) return <p className="text-center mt-4">Loading cart...</p>;



// const placeOrder = async () => {
//   try {
//     const res = await axios.post('http://localhost:3000/order', {
//       userId,
//       items: cartItems,
//       total,
//     });

    // Optional: clear the cart after placing the order
//     await axios.post('http://localhost:3000/cart', {
//       userId,
//       cartItems: [],
//     });

//     navigate('/orders'); // navigate to the orders page
//   } catch (err) {
//     console.error('❌ Failed to place order:', err);
//   }
// };

const deleteItem = async (itemId) => {
  try {
    const res = await axios.delete(`http://localhost:3000/cart/${userId}/${itemId}`);
    setCartItems(res.data.cartItems); // Update the UI
  } catch (err) {
    console.error('❌ Failed to delete item:', err);
  }
};


  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h3>Shopping Cart</h3>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="row">
            {/* Product List */}
            <div className="col-md-8 mb-4">
              <div className="border border-black rounded p-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="d-flex align-items-center gap-3 mb-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ width: "120px", height: "100px", objectFit: "cover" }}
                    />
                    <div>
                      <h5>{item.title}</h5>
                      <p>₹{item.price.toLocaleString()}</p>
                      <div className="d-flex align-items-center">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="btn btn-sm btn-outline-secondary me-2"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="btn btn-sm btn-outline-secondary ms-2"
                        >
                          +
                        </button>
                                      <button
  onClick={() => deleteItem(item.id)}
  className="btn btn-sm btn-danger ms-2"
>
  Remove
</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="col-md-4 mb-4">
              <div className="border border-black rounded p-4 bg-white">
                <h5 className="mb-4">Price Details</h5>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Price ({count} item{count > 1 ? 's' : ''})</th>
                      <td>₹{price.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <th>Discount</th>
                      <td>- ₹{discount}</td>
                    </tr>
                    <tr>
                      <th>Coupons For You</th>
                      <td>- ₹{coupon}</td>
                    </tr>
                    <tr>
                      <th>Platform Fee</th>
                      <td>₹{platformFee}</td>
                    </tr>
                    <tr>
                      <th>Handling Fee</th>
                      <td>₹{handlingFee}</td>
                    </tr>
                    <tr>
                      <th>Total Amount</th>
                      <td><strong>₹{total.toLocaleString()}</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="text-center mt-3">
         <Link to="/CheckOut"className="orderButton" style={{ width: "270px", height: "47px", display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
  Place Order
</Link>

          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
