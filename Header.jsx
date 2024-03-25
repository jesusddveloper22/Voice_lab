import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      
      <div className='header-right'>
        <div className="menu">
          <span className="menu-item">Files</span>
          <span className="menu-item">Account</span>
          <span className="menu-item">Affiliate</span>
          <span className="menu-item">Rewards</span>
        </div>
        <div>
          
          <button className="dark-mode-button">Dark Mode</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
