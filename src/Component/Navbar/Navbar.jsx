import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('shop');

  // Menu options for dynamic rendering
  const menuItems = [
    { name: 'Shop', path: '/' },
    { name: 'Men', path: '/mens' },
    { name: 'Women', path: '/womens' },
    { name: 'Kids', path: '/kids' },
  ];

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="StyleStitch logo" />
        <p>StyleStitch</p>
      </div>
      <ul className='nav-menu'>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={activeMenu === item.name.toLowerCase() ? 'active' : ''}
            onClick={() => setActiveMenu(item.name.toLowerCase())}
          >
            <Link to={item.path} style={{ textDecoration: 'none' }}>
              {item.name}
            </Link>
            {activeMenu === item.name.toLowerCase() && <hr />} {/* Active underline */}
          </li>
        ))}
      </ul>
      <div className='nav-cart'>
        {/* Cart icon and count can be added here */}
      </div>
    </div>
  );
};

export default Navbar;
