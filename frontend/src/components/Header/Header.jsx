import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Fresh Flavors Delivered to Your Door</h2>
        <p>
          Discover delicious meals prepared with quality ingredients and
          delivered straight to you. From quick bites to satisfying dinners,
          Nosh brings the taste you love right to your doorstep.
        </p>
        <button>Explore Menu</button>
      </div>
    </div>
  );
}

export default Header
