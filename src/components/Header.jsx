import React from 'react';
import logo from '../assets/Harry_Potter_wordmark 1.png';
import btnFav from '../assets/rectangle_fill.png';
import btnAdd from '../assets/User_fill_add.png';


const Header = () => {
  return (
    <div className='header'>
      <section className='header-top'>
        <button className='header-top-btnFav'>FAVORITOS <img src={btnFav} className='header-top-img'/></button>
        <button className='header-top-btnAdd'>AGREGAR <img src={btnAdd} className='header-top-img'/></button>
      </section>
      <section className='header-logo'>
          <a href='/'>
            <img src={logo} className='header-logo-img'/>
          </a>
        </section>
    </div>
  );
};

export default Header;
