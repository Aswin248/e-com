import React from 'react';
import { Link } from 'react-router-dom';
import Monitor from '../assets/Pictures/Monitor.jfif';
import Lg from '../assets/Pictures/Lg.jfif';
import Msi from '../assets/Pictures/Msi.jfif';
import Zebronics from '../assets/Pictures/Zebronics.jfif';
import Aoc from '../assets/Pictures/Aoc.jfif';
import Navbar from '../components/Navbar';

const items3 = [
  { img: Monitor, label: 'Dell', to: '/MonitorProduct/dell' },
  { img: Lg, label: 'LG', to: '/MonitorProduct/lg' },
  { img: Msi, label: 'MSI', to: '/MonitorProduct/msi' },
  { img: Zebronics, label: 'Zebronics', to: '/MonitorProduct/zebronics' },
  { img: Aoc, label: 'AOC', to: '/MonitorProduct/aoc' }
];

const Monitors = () => {
  return (
    <>
      <Navbar />
      <div className='container text-center my-3'>
        <div className="row justify-content-center">
          {items3.map((item, index) => (
            <div className="col" key={index}>
              <Link to={item.to} className="text-decoration-none text-dark text-nowrap">
                <div style={{ cursor: 'pointer' }}>
                  <img src={item.img} alt={item.label} style={{ width: '167px', height: '138px' }} />
                  <p className="card-title fs-6 mt-2">{item.label}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Monitors;
