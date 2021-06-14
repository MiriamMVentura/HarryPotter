import React from 'react';
import logo from '../assets/Harry_Potter_wordmark 1.png';

const Header = () => {
  return (
    <div className='header'>
      <section className='header-top'>
        <button className='header-top-btnFav'>FAVORITOS</button>
        <button className='header-top-btnAdd'>AGREGAR</button>
      </section>
      <section className='header-logo'>
        <section className='header-logo-img'>
          <a href='/'>
            <img src={logo} className='header-img'/>
          </a>
        </section>
      </section>
    </div>
  );
};

export default Header;
