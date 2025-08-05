import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';


const ProductBrands = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const [added, setAdded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError('❌ Product not found.');
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

const handleAddToCart = async () => {
  if (isProcessing) return;
  setIsProcessing(true);

  try {
    const userId = '101';
    const rawPrice = product.price || '0';
    const cleanedPrice = parseFloat(String(rawPrice).replace(/[^0-9.]/g, ''));
    if (isNaN(cleanedPrice)) throw new Error("Invalid product price");

    const newItem = {
      id: (product.id || product._id).toString(),
      title: product.product,
      price: cleanedPrice,
      img: `http://localhost:3000${product.image.replace('/static', '')}`,
      quantity: 1
    };

    const res = await axios.get(`http://localhost:3000/cart/${userId}`);
    const existingItems = res.data.cartItems || [];

    const updatedItems = [...existingItems];
    const index = updatedItems.findIndex(item => item.id.toString() === newItem.id);

    if (index !== -1) {
      updatedItems[index].quantity += 1;
    } else {
      updatedItems.push(newItem);
    }

    await axios.post(`http://localhost:3000/cart`, {
      userId,
      cartItems: updatedItems
    });

    setAdded(true);
    navigate('/cart');

  } catch (err) {
    console.error('❌ Add to cart failed:', err.message);
    alert('Something went wrong while adding to cart.');
  } finally {
    setIsProcessing(false);
  }
};

    const handleBuyNow = () => {
  if (!product) return;

  const cleanedPrice = parseFloat(String(product.price).replace(/[^0-9.]/g, ''));
  if (isNaN(cleanedPrice)) {
    alert("Invalid product price");
    return;
  }

  const singleItem = {
    id: (product.id || product._id).toString(),
    title: product.product,
    price: cleanedPrice,
    img: `http://localhost:3000${product.image.replace('/static', '')}`,
    quantity: 1
  };

  navigate('/CheckOut', { state: { buyNowItem: singleItem } });
};




  if (error) return <p className="text-danger text-center mt-4">{error}</p>;
  if (!product) return <p className="text-center mt-4">Loading...</p>;



  

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="buyOrganize">
              <img
                src={`http://localhost:3000${product.image.replace('/static', '')}`}
                alt={product.product}
                style={{ width: '100%' }}
                onError={(e) => (e.target.src = '/fallback.jpg')}
              />
              <div className="mt-3">
                <button
                  className={`btn m-2 ${added ? 'btn-success' : 'btn-primary'}`}
                  onClick={handleAddToCart}
                  disabled={isProcessing}
                >
                  {added ? 'Added to Cart' : 'Add to Cart'}
                </button>
                <button className="btn btn-primary" onClick={handleBuyNow}>
  Buy Now
</button>

              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>{product.product}</h4>
            <p>{product.description}</p>
            <h5>₹{product.price.toLocaleString()}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBrands;
