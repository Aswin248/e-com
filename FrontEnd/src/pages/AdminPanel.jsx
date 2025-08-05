import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [form, setForm] = useState({
    product: '',
    description: '',
    price: '',
    id: ''
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product', form.product);
    formData.append('description', form.description);
    formData.append('price', form.price);
    formData.append('id', form.id);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const res = await axios.post('http://localhost:3000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(`✅ Product Sent: ${res.data.product || form.product}`);
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      alert(err.response?.data?.error || 'Error adding product');
    }
  };

  return (
    <>
      <Navbar />
      <h2 className='ms-4 my-3'>Admin Panel</h2>
      <form className='d-flex flex-column m-2' onSubmit={handleSubmit}>
        <input type='text' name='product' placeholder='Product' style={{width:"750px",height:"54px"}} className='form-control m-2' onChange={handleChange} required />
        <input type='text' name='description' placeholder='Description' style={{width:"750px",height:"54px"}} className='form-control m-2' onChange={handleChange} required />
        <input type='text' name='price' placeholder='Price' style={{width:"750px",height:"54px"}} className='form-control m-2' onChange={handleChange} required />
        <input type='number' name='id' placeholder='ID' style={{width:"750px",height:"54px"}} className='form-control m-2' onChange={handleChange} required />
        <input type='file' name='image' accept='image/*' style={{width:"750px",height:"54px"}} className='form-control m-2' onChange={handleImageChange} required />
        <button className='btn btn-primary m-2' style={{width:"167px",height:"54px"}} type='submit'>Add Product</button>
      </form>
    </>
  );
};

export default AdminPanel;
