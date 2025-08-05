import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ item4 }) => {
  if (!Array.isArray(item4) || item4.length === 0) {
    return <p className="text-danger">⚠️ Out Of Stock.</p>;
  }

  return (
    <div className="container my-4">
      <h4 className="mb-3 fw-medium text-start">Best of Electronics</h4>
      <div className="row g-2 justify-content-start">
        {item4.map((item) => {
          if (!item || !item._id) return null; // ✅ defensive check

          return (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={item._id}>
              <Link to={`/products/${item._id}`} className="text-decoration-none text-dark">
                <div className="border rounded p-2 text-center shadow-sm" style={{
                  backgroundColor: '#fff',
                  height: '187px',
                  width: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img
                    src={`http://localhost:3000${item.image.replace('/static', '')}`}
                    alt={item.product}
                    style={{ maxWidth: '100%', maxHeight: '100px', objectFit: 'contain' }}
                  />
                  <p className="fs-6 mt-2 mb-0">{item.product}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
