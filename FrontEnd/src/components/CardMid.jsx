import React from 'react';
import { Link } from 'react-router-dom';

const CardMid = ({ items }) => {
  return (
    <div className="container text-center my-3">
      <div className="row justify-content-center">
        {items.map((item, index) => (
          <div className="col" key={index}>
            <Link to={item.to} className="text-decoration-none text-dark text-nowrap">
              <div style={{ cursor: 'pointer' }}>
                <img src={item.img} alt={item.label} style={{ width: '98px', height: '63px' }} />
                <p className="card-title fs-6 mt-2">{item.label}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMid;
