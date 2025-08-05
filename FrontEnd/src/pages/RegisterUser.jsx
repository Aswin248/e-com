import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';


function RegisterUser() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNum: '',
    id: '',
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, // ✅ Make sure "name" is used!
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/users', form);
      console.log("✅ Server response:", res.data);
      alert(`✅ Registered: ${res.data.name}`);
    } catch (err) {
      console.error("❌ Registration error:", err.response?.data || err.message);
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className='m-2'>
        <form className='d-flex flex-column m-2' onSubmit={handleSubmit}>
          <input type='text' name='name' className='form-control m-2' placeholder='Name' style={{ width: "878px", height: "57px" }} onChange={handleChange} required />
            
            



            <input type='text' name='email' className='form-control m-2' placeholder='Email' style={{ width: "878px", height: "57px" }} onChange={handleChange} required />

            <input type='text' name='phoneNum' className='form-control m-2' placeholder='Phone No' style={{ width: "878px", height: "57px" }} onChange={handleChange} required />

            <input type='text' name='password' className='form-control m-2' placeholder='Password' style={{ width: "878px", height: "57px" }} onChange={handleChange} required />
        
          <button
            className='btn btn-primary m-2'
            type='submit'
            style={{ width: "89px", height: "57px" }}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterUser;
