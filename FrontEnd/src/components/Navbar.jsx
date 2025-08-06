import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../app.css';
import logo from '../assets/Pictures/Flipkart Logo.jfif';
import Profile from '../assets/Pictures/Profile.png';
import { CartContext } from '../Context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.length;
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName'); // 👈 get user name from localStorage

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName'); // 👈 clear user name on logout
    alert('👋 Logged out successfully!');
    navigate('/Login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Flipkart Logo" style={{ width: '40px' }} />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">

          {/* Search Bar */}
          <div className="input-group w-50 mx-auto my-2 my-lg-0">
            <span className="input-group-text bg-white">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="search"
              className="form-control"
              placeholder="Search for products"
              aria-label="Search"
              style={{ height: '40px' }}
            />
          </div>

          {/* Right Side Nav */}
          <ul className="navbar-nav d-flex align-items-center gap-3">

            <li><Link className="nav-link text-white" to="/AdminPanel">Admin Panel</Link></li>

            {/* User Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center text-white"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={Profile}
                  alt="Profile"
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px' }}
                />
                {token ? userName : 'Account'}
              </a>

              <ul className="dropdown-menu dropdown-menu-end">
                {token ? (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/Profile">
                        <i className="bi bi-person m-2"></i>My Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Orders">
                        <i className="bi bi-box-fill m-2"></i>Orders
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-right m-2"></i>Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/Login">
                        <i className="bi bi-person-circle m-2"></i>Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/RegisterUser">
                        <i className="bi bi-person-vcard-fill m-2"></i>Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>

            {/* Cart */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Cart">
                <i className="bi bi-bag-plus me-1"></i>
                Cart <span className="badge bg-warning text-dark ms-1 rounded-pill">{cartCount}</span>
              </Link>
            </li>

            {/* Become a Seller */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/BecomeaSeller">Become a Seller</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
