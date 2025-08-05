import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ item2 }) => {
  return (
    <div className="container my-4">
      <h4 className="mb-3 fw-medium text-start">Best of Electronics</h4>
      <div className="row g-2 justify-content-start">
        {item2?.map((item, index) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
            <Link to={item.to} className="text-decoration-none text-dark">
              <div
                className="border rounded p-2 text-center"
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  height: '187px',
                  width: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: '140px',
                    height: '110px',
                    objectFit: 'cover',
                  }}
                />
                <p className="fs-6 mt-2 mb-0">{item.label}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
