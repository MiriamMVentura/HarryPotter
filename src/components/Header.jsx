import React, { useState } from 'react';
import logo from '../assets/Harry_Potter_wordmark 1.png';
import btnFav from '../assets/rectangle_fill.png';
import btnAdd from '../assets/User_fill_add.png';
import Modal  from './Modal'


const Header = () => {
  const [isOpenModal, setIsOpenModal]= useState(true);

  // const [isOpenModal, openModal, closeModal]= useModal();


  const openModal=()=>{
    setIsOpenModal(true);

  }

  const closeModal=()=>{
    setIsOpenModal(false);

  }

  return (
    <div className='header'>
      <section className='header-top'>
        <button className='header-top-btnFav'
        >FAVORITOS <img src={btnFav} className='header-top-img'/></button>
        <button className='header-top-btnAdd' onClick={openModal}>AGREGAR <img src={btnAdd}className='header-top-img'/></button>
        <Modal
          isOpen={isOpenModal}
          closeModal={closeModal}/>
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
